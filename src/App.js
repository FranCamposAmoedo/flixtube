import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchForm from "./components/SearchForm/SearchForm";
import CardsContainer from "./components/CardsContainer/CardsContainer";

function App() {
  return (
    <>
      <NavBar />
      <SearchForm />
      <CardsContainer />
    </>
  );
}

export default App;
