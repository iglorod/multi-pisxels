import React, { useState } from 'react';

import classes from './SignUp.module.css';
import Input from '../../UI/FormElements/Input/Input';
import Button from '../../UI/FormElements/Button/Button';
import { validation } from '../../../utility/validation';

const SignUp = () => {
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
        password_original: {
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
        password_repeat: {
            config: {
                type: 'password',
                placeholder: 'Repeat password',
            },
            validationRules: {
                isRequred: true,
                minLength: true,
                shoudBeEqual: true
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
        const originalPassword = stateInputs.password_original.value;
        const [isValid, validationMessage] = validation(event.target.value, validationRules, originalPassword);
       
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
    const originalPassword = stateInputs.password_original.value;
    const [isValid, validationMessage] = validation(event.target.value, validationRules, originalPassword);
        
        stateInputsClone[inputName].isTouched = true;
        stateInputsClone[inputName].validationMessage = validationMessage;
        stateInputsClone[inputName].isValid = isValid;

        setStateInputs({
            ...stateInputsClone
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
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
        <form className={classes.signUpForm} onSubmit={submitHandler} >
            {inputs}
            <Button text='Sign Up' allIsValid={fieldsIsValid} />
        </form>
    )
}

export default SignUp;