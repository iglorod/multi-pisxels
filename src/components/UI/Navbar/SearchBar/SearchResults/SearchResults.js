import React from 'react';

import SearchResult from './SearchResult/SearchResult';
import EmptyResult from './EmptyResult/EmptyResult';
import classes from './SearchResults.module.css';

const searchResults = (props) => {
    if (props.empty) return (
        <div className={classes.searchResultsBlock}>
            <EmptyResult />
        </div>
    )

    if (props.movies.length === 0) return null;

    return (
        <div className={classes.searchResultsBlock} onClick={props.clearList}>
            {
                props.movies.map(item => {
                    return (
                        <SearchResult key={item.id} movie={item} />
                    )
                })
            }
        </div>
    )
}

export default searchResults;