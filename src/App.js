import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from './App.styles';
import Header from './components/Header';
import Spinner from './components/Spinner';

const ListPokemon = lazy(() => import('./components/ListPokemon'));
const Details = lazy(() => import('./components/Details'));

function App() {
  return (
    <Container>
      <Header />
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
