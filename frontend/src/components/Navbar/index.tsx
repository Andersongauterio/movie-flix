import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import history from 'util/history';
import { removeAuthData } from 'util/storage';
import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar main-nav">
      <div className="main-nav-title">
        <Link to="/movies" className="nav-logo-text">
          <h3 className="text-primary">MovieFlix</h3>
        </Link>
      </div>
      <div className="main-nav-button">
        {authContextData.authenticated ? (
          <button className="btn btn-primary" onClick={handleLogoutClick}>
            SAIR
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
