import React, { useState, useEffect } from 'react';
import axios from 'axios'

import classes from './LatestMovie.module.css';
import Image from '../../../assets/images/pngguru1.png';
import NewIcon from '../../../assets/images/New.png';
import Spinner from '../../UI/Spinner/Spinner';
import NoPoster from '../../../assets/images/noposter.jpg';
import { Link } from 'react-router-dom';
import * as common from '../../../common/common';

const LatestMovie = () => {
    let [latestMovie, setLatestMovie] = useState();
    let [spinnerShow, setSpinnerShow] = useState(true);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/latest?api_key=' + common.movieApiKey + '&language=en-US')
            .then(response => {
                setLatestMovie(response.data);
                setSpinnerShow(false);
            })
    }, [])

    if (spinnerShow) return <Spinner />;

    let posterUrl = 'https://image.tmdb.org/t/p/w400' + latestMovie.poster_path;
    if (latestMovie.poster_path === null) posterUrl = NoPoster;

    return (
        <div className={classes.latestMovie} >
            <img src={Image} className={classes.backdrop} alt='backdrop' />
            <div>
                <Link to={{
                    pathname: '/movie',
                    state: {
                        movieId: latestMovie.id
                    }
                }}>
                    <div className={classes.title}>{latestMovie.original_title}</div>
                </Link>
                <div className={classes.overview}>{latestMovie.overview}</div>
            </div>
            <div className={classes.moviePoster}>
                <Link to={{
                    pathname: '/movie',
                    state: {
                        movieId: latestMovie.id
                    }
                }}>
                    <img src={posterUrl} alt={'movie poster'} />
                </Link>
                <img src={NewIcon} alt='NEW' />
            </div>
        </div>
    );
}

export default LatestMovie;