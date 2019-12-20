const changeValidationMessage = (isValid, message, currMessage) => {
    if (!isValid && currMessage.length === 0) return message;
    return currMessage;
}

export const validation = (string, validationRules, originalPassword) => {
    let isValid = true;
    let validationMessage = '';

    if (validationRules.isRequred) {
        isValid = string.length > 0 && isValid;
        validationMessage = changeValidationMessage(isValid, 'Please, fill this field', validationMessage);
    }

    if (validationRules.isEmail) {
        const exp = /^\S+@\S+\.\S+$/;
        isValid = exp.test(string) && isValid;
        validationMessage = changeValidationMessage(isValid, 'Email is incorrect', validationMessage);
    }

    if (validationRules.minLength) {
        isValid = string.length > 3 && isValid;    
        validationMessage = changeValidationMessage(isValid, 'Min password length is 4 symbols', validationMessage);
    }

    if (validationRules.shoudBeEqual) {
        isValid = string === originalPassword && isValid;
        validationMessage = changeValidationMessage(isValid, 'Passwords should be the same', validationMessage);
    }

    return [isValid, validationMessage];
}