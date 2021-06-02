import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './Details.styles';

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

export default function Details() {
  const [pokemon, setPokemon] = useState(null);
  const { idPokemon } = useParams();

  useEffect(() => {
    (async () => {
      await fetch(`${BASE_PATH}pokemon/${idPokemon}`)
        .then((response) => response.json())
        .then((result) => setPokemon(result))
        .catch(() => setPokemon(null));
    })();
  }, [idPokemon]);

  return <Container>{pokemon?.name}</Container>;
}
