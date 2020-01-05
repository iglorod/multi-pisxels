import React from 'react';

import classes from './Authorization.module.css';

const logout = (props) => {
    return (
        <div className={classes.logoutItem} onClick={props.logout} >{props.children}</div>
    )
}

export default logout;