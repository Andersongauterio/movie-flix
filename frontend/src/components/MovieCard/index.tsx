import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie: Movie | undefined;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card-container">
      <div className="movie-card-img">
        <img src={movie?.imgUrl} alt={movie?.title} />
      </div>
      <div className="movie-card-info">
        <h1>{movie?.title}</h1>
        <h3>{movie?.year}</h3>
        <h4>{movie?.subTitle}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
