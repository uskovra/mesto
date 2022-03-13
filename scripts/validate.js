const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}Error`)
    errorElement.textContent = errorMessage
    errorElement.classList.add('popup__input-error_active')
    inputElement.classList.add('popup__input_type_error')
}


const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.name}Error`)
    errorElement.textContent = ''
    errorElement.classList.remove('popup__input-error_active')
    inputElement.classList.remove('popup__input_type_error')
}


const checkValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showError(formElement, inputElement, errorMessage);
    } else {
        hideError(formElement, inputElement);
    }
};



const toggleButtonState = (inputList, submitButtonElement) => {
    const hasInvalidInput = Array.from(inputList).some(elem => {
        return !elem.validity.valid

    });

    if (hasInvalidInput) {
        submitButtonElement.classList.add('popup__btn-submit_disabled')
        submitButtonElement.setAttribute('disabled', true)
    } else {
        submitButtonElement.classList.remove('popup__btn-submit_disabled')
        submitButtonElement.removeAttribute('disabled')
    }

}

const setEventListeners = (formElement) => {
    const inputList = formElement.querySelectorAll('.popup__input')
    const submitButtonElement = formElement.querySelector('.popup__btn-submit')

    inputList.forEach(inputElement => {

        inputElement.addEventListener('input', (event) => {
            checkValidity(formElement, inputElement)
            toggleButtonState(inputList, submitButtonElement)

        })
    })
}


const enableValidation = (formSelector) => {

    const formList = document.querySelectorAll('.popup__form');

    formList.forEach(formElement => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        })

        setEventListeners(formElement);
    })
}


enableValidation();