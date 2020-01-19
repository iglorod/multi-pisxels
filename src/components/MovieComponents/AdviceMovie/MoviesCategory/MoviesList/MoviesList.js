import React, { useState, useContext, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';

import classes from './MoviesList.module.css';
import MoviePoster from './MoviePoster/MoviePoster';

const MovieSnapShot = (props) => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };

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
                                    isFavorite={props.favorite.includes(movie.id)}
                                    favoriteClick={() => props.onFavoriteClick(movie.id) } />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default MovieSnapShot;