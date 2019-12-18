import React from 'react';
import Authorization from './Authorization/Authorization';

import classes from './UserAuth.module.css';

const userAuth = () => {
    return (
        <div className={classes.authState}>
            <Authorization>Sing In</Authorization>
            <Authorization>Sign Up</Authorization>
        </div>
    )
}

export default userAuth;