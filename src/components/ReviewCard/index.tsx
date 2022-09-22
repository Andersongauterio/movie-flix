import { ReactComponent as StarIcon } from 'assets/images/star.svg';
import { Review } from 'types/review';

import './styles.css';

type Props = {
  review: Review | undefined;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="reviewcard-container">
      <div className="reviewcard-title">
        <StarIcon />
        <h1>{review?.user.name}</h1>
      </div>
      <div className="reviewcard-review">
        <h6>
          {review?.text}
        </h6>
      </div>
    </div>
  );
};

export default ReviewCard;
