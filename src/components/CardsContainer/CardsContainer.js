import "./CardsContainer.css";
import { useEffect, useState } from "react";
import {getMovies} from "../../services/getMovies";
import Cards from "../Cards/Cards";

const CardsContainer = () => {
  const [discoveryMovies, setDiscoveryMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then((movies) => setDiscoveryMovies(movies))
      .catch((error) => console.log(error));
  }, []);

  console.log(discoveryMovies);

  return (
    <div className="container-xxl">
      <h1 className="m-3"><strong>PELÍCULAS POPULARES</strong></h1>
      <div className="d-flex justify-content-around flex-wrap">
        {discoveryMovies.map(({id, title, poster_path}) => (
          <Cards
            key={id}
            id={id}
            title={title}
            poster={poster_path}            
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
