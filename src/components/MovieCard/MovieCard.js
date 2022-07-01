import { Link } from "react-router-dom";
import "./MovieCard.css";

const baseUrlImage = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ id, title, poster }) => {
  return (
    <div key={id} className="card m-3 card-movie" style={{ width: "18rem" }}>
      <Link to={`/movies/${id}`}>
        <img
          src={baseUrlImage.concat(poster)}
          className="card-img-top"
          alt={title}
        />
      </Link>
      <div className="movie-title bg-dark card-body d-flex justify-content-center align-items-center">
        <p className="card-text text-center ">{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
