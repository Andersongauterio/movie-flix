import { Link } from "react-router-dom";

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <Link to="/" className="nav-logo-text">
        <h3 className="text-primary">MovieFlix</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
