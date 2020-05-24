import React from "react";
import BookContainerComponent from "./book-container";

let BooksDetails = (props) => {
  return (
    <>
      <section id="book-detail">
        <div className="container">
          <BookContainerComponent bookID={props.bookID} />
        </div>
      </section>
    </>
  );
};

export default BooksDetails;
