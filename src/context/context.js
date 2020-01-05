import React, {useState} from 'react';
import axios from 'axios'; 

const initialContext = {
    isAuth: false,
    signIn: () => {},
    signUp: () => {},
    refreshToken: () => {},
    logout: () => {},
}

export const AuthContext = React.createContext(initialContext);

export const AuthContextProvider = (props) => {
    const [isAuthunticeted, setIsAuthunticeted] = useState(false);

    const saveUserData = (user) => {
        const expiresIn = +(new Date().getTime() / 1000).toFixed(0) + +user.expiresIn;

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

    const logout = () => {
        setIsAuthunticeted(false);
    }

    const context = {
        isAuth: isAuthunticeted,
        signIn: signIn,
        signUp: signUp,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    )
}