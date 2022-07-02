import { useEffect, useState } from "react";
import "./SearchForm.css";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../services/useQuery";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const query = useQuery();
  const searchQuery = query.get("search");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`);
  };

  useEffect(() => {
    setSearch(searchQuery || "");
  }, [searchQuery]);

  return (
    <>
      <form
        className="d-flex navbar-item"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Movie"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
