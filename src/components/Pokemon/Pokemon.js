import { Container, Image } from './Pokemon.styles';

export default function Pokemon({ pokemon }) {
  //raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
  const pokemonId = pokemon.url.split('/')[6];
  const url = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <Container>
      <Image src={url} alt={pokemon.name} />
      {pokemon.name}
    </Container>
  );
}
