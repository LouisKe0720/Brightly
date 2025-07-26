import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import BrightlyLogo from '../assets/Brightly.png';

function Navbar() {
    // Used to determine the current active route
    const location = useLocation();

    // Used to navigate through routes
    const navigate = useNavigate();

    // Function when logo is clicked - goes to home page
    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav>
            {/* Navbar container with logo and links */}
            <div className="navbar-container">
                <div className="logo">
                    <img 
                        src={BrightlyLogo} 
                        alt="StudyBuddy Logo" 
                        onClick={handleLogoClick}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <ul>
                    <li>
                        {/* Home link with active class based on current route */}
                        <Link 
                            to="/" 
                            className={location.pathname === '/' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        {/* Dashboard link with active class based on current route */}
                        <Link 
                            to="/dashboard" 
                            className={location.pathname === '/dashboard' ? 'active' : ''}
                        >
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;