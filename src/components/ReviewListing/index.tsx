import ReviewCard from 'components/ReviewCard';
import './styles.css';

const ReviewListing = () => {
  return (
    <div className="reviewlisting-container">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default ReviewListing;
