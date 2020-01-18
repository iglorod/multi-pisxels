import React from 'react';

import InfoBlock from './InfoBlock/InfoBlock';
import LinksBlock from './LinksBlock/LinksBlock';
import MovieDBLogo from './MovieDBLogo/MovieDBLogo';
import classes from './Footer.module.css';

const footer = () => {
    return (
        <div className={classes.footerBlock}>
            <MovieDBLogo />
            <InfoBlock />
            <LinksBlock />
        </div>
    )
}

export default footer;