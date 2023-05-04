import { FC, useState } from 'react'
import useCheckFavorite from '../features/favorites/useCheckFavorite';
import { useAppDispatch } from '../app/hooks';
import { addFavorite, removeFromFavorite } from '../features/favorites/favoritesSlice';
import { localBook } from '../models/books';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';


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

  return (<div>
   
    
     <IconButton aria-label="toggle favorite status for book" onClick={handleFavButton}>
       <StarIcon color={isFavorite ? 'warning' : 'disabled'} fontSize='large'/>
     </IconButton>
  </div>
  
  )
}

export default FavoriteButton