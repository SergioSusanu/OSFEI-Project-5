import React, { FC } from 'react'
import BookCard from '../components/BookCard'
import { useAppSelector } from '../app/hooks';
import { selectFavorites } from '../features/favorites/favoritesSlice';
import StylingWrapper from "../assets/css/FavList";

const FavBookList:FC = () => {
  const books = useAppSelector(selectFavorites)

  return (
     <StylingWrapper>
    <section className="section">
      <h2 className="section-title">Favorite Books</h2>
      <div className="books-center">
        {
        books?.length === 0 ? 'Nothing yet...' 
        :
        books?.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </section>
    </StylingWrapper>
  );
}

export default FavBookList