import { Container } from './ListPokemon.styles';
import Pokemon from '../Pokemon';

export default function ListPokemon({ pokemonList = [] }) {
  return (
    <Container>
      {pokemonList.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.name} />
      ))}
    </Container>
  );
}
