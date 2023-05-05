import { FC, useState } from 'react'
import useCheckFavorite from '../features/favorites/useCheckFavorite';
import { useAppDispatch } from '../app/hooks';
import { addFavorite, removeFromFavorite } from '../features/favorites/favoritesSlice';
import { localBook } from '../models/books';
import StarIcon from '@mui/icons-material/Star';
import { Button, IconButton } from '@mui/material';


// interface for props
interface FavButtonProps {
    book:localBook;
    children?:React.ReactNode;
    buttonStyle?:boolean;
}

const FavoriteButton:FC<FavButtonProps> = ({book, buttonStyle}) => {

  const [isFavorite, setIsFavorite] = useState(useCheckFavorite(book.id));
  const dispatch = useAppDispatch()

  //Toggle favorite button
  const handleFavButton = ():void => {
    if (!isFavorite) {dispatch(addFavorite(book)) }
    else { dispatch(removeFromFavorite(book.id)) }
    setIsFavorite(!isFavorite);
  }
  //display as button with icon
  if (buttonStyle) {
    return (
      <div>
         <Button aria-label="toggle favorite status for book" onClick={handleFavButton} variant="outlined" 
          startIcon={<StarIcon color={isFavorite ? 'warning' : 'disabled'} fontSize='large'/>} size='large'>
            {isFavorite ? 'Remove from favorites' : 'Add to favories'}
        </Button>
      </div>
    )
  }
  //display only as icon
  return (<div>
     <IconButton aria-label="toggle favorite status for book" onClick={handleFavButton}>
       <StarIcon color={isFavorite ? 'warning' : 'disabled'} fontSize='large'/>
     </IconButton>
  </div>
  
  )
}

export default FavoriteButton