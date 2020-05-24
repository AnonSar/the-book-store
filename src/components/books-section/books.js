import React from "react";
import { Link } from "react-router-dom";

const Book = (Props) => {
  let bookThumbNailInfo = {
    bookThumbnail: Props.book.volumeInfo.imageLinks
      ? Props.book.volumeInfo.imageLinks.thumbnail
      : "https://via.placeholder.com/350x150",
      author: Props.book.volumeInfo.authors ? Props.book.volumeInfo.authors[0] : "Unknown"
  };
  return (
    <div className="book">
      <div className="book-img">
        <img
          src={`${bookThumbNailInfo.bookThumbnail}`}
          alt={`${Props.book.volumeInfo.title}`}
        />
      </div>
      <div className="book-info">
        <div className="book-title">
          <h3>{Props.book.volumeInfo.title}</h3>
        </div>
        <div className="book-author">
          <p>
            By<em>{bookThumbNailInfo.author}</em>
          </p>
        </div>
        <div className="book-call-to-action">
          <Link className="btn btn-highlight" to={`/book/${Props.book.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
