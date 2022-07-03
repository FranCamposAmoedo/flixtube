import "./StarRating.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const StarRating = () => {
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();
  
  const handleOnClick = (e) => {
    navigate(`/vote_average/${e.target.value}`);
    setRating(e.target.value);
    if (e.target.value === rating) {
      setRating(null);
      navigate("/");
    }
  };

  return (
    <div className="star-container">
      <h5 className="star-title">Filter by rating</h5>
      <form className="star-form">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label key={ratingValue} className="star-label">
              <input
                className="star-input"
                type="radio"
                name="stars"
                value={ratingValue}
                onClick={handleOnClick}
              />
              <FaStar
                className="star-icon"
                size={20}
                color={ratingValue <= rating ? "orange" : "grey"}
              />
            </label>
          );
        })}
      </form>
    </div>
  );
};

export default StarRating;
