import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SearchResult.module.css';

const searchResult = (props) => {
    return (
        <Link to={{
            pathname: '/movie',
            state: {
                movieId: props.movie.id
            }
        }}>
            <div className={classes.result}>{props.movie.title}</div>
        </Link>
    )
}

export default searchResult;