import React from 'react';

import classes from './ModalContainer.module.css';

const modalContainer = (props) => {
    let buttons = <button onClick={props.close} className={classes.closeButton}>Cancel</button>;
    if (props.button)
        buttons = (
            <div>
                <button onClick={props.button.action} className={classes.actionButton}>{props.button.text}</button>
                <button onClick={props.close} className={classes.closeButton}>Cancel</button>
            </div>
        )

    return (
        <div className={classes.modalContainer}>
            <h2 className={classes.title}>{props.title}</h2>
            <div className={classes.text}>{props.text}</div>
            {buttons}
        </div>
    )
}

export default modalContainer;