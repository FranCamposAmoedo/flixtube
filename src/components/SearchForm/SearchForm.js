import { useEffect, useState } from "react";
import "./SearchForm.css";
import { getSearch } from "../../services/getMovies";
import Cards from "../Cards/Cards";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(
    (search) => {
      getSearch(search)
        .then((movie) => setMovie(movie))
        .catch((error) => console.log(error));
    },
    [search]
  );

  return (
    <div className="container mt-3 mb-5">
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={search}
          placeholder="Buscar Película"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">Buscar</button>
      </form>
      <div className="d-flex justify-content-around flex-wrap">
        {movie.map(({ id, title, poster_path }) => (
          <Cards key={id} id={id} title={title} poster={poster_path} />
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
