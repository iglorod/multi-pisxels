import React, { useContext } from 'react';

import classes from './FunctionalLinks.module.css';
import FunctionalLink from './FunctionalLink/FunctionalLink';
import { AuthContext } from '../../../../context/context';

const FuncitonalLinks = () => {
    const authContext = useContext(AuthContext);

    let links = (
        <React.Fragment>
            <FunctionalLink url='/'>Top picks</FunctionalLink>
            <FunctionalLink url='/my-list'>My list</FunctionalLink>
        </React.Fragment>
    )
    if (!authContext.isAuth) links = <FunctionalLink url='/'>Top picks</FunctionalLink>

    return (
        <div className={classes.linksArea}>
         {links}
        </div>
    );
}

export default FuncitonalLinks;