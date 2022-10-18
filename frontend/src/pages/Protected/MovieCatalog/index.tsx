import MovieCard from 'components/MovieCard';
import MovieFilter from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="movie-catalog-container">
      <div className="movie-catalog-filter">
        <MovieFilter />
      </div>
      <div className="movie-catalog-list">
        <ul>
          <li>
            <MovieCard />
          </li>
        </ul>
      </div>
      <Pagination /> 
    </div>
  );
};

export default MovieCatalog;
