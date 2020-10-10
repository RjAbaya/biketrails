function submitEvent (event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    console.log(name)
    const mail = document.getElementById('mail').value
    console.log(mail)
    const message = document.getElementById('message').value
    console.log(message)
    
    // output.innerText = `Name = ${name} Email = ${mail} Message = ${message}`
}

const output = document.getElementById('output')
const form = document.getElementById('myForm')

form.addEventListener('submit', submitEvent)