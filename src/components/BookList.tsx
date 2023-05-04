import  { FC } from "react";
import BookCard from "./BookCard";
import { useAppSelector } from "../app/hooks";
import { selectSearchTerm } from "../features/searchSlice";
import { useGetBooksByNameQuery } from "../features/booksApi";
import { GoogleBook, localBook } from "../models/books";
import StylingWrapper from "../assets/css/BookList";


const BookList:FC = () => {
  const searchTerm = useAppSelector(selectSearchTerm)

  const {
    data: books,
    error,
    isLoading
  } = useGetBooksByNameQuery(searchTerm);
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Enter a term to start searching</p>
  if (!books) return <p>No books found that match your search</p>;

  return (
    <StylingWrapper>
    <section className="section">
      <h2 className="section-title">books</h2>
      <div className="books-center">
       { books.items && ( 
        books.items.map((book:GoogleBook) => {
          const localBook:localBook = {
            id: book.id,
            title: book.volumeInfo.title?.substring(0, 50),
            image: book.volumeInfo.imageLinks?.thumbnail?.replace('zoom=1','zoom=2').replace('http','https'),
            description: book.volumeInfo.description?.substring(0, 155).concat('...'),
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
    </StylingWrapper>
  );
};

export default BookList;
