import React from "react";
import "./ChatDemo.css";

// const messages = [
//   {
//     author: "loading",
//     body: "...",
//     timeout: 400
//   },
//   {
//     author: "bot",
//     body: `Thanks for purchasing the Ruby Red Gem Stone. We wanted to reach out and for a quick 2 question review from you.`,
//     timeout: 800
//   },
//   {
//     author: "bot",
//     body:
//       "On a scale of 1 out of 5 how many stars would you rate this product?",
//     timeout: 1500
//   }
// ];

const responses = [
  "Awesome! With just a short description could you tell us why you like the product?",
  [
    "We really appreciate the feedback!",
    "As a token of our appreciation here is a one time use 20% off code for your next purchase on our site.",
    "Promo Code: 2018OFF20"
  ]
];

const Message = props => {
  const { author, body } = props.data;

  let finalBody;

  if (Array.isArray(body)) {
    finalBody = body.map((item, index) => {
      return (
        <a href={item.url} className="c-chat__action" key={index}>
          {item.text}
        </a>
      );
    });
  } else {
    finalBody = <div className="c-chat__message">{body}</div>;
  }

  return (
    <li className={"c-chat__item c-chat__item--" + author}>{finalBody}</li>
  );
};

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      responses: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    this.mockReply = this.mockReply.bind(this);
  }

  botMessages = [
    {
      author: "loading",
      body: "...",
      timeout: 400
    },
    {
      author: "bot",
      body: `Thanks ${
        this.props.name
      } for purchasing the Ruby Red Gem Stone. We wanted to reach out and for a quick 2 question review from you.`,
      timeout: 800
    },
    {
      author: "bot",
      body:
        "On a scale of 1 out of 5 how many stars would you rate this product?",
      timeout: 1500
    }
  ];

  componentDidMount() {
    this.demo();
  }

  demo() {
    this.setState({
      messages: [],
      responses: 0
    });

    // console.log(this.botMessages);
    this.botMessages.map((item, index) => {
      return setTimeout(() => this.addMessage(item), item.timeout);
    });

    setTimeout(() => {
      this.setState({
        messages: this.state.messages.slice(1, this.state.messages.length)
      });
    }, 700);
  }

  addMessage(item) {
    this.setState({
      messages: [...this.state.messages, item]
    });

    setTimeout(() => {
      const items = document.querySelectorAll("li");
      const lastItem = items[items.length - 1];
      document.querySelector(".c-chat__list").scrollTop =
        lastItem.offsetTop + lastItem.style.height;
    }, 100);

    // this.state.messages.forEach(index => {
    //   if (this.state.messages[index].author === "human") {
    //     this.props.reviewRating = parseInt(this.state.messages[index].body);
    //   }

    //   // if (this.state.messages[index].author === "human") {
    //   //   this.props.reviewRating = this.state.messages[index].body;
    //   // }
    // });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.addMessage({
      author: "human",
      body: e.target.querySelector("input").value
    });

    this.props.reviewResponses.push(e.target.querySelector("input").value);

    this.mockReply();

    e.target.reset();
  }

  mockReply() {
    let response;

    if (this.state.responses === 0) {
      response = responses[this.state.responses];
    } else {
      if (responses[this.state.responses])
        response = responses[this.state.responses];
    }

    if (response) {
      this.setState({
        responses: this.state.responses + 1
      });

      if (Array.isArray(response)) {
        response.map((item, index) => {
          return setTimeout(
            () => this.addMessage({ author: "bot", body: item }),
            600 + 500 * index
          );
        });
      } else {
        setTimeout(
          () => this.addMessage({ author: "bot", body: response }),
          600
        );
      }
    }
  }

  render(props) {
    let cssClass = ["c-chat"];

    if (this.state.messages.length > 4) {
      cssClass.push("c-chat--ready");
    }

    if (this.state.messages.length === 5) {
      document.querySelector("input").focus();
    }

    return (
      <div className={cssClass.join(" ")}>
        <ul className="c-chat__list">
          {this.state.messages.map((message, index) => (
            <Message key={index} data={message} />
          ))}
        </ul>
        <form className="c-chat__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            placeholder="iMessage"
            autoFocus
            autoComplete="off"
            required
          />
        </form>
      </div>
    );
  }
}

export default Chat;
