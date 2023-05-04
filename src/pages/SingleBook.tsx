import React, { FC, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { addFavorite, removeFromFavorite, selectFavorites } from '../features/favorites/favoritesSlice' 
import { useGetBookByIdQuery } from '../features/booksApi';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { localBook } from '../models/books';
import useCheckFavorite from '../features/favorites/useCheckFavorite';
import FavoriteButton from '../components/FavoriteButton';
import StylingWrapper from '../assets/css/SingleBook';

const SingleBook:FC = () => {
  const cId = useParams().id || ''
  const {isLoading, error, data} = useGetBookByIdQuery(cId)
  
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error, please try again later...</p>
  if (!data) return <p>Couldn't find book</p>
  //Let's retrieve only the properties that we need
  const book:localBook =
       {
        id:cId,
        title: data.volumeInfo?.title,
        image: data.volumeInfo?.imageLinks?.thumbnail?.replace('http','https').replace('zoom=1','zoom=2'),
        description: data.volumeInfo?.description?.substring(0,1500),
        authors: data.volumeInfo?.authors
      }

  return (
    <StylingWrapper>
      <main>
        <div className="left">
          <div><h2>{book.title}</h2></div>
          <div><img src={book?.image} alt={book.title} /></div>
          <div><h4>{book.authors?.toString()}</h4></div>
        </div>
        <div className="right">
           <h2>Description:</h2>
           <div><p>{book.description}</p></div>
           <div><FavoriteButton book={book} /></div>
        </div>
     
      </main>
    </StylingWrapper>
  )
}

export default SingleBook
