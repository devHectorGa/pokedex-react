import { useHistory } from 'react-router-dom';
import { Container, Image } from './Pokemon.styles';

export default function Pokemon({ pokemon }) {
  const history = useHistory();
  const pokemonId = pokemon.url.split('/')[6];
  const url = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const handleClick = () => history.push(`/${pokemonId}`);

  return (
    <Container onClick={handleClick}>
      <Image src={url} alt={pokemon.name} />
      {pokemon.name}
    </Container>
  );
}
