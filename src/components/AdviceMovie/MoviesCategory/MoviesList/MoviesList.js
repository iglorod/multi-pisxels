import React from 'react';
import Slider from "react-slick";

import classes from './MoviesList.module.css';
import MoviePoster from './MoviePoster/MoviePoster';

const movieSnapShot = (props) => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                                    vote_average={movie.vote_average} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default movieSnapShot;