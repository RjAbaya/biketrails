// This is a function of a form in the contact.html

const email = document.getElementById('email')
const messageSent = document.getElementById("messageSent")
const form = document.getElementById('myForm')

    email.addEventListener('input', function (event) {
        if ( email.validity.valueMissing || email.validity.patternMismatch ) {    // Checking the email condition
            email.setCustomValidity('Please enter a valid email account in the format of email@domain.com')
        }
    })

    
    function mySubmitFunction(event) {
    event.preventDefault()
    messageSent.innerText = "I will get in touch with your email " + email.value + " and thank you!"
    form.style.display = "none"
}