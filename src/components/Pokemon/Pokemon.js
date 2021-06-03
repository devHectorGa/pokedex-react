import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Image, Text, TypesContainer, Type } from './Pokemon.styles';
import Spinner from '../Spinner';

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

export default function Pokemon({ pokemon }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const history = useHistory();
  const pokemonId = pokemon.url.split('/')[6];
  const url = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const handleClick = () => history.push(`/${pokemonId}`);

  useEffect(() => {
    (async () => {
      await fetch(`${BASE_PATH}pokemon/${pokemonId}`)
        .then((response) => response.json())
        .then((result) => setPokemonDetails(result))
        .catch(() => setPokemonDetails(null));
    })();
  }, [pokemonId]);

  return (
    <Container onClick={handleClick}>
      <Image src={url} alt={pokemon.name} />
      <Text>{`${pokemonId} ${pokemon.name}`}</Text>
      <TypesContainer>
        {pokemonDetails ? (
          pokemonDetails?.types?.map((data) => (
            <Type className={data?.type?.name} key={data?.type?.name}>
              {data?.type?.name}
            </Type>
          ))
        ) : (
          <Spinner small dimension="1rem" />
        )}
      </TypesContainer>
    </Container>
  );
}
