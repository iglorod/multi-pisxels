import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieBlock from './MovieBlock/MovieBlock';
import Spinner from '../../UI/Spinner/Spinner';
import { movieApiKey } from '../../../common/common';
import classes from './MoviePage.module.css';

const MoviePage = (props) => {
    let [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const movieId = props.location.state.movieId;

        axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + movieApiKey + '&language=en-US')
            .then(response => {
                setMovieData(response.data);
            })
    }, [props.location.state.movieId])

    if (movieData !== null) {
        const pageStyle = {
            background: 'black',
            backgroundImage: 'url(https://image.tmdb.org/t/p/original/' + movieData.backdrop_path + ')',
            backgroundSize: 'cover',
            height: '100%',
            paddingBottom: '200px'
        }

        return (
            <div style={pageStyle}>
                <MovieBlock movie={movieData} />
            </div>
        )
    }

    return <Spinner />
}

export default MoviePage;
