import React from "react";
import { Link } from "react-router-dom";

//const book = ({id, title, image, description, authors}) => {
const book = () => {
  return (
    <article className="book">
      <div className="img-container">
        {/* <img src={image} alt={title}/>
      </div>
      <div className="book-footer">
        <h3>{title}</h3>
        <h4>{authors?.toString()}</h4>
         <p>{description}</p>
        <Link to={`/books/${id}`}>
          <button className="btn">Learn More</button>
        </Link>  */}
      </div>
    </article>
  );
};

export default book;
