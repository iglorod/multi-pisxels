import React from 'react';

import ModalContainer from './ModalContainer/ModalContainer';
import classes from './Modal.module.css';

const Modal = (props) => {

    let modalClasses = [classes.modal];
    if (props.show === false) {
        modalClasses.push(classes.hidden);
    }

    return (
        <div className={modalClasses.join(' ')}>
            <ModalContainer {...props} close={props.cancel} />
        </div>
    )
}

export default Modal;