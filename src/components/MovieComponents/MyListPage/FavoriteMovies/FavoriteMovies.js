import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../../../UI/Spinner/Spinner';
import { movieApiKey } from '../../../../common/common';
import EmptyMovieState from './EmptyMovieState/EmptyMovieState';
import FavoriteMovieList from './FavoriteMovieList/FavoriteMovieList';
import FavoriteMovieSlider from './FavoriteMovieSlider/FavoriteMovieSlider';


const FavoriteMovies = () => {
    let [favoriteMoviesIds, setFavoriteMoviesIds] = useState([]);
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        let queryParams = '?auth=' + localStorage.getItem('idToken') + '&orderBy="userId"&equalTo="' + localStorage.getItem('id') + '"';

        axios.get('https://multipixels-df150.firebaseio.com/favorite.json/' + queryParams)
            .then(response => {
                const movieIds = Object.values(response.data).map(item => item.movieId);
                setFavoriteMoviesIds([...movieIds]);

                if (movieIds.length === 0) {
                    setMovies('empty');
                    return;
                }

                fetchMovies(movieIds);
            })
            .catch(error => console.error(error));
    }, []);

    const fetchMovies = (movieIds) => {
        movieIds.map(item => {
            return axios.get('https://api.themoviedb.org/3/movie/' + item + '?api_key=' + movieApiKey + '&language=en-US')
                .then(response =>
                    setMovies(prevState => {
                        return [
                            ...prevState,
                            response.data
                        ];
                    })
                );
        });
    }

    const favoriteClickHandler = (movieId) => {
        let queryParams = '?auth=' + localStorage.getItem('idToken') + '&orderBy="userId"&equalTo="' + localStorage.getItem('id') + '"';

        axios.get('https://multipixels-df150.firebaseio.com/favorite.json/' + queryParams)
            .then(response => {
                deleteFromFavorite(response.data, movieId);
            })
            .catch(error => console.log(error));
    }

    const deleteFromFavorite = (responseData, movieId) => {
        let firebaseFavoriteId = null;
        for (let key in responseData) {
            if (responseData[key].movieId === movieId) {
                firebaseFavoriteId = key;
                break;
            }
        }

        const queryParams = '?auth=' + localStorage.getItem('idToken');
        axios.delete('https://multipixels-df150.firebaseio.com/favorite/' + firebaseFavoriteId + '.json/' + queryParams)
            .then(() => {
                deleteMovieFromState(movieId);
            });
    }

    const deleteMovieFromState = (movieId) => {
        let favoriteMoviesIdsClone = [...favoriteMoviesIds];
        const removeIndex = favoriteMoviesIds.indexOf(movieId);
        favoriteMoviesIdsClone.splice(removeIndex, 1);
        setFavoriteMoviesIds([...favoriteMoviesIdsClone]);

        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === movieId) {
                let moviesClone = [...movies];
                moviesClone.splice(i, 1);
                if (moviesClone.length === 0) setMovies('empty');
                else setMovies([...moviesClone]);
                break;
            }
        }

    }

    if (movies === 'empty') return <EmptyMovieState />

    if (movies.length === 0) return <Spinner />;

    if (movies.length > 5) return (
        <FavoriteMovieSlider
            movies={movies}
            favoriteMoviesIds={favoriteMoviesIds}
            favoriteClickHandler={favoriteClickHandler} />
    )

    return (
        <FavoriteMovieList
            movies={movies}
            favoriteMoviesIds={favoriteMoviesIds}
            favoriteClickHandler={favoriteClickHandler} />
    )
}

export default FavoriteMovies;