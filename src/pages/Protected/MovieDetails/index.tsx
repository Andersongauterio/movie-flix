import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params)
    .then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
  }, [movieId]);

  return (
    <div className="movie-details-container">
      <div className="movie-details-title">
        <h1>Tela detalhes do filme id: {movieId} </h1>
      </div>
      <div className="movie-details-form">
        <ReviewForm />
      </div>
      <div className="movie-detials-review">
        <ReviewListing movie={movie}/>
      </div>
    </div>
  );
};

export default MovieDetails;
