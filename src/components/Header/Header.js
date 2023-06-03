import React from 'react';
import './Header.css';
import Navigation from './navigation/Navigation';
import Profile from './profile/Profile';

const Header = () => { 
    return (
        <header>
            <Navigation/>
            <Profile/>
        </header>
    )
}

export default Header