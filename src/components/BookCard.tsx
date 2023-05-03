import React, { FC } from "react";
import { Link } from "react-router-dom";
import { localBook } from "../models/books";

const BookCard:FC = (book:localBook) => {

  return (
    <article className="book">
      <div className="img-container">
        <img src={image} alt={title}/>
      </div>
      <div className="book-footer">
        <h3>{title}</h3>
        <h4>{authors?.toString()}</h4>
         <p>{description}</p>
        <Link to={`/books/${id}`}>
          <button className="btn">Learn More</button>
        </Link> 
      </div>
    </article>
  );
};

export default BookCard;
