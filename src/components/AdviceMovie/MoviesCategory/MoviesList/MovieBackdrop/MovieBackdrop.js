import React from 'react';

import classes from './MovieBackdrop.module.css';

const movieBackdrop = (props) => {
    return (
        <div className={classes.backdrop}>
            <div className={classes.topStyle}>
                <div className={classes.title}>{props.title}</div>
                <div className={classes.toFavorite}>
                    <i className="fa fa-fw fa-plus" data-reactid=".0.5.0.1.$181812.0.3.0.0"></i>
                    <i className="fa fa-fw fa-check" data-reactid=".0.5.0.1.$181812.0.3.0.1"></i>
                </div>
            </div>
            <div className={classes.voteAverage}>{props.vote_average.toFixed(1)}/10</div>
            <div className={classes.overview}>{props.overview}</div>
        </div>
    )
}

export default movieBackdrop;