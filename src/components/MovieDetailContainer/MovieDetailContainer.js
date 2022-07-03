import "./MovieDetailContainer.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/getMovies";
import Spinner from "react-bootstrap/Spinner";

const MovieDetailContainer = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMovies(`/movie/${movieId}`).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

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

  const baseUrlImage = "https://image.tmdb.org/t/p/w780";
  return (
    <div className="container-xxl d-flex justify-content-center flex-wrap mt-5">
      <img
        className="img-detail"
        src={`${baseUrlImage.concat(movie.poster_path)}`}
        alt={movie.title}
      />
      <div className="container-text">
        <h3>{movie.title}</h3>
        <p className="plot">{movie.overview}</p>
        <p>
          <strong>Release Date: </strong>
          {movie.release_date}
        </p>
        <strong>
          Rating: <span>{movie.vote_average}</span>
        </strong>
      </div>
    </div>
  );
};

export default MovieDetailContainer;
