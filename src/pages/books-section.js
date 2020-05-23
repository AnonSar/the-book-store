import React from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";
import BookSectionComponent from "../components/books-section/books-section";

const BookSectionPage = (Props) => {
  let books=[1,2,3,4,5,6];
  console.log(Props.categoryName); 
  return (
    <div className="has-fixed-footer">
      <Header />
      <BookSectionComponent title = {Props.categoryName} books = {books} />
      <Footer />
    </div>
  );
};

export default BookSectionPage;
