import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { Review } from 'types/review';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data.reviews);
      setMovie(response.data as Movie);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone?.push(review);
    setReviews(clone);
  };

  return (
    <div className="movie-details-container">
      <div className="movie-details-title">
        <MovieCard movie={movie} />
        <div className="movie-details-synopsis">
          <p>{movie?.synopsis}</p>
        </div>
      </div>

      <div className="movie-details-form">
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
        )}
      </div>

      <div className="movie-detials-review">
        <ReviewListing reviews={reviews} />
      </div>
    </div>
  );
};

export default MovieDetails;
