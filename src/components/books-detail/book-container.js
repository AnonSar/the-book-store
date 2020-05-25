import React, { Component } from "react";
import BookInfoComponent from "./book-info";
import BookReviewContainer from "./book-review-container";
import IsLoadingPage from "../../pages/isLoading";
import axios from "axios";

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {
        image: "",
        title: "",
        author: "",
        description: "",
        ratings: {
          averageRating: "",
          ratingCount: "",
        },
      },
      isLoading: true,
    };
  }

  componentDidMount = () => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes/" + this.props.bookID)
      .then((response) => {
        this.setState({
          bookInfo: {
            image: response.data.volumeInfo.imageLinks.large,
            title: response.data.volumeInfo.title,
            author: response.data.volumeInfo.authors[0],
            description: response.data.volumeInfo.description,
            ratings: {
              averageRating: response.data.volumeInfo.averageRating,
              ratingCount: response.data.volumeInfo.ratingsCount,
            },
          },
          isLoading: false,
        });
      })
      .catch((err) => console.error(err));
  };

  render() {
    if (this.state.isLoading) {
      return <IsLoadingPage />;
    } else {
      return (
        <>
          {" "}
          <div className="book-container">
            <div className="book-img">
              <img
                src={`${this.state.bookInfo.image}`}
                alt=""
                id={"book-img-selector"}
              />
            </div>
            <BookInfoComponent
              title={this.state.bookInfo.title}
              author={this.state.bookInfo.author}
              description={this.state.bookInfo.description}
            />

            {this.state.bookInfo.ratings.ratingCount && (
              <BookReviewContainer ratings={this.state.bookInfo.ratings} />
            )}
          </div>
        </>
      );
    }
  }
}

export default BookContainer;
