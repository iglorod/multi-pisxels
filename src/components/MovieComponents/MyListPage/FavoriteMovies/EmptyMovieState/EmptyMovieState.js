import React from 'react';

import SorryImage from '../../../../../assets/images/sorry.png';
import classes from './EmptyMovieState.module.css';

const emptyMovieList = () => {
    return (
        <React.Fragment>
            <img src={SorryImage} className={classes.noMoviesImg} alt="sorry img" />
            <div className={classes.noMoviesText}>Your favorite movie list is empty</div>
        </React.Fragment>
    )
}

export default emptyMovieList;