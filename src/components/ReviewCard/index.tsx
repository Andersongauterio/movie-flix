import { ReactComponent as StarIcon } from 'assets/images/star.svg';

import './styles.css';

const ReviewCard = () => {
  return (
    <div className="reviewcard-container">
      <div className="reviewcard-title">
        <StarIcon />
        <h1>Maria Silva</h1>
      </div>
      <div className="reviewcard-review">
        <h6>
          Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
        </h6>
      </div>
    </div>
  );
};

export default ReviewCard;
