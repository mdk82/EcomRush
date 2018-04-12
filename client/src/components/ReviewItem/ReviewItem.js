import React, { Component, Fragment } from "react";
import Moment from 'react-moment';

class ReviewItem extends Component {
  renderReviewItems() {
    return this.props.reviews.map(review => {
      return (
          <div className="review__item" key={review._id} data-status={review.status}>
            <div className="item__detail">
              <div className="rating">
                {review.responses[1].answer === 1 ?
                  <div className="stars">
                    &#9733; <div className="light">&#9733; &#9733; &#9733; &#9733;</div>
                    <div className="verified">Verified Purchase <span className="check__mark"> &#10004; </span> </div>
                  </div>
                : null }
                {review.responses[1].answer === 2 ?
                  <div className="stars">
                    &#9733; &#9733;<div className="light">&#9733; &#9733; &#9733;</div>
                    <div className="verified">Verified Purchase <span className="check__mark"> &#10004; </span> </div>
                  </div>
                : null }
                {review.responses[1].answer === 3 ?
                  <div className="stars">
                    &#9733; &#9733; &#9733;<div className="light">&#9733; &#9733;</div>
                    <div className="verified">Verified Purchase <span className="check__mark"> &#10004; </span> </div>
                  </div>
                : null }
                {review.responses[1].answer === 4 ?
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; <div className="light">&#9733;</div>
                    <div className="verified">Verified Purchase <span className="check__mark"> &#10004; </span> </div>
                  </div>
                : null }
                {review.responses[1].answer === 5 ?
                  <div className="stars">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                    <div className="verified">Verified Purchase <span className="check__mark"> &#10004; </span> </div>
                  </div>
                : null }
              </div>
              <div className="customer">
                  <div className="customer__name"><h6>{review.responses[0].answer}</h6></div>
                  {/* <div className="customer__location">N/A Currently</div> */}
                  {/* <div className="item__date">{review.date}</div> */}
                  <div className="item__date">
                    <Moment format="MM/DD/YYYY">
                      {review.date}
                    </Moment>
                  </div>
                </div>
            </div>
            <div className="item__review">
              {review.responses[2].answer}
            </div>
          </div>
      );
    });
  }

  render() {
    return <Fragment>{this.renderReviewItems()}</Fragment>;
  }
}
export default ReviewItem;
