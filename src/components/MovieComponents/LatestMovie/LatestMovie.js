import React, { useState, useEffect } from 'react';
import axios from 'axios'

import classes from './LatestMovie.module.css';
import Image from '../../../assets/images/pngguru1.png';
import NewIcon from '../../../assets/images/New.png';
import Spinner from '../../UI/Spinner/Spinner';
import { Link } from 'react-router-dom';
import * as common from '../../../common/common';

const LatestMovie = () => {
    let [latestMovie, setLatestMovie] = useState();
    let [spinnerShow, setSpinnerShow] = useState(true);

    useEffect(() => {
        /*  axios.get('http://api.themoviedb.org/3/movie/latest?api_key=' + common.movieApiKey + '&language=en-US')
              .then(response => {
                  console.log(response);
                  setLatestMovie(response.data);
                  setSpinnerShow(false);
                  console.log(latestMovie);
              })*/
        setLatestMovie({
            id: 413323,
            poster_path: '/kBVzPzwl2kt45SbCeVrTQPgrWqR.jpg',
            original_title: 'My Asian Mistress',
            overview: "Seductive Asian beauties put on a real show for you in these 5 explosive scenes that prove the Orient really is the land of eroticism. From petite Katana in a schoolgirl outfit to busty Christina, all your Asian fantasies will be satisfied. Sex Art continues it's mastery of adult entertainment, delivering adult's hottest models in high end productions."
        });
        setSpinnerShow(false);
    }, [])

    if (spinnerShow) return <Spinner />;
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
                    <img src={'https://image.tmdb.org/t/p/w400' + latestMovie.poster_path} alt={'movie poster'} />
                </Link>
                <img src={NewIcon} alt='NEW' />
            </div>
        </div>
    );
}

export default LatestMovie;