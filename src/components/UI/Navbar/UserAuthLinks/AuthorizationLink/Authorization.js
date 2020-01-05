import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Authorization.module.css';

const authorization = (props) => {
    return (
        <NavLink className={classes.authItem} to={props.url} activeClassName={classes.active}>{props.children}</NavLink>
    )
}

export default authorization;