import React from "react";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
//import { useGetBooksByNameQuery } from "../features/books";

const BookList = () => {
//   const searchTerm = useSelector((state)=>state.search.searchTerm)
//   const {
//     data: books = [],
//     error,
//     isLoading,
//   } = useGetBooksByNameQuery(searchTerm);
  
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Enter a term to start searching</p>
//   if (books.length === 0) return <p>No books found that match your search</p>;

  return (
    <section className="section">
      <h2 className="section-title">books</h2>
      <div className="books-center">
{/*         
        {books.items?.map((book) => {
          const localBook = {
            id: book.id,
            title: book.volumeInfo.title.substr(0, 50),
            image: book.volumeInfo.imageLinks.thumbnail.replace('zoom=1','zoom=2'),
            description: book.volumeInfo.description?.substr(0, 150),
            authors: book.volumeInfo.authors,
          };
     
          return (
            <BookCard
              key={book.id}
              {...localBook}
            />
          );
          
        })} */}
      </div>
    </section>
  );
};

export default BookList;