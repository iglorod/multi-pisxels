import React, { useState, useContext } from 'react';

import Authorization from './AuthorizationLink/Authorization';
import Logout from './AuthorizationLink/Logout';
import classes from './UserAuthLinks.module.css';
import { AuthContext } from '../../../../context/context';
import Modal from '../../../UI/Modal/Modal';

const UserAuth = () => {
    const context = useContext(AuthContext);

    let [logoutPressed, setLogoutPressed] = useState(false);

    const logoutHandler = () => {
        setLogoutPressed(false);
        localStorage.clear();
        context.logout();
    }

    const logoutOnClick = () => {
        setLogoutPressed(true);
    }

    const cancelLogoutHandler = () => {
        setLogoutPressed(false);
    }

    let links = (
        <React.Fragment>
            <Authorization url='/sign-in'>Sing In</Authorization>
            <Authorization url='/sign-up'>Sign Up</Authorization>
        </React.Fragment>
    );
    if (context.isAuth) {
        links = <Logout logout={logoutOnClick}><p className={classes.email}>{localStorage.getItem('email')}</p> (Logout)</Logout>
    }

    return (
        <div className={classes.authState}>
            <Modal
                show={logoutPressed}
                title='Are you sure?'
                text='After you log out you will not be able to pick your favorite movies'
                button={{
                    text: 'Logout',
                    action: logoutHandler
                }}
                cancel={cancelLogoutHandler} />
            {links}
        </div>
    )
}

export default UserAuth;