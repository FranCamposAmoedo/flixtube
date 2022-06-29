import "./Cards.css";

const baseUrlImage = "https://image.tmdb.org/t/p/w500";

const Cards = ({id, title, poster}) => {
  return (
    <div key={id} className="card m-3" style={{ width: "18rem" }}>
      <img
        src={baseUrlImage.concat(poster)}
        className="card-img-top"
        alt={title}
      />
      <div className="movie-title bg-dark card-body d-flex justify-content-center align-items-center">
        <p className="card-text text-center ">{title}</p>
      </div>
    </div>
  );
};

export default Cards;
