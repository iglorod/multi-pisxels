import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieBlock from './MovieBlock/MovieBlock';
import Spinner from '../../UI/Spinner/Spinner';
import { movieApiKey } from '../../../common/common';

const MoviePage = (props) => {
    let [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const movieId = props.location.state.movieId;

        axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + movieApiKey + '&language=en-US')
            .then(response => {
                setMovieData(response.data);
            })
    }, [])

    if (movieData !== null) {
        const pageStyle = {
            background: 'black',
            backgroundImage: 'url(https://image.tmdb.org/t/p/original/' + movieData.backdrop_path + ')',
            backgroundSize: 'cover',
            height: '100%'
        }
        
        return (
            <div style={pageStyle}>
                <MovieBlock movie={movieData} />
            </div>
        )
    }

    return <Spinner />
}

export default MoviePage;

const movieDetails = {
    adult: false,
    backdrop_path: '/6kMu4vECAyTpj2Z7n8viJ4RAaYh.jpg',
    belongs_to_collection: {
        id: 280504,
        name: 'Mechanic Collection',
        poster_path: '/vjD3kIvyxOx8yW3SM0kqmZja0py.jpg',
        backdrop_path: '/i36Ufc9CmjwpcfUaQv1YgifPyhF.jpg'
    },
    budget: 40000000,
    genres: [
        {
            id: 28, name: 'Action'
        }, {
            id: 80, name: 'Crime'
        }, {
            id: 53, name: 'Thriller'
        }],
    homepage: null,
    id: 278924,
    imdb_id: 'tt3522806',
    original_language: 'en',
    original_title: 'Mechanic: Resurrection',
    overview: 'Arthur Bishop thought he had put his murderous past behind him when his most formidable foe kidnaps the love of his life.Now he is forced to travel the globe to complete three impossible assassinations, and do what he does best, make them look like accidents.',
    popularity: 31.617,
    poster_path: '/nhPKl3mDUPXpCrX5onoGmt6kC4U.jpg',
    production_companies: [
        {
            id: 342,
            logo_path: null,
            name: 'Davis - Films',
            origin_country: 'IN'
        }, {
            id: 80114,
            logo_path: null,
            name: 'E2 Productions',
            origin_country: 'US'
        }, {
            id: 1020,
            logo_path: '/kuUIHNwMec4dwOLghDhhZJzHZTd.png',
            name: 'Millennium Films', origin_country: 'US'
        }, {
            id: 12252,
            logo_path: null,
            name: 'Chartoff-Winkler Productions',
            origin_country: 'SA'
        }],
    production_countries: [{
        iso_3166_1: 'FR',
        name: 'France'
    }, {
        iso_3166_1: 'US',
        name: 'United States of America'
    }, {
        iso_3166_1: 'TH',
        name: 'Thailand'
    }],
    release_date: '2016 - 08 - 25',
    revenue: 125729635,
    runtime: 99,
    spoken_languages: [{
        iso_639_1: 'bg',
        name: 'български език'
    }, {
        iso_639_1: 'en',
        name: 'English'
    }],
    status: 'Released',
    tagline: 'Four continents.Three kills...Or the love of his life is dead.',
    title: 'Mechanic: Resurrection',
    video: false,
    vote_average: 5.7,
    vote_count: 2023
}