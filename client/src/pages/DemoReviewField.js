import React, { Component } from "react";
import styled from "styled-components";
import Review from "../components/Review";
// import ReviewItem from "../components/ReviewItem";


const Wrapper = styled.div`
  // just a placeholder for now
  width: 100%;
  height: 100vh;
  background: #1f1f1f ;
`;

class DemoReviewField extends Component {
  render() {
    return (
      <Wrapper>
        <Review />
      </Wrapper>
    );
  }
}

export default DemoReviewField;




// import React, { Component } from "react";
// import Axios from "axios";
// import Review from "../components/Review";
// import styled from "styled-components";
// import productsData from "../resources/products_data";

// const Wrapper = styled.div`
//   // just a placeholder for now
//   width: 100%;
//   height: 100vh;
//   background: #1f1f1f ;
// `;

// class DemoReviewField extends Component {
//   state = {
//     search: "",
//     products: productsData,
//     reviews: []
//   };

//   componentDidMount() {
//     Axios.get("http://localhost:3001/results", {
//       headers: { "Access-Control-Allow-Origin": "*" }
//     }).then(results => {
//       this.setState({ reviews: results.data.results });
//       console.log(this.state.reviews);
//     });
//   }


//   render() {
//     return (
//       <Wrapper>
//         <Review />
//         <h1>are these working?</h1> 
//         <div products={this.state.products} reviews={this.state.reviews} />
//       </Wrapper>
//     );
//   }
// }

// export default DemoReviewField;
