// const showError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`#${inputElement.name}Error`)
//     console.log(errorElement)
//     errorElement.textContent = errorMessage
//     errorElement.classList.add('popup__input-error_active')
//     inputElement.classList.add('popup__input_type_error')
// }


// const hideError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`#${inputElement.name}Error`)
//     errorElement.textContent = ''
//     errorElement.classList.remove('popup__input-error_active')
//     inputElement.classList.remove('popup__input_type_error')
// }


// const checkValidity = (formElement, inputElement) => {
//     const isInputNotValid = !inputElement.validity.valid;
//     if (isInputNotValid) {
//         const errorMessage = inputElement.validationMessage;
//         showError(formElement, inputElement, errorMessage);
//     } else {
//         hideError(formElement, inputElement);
//     }

// };


const toggleButtonState = (inputList, submitButtonElement) => {
    const inputElements = Array.from(inputList)

    const hasInvalidInput = inputElements.some(inputElement => {
        return !inputElement.validity.valid
    });

    //console.log(hasInvalidInput)

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


    toggleButtonState(inputList, submitButtonElement)

    inputList.forEach(inputElement => {
        //console.log(inputElement)
        inputElement.addEventListener('input', (event) => {
            // checkValidity(formElement, inputElement)
            toggleButtonState(inputList, submitButtonElement)

        })

    })


}


const enableValidation = () => {

    const formList = document.querySelectorAll('.popup__form');


    formList.forEach(formElement => {
        //console.log(formElement)
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        setEventListeners(formElement)

    })
}


enableValidation();









// formElement = document.querySelector('#editProfile').querySelector('#editForm')
// inputList = formElement.querySelectorAll('.popup__input')
// console.log(formElement, inputList[0].validity.valid, inputList[1].validity.valid)

// console.log(inputList[0].name)
// formElement_ = document.querySelector('#addCard').querySelector('#addForm')
// inputList_ = formElement_.querySelectorAll('.popup__input')
// console.log(formElement_, inputList_[0].validity.valid, inputList_[1].validity.valid)