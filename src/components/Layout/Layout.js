import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../UI/Navbar/Navbar';
import MultiPixels from '../../containers/MultiPixels/MultiPixels';
import SignIn from '../Authorization/SignIn/SignIn';
import SignUp from '../Authorization/SignUp/SignUp';
import MoviePage from '../MovieComponents/MoviePage/MoviePage';
import MyListPage from '../MovieComponents/MyListPage/MyListPage';

const layout = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path='/sign-in' component={SignIn} exact />
                <Route path='/sign-up' component={SignUp} exact />
                <Route path='/movie' component={MoviePage} exact />
                <Route path='/my-list' component={MyListPage} exact />
                <Route path='/' component={MultiPixels} />
            </Switch>
        </div>
    )
}

export default layout;