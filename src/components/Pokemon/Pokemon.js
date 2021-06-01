import { Container } from './Pokemon.styles';

export default function Pokemon({ pokemon }) {
  return <Container>{pokemon.name}</Container>;
}
