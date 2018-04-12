const mongoose = require("mongoose");
// Define survey response model schema
let SurveyResponseSchema = new mongoose.Schema({
  // phone number of participant
  phone: String,
  date: { type: Date, default: Date.now},

  // status of the participant's current survey response
  complete: {
    type: Boolean,
    default: false
  },

  // record of answers
  responses: [mongoose.Schema.Types.Mixed]
});

// For the given phone number and survey, advance the survey to the next
// question
SurveyResponseSchema.statics.advanceSurvey = (args, cb) => {
  let surveyData = args.survey;
  let phone = args.phone;
  let input = args.input;
  let surveyResponse;

  // Find current incomplete survey
  SurveyResponse.findOne(
    {
      phone: phone,
      complete: false
    },
    (err, doc) => {
      surveyResponse =
        doc ||
        new SurveyResponse({
          phone: phone
        });
      processInput();
    }
  );

  // fill in any answer to the current question, and determine next question
  // to ask
  function processInput() {
    // If we have input, use it to answer the current question
    let responseLength = surveyResponse.responses.length;
    let currentQuestion = surveyData[responseLength];

    // if there's a problem with the input, we can re-ask the same question
    function reask() {
      cb.call(surveyResponse, null, surveyResponse, responseLength);
    }

    // If we have no input, ask the current question again
    if (!input) {
      console.log("no input!");
      return reask();
    }

    // Otherwise use the input to answer the current question
    let questionResponse = {};
    if (currentQuestion.type === "boolean") {
      // Anything other than '1' or 'yes' is a false
      let isTrue = input === "1" || input.toLowerCase() === "yes";
      questionResponse.answer = isTrue;
    } else if (currentQuestion.type === "number") {
      // Try and cast to a Number
      let num = Number(input);
      // Added functionality that if type is number then input can only be 1 - 5: Michael Klingelberg
      if (isNaN(num) || num < 1 || num > 5) {
        // don't update the survey response, return the same question
        return reask();
      } else {
        questionResponse.answer = num;
        console.log(questionResponse);
      }
    } else if (input.indexOf("http") === 0) {
      // input is a recording URL
      questionResponse.recordingUrl = input;
    } else {
      // otherwise store raw value
      questionResponse.answer = input;
    }

    // Save type from question
    questionResponse.type = currentQuestion.type;
    surveyResponse.responses.push(questionResponse);
    console.log(surveyResponse.responses);

    // If new responses length is the length of survey, mark as done
    if (surveyResponse.responses.length === surveyData.length) {
      surveyResponse.complete = true;
    }

    // Save response
    surveyResponse.save((err, responses) => {
      if (err) {
        console.log(err);
        reask();
      } else {
        cb.call(surveyResponse, err, surveyResponse, responseLength + 1);
      }
    });
  }
};

// Export model
delete mongoose.models.SurveyResponse;
delete mongoose.modelSchemas.SurveyResponse;
let SurveyResponse = mongoose.model("SurveyResponse", SurveyResponseSchema);
module.exports = SurveyResponse;
