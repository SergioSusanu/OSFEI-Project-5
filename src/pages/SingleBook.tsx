import React, { useEffect, useState } from 'react'

import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
//import { addFavorite, removeFromFavorite } from "../features/favoritesSlice";
import { useGetBookByIdQuery } from '../features/booksApi';

const SingleBook = () => {
//   const dispatch = useDispatch()
//   const cId = useParams().id
//   const {isLoading, error, data} = useGetBookByIdQuery(cId)
//   //Check if this book is in favorites
//   const favBooks = useSelector((state) => state.favorites.books)
//   const checkIfIsFavorite = () =>{
//     if (favBooks.find((e) => e.id === cId)) return true
//     return false
//   }
//   const [isFavorite, setIsFavorite] = useState(checkIfIsFavorite());

//   if (isLoading) return <p>Loading...</p>
//   if (error) return <p>Error, please try again later...</p>
//   //Let's retrieve only the properties that we need
//   const book =
//        {
//         id:cId,
//         name: data.volumeInfo.title,
//         image: data.volumeInfo.imageLinks.large,
//         description: data.volumeInfo.description.substr(0,350),
//         authors: data.volumeInfo.authors
//       }
//   //Toggle favorite button
//   const handleFavButton = () => {
//     if (!isFavorite) {dispatch(addFavorite(book)) }
//     else { dispatch(removeFromFavorite(cId)) }
//     setIsFavorite(!isFavorite);
//   }

  return (
    <div style={{padding:'30px'}}>
      {/* <h2>{book.name} </h2>
      <img style={{width:'300px'}} src={book.image} alt='' />
      <h4>{book.authors?.toString()}</h4>
      <p>{book.description}</p>
      <button className='btn'
      onClick={handleFavButton}
      >
       {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button> */}
    </div>
  )
}

export default SingleBook
