import React from "react";
// import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import "./ChatBot.css";

// const steps = [
//   {
//     id: "0",
//     message:
//       "Thanks for purchasing the Ruby Red Gem Stone. We wanted to reach out and for a quick 2 question review from you.",
//     trigger: "1"
//   },
//   {
//     id: "1",
//     message: "Bye!",
//     end: true
//   }
// ];

class TheChatBot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      reviewResponses: this.props.reviewResponses
    };
  }

  render(props) {
    return (
      <div className="chatbot">
        <ChatBot
          steps={[
            {
              id: "1",
              message: `Thanks ${
                this.props.name
              } for purchasing the Ruby Red Gem Stone. We wanted to reach out and for a quick 2 question review from you.`,
              trigger: "2"
            },
            {
              id: "2",
              message: `On a scale of 1 out of 5 how many stars would you rate this product?`,
              trigger: "reviewscore"
            },
            {
              id: "reviewscore",
              user: true,
              validator: value => {
                console.log(value);
                this.props.reviewResponses.push(value);
                if (isNaN(value)) {
                  return "value should be a number of 1 to 5";
                } else {
                  this.props.reviewResponses.push(value);
                }
                return true;
              },
              trigger: "4"
            },
            {
              id: "4",
              message: `Awesome! With just a short description could you tell us why you like the product?`,
              trigger: "5"
            },
            {
              id: "5",
              user: true,
              // validator: value => {
              //   if ((isNaN(value) && value == 1) || value <= 5) {
              //     return "value should be a number of 1 to 5";
              //   }
              //   return true;
              // },
              trigger: "6"
            },
            {
              id: "6",
              message: `We really appreciate the feedback!`,
              trigger: "7"
            },
            {
              id: "7",
              message: `As a token of our appreciation here is a one time use 20% off code for your next purchase on our site.`,
              trigger: "8"
            },
            {
              id: "8",
              message: `Promo Code: 2018OFF20`,
              end: true
            }
          ]}
        />
      </div>
    );
  }
}

export default TheChatBot;
