import React from 'react';

import MovieDetails from './MovieDetails/MovieDetails';
import classes from './MovieBlock.module.css';

const movieBlock = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.movieBlock}>
                <div>
                    <img src={'https://image.tmdb.org/t/p/w500/' + props.movie.poster_path} alt='poster' />
                </div>

                <MovieDetails movie={props.movie} />
            </div>
        </div>
    )
}

export default movieBlock;