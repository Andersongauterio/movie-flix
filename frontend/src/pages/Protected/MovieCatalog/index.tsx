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
        <MovieCard />
      </div>
      <div className="movie-catalog-pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default MovieCatalog;
