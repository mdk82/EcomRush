import React, { Component } from 'react';

class StyleGuide extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    return (
      <div className="style__guide">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <span>Span Span Span</span>
        <p>Bacon ipsum dolor amet kevin ball tip chicken, ham hock capicola venison turkey shoulder. Alcatra meatloaf strip steak prosciutto. Andouille pork shankle tail capicola brisket. Swine cupim beef ribs capicola jerky andouille, sirloin leberkas t-bone drumstick flank turducken turkey pork. </p>
        <a href="/">Hello This Is A Link</a>
        <hr/>
        <h5>Buttons</h5>
        <button className="btn__small">Join us</button>
        <button className="btn__medium">Join us</button>
        <button className="btn__large">Join us</button>
        <button className="btn__small disabled">Disabled</button>
        <button className="btn__small btn__light">Join us</button>
        <button className="btn__small btn__gray">Join us</button>
        <hr/>
        <div className="form-section">
          <h4>Form Section</h4>
          <form>
            <label for="first_name">First Name</label>
            <input placeholder="First Name" type="text" id="first_name" autocomplete="on" />
            <br />
            <label for="last_name">Last Name</label>
            <input placeholder="Last Name" type="text" id="last_name" autocomplete="on" />
            <br />

            <label>
            <input type="checkbox" />
            <i></i>
            <span>Hide Your Name</span>
            </label>

            <br />

            <label>
            <input type="checkbox" />
            <i></i>
            <span>Hide Your Location</span>
            </label>

            <br />

            <label for="input-message">Leave a message...</label>
            <textarea placeholder="You're the fucking man." type="text" id="input-message"></textarea>
            <br />
            <label for="input-telephone">Telephone <span>US Numbers Only / Format: 800-123-1234</span></label>
              <input placeholder="e.g. 800-123-1234" type="tel" id="input-telephone" minlength="12" maxlength="12" autocomplete="on" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

            <label for="input-email">Email</label>
              <input placeholder="bacon@yummy.com" type="email" id="input-email" autocomplete="on" />

            <label for="input-link">Website Link <span> Hidden From Public</span></label>
              <input type="url" id="input-link" />

              <br />
            <button className="btn__medium" type="submit" value="Submit">SUBMIT</button>
            <button className="btn__medium btn__gray" type="reset">RESET</button>
          </form>
        </div>
      </div>
    );
  }
}


export default StyleGuide;
