import React from 'react';

import classes from './Navbar.module.css';
import Logo from './Icon/Logo';
import FunctionalLinks from './FunctionalLinks/FunctionalLinks';
import SearchBar from './SearchBar/SearchBar';
import UserAuth from './UserAuthLinks/UserAuthLinks';

const navbar = () => {
    return (
        <header className={classes.navbar}>
            <Logo />
            <FunctionalLinks />
            <SearchBar />
            <UserAuth />
        </header>
    )
}

export default navbar;