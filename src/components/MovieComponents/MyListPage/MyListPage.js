import React, { useContext } from 'react';

import { AuthContext } from '../../../context/context';
import { Redirect } from 'react-router-dom';
import LatestMovie from '../LatestMovie/LatestMovie';
import FavoriteMovies from './FavoriteMovies/FavoriteMovies';

const MyListPage = () => {
    let context = useContext(AuthContext);

    if (!context.isAuth) return (
        <Redirect to='/' />
    )

    return (
        <div style={{ paddingTop: '100px' }}>
            <LatestMovie />
            <FavoriteMovies />
        </div>
    )
}

export default MyListPage;