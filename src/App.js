import { useEffect, useState } from 'react';
import { Container } from './App.styles';

import ListPokemon from './components/ListPokemon';

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      await fetch(`${BASE_PATH}pokemon?limit=20`)
        .then((response) => response.json())
        .then((result) => setPokemonList(result))
        .catch(() => setPokemonList(null));
    })();
  }, []);

  return (
    <Container>
      {pokemonList ? (
        <ListPokemon pokemonList={pokemonList.results} />
      ) : (
        <div>Cargando...</div>
      )}
    </Container>
  );
}

export default App;
