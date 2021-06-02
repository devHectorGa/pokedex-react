import { useState } from 'react';
import { Container } from './App.styles';

import ListPokemon from './components/ListPokemon';

function App() {
  const [pokemon, setPokemon] = useState(null);

  return (
    <Container>
      <ListPokemon />
    </Container>
  );
}

export default App;
