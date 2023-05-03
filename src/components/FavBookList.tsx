import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard'
import { useAppSelector } from '../app/hooks';
import { selectFavorites } from '../features/favorites/favoritesSlice';

const FavBookList:FC = () => {
  const books = useAppSelector(selectFavorites)

  if (!books) return <p>No favorite books yet</p>

  return (
    <section className="section">
      <h2 className="section-title">Favorite Books</h2>
      <div className="books-center">
        {books.map((book) => {
          return <BookCard key={book.id} {...book} />;
        })}
      </div>
    </section>
  );
}

export default FavBookList