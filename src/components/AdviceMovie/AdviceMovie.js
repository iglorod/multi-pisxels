import React from 'react';
import axios from 'axios';

import MoviesCategory from './MoviesCategory/MoviesCategory'

let apiKey = '9a709fd5f22444612e3adac728d5e164';

let adviceLinks = {
    popular: 'https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1',
    now_playing: 'https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1',
    latest: 'https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US',
    top_rated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1',
    upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1'         
}

const adviceMovie = () => {
    
    //implement later
    
    /*  let movies = [];

    for (key in adviceLinks.keys()) {
        axios.get(adviceLinks[key], response => {
            movies.push(
                <MoviesCategory category={key} movies={response.results} />
            );
        })
    }*/

    /*  movies.map(movie => {
          return movie;
      })*/
    return (
        <MoviesCategory category={'popular'}/* movies={lalia.results}*/ /> 
    )
}

export default adviceMovie;