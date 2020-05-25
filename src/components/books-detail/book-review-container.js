import React, { Component } from "react";

class BookReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewStarsArray: [],
    };
  }

  componentDidMount = () => {
    console.log(this.props.ratings.averageRating);
    const reviewStars = this.props.ratings.averageRating;
    const result = [];

    // if average rating is not in decimal
    if (reviewStars % 1 === 0) {
      for (let i = 0; i < reviewStars; i++) {
        result.push(<i className="fas fa-star"></i>);
      }
      this.setState({
        reviewStarsArray: result,
      });
    } else {
      const floorVal = Math.floor(reviewStars);
      for (let i = 0; i < floorVal; i++) {
        result.push(<i className="fas fa-star"></i>);
      }
      result.push(<i class="fas fa-star-half"></i>);
      this.setState({
        reviewStarsArray: result,
      });
    }
  };

  render() {
    return (
      <>
        {" "}
        <div className="book-review-container">
          <div className="book-stars">
            {this.state.reviewStarsArray.map((star, i) => {
              return star;
            })}
          </div>
          <div className="book-review">
            <p>({this.props.ratings.ratingCount})</p>
          </div>
        </div>
      </>
    );
  }
}

export default BookReviewContainer;
