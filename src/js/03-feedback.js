import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form')
const FeedbackInput = document.querySelector('.feedback-form input')
const FeedbackText = document.querySelector('.feedback-form textarea')

formRef.addEventListener('input', throttle(formFieldsValues, 500))
formRef.addEventListener('submit', onFormSubmit)



function formFieldsValues(e) {
    const formValues = {
        'email': formRef.email.value,
        'message': formRef.message.value
    };
    const valuesFormJSON = JSON.stringify(formValues); 
    localStorage.setItem('feedback-form-state', valuesFormJSON)
}

function onFormSubmit(event) {
    event.preventDefault()
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.message.value === '') {
        window.alert('Всі поля мають бути заповнені')
    } else {
    event.currentTarget.reset()
    const parsedFormData = JSON.parse(localStorage.getItem('feedback-form-state'))
    console.log(parsedFormData)
    localStorage.removeItem('feedback-form-state')
    }

}

if (localStorage.getItem('feedback-form-state')) {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'))
    FeedbackInput.value = data.email
    FeedbackText.value = data.message
}


