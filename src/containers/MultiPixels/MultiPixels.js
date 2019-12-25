import React, { Component } from 'react';

import classes from './MultiPixels.module.css';
import AdviceMovie from '../../components/AdviceMovie/AdviceMovie';

class MultiPixels extends Component {
    componentDidMount() {
        this.isAuthorized();
    }

    isAuthorized = () => {
        if (localStorage.getItem('email' !== null)) {
            const expiresIn = localStorage.getItem('expiresIn');
            if (+ new Date() > expiresIn) {
                //genereate new token}
            }
            //authorizationHandler();
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

export default MultiPixels;