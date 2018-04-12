const MessagingResponse = require("twilio").twiml.MessagingResponse;
const SurveyResponse = require("../models/SurveyResponse");
const survey = require("../survey_data");

// const accountSid = "AC1f9c9fb6a45722a208c9d784096fb813"; // Your Account SID from www.twilio.com/console
// const authToken = "59e4e76a7bed9471d96d1cd04da61d20"; // Your Auth Token from www.twilio.com/console

// Handle SMS submissions
module.exports = (request, response) => {
  let phone = request.body.From;
  let input = request.body.Body;
  // console.log(input);

  // respond with message TwiML content
  function respond(message) {
    let twiml = new MessagingResponse();
    twiml.message(message);
    response.type("text/xml");
    response.send(twiml.toString());
  }

  // Check if there are any responses for the current number in an incomplete
  // survey response
  SurveyResponse.findOne(
    {
      phone: phone,
      complete: false
    },
    (err, doc) => {
      if (!doc) {
        let newSurvey = new SurveyResponse({
          phone: phone
        });
        newSurvey.save((err, doc) => {
          // Skip the input and just ask the first question
          handleNextQuestion(err, doc, 0);
        });
      } else {
        // After the first message, start processing input
        SurveyResponse.advanceSurvey(
          {
            phone: phone,
            input: input,
            survey: survey
          },
          handleNextQuestion
        );
      }
    }
  );

  // Ask the next question based on the current index
  function handleNextQuestion(err, surveyResponse, questionIndex) {
    let question = survey[questionIndex];
    let responseMessage = "";

    if (err || !surveyResponse) {
      return respond(
        "Terribly sorry, but an error has occurred. " +
          "\nPlease re-type your message."
      );
    }

    // If question is null, we're done!
    if (!question) {
      return respond(
        "Thank you for submitting your review!\n" +
          "\nWe would appreciate any feedback on your experience.\n" +
          "\nTo view your review along with others visit: https://ecomrush.ngrok.io/demo/store \n" +
          "\n-EcomRush Team"
      );
    }

    // Add a greeting if this is the first question
    if (questionIndex === 0) {
      responseMessage +=
        "Thank you for participating in the EcomRush Review System Demo!\n" +
        "\nLet's get started!\n" +
        "\nOur records show that you recently purchased the Adidas White NMD_R1 shoes.\n" +
        "\nPlease answer 3 quick questions to provide a review of these shoes.\n" +
        "\nFirst,\n";
    }

    // Add question text
    responseMessage += question.text;

    // Add question instructions for special types
    if (question.type === "boolean") {
      responseMessage += ' Type "yes" or "no".';
    }

    // reply with message
    respond(responseMessage);
  }
};
