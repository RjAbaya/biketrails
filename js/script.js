const submitBtn = document.getElementById('submitbtn');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value.indexOf('@');
    const message = document.getElementById('message').value;
    const form = document.getElementById('myForm');

    const errorName = document.getElementById('errorName');
    const errorEmail = document.getElementById('errorEmail');
    const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => 
{
    
    let text = []

    if ( name === "" )
    {
        text.push('Provide a valid name')
        errorName.innerText = text;
    }

    if ( email === "" || email == -1 )
    {
        text.push('Email must be valid')
        errorEmail.innerText = text;
    }

    if (message === "" || message.length <= 10)
    {
        text.push('Tell me more!')
        errorMessage.innerText = text;
    }

        
    if (text.length > 0 ) {
        e.preventDefault();
    }
             

})





   



