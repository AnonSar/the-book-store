import React from "react";

let BookInfo = (props) => {
  return (
    <>
      {" "}
      <div className="book-info">
        <div className="book-title">
          <h1>{props.title}</h1>
        </div>
        <div className="book-author">
          <h3>{props.author}</h3>
        </div>
        <div className="book-description" style={{paddingBottom: "2rem"}}>{props.description}</div>
      </div>
    </>
  );
};

export default BookInfo;
