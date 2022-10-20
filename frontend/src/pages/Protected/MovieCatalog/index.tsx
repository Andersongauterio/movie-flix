import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import MovieFilter from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import './styles.css';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const getMovies = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: pageNumber,
        size: 6,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getMovies(0);
  }, []);

  return (
    <div className="movie-catalog-container">
      <div className="movie-catalog-filter">
        <MovieFilter />
      </div>
      <div className="row">
        {page?.content.map((movie) => (
          <div key={movie.id} className="movie-catalog-list col-sm-6 col-lg-4 col-xl-3">
            <Link to="/movies/1">
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
      <div className="movie-catalog-pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default MovieCatalog;
