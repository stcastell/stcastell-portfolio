import React from 'react';
import './Header.css';
import Navigation from './navigation/Navigation';
import Profile from './profile/Profile';
import Social from './social/Social'

const Header = () => { 
    return (
        <header>
            <Navigation />
            <Profile />
            <Social />
        </header>
    );
}

export default Header;