import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MoviesContainer from "./components/MoviesContainer/MoviesContainer";
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MoviesContainer />} />
          <Route path="/movies/:movieId" element={<MovieDetailContainer />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
