import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from './App.styles';
import Spinner from './components/Spinner';

const ListPokemon = lazy(() => import('./components/ListPokemon'));
const Details = lazy(() => import('./components/Details'));

function App() {
  return (
    <Container>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={ListPokemon} />
          <Route path="/:idPokemon" component={Details} />
        </Suspense>
      </Switch>
    </Container>
  );
}

export default App;
