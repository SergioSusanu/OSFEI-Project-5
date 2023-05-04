import { useAppSelector } from "../app/hooks";
import BookList from "../components/BookList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const searchStarted = useAppSelector((state)=>state.search.startedSearching)
  return (
    <div>
      <SearchForm />
      {searchStarted && <BookList />}
    </div>
  );
};

export default Home;
