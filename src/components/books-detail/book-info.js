import React from "react";

let BookInfo = (props) => {
  return (
    <>
      {" "}
      <div className="book-info">
        <div className="book-title">
          <h1>Book Title</h1>
        </div>
        <div className="book-author">
          <h3>Book Author</h3>
        </div>
        <div className="book-description">This is the book description</div>
      </div>
    </>
  );
};

export default BookInfo;
