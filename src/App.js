import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from './App.styles';
import Spinner from './components/Spinner';

const ListPokemon = lazy(() => import('./components/ListPokemon'));
const Pokemon = lazy(() => import('./components/Pokemon'));

function App() {
  return (
    <Container>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={ListPokemon} />
          <Route path="/:idPokemon" component={Pokemon} />
        </Suspense>
      </Switch>
    </Container>
  );
}

export default App;
