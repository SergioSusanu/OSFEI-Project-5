import React, { FC, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { addFavorite, removeFromFavorite, selectFavorites } from '../features/favorites/favoritesSlice' 
import { useGetBookByIdQuery } from '../features/booksApi';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { localBook } from '../models/books';

const SingleBook:FC = () => {
  const dispatch = useAppDispatch()
  const cId = useParams().id || ''
  const {isLoading, error, data} = useGetBookByIdQuery(cId)
  //Check if this book is in favorites
  const favBooks = useAppSelector(selectFavorites)

  const checkIfIsFavorite = ():boolean =>{
    if (cId && favBooks){
       if (favBooks.find((e) => e.id === cId)) return true
    }
    return false
  }
  const [isFavorite, setIsFavorite] = useState(checkIfIsFavorite());

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error, please try again later...</p>
  if (!data) return <p>Couldn't find book</p>
  //Let's retrieve only the properties that we need
  const book:localBook =
       {
        id:cId,
        title: data.volumeInfo?.title,
        image: data.volumeInfo?.imageLinks?.thumbnail,
        description: data.volumeInfo?.description?.substr(0,350),
        authors: data.volumeInfo?.authors
      }
  //Toggle favorite button
  const handleFavButton = ():void => {
    if (!isFavorite) {dispatch(addFavorite(book)) }
    else { dispatch(removeFromFavorite(cId)) }
    setIsFavorite(!isFavorite);
  }

  return (
    <div style={{padding:'30px'}}>
      <h2>{book.title} </h2>
      <img style={{width:'300px'}} src={book?.image} alt='' />
      <h4>{book.authors?.toString()}</h4>
      <p>{book.description}</p>
      <button className='btn'
      onClick={handleFavButton}
      >
       {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
    </div>
  )
}

export default SingleBook
