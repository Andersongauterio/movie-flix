import ReviewCard from 'components/ReviewCard';
import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie: Movie | undefined;
}

const ReviewListing = ( { movie } : Props) => {
  return (
    <div className="reviewlisting-container">
      <ReviewCard />
    </div>
  );
};

export default ReviewListing;
