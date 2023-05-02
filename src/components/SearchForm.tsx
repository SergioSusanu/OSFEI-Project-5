import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSearchTerm } from "../features/searchSlice";

const SearchForm = () => {

//   const activeSearchTerm = useSelector((state) => state.search.searchTerm)
//   const dispatch = useDispatch()
//   const searchInput = useRef()
//   let timer;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleSearch = (e) => {
//       clearTimeout(timer);
//       // Wait for X ms 
//       timer = setTimeout(() => {
//          dispatch(setSearchTerm(e.target.value))
//       }, 700);

//   };

//   useEffect(() => {
//     searchInput.current.focus();
//     searchInput.current.value = activeSearchTerm
//   });

  return (
    <section className="section search">
      {/* <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search-input">Search books:</label>
          <input
            type="text"
            name="search-input"
            onChange={handleSearch}
            ref={searchInput}
          />
        </div>
      </form> */}
    </section>
  );
};

export default SearchForm;
