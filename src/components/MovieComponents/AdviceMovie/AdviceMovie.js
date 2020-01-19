import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import MoviesCategory from './MoviesCategory/MoviesCategory'
import * as common from '../../../common/common';
import Spinner from '../../UI/Spinner/Spinner';
import { AuthContext } from '../../../context/context';

let adviceLinks = {
    popular: 'https://api.themoviedb.org/3/movie/popular?api_key=' + common.movieApiKey + '&language=en-US&page=1',
    now_playing: 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + common.movieApiKey + '&language=en-US&page=1',
    top_rated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + common.movieApiKey + '&language=en-US&page=1',
    upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + common.movieApiKey + '&language=en-US&page=1'
}

const AdviceMovie = () => {
    let [movieCategories, setMovieCategories] = useState([]);
    let [favoriteMovies, setFavoriteMovies] = useState([]);
    let [showSpinner, setShowSpinner] = useState(false);

    let context = useContext(AuthContext);

    
    const fetchMovies = () => {
        for (let key in adviceLinks) {
            axios.get(adviceLinks[key])
                .then(response => {
                    let newCategory = {
                        category: key,
                        movies: response.data.results,
                        favoriteClickHandler: favoriteClickHandler
                    };

                    setMovieCategories(prevState => {
                        return ([
                            ...prevState,
                            newCategory
                        ])
                    });

                    setShowSpinner(false);
                })
                .catch(error => console.error(error));
        }
    }

    useEffect(() => {
        if (context.isAuth) {
            let queryParams = '?auth=' + localStorage.getItem('idToken') + '&orderBy="userId"&equalTo="' + localStorage.getItem('id') + '"';

            axios.get('https://multipixels-df150.firebaseio.com/favorite.json/' + queryParams)
                .then(response => {
                    const favorite = Object.values(response.data).map(item => item.movieId);
                    setFavoriteMovies([...favorite]);

                    if (movieCategories.length === 0) fetchMovies(); // checking if movies wasn't loaded before
                })
                .catch(error => console.error(error));
        } else if (movieCategories === 0)
            fetchMovies(); // checking if movies wasn't loaded before
    }, [context.isAuth]);

    const favoriteClickHandler = (movieId) => {
        let queryParams = '?auth=' + localStorage.getItem('idToken') + '&orderBy="userId"&equalTo="' + localStorage.getItem('id') + '"';

        axios.get('https://multipixels-df150.firebaseio.com/favorite.json/' + queryParams)
            .then(response => {
                let responseArray = [];
                for (let value of Object.values(response.data)) {
                    responseArray.push(value);
                }

                const movieWasFavorite = responseArray.reduce((wasFavorite, item) => (item.movieId === movieId) || wasFavorite, false);
                if (movieWasFavorite === true) {
                    deleteFromFavorite(response.data, movieId);
                } else {
                    addToFavorite(movieId);
                }
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
                setFavoriteMovies(prevState => {
                    let favoriteMoviesClone = [...prevState];
                    const removeIndex = favoriteMoviesClone.indexOf(movieId);
                    favoriteMoviesClone.splice(removeIndex, 1);
                    return [...favoriteMoviesClone];
                });
            });
    }

    const addToFavorite = (movieId) => {
        const favorite = {
            movieId: movieId,
            userId: localStorage.getItem('id')
        }

        axios.post('https://multipixels-df150.firebaseio.com/favorite.json?auth=' + localStorage.getItem('idToken'), favorite)
            .then(() => {
                setFavoriteMovies(prevState => {
                    return ([
                        ...prevState,
                        movieId
                    ]);
                })
            });
    }

    if (showSpinner) return <Spinner />

    return (
        <React.Fragment>
            {
                movieCategories.map(item => {
                    return (
                        <MoviesCategory key={item.category} data={item} favoriteMovies={favoriteMovies} />
                    )
                })
            }
        </React.Fragment>
    )
}

export default AdviceMovie;