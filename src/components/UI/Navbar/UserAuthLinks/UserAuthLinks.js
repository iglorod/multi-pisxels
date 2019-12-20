import React from 'react';
import Authorization from './Authorization/Authorization';

import classes from './UserAuthLinks.module.css';

const userAuth = () => {
    return (
        <div className={classes.authState}>
            <Authorization url='/sign-in'>Sing In</Authorization>
            <Authorization url='/sign-up'>Sign Up</Authorization>
        </div>
    )
}

export default userAuth;