import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="top-header">
            <nav className="nav-bar">
                <NavLink to="/" end className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/projects" className="nav-link">
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
