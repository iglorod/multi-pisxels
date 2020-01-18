import React, { useState } from 'react';
import axios from 'axios';

import SearchResults from './SearchResults/SearchResults';
import { movieApiKey } from '../../../../common/common';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    let [movies, setMovies] = useState([]);

    let timerId = null;
    const typeHandler = (event) => {
        clearTimeout(timerId);
    
        const searchTitle = event.target.value;
        if (searchTitle.length === 0) {
            clearMovieList();
            return;
        }

        timerId = setTimeout(
            () => {
                if (searchTitle.length > 2) searchMovie(searchTitle);
            }, 1500
        )
    }

    const searchMovie = (title) => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + movieApiKey + '&language=en-US&query=' + title + '&page=1&include_adult=true')
        .then(response => {
            const moviesArray = response.data.results.slice(0, 5);
            if (moviesArray.length === 0 ) setMovies('empty');
            else setMovies([...moviesArray]);
        })
    }

    const clearMovieList = () => {
        setMovies([]);
    }

    let searchResults = <SearchResults empty/>;
    if (movies !== 'empty') searchResults =  <SearchResults movies={movies} clearList={clearMovieList} />

    return (
        <div className={classes.searchBlock}>
            <form>
                <input className={classes.searchBar} onFocus={typeHandler} onBlur={() => setTimeout(clearMovieList, 100) } onInput={typeHandler} placeholder="Search for a title..." />
                {searchResults}
            </form>
        </div>
    )
}

export default SearchBar;