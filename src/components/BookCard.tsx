import React, { FC} from "react";
import { Link } from "react-router-dom";
import { localBook } from "../models/books";
import { Button } from "@mui/material";
import FavoriteButton from "./FavoriteButton";
import StylingWrapper from "../assets/css/BookCard";


// interface for props
interface BookCardProps {
    book:localBook;
    children?:React.ReactNode
}

const BookCard:FC<BookCardProps> = (props) => {
  const {id, image, title, authors, description} = props.book

  return (
    <StylingWrapper>
    <article className="book">
        <div className="img-container">
          <img src={image} alt={title}/>
        </div>
      <div className="book-footer">
        <h3>{title?.substring(0, 50)}</h3>
        <h4>{authors?.toString().substring(0,30)}</h4>
         <p>{description?.substring(0, 155).concat('...')}</p>
         <div className="button-container">
             <Link to={`/books/${id}`}>
             <Button variant="outlined">Learn More</Button>
            </Link> 
            <FavoriteButton book={props.book} />
         </div>
       
      </div>
    </article>
    </StylingWrapper>
  );
};

export default BookCard;
