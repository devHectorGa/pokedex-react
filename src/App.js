import { useEffect, useState } from 'react';
const BASE_PATH = process.env.REACT_APP_BASE_PATH;

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      await fetch(`${BASE_PATH}pokemon?limit=20`)
        .then((response) => response.json())
        .then((result) => setPokemonList(result));
    })();
  }, []);

  return <main className="App">Pokemon</main>;
}

export default App;
