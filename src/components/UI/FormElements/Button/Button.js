import React from 'react';

import classes from './Button.module.css';

const button = props => {
    if (props.allIsValid)
        return (
            <button className={classes.submitButton + ' ' + classes.submitButtonEnabled} >{props.text}</button>
        )

    return (
        <button className={classes.submitButton} disabled >{props.text}</button>
    )
}

export default button;