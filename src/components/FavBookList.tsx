import React from 'react'
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard'

const FavBookList = () => {
  //  const books = useSelector((state) => state.favorites.books)

  return (
    <section className="section">
      <h2 className="section-title">Favorite Books</h2>
      <div className="books-center">
        {/* {books?.map((book) => {
          return <BookCard key={book.id} {...book} />;
        })} */}
      </div>
    </section>
  );
}

export default FavBookList