import React from 'react';

import classes from './Authorization.module.css';

const authorization = (props) => {
    return (
        <div className={classes.authItem}>{props.children}</div>
    )
}

export default authorization;