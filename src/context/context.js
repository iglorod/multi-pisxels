import React, { useState } from 'react';
import axios from 'axios';

const initialContext = {
    isAuth: false,
    signIn: () => { },
    signUp: () => { },
    signInByLocalData: () => { },
    refreshToken: () => { },
    logout: () => { },
}

export const AuthContext = React.createContext(initialContext);

export const AuthContextProvider = (props) => {
    const [isAuthunticeted, setIsAuthunticeted] = useState(false);

    const [refreshTimerId, setRefreshTimerId] = useState(null);

    const saveUserData = (user) => {
        setRefreshTokenTimer(+user.expires_in * 1000);


        const expiresIn = Math.floor((new Date().getTime() / 1000)) + +user.expiresIn;

        localStorage.setItem('email', user.email);
        localStorage.setItem('id', user.localId);
        localStorage.setItem('idToken', user.idToken);
        localStorage.setItem('refreshToken', user.refreshToken);
        localStorage.setItem('expiresIn', expiresIn);

        setIsAuthunticeted(true);
    }

    const signIn = (authData, resolve, reject) => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNs1_WBfiLcb2MgQQGccWK1yZPXxnXN7E', authData)
            .then(response => {
                saveUserData(response.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            })
    }

    const signUp = (authData, resolve, reject) => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNs1_WBfiLcb2MgQQGccWK1yZPXxnXN7E', authData)
            .then(response => {
                saveUserData(response.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            })
    }

    const signInByLocalData = () => {
        setIsAuthunticeted(localStorage.length === 5 ? true : false);
    }

    const refreshToken = () => {
        const refreshData = {
            grant_type: 'refresh_token',
            refresh_token: localStorage.getItem('refreshToken')
        };

        axios.post('https://securetoken.googleapis.com/v1/token?key=AIzaSyBNs1_WBfiLcb2MgQQGccWK1yZPXxnXN7E', refreshData)
            .then(response => {
                const responseData = response.data;

                setRefreshTokenTimer(+responseData.expires_in * 1000);
                
                const expiresIn = Math.floor((new Date().getTime() / 1000)) + +responseData.expires_in;

                localStorage.setItem('idToken', responseData.id_token);
                localStorage.setItem('refreshToken', responseData.refresh_token);
                localStorage.setItem('expiresIn', expiresIn);

                signInByLocalData();
            })
    }

    const logout = () => {
        setIsAuthunticeted(false);
    }

    const setRefreshTokenTimer = (delay) => {
        clearTimeout(refreshTimerId);
        const timerId = setTimeout(refreshToken, delay);
        setRefreshTimerId(timerId);
    }

    const context = {
        isAuth: isAuthunticeted,
        signIn: signIn,
        signUp: signUp,
        signInByLocalData: signInByLocalData,
        refreshToken: refreshToken,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    )
}