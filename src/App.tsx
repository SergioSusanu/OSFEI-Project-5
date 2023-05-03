import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import SingleBook from "./pages/SingleBook";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
import { useAppSelector } from "./app/hooks";
import { selectFavorites } from "./features/favorites/favoritesSlice";
//import Favorites from './features/favorites/Favorites';

function App() {

    const favorites = useAppSelector(selectFavorites)

  useEffect(()=>{
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites])

  return (
   <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="books/:id" element={<SingleBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
