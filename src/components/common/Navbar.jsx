import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container flex justify-between items-center py-4">
                <Link to="/" className="navbar-brand flex items-center gap-2">
                    <img src={'./assets/bitemaster logo.png'} alt='BiteMaster Logo' className="h-12" />
                    <h2 className="text-orange-600">BiteMaster</h2>
                </Link>
                <div className="navbar-nav flex items-center gap-4">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                    <Link to="/logout" className="nav-link">
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
