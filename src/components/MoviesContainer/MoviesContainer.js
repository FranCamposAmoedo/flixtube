import "./MoviesContainer.css";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/getMovies";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "react-bootstrap/esm/Spinner";
import { useQuery } from "../../services/useQuery";

const MoviesContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? `/search/movie?query=${search}`
      : "/discover/movie?&sort_by=popularity.desc";
    getMovies(searchUrl).then((data) => {
      setIsLoading(false);
      setMovies(data.results);
    });
  }, [search]);

  console.log(movies);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner
          className="spinner"
          animation="border"
          variant="light"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="container-xxl">
        <h2 className="m-3">
          <strong>Movie not Found</strong>
        </h2>
      </div>
    );
  }

  return (
    <div className="container-xxl">
      <h2 className="m-3">
        {search ? (
          <strong>Search Result</strong>
        ) : (
          <strong>Popular Movies</strong>
        )}
      </h2>
      <div className="d-flex justify-content-around flex-wrap">
        {movies.map(({ id, title, poster_path }) => (
          <MovieCard key={id} id={id} title={title} poster={poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
