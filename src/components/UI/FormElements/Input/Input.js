import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputClasses = [classes.input];

    if (!props.isValid && props.isTouched) inputClasses.push(classes.notValidInput);

    return (
        <React.Fragment>
            <input className={inputClasses.join(' ')}
                type={props.config.type}
                placeholder={props.config.placeholder}
                value={props.value}
                onChange={props.onChangeHandler} 
                onFocus={props.onTouchedHandler} />
            <p className={classes.notValidMessage}>{props.validationMessage}</p>
        </React.Fragment>
    )
}

export default input;