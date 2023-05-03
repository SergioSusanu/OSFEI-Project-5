import React, { FC } from "react";
import { Link } from "react-router-dom";
import { localBook } from "../models/books";

// interface for props
interface BookCardProps {
    book:localBook;
    children?:React.ReactNode
}
// export const Child = (props:ChildProps) => {

// Telling TS that components are React Componenets
//export const ChildAsFC : React.FC<ChildProps> = (props) => {}


const BookCard:FC<BookCardProps> = (props) => {
  const {id, image, title, authors, description} = props.book

  return (
    <article className="book">
       {image &&
        <div className="img-container">
          <img src={image} alt={title}/>
        </div>
       }
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
