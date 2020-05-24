import React from "react";
import BooksContainer from "./books-container";

const BookSectionComponent = (Props) => {
  if (Props.books.length === 0) {
    return (
      <section id="books-section">
        <div className="container">
          <div className="section-title">
            <h1> {"No books found for " + Props.title}</h1>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="books-section">
        <div className="container">
          <div className="section-title">
            <h1> {Props.title + " Books"}</h1>
          </div>

          <BooksContainer books={Props.books} />
        </div>
      </section>
    );
  }
};

export default BookSectionComponent;
