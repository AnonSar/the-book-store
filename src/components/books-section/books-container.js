import React from "react";
import Book from "./books";

const BooksContainer = Props => { 
  return (
    <div className="books-container">
      {Props.books.map((e,i)=>{
          return (<Book key={i} />);
      })}
    </div>
  );
};

export default BooksContainer;
