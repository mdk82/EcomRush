import React, { Component } from 'react';
import "./Review.css";
class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
            <div className="review__tab" id="review_tab">Reviews</div>
            <div className="review__tab" id="question_tab">Questions</div>
          </div>
          <div className="review__menu">
            Sort
          </div>

        </div>
          <div className="review__item">
            {/* this will be an entire review aka review__item */}
            <div className="item__detail">
              <div className="rating">
                <div className="stars">
                  &#9733; &#9733; &#9733; &#9733; <div className="light"> &#9733;</div></div>
                <div className="verified">Verified Purchase</div>
              </div>
              <div className="customer">
                <div className="customer__name"><h6>Nick S.</h6></div>
                <div className="customer__location">Costa Mesa, CA</div>
                <div className="item__date">03/01/2018</div>
              </div>
            </div>
            <div className="item__review">
            <p>Bacon ipsum dolor amet alcatra capicola cow shoulder. Tail bresaola flank, turducken corned beef leberkas ham hock pork brisket burgdoggen frankfurter pig shankle. Swine meatloaf doner venison pork belly, capicola boudin prosciutto jowl picanha turducken. Bacon short ribs leberkas salami chicken spare ribs, cupim biltong pastrami. Sausage short ribs strip steak ham hock swine ball tip chicken flank.</p>
              Bresaola swine chicken kielbasa ball tip fatback. T-bone meatloaf shoulder ribeye, turkey alcatra ground round ham hock corned beef brisket. Doner alcatra turducken short ribs beef ribs pork. Cupim tri-tip fatback, alcatra short loin burgdoggen shank drumstick corned beef bacon flank.
              Porchetta bresaola bacon, rump ham hock boudin beef ribs jowl t-bone pancetta. Jowl flank strip steak ribeye meatball. Short loin jowl pancetta salami, kielbasa porchetta hamburger flank chuck ground round. Leberkas kevin meatloaf pork chop biltong hamburger corned beef boudin capicola jowl. Shoulder strip steak leberkas short loin alcatra rump meatloaf venison pork belly drumstick sirloin short ribs. Sirloin turducken beef ribs ground round alcatra chuck salami brisket fatback jowl jerky filet mignon tri-tip frankfurter. Sausage shoulder beef tail pork chop, cow strip steak short ribs.
            </div>
          </div>
          <div className="review__item">
            {/* this will be an entire review aka review__item */}
            <div className="item__detail">
              <div className="rating">
              <div className="stars">
                &#9733; &#9733; &#9733; &#9733; <div className="light"> &#9733;</div></div>
                <div className="verified">Verified Purchase</div>
              </div>
              <div className="customer">
                <div className="customer__name"><h6>Nick S.</h6></div>
                <div className="customer__location">Costa Mesa, CA</div>
                <div className="item__date">03/01/2018</div>
              </div>
            </div>
            <div className="item__review">
              Bacon ipsum dolor amet alcatra capicola cow shoulder. Tail bresaola flank, turducken corned beef leberkas ham hock pork brisket burgdoggen frankfurter pig shankle. Swine meatloaf doner venison pork belly, capicola boudin prosciutto jowl picanha turducken. Bacon short ribs leberkas salami chicken spare ribs, cupim biltong pastrami. Sausage short ribs strip steak ham hock swine ball tip chicken flank.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
