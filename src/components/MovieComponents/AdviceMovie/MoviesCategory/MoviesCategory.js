import React from 'react';

import AdviceCategory from './AdviceCategory/AdviceCategory';
import MoviesList from './MoviesList/MoviesList';

const moviesCategory = (props) => {
    return (
        <div style={{ zIndex: '200', padding: '20px 0px' }}>
            <AdviceCategory category={props.data.category} />
            <MoviesList
                data={props.data.movies}
                favorite={props.favoriteMovies}
                onFavoriteClick={props.data.favoriteClickHandler} />
        </div>
    )
}

export default moviesCategory;