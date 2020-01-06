import React from 'react';
import Slider from "react-slick";
import axios from 'axios';

import classes from './MoviesList.module.css';
import MoviePoster from './MoviePoster/MoviePoster';

const movieSnapShot = (props) => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    
    const favoriteClickHandler = (movieId) => {
        axios.get('https://multipixels-df150.firebaseio.com/favorite.json/id?orderBy="userId"&equalTo="' +  localStorage.getItem('id') + '"')
        .then(response => console.log(response))
        .catch(error => console.log(error));
/*
        const favorite = {
            movieId: movieId,
            userId: localStorage.getItem('id')
        }
        axios.post('https://multipixels-df150.firebaseio.com/favorite.json', favorite);*/
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
                                    favoriteClick={favoriteClickHandler.bind(this, movie.id)} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default movieSnapShot;