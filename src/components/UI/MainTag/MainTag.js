import React from 'react';

import classes from './MainTag.module.css';

const mainTag = (props) => {
    return (
        <main className={classes.content}>{props.children}</main>
    )
}

export default mainTag;