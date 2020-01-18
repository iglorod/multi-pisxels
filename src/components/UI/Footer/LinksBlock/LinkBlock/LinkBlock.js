import React from 'react';
import { Link } from 'react-router-dom';

import classes from './LinkBlock.module.css';

const linkBlock = (props) => {
    return (
        <Link to='#'>
            <li className={classes.link}>{props.text}</li>
        </Link>
    )
}

export default linkBlock;