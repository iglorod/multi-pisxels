import React, { useState, useContext } from 'react';
import axios from 'axios';

import classes from './SignIn.module.css';
import Input from '../../UI/FormElements/Input/Input';
import Button from '../../UI/FormElements/Button/Button';
import { validation } from '../../../utility/validation';
import { AuthContext } from '../../../context/context';

const SignIn = (props) => {
    const authContext = useContext(AuthContext);

    const [stateInputs, setStateInputs] = useState({
        email: {
            config: {
                type: 'email',
                placeholder: 'Email',
            },
            validationRules: {
                isRequred: true,
                isEmail: true
            },
            isTouched: false,
            isValid: false,
            validationMessage: '',
            value: '',
        },
        password: {
            config: {
                type: 'password',
                placeholder: 'Password',
            },
            validationRules: {
                isRequred: true,
                minLength: true
            },
            isTouched: false,
            isValid: false,
            validationMessage: '',
            value: '',
        },
    });

    const onChangeHandler = (inputName, event) => {
        let stateInputsClone = {
            ...stateInputs
        }

        const newValue = event.target.value;
        const validationRules = stateInputs[inputName].validationRules;
        const [isValid, validationMessage] = validation(event.target.value, validationRules);

        stateInputsClone[inputName].value = newValue;
        stateInputsClone[inputName].isValid = isValid;
        stateInputsClone[inputName].validationMessage = validationMessage;

        setStateInputs({
            ...stateInputsClone
        });
    }

    const onTouchedHandler = (inputName, event) => {
        let stateInputsClone = {
            ...stateInputs
        }

        const validationRules = stateInputs[inputName].validationRules;
        const [isValid, validationMessage] = validation(event.target.value, validationRules);

        stateInputsClone[inputName].isTouched = true;
        stateInputsClone[inputName].validationMessage = validationMessage;
        stateInputsClone[inputName].isValid = isValid;

        setStateInputs({
            ...stateInputsClone
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const authData = {
            email: stateInputs.email.value,
            password: stateInputs.password.value,
            returnSecureToken: true
        }

        const signInPromise = new Promise((resolve, reject) => {
            authContext.signIn(authData, resolve, reject);
        })
        
        signInPromise.then(() => props.history.push('/'), error => console.error(error.message));
    }

    let inputs = [];
    let fieldsIsValid = true;

    for (let key in stateInputs) {
        inputs.push(
            <Input
                key={key}
                config={stateInputs[key].config}
                value={stateInputs[key].value}
                isValid={stateInputs[key].isValid}
                isTouched={stateInputs[key].isTouched}
                onTouchedHandler={onTouchedHandler.bind(this, key)}
                validationMessage={stateInputs[key].validationMessage}
                onChangeHandler={onChangeHandler.bind(this, key)} />
        );

        fieldsIsValid = stateInputs[key].isValid && fieldsIsValid;
    }

    return (
        <form className={classes.signInForm} onSubmit={submitHandler} >
            {inputs}
            <Button text='Sign In' allIsValid={fieldsIsValid} />
        </form>
    )
}

export default SignIn;