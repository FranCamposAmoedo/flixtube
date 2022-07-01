import { useEffect, useState } from "react";
import "./SearchForm.css";
import { getSearch } from "../../services/getMovies";
import MovieSearch from "../MovieSearch/MovieSearch";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`)
  };

  useEffect(
    (search) => {
      getSearch(search)
        .then((movie) => setMovie(movie))
        .catch((error) => console.log(error));
    },
    [search]
  );

  return (
    <>
      <div className="container mt-5 mb-5">
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={search}
            placeholder="Search Movie"
            onChange={handleChange}
          />
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* <MovieSearch movie={movie} /> */}
    </>
  );
};

export default SearchForm;
