import React, { Component } from 'react';

import classes from './MultiPixels.module.css';
import AdviceMovie from '../../components/AdviceMovie/AdviceMovie';

class MultiPixels extends Component {

    render() {
        return (
            <main className={classes.content}>
                <AdviceMovie />
            </main>
        )
    }
}

export default MultiPixels;