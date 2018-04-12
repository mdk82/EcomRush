const path = require("path");
const express = require("express");
// const session = require("express-session");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const validator = require("validator");
const bodyParser = require("body-parser");
const urlencoded = require("body-parser").urlencoded;
const Promise = require("bluebird");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
//config files
const config = require("./config");
//Routes
const auth = require("./routes/auth");
const voice = require("./routes/voice");
const message = require("./routes/message");
const results = require("./routes/results");
// const sendemail = require("./routes/sendemail");

// use node A+ promises
mongoose.Promise = Promise;

// check for connection string
if (!config.mongoUrl) {
  throw new Error("MONGO_URL env variable not set.");
}

let isConn;
// initialize MongoDB connection
if (mongoose.connections.length === 0) {
  mongoose.connect(config.mongoUrl);
} else {
  mongoose.connections.forEach(conn => {
    if (!conn.host) {
      isConn = false;
    }
  });

  if (isConn === false) {
    mongoose.connect(config.mongoUrl);
  }
}

// Create Express web app with some useful middleware
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));

// pass the passport middleware
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: ["iloveecomrush"]
//   })
// );
// app.use(session({ secret: "iloveecomrush" }));
app.use(passport.initialize());
// app.use(passport.session());

// load passport strategies
const SignupStrategy = require("./passport/local-signup");
const LoginStrategy = require("./passport/local-login");
passport.use("local-signup", SignupStrategy);
passport.use("local-login", LoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require("./auth-check");
app.use("/api", authCheckMiddleware);

// Validator functions for passport to function
/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  console.log(payload);
  const errors = {};
  let isFormValid = true;
  let message = "";
  if (
    !payload ||
    typeof payload.email !== "string" ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a correct email address.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length < 6
  ) {
    isFormValid = false;
    errors.password = "Password must have at least 6 characters.";
  }

  if (
    !payload ||
    typeof payload.name !== "string" ||
    payload.name.trim().length === 0
  ) {
    isFormValid = false;
    errors.name = "Please provide your name.";
  }

  if (!isFormValid) {
    message = "FORM Validation ERROR: Check the form for errors.";
    console.log(errors);
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  console.log(payload);
  const errors = {};
  let isFormValid = true;
  let message = "";

  if (
    !payload ||
    typeof payload.email !== "string" ||
    payload.email.trim().length === 0
  ) {
    isFormValid = false;
    errors.email = "Please provide your email address.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length === 0
  ) {
    isFormValid = false;
    errors.password = "Please provide your password.";
  }

  if (!isFormValid) {
    message = "FORM ERROR: Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

// cors for local auth
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

// Twilio Webhook routes
app.post("/voice", voice.interview);
app.post("/voice/:responseId/transcribe/:questionIndex", voice.transcription);
app.post("/message", message);

// Axios route to aggregate response data for the UI
app.get("/results", results);

// Sendgrid Webhook for sending and recieving email responses
app.post("/sendemail", (res, req, next) => {
  console.log(req.body);
  //let userEmail = req.body;
  // console.log(userEmail.email);
  let sendWithHtml = fs.readFileSync(
    "config/emailHTMLTemplate.html",
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
        throw err;
      }
    }
  );

  //make sure to import your API key here
  sgMail.setApiKey(
    "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"
  );

  const msg = {
    to: "mdklingelberg@gmail.com",
    from: "ecomrushreview@gmail.com",
    subject: "Please provide us your feedback!",
    text: "Please support us with your feedback",
    //This is what you would use with method 1
    // html: sendWithJs(),

    // This is what you would use with method 2
    html: sendWithHtml
    // html: "<h1>EcomRush Test Email</h1>"
  };

  //this sends the message
  sgMail
    .send(msg)
    .then(() => {
      // res.send("email sent, check your inbox");
      console.log("email sent successfully");
    })
    .catch(error => {
      console.log(error);
    });
});

// Post route for signup page with validation
app.post("/auth/signup", (req, res, next) => {
  // console.log(req.body);
  // let data = JSON.parse(req.body);
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return passport.authenticate("local-signup", err => {
    if (err) {
      console.log(err);
      if (err.name === "MongoError" && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: "DB ERROR: Check the form for errors.",
          errors: {
            email: "This email is already taken."
          }
        });
      }

      return res.status(400).json({
        success: false,
        message: "PASSPORT ERROR: Could not process the form."
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "You have successfully signed up! Now you should be able to log in."
    });
  })(req, res, next);
});

// Post route for login page with validation
app.post("/auth/login", (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return passport.authenticate("local-login", (err, token, userData) => {
    if (err) {
      if (err.name === "IncorrectCredentialsError") {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: "Could not process the form."
      });
    }

    return res.json({
      success: true,
      message: "You have successfully logged in!",
      token,
      user: userData
    });
  })(req, res, next);
});

//if (process.env.NODE_ENV === "staging") {
// Express will serve up production assets
// like our main.js file, or main.css file!
app.use(express.static("client/build"));

// Express will serve up the index.html file
// if it doesn't recognize the route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

module.exports = app;
