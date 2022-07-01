import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <h1 className="navbar-brand text-uppercase">Flixtube</h1>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
