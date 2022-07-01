import "./MovieSearch.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieSearch = ({movie}) => {
  return (
    <div className="d-flex justify-content-around flex-wrap">
        {movie.map(({ id, title, poster_path }) => (
          <MovieCard key={id} id={id} title={title} poster={poster_path} />
        ))}
      </div>
  )
}

export default MovieSearch;