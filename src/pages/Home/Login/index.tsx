import { ReactComponent as AuthImage } from 'assets/images/login-image.svg';
import './styles.css';

const Login = () => {
  return (
    <div className="login-container">
      
      <div className="login-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <AuthImage />
      </div>

      <div className="login-card">
        <h1>LOGIN</h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="form-control base-input"
              placeholder="Email"
              name="username"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-control base-input"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="login-submit">
            <button className="btn btn-primary"> FAZER LOGIN </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
