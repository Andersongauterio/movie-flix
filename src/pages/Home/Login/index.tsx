import { ReactComponent as AuthImage } from 'assets/images/login-image.svg';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';
import { useContext } from 'react';
import { AuthContext } from 'AuthContext';

import { getTokenData } from 'util/auth';
import { saveAuthData } from 'util/storage';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { setAuthContextData } = useContext(AuthContext);

  const {
    handleSubmit,
    formState: { },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <div className="login-banner-img">
          <AuthImage />
        </div>
      </div>

      <div className="login-card">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
