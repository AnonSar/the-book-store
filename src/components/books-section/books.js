import React from "react";

const Book = Props => {
  return (
    <div className="book">
      <div className="book-img">
        <img src="https://via.placeholder.com/250x200" alt="" />
      </div>
      <div className="book-info">
        <div className="book-title">
          <h3>Book Title</h3>
        </div>
        <div className="book-author">
          <p>
            By<em>Author</em>
          </p>
        </div>
        <div className="book-call-to-action">
          <button className="btn btn-highlight">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
