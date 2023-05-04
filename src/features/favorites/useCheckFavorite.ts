import { useAppSelector } from '../../app/hooks'
import { selectFavorites } from './favoritesSlice'
//checks if a book ID is in the favorite collection
const useCheckFavorite = (cId:string):boolean => {
    const favBooks = useAppSelector(selectFavorites)
    if (cId && favBooks){
       if (favBooks.find((e) => e.id === cId)) return true
    }
    return false
}

export default useCheckFavorite