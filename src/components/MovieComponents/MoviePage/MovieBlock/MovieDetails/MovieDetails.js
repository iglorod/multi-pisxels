import React from 'react';

import classes from './MovieDetails.module.css';

const movieDetails = (props) => {
    return (
        <div className={classes.movieDetails}>
            <div className={classes.title}>{props.movie.original_title}</div>
            <div className={classes.overview}>{props.movie.overview}</div>
            <div className={classes.genres}>
                {
                    props.movie.genres.map((item, index) => ( (index + 1) === props.movie.genres.length) ? item.name : item.name + ', ')
                }
            </div>
            <div className={classes.companies}>
                {
                    props.movie.production_companies.map((item, index) => ( (index + 1) === props.movie.production_companies.length) ? item.name : item.name + ', ')
                }
            </div>
            <div className={classes.additionalInfo}>
                <div>
                    <div className={classes.additionalTitle}>Original Release:</div>
                    <div className={classes.additionalData}>{props.movie.release_date}</div>
                </div>
                <div>
                    <div className={classes.additionalTitle}>Running Time:</div>
                    <div className={classes.additionalData}>{props.movie.runtime} mins</div>
                </div>
            </div>
            <div className={classes.additionalInfo}>
                <div>
                    <div className={classes.additionalTitle}>Box Office:</div>
                    <div className={classes.additionalData}>${props.movie.revenue}</div>
                </div>
                <div>
                    <div className={classes.additionalTitle}>Vote Average:</div>
                    <div className={classes.additionalData}>{props.movie.vote_average.toFixed(1)}/10</div>
                </div>
            </div>
        </div>
    )
}

export default movieDetails;