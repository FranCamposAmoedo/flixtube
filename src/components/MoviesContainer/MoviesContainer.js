import "./MoviesContainer.css";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/getMovies";
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "react-bootstrap/esm/Spinner";
import { useLocation } from "react-router-dom";

const MoviesContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [discoveryMovies, setDiscoveryMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true)
    getMovies("/discover/movie?api_key=")
      .then((data) => {
        setIsLoading(false)
        setDiscoveryMovies(data.results)
      });
  }, []);

  console.log(discoveryMovies);

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner className="spinner" animation="border" variant="light" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="container-xxl">
      <h1 className="m-3">
        <strong>POPULAR MOVIES</strong>
      </h1>
      <div className="d-flex justify-content-around flex-wrap">
        {discoveryMovies.map(({ id, title, poster_path }) => (
          <MovieCard key={id} id={id} title={title} poster={poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
