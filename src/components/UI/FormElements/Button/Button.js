import React from 'react';

import classes from './Button.module.css';

const button = props => {
    let buttonClasses = [classes.submitButton];
    if (props.allIsValid) buttonClasses.push(classes.submitButtonEnabled);

    return (
        <button className={buttonClasses.join(' ')}>{props.text}</button>
    )
}

export default button;