import React from 'react';

import classes from './MoviePoster.module.css';

const moviePoster = (props) => {
    let imgStyle = {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w500/' + props.url + ')',
    }

    return (
        <div className={classes.blackBackground}>
            <div style={imgStyle} className={classes.imageBackground}>
                <div className={classes.hidenModal}>
                    <div className={classes.title}><p>{props.title}</p></div>
                    <div className={classes.voteAverage}>{props.vote_average.toFixed(1)}/10</div>
                    <div className={classes.overview}>{props.overview}</div>
                    <div className={classes.favorite}>
                        <div className={classes.favoriteIcons}>
                            <ion-icon name="add"></ion-icon>
                            <ion-icon name="checkmark"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default moviePoster;