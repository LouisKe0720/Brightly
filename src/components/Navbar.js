import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import BrightlyLogo from '../assets/Brightly.png';
import StreakLogo from '../assets/Streak.png';
import ProgressLogo from '../assets/ProgressIcon.png';

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
                        {/* Learn link - main lessons like Duolingo */}
                        <Link 
                            to="/learn" 
                            className={location.pathname === '/learn' ? 'active' : ''}
                        >
                            Learn
                        </Link>
                    </li>
                    <li>
                        {/* Progress Chart */}
                        <Link 
                            to="/progress" 
                            className={location.pathname === '/progress' ? 'active' : ''}
                        >
                            <img 
                                src={ProgressLogo} 
                                alt="Progress Logo"
                                className="nav-icon"
                            />
                            Progress
                        </Link>
                    </li>
                </ul>

                {/* Streak counter - separate from navigation */}
                <div className="streak-icon">
                    <img 
                        src={StreakLogo} 
                        alt="Streak Logo"
                    />
                    <span className="streak-count">0</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;