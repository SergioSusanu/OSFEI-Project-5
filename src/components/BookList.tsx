import React, { FC } from "react";
import BookCard from "./BookCard";
import { useAppSelector } from "../app/hooks";
import { selectSearchTerm } from "../features/searchSlice";
import { useGetBooksByNameQuery } from "../features/booksApi";
import { GoogleBook, localBook } from "../models/books";

const BookList:FC = () => {
    const searchTerm = useAppSelector(selectSearchTerm)
  const {
    data: books,
    error,
    isLoading,
  } = useGetBooksByNameQuery(searchTerm);
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Enter a term to start searching</p>
  if (!books) return <p>No books found that match your search</p>;

  return (
    <section className="section">
      <h2 className="section-title">books</h2>
      <div className="books-center">
       { books.items && ( 
        books.items.map((book:GoogleBook) => {
          const localBook:localBook = {
            id: book.id,
            title: book.volumeInfo.title?.substr(0, 50),
            image: book.volumeInfo.imageLinks?.thumbnail?.replace('zoom=1','zoom=2'),
            description: book.volumeInfo.description?.substr(0, 150),
            authors: book.volumeInfo.authors,
          };
          return (
            <BookCard
              key={book.id}
              book={localBook}
            />
          );
          
        }))
      }
      </div>
    </section>
  );
};

export default BookList;
