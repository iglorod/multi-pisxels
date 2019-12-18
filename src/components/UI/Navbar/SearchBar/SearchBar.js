import React from 'react';

import classes from './SearchBar.module.css';

const searchBar = () => {
    return (
        <div className={classes.searchBlock}>
            <form>
                <input className={classes.searchBar} placeholder="Search for a title..." />
            </form>
        </div>
    )
}

export default searchBar;