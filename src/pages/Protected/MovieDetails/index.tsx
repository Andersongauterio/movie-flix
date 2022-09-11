import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import './styles.css';

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <div className="movie-details-title">
        <h1>Tela detalhes do filme id: </h1>
      </div>
      <div className="movie-details-form">
          <ReviewForm />
      </div>
      <div className="movie-detials-review">
          <ReviewListing />
      </div>
    </div>
  );
};

export default MovieDetails;
