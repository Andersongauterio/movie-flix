import { ReactComponent as AuthImage } from 'assets/images/login-image.svg';

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getTokenData } from '../../../util/auth';
import { requestBackendLogin } from '../../../util/requests';
import { saveAuthData } from '../../../util/storage';
import { AuthContext } from 'AuthContext';
import { toast } from 'react-toastify';

import './styles.css';
import { useHistory, useLocation } from 'react-router-dom';

type FormData = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Login = () => {
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/movies' } };

  const { setAuthContextData } = useContext(AuthContext);

  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history.replace(from);
      })
      .catch((error) => {
        toast.error('Erro ao realizar login');
        setHasError(true);
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
        {hasError && (
          <div className="alert alert-danger">Erro ao tentar efetuar login</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register('username', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              type="text"
              className={`form-control base-input ${
                errors.username ? 'is-invalid' : ''
              }`}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
          </div>
          <div className="mb-2">
            <input
              {...register('password', {
                required: 'Campo obrigatório',
              })}
              type="password"
              className={`form-control base-input ${
                errors.username ? 'is-invalid' : ''
              }`}
              placeholder="Password"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
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
