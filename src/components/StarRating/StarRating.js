import "./StarRating.css";

const StarRating = () => {
  return (
    <div className="star-container">
      <h5 className="star-title">Filter by rating</h5>
      <form className="star-form">
        <p className="clasificacion">
          <input
            className="star-input"
            id="radio1"
            type="radio"
            name="stars"
            value="5"
          />
          <label className="star-label" htmlFor="radio1">
            ★
          </label>
          <input
            className="star-input"
            id="radio2"
            type="radio"
            name="stars"
            value="4"
          />
          <label className="star-label" htmlFor="radio2">
            ★
          </label>
          <input
            className="star-input"
            id="radio3"
            type="radio"
            name="stars"
            value="3"
          />
          <label className="star-label" htmlFor="radio3">
            ★
          </label>
          <input
            className="star-input"
            id="radio4"
            type="radio"
            name="stars"
            value="2"
          />
          <label className="star-label" htmlFor="radio4">
            ★
          </label>
          <input
            className="star-input"
            id="radio5"
            type="radio"
            name="stars"
            value="1"
          />
          <label className="star-label" htmlFor="radio5">
            ★
          </label>
        </p>
      </form>
    </div>
  );
};

export default StarRating;
