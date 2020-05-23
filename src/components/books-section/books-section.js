import React from "react";
import BooksContainer from "./books-container"

const BookSectionComponent = Props => {
  return (
    <section id="books-section">
      <div className="container">
        <div className="section-title">
          <h1> {Props.title + " Books"}</h1>
        </div>

        <BooksContainer books={Props.books}/>

      </div>
    </section>
  );
};

export default BookSectionComponent;
