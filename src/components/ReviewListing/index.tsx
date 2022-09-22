import ReviewCard from 'components/ReviewCard';
import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie: Movie | undefined;
};

const ReviewListing = ({ movie }: Props) => {
  return (
    <div className="reviewlisting-container">
      {movie?.reviews.map((review) => (
        <div className="reviewlisting-container-review" key={review.id}>
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewListing;
