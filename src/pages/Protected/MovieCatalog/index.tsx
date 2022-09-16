import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="movie-catalog-container">
      <div className="movie-catalog-title">
        <h1>Tela de listagem de filmes</h1>
      </div>
      <div className="movie-catalog-list">
        <ul>
          <li>
            <a href="/movies/1">Acessar /movies/1</a>
          </li>
          <li>
            <a href="/movies/2">Acessar /movies/2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCatalog;
