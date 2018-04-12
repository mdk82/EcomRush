const sgMail = require("@sendgrid/mail");
const fs = require("fs");

// Method 1 with Javascript
// const sendWithJS = require("./emailTemplate.html");

module.exports = (request, response) => {
  // Method 2 with html and FS node module
  console.log(process.cwd());
  var sendWithHtml = fs.readFileSync(
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
    to: "jmcmillan29@gmail.com",
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
      response.send("email sent, check your inbox");
      console.log("email sent successfully");
    })
    .catch(error => {
      console.log(error);
    });
};
