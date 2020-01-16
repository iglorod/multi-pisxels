import React, { useContext } from 'react';

import classes from './MoviePoster.module.css';
import { AuthContext } from '../../../../../../context/context';
import { Link } from 'react-router-dom';

const MoviePoster = (props) => {
    const context = useContext(AuthContext);
    let imgStyle = {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w500/' + props.url + ')',
    }

    let favorite = (
        <div
            className={props.isFavorite ? classes.choosed : classes.favorite}
            onClick={props.favoriteClick}>
            <div className={classes.favoriteIcons}>
                <ion-icon name="add"></ion-icon>
                <ion-icon name="checkmark"></ion-icon>
            </div>
        </div>
    )
    if (!context.isAuth) favorite = null;

    return (
        <div className={classes.blackBackground}>
            <div style={imgStyle} className={classes.imageBackground}>
                <div className={classes.hidenModal}>
                    <Link to={{
                        pathname: '/movie',
                        state: {
                            movieId: props.movie_id
                        }
                    }}>
                        <div className={classes.title}><p>{props.title}</p></div>
                    </Link>
                    <div className={classes.voteAverage}>{props.vote_average.toFixed(1)}/10</div>
                    <div className={classes.overview}>{props.overview}</div>
                    {favorite}
                </div>
            </div>
        </div>
    )
}

export default MoviePoster;