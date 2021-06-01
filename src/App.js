import { useEffect, useState, useRef } from 'react';
import { Container } from './App.styles';

import ListPokemon from './components/ListPokemon';
import Spinner from './components/Spinner';

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

function App() {
  const limit = 50;
  const [pokemonList, setPokemonList] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    (async () => {
      await fetch(`${BASE_PATH}pokemon?limit=${limit}`)
        .then((response) => response.json())
        .then((result) => setPokemonList(result))
        .catch(() => setPokemonList(null));
    })();
  }, []);

  useEffect(() => {
    let lastUrl = null;
    const getPokemonData = async (url) => {
      if (isLoading || lastUrl === url) return;
      setIsLoading(true);
      await fetch(url)
        .then((response) => response.json())
        .then((newData) => {
          setPokemonList({
            ...newData,
            results: [...pokemonList.results, ...newData.results],
          });
          lastUrl = url;
        });
      setIsLoading(false);
    };
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      if (target.isIntersecting && pokemonList.next) {
        getPokemonData(pokemonList.next);
      }
    });
    if (loader?.current) {
      observer.observe(loader.current);
    }
  }, [isLoading, pokemonList]);

  return (
    <Container>
      {pokemonList !== null && (
        <>
          <ListPokemon pokemonList={pokemonList.results} />
          <aside ref={loader}>
            <Spinner small />
          </aside>
        </>
      )}
    </Container>
  );
}

export default App;
