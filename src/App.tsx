import  { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleBook from "./pages/SingleBook";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
import { useAppSelector } from "./app/hooks";
import { selectFavorites } from "./features/favorites/favoritesSlice";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/css/Theme";

function App() {

    const favorites = useAppSelector(selectFavorites)

  useEffect(()=>{
    if (favorites?.length !== 0 && typeof favorites !== 'undefined' ){
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  },[favorites])

  return (
   <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="books/:id" element={<SingleBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
