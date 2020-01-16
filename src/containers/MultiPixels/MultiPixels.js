import React, { Component } from 'react';

import classes from './MultiPixels.module.css';
import AdviceMovie from '../../components/MovieComponents/AdviceMovie/AdviceMovie';
import LatestMovie from '../../components/MovieComponents/LatestMovie/LatestMovie';
import { AuthContext } from '../../context/context';

class MultiPixels extends Component {
    render() {
        return (
            <main className={classes.content}>
                <LatestMovie />
                <AdviceMovie />
            </main>
        )
    }
}

export default MultiPixels;