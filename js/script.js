function formSend() {
    //alert("TEsting");

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const errorFound = false;

    if (name == "") // Checking the name condition
    {
        //Leaving the name area blank will be an error

        var el = document.getElementById("errorName");
        el.classList.remove("hidden");
        errorFound = true;
    }
    else{
        var el = document.getElementById("errorName");
        el.classList.add("hidden");
    }

    if ( email === "" || email.indexOf("@") ==-1 ) // Checking the email condition
    {
        // Leaving the email area will be an error
        // No '@' in the email will be an error

        var el = document.getElementById("errorEmail");
        el.classList.remove("hidden");
        errorFound = true;
    }
    else{

        var el = document.getElementById("errorEmail");
        el.classList.add("hidden");
        
    }

    if ( message === "" || message.length <= 10 ) // Checking the message condition
    {
        // Less than or equal to 10 characters will be an error

        var el = document.getElementById("errorMessage");
        el.classList.remove("hidden");
        errorFound = true;

    }
    else
    {
        var el = document.getElementById("errorMessage");
        el.classList.add("hidden");
    }

    if(errorFound == true) // If error found an alert will pop out
    {
        alert("ErrorFound");    
    }
    else
    {
        // If condition is successful, it will be console.

        console.log(name);
        console.log(email);
        console.log(message);
        console.log("Form Submitted");
    }
    
}// End of the form validation



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}







   



