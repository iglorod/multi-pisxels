import React, { Component } from 'react';

import AdviceMovie from '../../components/MovieComponents/AdviceMovie/AdviceMovie';
import LatestMovie from '../../components/MovieComponents/LatestMovie/LatestMovie';
import MainTag from '../../components/UI/MainTag/MainTag';

class MultiPixels extends Component {
    render() {
        return (
            <MainTag>
                <LatestMovie />
                <AdviceMovie />
            </MainTag>
        )
    }
}

export default MultiPixels;