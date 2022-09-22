import './styles.css';

type Props = {
  movieId: string;
}

const ReviewForm = ({movieId} : Props) => {
  return (
    <div className="form-review-container">
      <div className="form-review-input">
        <input className="form-control"
          type="text" 
          placeholder="Deixe sua avaliação aqui" />
      </div>
      <div className="form-review-btn">
        <button className="btn btn-primary">SALVAR AVALIAÇÃO</button>
      </div>
    </div>
  );
};

export default ReviewForm;
