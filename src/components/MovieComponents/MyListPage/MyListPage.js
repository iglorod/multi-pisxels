import React, { useContext } from 'react';

import { AuthContext } from '../../../context/context';
import { Redirect } from 'react-router-dom';
import LatestMovie from '../LatestMovie/LatestMovie';
import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
import MainTag from '../../UI/MainTag/MainTag';

const MyListPage = () => {
    let context = useContext(AuthContext);

    if (!context.isAuth) return (
        <Redirect to='/' />
    )

    return (
        <MainTag>
            <LatestMovie />
            <FavoriteMovies />
        </MainTag>
    )
}

export default MyListPage;