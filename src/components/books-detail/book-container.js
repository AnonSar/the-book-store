import React from "react";
import BookInfoComponent from "./book-info";
import BookReviewContainer from "./book-review-container";

let BookContainer = (props) => {
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
};

export default BookContainer;
