import React from 'react';

import classes from './EmptyResult.module.css';

const emptyResult = () => {
    return (
        <div className={classes.empty}>No results</div>
    )
}

export default emptyResult;