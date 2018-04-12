import React, { Component } from "react";
import axios from "axios";
import DashboardNav from "../../components/DashboardNav";
import DashboardFooter from "../../components/DashboardFooter";
import "../../Dashboard.css";

// import SearchInput from "../../components/SearchInput";

import ReviewsCard from "../../components/ReviewsCard";

import styled from "styled-components";

import productsData from "../../resources/products_data";

const ReviewsList = styled.div`
  width: 100%;
  background: grey;
  display: flex;
`;

// class Reviews extends Component {
//   render() {
//     return (
//       <div className="dashboard__layout">
//         <DashboardNav />
//         <header>
//           <h2 class="page__title">Reviews</h2>
//         </header>
//         <article>
//           <SearchInput />
//           <ReviewsList>
//             <ReviewsCard />
//           </ReviewsList>
//         </article>
//         <DashboardFooter />
//       </div>
//     );
//   }
// }

// export default Reviews;

class Reviews extends Component {
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
      axios
        .get("/results", {
          headers: { "Access-Control-Allow-Origin": "*" }
        })
        .then(results => {
          this.setState({ reviews: results.data.results });
          console.log(this.state.reviews);
        });
    }, 3000);
  }

  // updateSearch = updatedSearch => {
  //   let search = { ...this.state.search };
  //   search = updatedSearch;
  //   this.setState({ search });
  //   let filteredReviews = reviewsData.filter(review => {
  //     return (
  //       review.product_name.toLowerCase().indexOf(this.state.search) !== -1
  //     );
  //   });
  //   this.setState({ reviews: filteredReviews });
  // };

  render() {
    return (
      <div className="dashboard__layout">
        <DashboardNav />
        <header>
          <h2 class="page__title">Reviews</h2>
        </header>
        <article>
          {/* <SearchInput
            search={this.state.search}
            updateSearch={this.updateSearch}
          /> */}
          <ReviewsList>
            <ReviewsCard
              products={this.state.products}
              reviews={this.state.reviews}
            />
          </ReviewsList>
        </article>
        <DashboardFooter />
      </div>
    );
  }
}

export default Reviews;
