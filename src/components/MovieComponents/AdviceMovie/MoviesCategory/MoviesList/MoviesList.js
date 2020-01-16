import React, { useState, useContext, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

import classes from './MoviesList.module.css';
import MoviePoster from './MoviePoster/MoviePoster';
import { AuthContext } from '../../../../../context/context';

const MovieSnapShot = (props) => {
    let context = useContext(AuthContext);
    let [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        console.log(context.isAuth);
        if (context.isAuth) {
            let queryParams = '?auth=' + localStorage.getItem('idToken') + '&orderBy="userId"&equalTo="' + localStorage.getItem('id') + '"';

            axios.get('https://multipixels-df150.firebaseio.com/favorite.json/' + queryParams)
                .then(response => {
                    setFavoriteMovies(Object.values(response.data).map(item => item.movieId));
                })
                .catch(error => console.error(error));
        }
    }, [context.isAuth])

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };

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
                    let firebaseFavoriteId = null;
                    for (let key in response.data) {
                        if (response.data[key].movieId === movieId) {
                            firebaseFavoriteId = key;
                            break;
                        }
                    }

                    queryParams = '?auth=' + localStorage.getItem('idToken');
                    axios.delete('https://multipixels-df150.firebaseio.com/favorite/' + firebaseFavoriteId + '.json/' + queryParams)
                        .then(() => {
                            let favoriteMoviesClone = [...favoriteMovies];
                            const removeIndex = favoriteMovies.indexOf(movieId);
                            favoriteMoviesClone.splice(removeIndex, 1);
                            setFavoriteMovies([...favoriteMoviesClone]);
                        });
                } else {
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
            })
            .catch(error => console.log(error));
    }

    return (
        <div className={classes.slider}>
            <Slider {...settings}>
                {
                    props.data.map(movie => {
                        return (
                            <div key={movie.id}>
                                <MoviePoster
                                    url={movie.backdrop_path}
                                    title={movie.title}
                                    overview={movie.overview}
                                    vote_average={movie.vote_average}
                                    movie_id={movie.id}
                                    isFavorite={favoriteMovies.includes(movie.id)}
                                    favoriteClick={favoriteClickHandler.bind(this, movie.id)} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default MovieSnapShot;