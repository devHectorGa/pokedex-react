import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Section,
  Image,
  Text,
  StatText,
  StatContainer,
  TypesContainer,
  Type,
} from './Details.styles';
import Spinner from '../Spinner';

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

export default function Details() {
  const [pokemon, setPokemon] = useState(null);
  const { idPokemon } = useParams();
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokemon}.png`;

  useEffect(() => {
    (async () => {
      await fetch(`${BASE_PATH}pokemon/${idPokemon}`)
        .then((response) => response.json())
        .then((result) => setPokemon(result))
        .catch(() => setPokemon(null));
    })();
  }, [idPokemon]);

  return (
    <Container>
      <Section>
        <Image src={url} alt={pokemon?.name} />
        {pokemon?.name ? (
          <Text>{`${idPokemon} - ${pokemon?.name}`}</Text>
        ) : (
          <Spinner small />
        )}
        {pokemon?.types ? (
          <TypesContainer>
            {pokemon.types.map((data) => (
              <Type className={data.type.name} data={data} key={data.type.name}>
                {data.type.name}
              </Type>
            ))}
          </TypesContainer>
        ) : (
          <Spinner small />
        )}
      </Section>
      <Section>
        <Text>Abilities</Text>
        {pokemon?.abilities ? (
          pokemon.abilities.map((data) => (
            <Abilities data={data} key={data.ability.name} />
          ))
        ) : (
          <Spinner small />
        )}
      </Section>
      <Section>
        <Text>Stats</Text>
        {pokemon?.stats ? (
          pokemon.stats.map((data) => <Stat data={data} key={data.stat.name} />)
        ) : (
          <Spinner small />
        )}
      </Section>
    </Container>
  );
}

function Abilities({ data }) {
  return <StatText>{data.ability.name}</StatText>;
}

function Stat({ data }) {
  return (
    <StatContainer>
      <StatText>{`${data.stat.name}:`}</StatText>
      <StatText textAlign={'center'}>{`${data.base_stat}`}</StatText>
    </StatContainer>
  );
}
