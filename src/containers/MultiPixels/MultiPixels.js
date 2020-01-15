import React, { Component } from 'react';

import classes from './MultiPixels.module.css';
import AdviceMovie from '../../components/AdviceMovie/AdviceMovie';
import { AuthContext } from '../../context/context';

class MultiPixels extends Component {
    componentDidMount() {
        this.isAuthorized();
    }

    isAuthorized = () => {
        if (localStorage.getItem('refreshToken') !== null) {
            const expiresIn = localStorage.getItem('expiresIn');
            if (+(new Date().getTime() / 1000).toFixed(0) >= expiresIn) {
                this.context.refreshToken();
            }

            this.context.signInByLocalData();
        }
    }

    render() {
        return (
            <main className={classes.content}>
                <AdviceMovie />
            </main>
        )
    }
}

MultiPixels.contextType = AuthContext;

export default MultiPixels;