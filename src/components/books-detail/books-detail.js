import React from "react";
import BookContainerComponent from "./book-container";

let BooksDetails = (props) => {
  return (
    <>
      <section id="book-detail">
        <div className="container">
          <BookContainerComponent />
        </div>
      </section>
    </>
  );
};

export default BooksDetails;
