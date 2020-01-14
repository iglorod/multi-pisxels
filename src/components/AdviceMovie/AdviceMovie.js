import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MoviesCategory from './MoviesCategory/MoviesCategory'

let apiKey = '9a709fd5f22444612e3adac728d5e164';

let adviceLinks = {
    popular: 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1',
    now_playing: 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&language=en-US&page=1',
   // latest: 'https://api.themoviedb.org/3/movie/latest?api_key=' + apiKey + '&language=en-US',
    top_rated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1',
    upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1'
}

const AdviceMovie = () => {
    let [movieCategories, setMovieCategories] = useState([]);

   /* useEffect(() => {
        for (let key in adviceLinks) {
            axios.get(adviceLinks[key])
                .then(response => {
                    let newCategory = {
                        category: key,
                        movies: response.data.results
                    };

                    setMovieCategories(prevState => {
                        return ([
                            ...prevState,
                            newCategory
                        ])
                    });
                })
                .catch(error => console.error(error));
        }
    }, []);*/

    return (
        <React.Fragment>
            {
               /* movieCategories.map(item => {
                    return (
                        <MoviesCategory key={item.category} data={item} />
                    )
                })*/
                <MoviesCategory data={{
                    category: 'popular',
                }} />
            }
        </React.Fragment>
    )
}

export default AdviceMovie;
