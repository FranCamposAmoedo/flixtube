import "./NavBar.css";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import SearchForm from "../SearchForm/SearchForm";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark d-flex justify-content-around">
      <div className="navbar-container">
        <button
          className="navbar-toggler navbar-item"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand navbar-item" to="/">
          <h1 className="title-brand">FLIXTUBE</h1>
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <SearchForm />
          <div className="navbar-item">
            <StarRating />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
