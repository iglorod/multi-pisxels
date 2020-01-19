import React from 'react';

import MovieDetails from './MovieDetails/MovieDetails';
import NoPoster from '../../../../assets/images/noposter.jpg';
import classes from './MovieBlock.module.css';

const movieBlock = (props) => {    
    let posterUrl = 'https://image.tmdb.org/t/p/w500/' + props.movie.poster_path;
    if (props.movie.poster_path === null) posterUrl = NoPoster;


    return (
        <div className={classes.wrapper}>
            <div className={classes.movieBlock}>
                <div>
                    <img src={posterUrl} alt='poster' />
                </div>

                <MovieDetails movie={props.movie} />
            </div>
        </div>
    )
}

export default movieBlock;