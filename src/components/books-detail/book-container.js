import React, { Component } from "react";
import BookInfoComponent from "./book-info";
import BookReviewContainer from "./book-review-container";
import isLoadingPage from "../../pages/isLoading";
import axios from "axios";

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: "",
      isLoading: false,
    };
  }

  componentDidMount = () => {
    axios
      .get("https://wwww.googleapis.com/books/v1/volumes/" + this.props.bookID)
      .then((response) => {
        console.log(response);
        this.setState({
          bookInfo: response,
          isLoading: false,
        });
      })
      .catch((err) => console.error(err));
  };

  render() {
    if (this.state.isLoading) {
      return <isLoadingPage />;
    } else {
      return (
        <>
          {" "}
          <div className="book-container">
            <div className="book-img">
              <img src="https://via.placeholder.com/250x200" alt="" />
            </div>
            <BookInfoComponent />
            <BookReviewContainer />
          </div>
        </>
      );
    }
  }
}

export default BookContainer;
