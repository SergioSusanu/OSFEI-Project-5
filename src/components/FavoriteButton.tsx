import { FC, useState } from 'react'
import useCheckFavorite from '../features/favorites/useCheckFavorite';
import { useAppDispatch } from '../app/hooks';
import { addFavorite, removeFromFavorite } from '../features/favorites/favoritesSlice';
import { localBook } from '../models/books';

// interface for props
interface FavButtonProps {
    book:localBook;
    children?:React.ReactNode
}

const FavoriteButton:FC<FavButtonProps> = ({book}) => {

  const [isFavorite, setIsFavorite] = useState(useCheckFavorite(book.id));
  const dispatch = useAppDispatch()

  //Toggle favorite button
  const handleFavButton = ():void => {
    if (!isFavorite) {dispatch(addFavorite(book)) }
    else { dispatch(removeFromFavorite(book.id)) }
    setIsFavorite(!isFavorite);
  }

  return (
     <button className='btn'
      onClick={handleFavButton}
      >
       {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
     </button>
  )
}

export default FavoriteButton