import React, { useRef, useEffect, FC } from "react";
import { setSearchTerm } from "../features/searchSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import StylingWrapper from "../assets/css/SearchForm";

const SearchForm:FC = () => {
  const activeSearchTerm = useAppSelector((state:RootState)=>state.search.searchTerm)
  const dispatch = useAppDispatch()
  const searchInput = useRef<HTMLInputElement | null>(null)
  let timer: NodeJS.Timeout;

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      clearTimeout(timer); 
      timer = setTimeout(() => {
         dispatch(setSearchTerm(e.target.value))
      }, 700);
    }
  };

  useEffect(() => {
    if (searchInput.current){
       //searchInput.current.focus();
       if (activeSearchTerm) searchInput.current.value = activeSearchTerm 
    }
  });

  return (
    <StylingWrapper>
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search-input">Search books:</label>
          <input
            type="text"
            name="search-input"
            onChange={handleSearch}
            ref={searchInput}
          />
        </div>
      </form>
    </section>
    </StylingWrapper>
  );
};

export default SearchForm;
