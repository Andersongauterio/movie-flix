import { ReactComponent as AuthImage } from 'assets/images/login-image.svg';

import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { getTokenData } from '../../../util/auth';
import { requestBackendLogin } from '../../../util/requests';
import { saveAuthData } from '../../../util/storage';
import { AuthContext } from 'AuthContext';

import './styles.css';
import { useHistory } from 'react-router-dom';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { setAuthContextData } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {

    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history.push('/movies');
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
              {...register('username')}
              type="text"
              className="form-control base-input"
              placeholder="Email"
              name="username"
            />
          </div>
          <div className="mb-2">
            <input
              {...register('password')}
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
