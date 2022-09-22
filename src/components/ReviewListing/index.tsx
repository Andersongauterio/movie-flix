import ReviewCard from 'components/ReviewCard';
import { Review } from 'types/review';
import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="reviewlisting-container">
      {reviews.map((review) => (
        <div className="reviewlisting-container-review" key={review.id}>
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewListing;
