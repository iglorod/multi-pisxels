import React from 'react';

import InfoBlock from './InfoBlock/InfoBlock';
import LinksBlock from './LinksBlock/LinksBlock';
import MovieDBLogo from './MovieDBLogo/MovieDBLogo';
import classes from './Footer.module.css';

const footer = () => {
    return (
        <footer className={classes.footerBlock}>
            <MovieDBLogo />
            <InfoBlock />
            <LinksBlock />
        </footer>
    )
}

export default footer;