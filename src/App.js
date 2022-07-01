import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchForm from "./components/SearchForm/SearchForm";
import MoviesContainer from "./components/MoviesContainer/MoviesContainer";
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<MoviesContainer />} />
          <Route path="/movies/:movieId" element={<MovieDetailContainer />} />
          <Route path="/movie/:movieSearch" element={<MovieSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
