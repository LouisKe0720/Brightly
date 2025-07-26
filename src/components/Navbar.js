import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import BrightlyLogo from '../assets/Brightly.png';

function Navbar() {
    return (
        <nav>
            <div className="navbar-container">
                <div className="logo"><img src={BrightlyLogo} alt="StudyBuddy Logo" /></div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;