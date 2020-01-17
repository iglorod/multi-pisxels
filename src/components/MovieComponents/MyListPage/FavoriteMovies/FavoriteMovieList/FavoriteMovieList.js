import React from 'react';

import MoviePoster from '../../../AdviceMovie/MoviesCategory/MoviesList/MoviePoster/MoviePoster';
import classes from './FavoriteMovieList.module.css';

const favoriteMovieList = (props) => {
    return (
        <React.Fragment>
            <div className={classes.favoriteMoviesTitle}> Your favorite movies</div>
            <div className={classes.slider}>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    {
                        props.movies.map(movie => {
                            return (
                                <div key={movie.id} style={{ width: '20%' }}>
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
                </div>
            </div>
        </React.Fragment>
    )
}

export default favoriteMovieList;