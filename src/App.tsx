import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import SingleBook from "./pages/SingleBook";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
//import Favorites from './features/favorites/Favorites';

function App() {
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
