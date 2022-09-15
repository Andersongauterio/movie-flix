import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <div className="main-nav-title">
        <Link to="/" className="nav-logo-text">
          <h3 className="text-primary">MovieFlix</h3>
        </Link>
      </div>
      <div className="main-nav-button">
        <button className="btn btn-primary">SAIR</button>
      </div>
    </nav>
  );
};

export default Navbar;
