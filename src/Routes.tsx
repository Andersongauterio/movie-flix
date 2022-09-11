import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Login from 'pages/Home/Login';
import MovieCatalog from 'pages/Protected/MovieCatalog';
import MovieDetails from 'pages/Protected/MovieDetails';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>
      <Route path="/movies/:movieId" exact>
					<MovieDetails />
				</Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
