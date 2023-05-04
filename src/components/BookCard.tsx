import React, { FC} from "react";
import { Link } from "react-router-dom";
import { localBook } from "../models/books";
import { Button } from "@mui/material";
import FavoriteButton from "./FavoriteButton";

// interface for props
interface BookCardProps {
    book:localBook;
    children?:React.ReactNode
}

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
          <Button variant="outlined">Learn More</Button>
        </Link> 
       <FavoriteButton book={props.book} />
      </div>
    </article>
  );
};

export default BookCard;
