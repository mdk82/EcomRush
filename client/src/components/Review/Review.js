import React, { Component } from 'react';
import "./Review.css";
import ReviewItem from "../ReviewItem";
import Axios from "axios";
import productsData from "../../resources/products_data";





class Review extends Component {
  state = {
    search: "",
    products: productsData,
    reviews: []
  };

  componentDidMount() {
    this.getResults();
  }

  getResults() {
    setInterval(() => {
      Axios
        .get("/results", {
          headers: { "Access-Control-Allow-Origin": "*" }
        })
        .then(results => {
          this.setState({ reviews: results.data.results });
          console.log(this.state.reviews);
        });
    }, 3000);
  }

  render() {
    return (
      <div className="review__wrapper">
        {/* This is the section that will have review overview and form to submit */}
        <div className="review__top">
          <div className="review__overview">
            <div className="star__box">
              <div className="stars" id="five__stars">
                &#9733; &#9733; &#9733; &#9733; &#9733;
                <span className="num__reviews">(131)</span>
              </div>
              <div className="stars" id="four__stars">
                &#9733; &#9733; &#9733; &#9733; <div className="light"> &#9733;</div>
                <span className="num__reviews">(131)</span>
              </div>
              <div className="stars" id="three__stars">
                &#9733; &#9733; &#9733; <div className="light"> &#9733;  &#9733;</div>
                <span className="num__reviews">(131)</span>
              </div>
              <div className="stars" id="two__stars">
                &#9733; &#9733; <div className="light"> &#9733; &#9733; &#9733;</div>
                <span className="num__reviews">(131)</span>
              </div>
              <div className="stars" id="one__star">
                &#9733; <div className="light"> &#9733;  &#9733; &#9733;  &#9733;</div>
                <span className="num__reviews">(131)</span>
              </div>
            </div>
            <div className="overall__rating">
              <div className="avg__score">
                Average Score
              </div>
              <h2>4.3</h2>
              <div className="total__reviews">304 Reviews</div>
            </div>
          </div>
          <div className="review__btns">
            {/* Two Buttons - "Write a Review "or "Ask A Question" */}
            <button className="review__btn" id="writeReview">write a review</button>
            <button className="review__btn" id="askQuestion">ask a question</button>
          </div>
          <div className="review__form">
            {/* Will be either form field for product or question about product */}
            <div className=""></div>
          </div>
        </div>

        {/* Below will be the body of the reviews */}
        <div className="review__body">
          <div className="review__filter">
            {/* Reviews Tab or Questions Tab ----- Filter Far Right */}
            <div className="review__tabs">
              <div className="review__tab active" id="review_tab">Reviews</div>
              <div className="review__tab" id="question_tab">Questions</div>
            </div>
            <div className="sort__menu" id="sort__menu">
              Sort &#9662;
            </div>
          </div>
          <ReviewItem products={this.state.products} reviews={this.state.reviews}/>
        </div>

      </div>
    );
  }
}

export default Review;
