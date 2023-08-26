import { useState, useEffect } from "react";
import { useFavorites } from "./context";
import getCharacters from "./api";
import CharacterCard from "./components/Character/CharacterCard";
import FavoriteSection from "./components/Favorites/FavoriteSection";
import './App.css'
import Intro from "./components/intro/Intro";
import loader from './assets/loader.svg'

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [favorites] = useFavorites();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    (async function fetchData() {
      const results = await getCharacters(search);
      setLoading(false);
      setData(results);
    })();
  }, [search]);

  return (
    <main className="App">
      <Intro />
      {favorites.length > 0 ? <FavoriteSection props={data} /> : ''}
      <input id="search" placeholder="Type a name...." type="text" name="search" className="search-input" onChange={(event) => setSearch(event.target.value)} />
      {loading && <img className="loader" src={loader} />}
      <div id="card-container" className="card-container">
        {data?.results &&
          data.results.map((character) => (
            <CharacterCard props={character} />
          ))}
      </div>
    </main>
  );
}

export default App;
