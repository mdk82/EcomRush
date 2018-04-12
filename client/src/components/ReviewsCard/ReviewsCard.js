import React, { Component, Fragment } from "react";
import "./ReviewsCard.css";

class ReviewsCard extends Component {
  renderReviews() {
    return this.props.reviews.map(review => {
      return (
        <Fragment>
          <div
            className="review__card"
            key={review._id}
            data-status={review.status}
          >
            {/* data-status is to know if the product is pending, approved, or denied */}
            <div className="product__info">
              <a href={review.product_url} className="product__img">
                {/* <img src={this.props.products.avatar} alt="ECOMRUSH" /> */}
                <img src="http://placehold.it/200x200" alt="ECOMRUSH" />
              </a>
              <div className="product__title">
                {/* <h6>{review.product_name}</h6> */}
                <h6>Adidas NMD Here White</h6>
                <div className="customer__rating">
                  {review.responses[1].answer} Stars
                </div>
                <div className="customer__name">
                  {review.responses[0].answer}
                </div>
              </div>
            </div>
            <div className="product__review">
              <p>{review.responses[2].answer}</p>

              <p className="cs__response">Customer Service Response: {review.response}</p>
            </div>
            <div className="review__buttons">
              <a>REPLY</a>
              <button className="review__btn blue" value="approved">
              <span role="img" aria-label="thumbs up"> 👍🏼 </span>
              </button>
              <button className="review__btn red" value="denied">
              <span role="img" aria-label="prohibited"> 🚫 </span>  
              </button>
            </div>
          </div>
        </Fragment>
      );
    });
  }

  render() {
    return <div>{this.renderReviews()}</div>;
  }
}
export default ReviewsCard;
