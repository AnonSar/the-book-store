import React from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";

const BooksDetails = Props => {
  return (
    <div class="has-fixed-footer">
      <Header />
      <section id="book-detail">
        <div className="container">
          <div className="book-container">
            <div className="book-img">
              <img src="https://via.placeholder.com/250x200" alt="" />
            </div>
            <div className="book-info">
              <div className="book-title">
                <h1>Book Title</h1>
              </div>
              <div className="book-author">
                <h3>Book Author</h3>
              </div>
              <div className="book-description">
                This is the book description
              </div>
            </div>

            <div className="book-review-container">
              <div className="book-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="book-review">
                <p>(11)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BooksDetails;
