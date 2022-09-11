import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Login from 'pages/Home/Login';
import MovieCatalog from 'pages/Protected/MovieCatalog';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/movies">
        <MovieCatalog />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
