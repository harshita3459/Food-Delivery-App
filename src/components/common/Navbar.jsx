import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="nav-root">
            <div className="nav-inner">
                <Link to="/" className="brand-link">
                    <img src="bitemaster logo.png" alt="BiteMaster Logo" className="brand-logo" />
                    <span className="brand-text">BiteMaster</span>
                </Link>
                <nav className="menu-links">
                    <Link to="/" className="menu-item">Home</Link>
                    <Link to="/login" className="menu-item">Login</Link>
                    <Link to="/about" className="menu-item">About</Link>
                    <Link to="/contact" className="menu-item">Contact</Link>
                    <Link to="/logout" className="menu-item">Logout</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
