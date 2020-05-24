import React from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";
import BookDetailsComponent from "../components/books-detail/books-detail";

const BooksDetails = Props => {
  return (
    <div className="has-fixed-footer">
      <Header />
      <BookDetailsComponent bookID={Props.bookID} />
      <Footer />
    </div>
  );
};

export default BooksDetails;
