import { Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Login from 'pages/Home/Login';
import MovieCatalog from 'pages/Protected/MovieCatalog';
import MovieDetails from 'pages/Protected/MovieDetails';
import history from 'util/history';
import PrivateRoute from 'components/PrivateRoute';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <MovieCatalog />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
