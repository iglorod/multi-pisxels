import React from 'react';
import Slider from "react-slick";

import MoviePoster from '../../../AdviceMovie/MoviesCategory/MoviesList/MoviePoster/MoviePoster';
import classes from './FavoriteMovieSlider.module.css';

const favoriteMovieSlider = (props) => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };

    return (
        <React.Fragment>
            <div className={classes.favoriteMoviesTitle}> Your favorite movies</div>
            <div className={classes.slider}>
                <Slider {...settings}>
                    {
                        props.movies.map(movie => {
                            return (
                                <div key={movie.id}>
                                    <MoviePoster
                                        url={movie.backdrop_path}
                                        title={movie.title}
                                        overview={movie.overview}
                                        vote_average={movie.vote_average}
                                        movie_id={movie.id}
                                        isFavorite={props.favoriteMoviesIds.includes(movie.id)}
                                        favoriteClick={() => props.favoriteClickHandler(movie.id)} />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div >
        </React.Fragment>
    )
}

export default favoriteMovieSlider;