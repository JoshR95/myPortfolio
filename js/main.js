///////////////////////////////////////////////////////////////////////////////////////////////////////
/// SETTING IS-ACTIVE FOR THE HAMBURGER AND DROPDOWN
///////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    // this code is adding .hamburger to menu_btn
    const menu_btn = document.querySelector('.hamburger');

    const menu = document.querySelector('.links-container');
    // then im listening for a click on menu_btn(.hamburger) and changing its class with classList that can be toggled and adding is-acive
    // this is so when the hamburger is clicked it forms a J
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

});

///////////////////////////////////////////////////////////////////////////////////////////////////////
/// TYPEWRITER EFFECT FOR H1
///////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const typewriter = document.getElementById('typewriter'); // this gets the element and it asigns it a variable
    const text = typewriter.textContent; // this returns all the text inside the element typewriter and asigns it
    const speed = 200; // how fast it types
    let i = 0; // empty variable to be counted on 

    typewriter.textContent = ''; // This clears the initial text

    function typeWriter() {
        if (i < text.length) { // here were checking if the words is done yet 
            typewriter.textContent += text.charAt(i); // here we add the current letter were on to typewriters (h1) content
            i++; // this increments the counter and moves us to the next character in typewriter
            setTimeout(typeWriter, speed); // this sets the timer to each letter being added
        }
    }

    typeWriter(); // this calls the function to make the text appear on load
});


///////////////////////////////////////////////////////////////////////////////////////////////////////
/// FORM 
///////////////////////////////////////////////////////////////////////////////////////////////////////

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const contactSubmitBox = document.getElementById('contact-submit-box');

// Getting a reference to the form itself
const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent forms from submitting so we can validate inputs

    // this runs the function we wrote below to check the inputs are added/correct.
    validateInputs();
});

// setting a succes message
const setSuccess = element => {
    // this returns the wrapper div <div class="input-control">
    const inputControl = element.parentElement;
    // this finds the error class inside the input control div where the error will be displayed
    const errorDisplay = inputControl.querySelector('.error');

    // this resets the text 
    errorDisplay.innerText = '';
    // this adds .success to the container div so it can be styled with css to green to show its good
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// setting an error message
// this is taking two parameters which we set below in validate inputs - setError(fname, 'please add a first name');
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    // instead od wiping the inner text like success it adds the message parameter we set bellow - 'please add a first name' etc...
    errorDisplay.innerText = message;
    // also adds error class for css stlying and removes the success class
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

// this checks if the email is valid
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Add this function for UK phone number validation
const isValidUKPhoneNumber = phoneNumber => {
    // This regex covers most UK phone number formats
    const ukPhoneRegex = /^(?:(?:\+44\s?|0)7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
    return ukPhoneRegex.test(phoneNumber);
}

const validateInputs = () => {

    // this block gets the values of all input fields, trim() removes any white space
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    const contactSubmitBoxValue = contactSubmitBox.value.trim();

    // first name 
    if(fnameValue === ''){
        setError(fname, 'please add a first name');
    } else {
        setSuccess(fname);
    }

    // last name
    if(lnameValue === ''){
        setError(lname, 'please add a last name');
    } else {
        setSuccess(lname);
    }

    // email
    if(emailValue === ''){
        setError(email, 'please add a email address');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'please provide a valid email address')
    } else {
        setSuccess(email);
    }

    // phone number
    if(phoneNumberValue === ''){
        setError(phoneNumber, 'please add a valid phone number');
    } else if (!isValidUKPhoneNumber(phoneNumberValue)) {
        setError(phoneNumber, 'Please provide a valid UK phone number');
    } else {
        setSuccess(phoneNumber);
    }

    // subject 
    if(subjectValue === ''){
        setError(subject, 'please add a subject');
    } else {
        setSuccess(subject);
    }

    // message
    if(messageValue === ''){
        setError(message, 'please add a message');
    } else {
        setSuccess(message);
    }

};

//////////////////////////////////////////////////////////////////////////
/// CODE EXAMPLES ENLARGE IMAGE
/////////////////////////////////////////////////////////////////////////

// JS VERSION - 

// function showLargeImage(src) {
//   // assigning the html divs as js variables
//   const largeImage = document.getElementById('largeImage');
//   const container = document.getElementById('largeImageContainer');
//   // assigning the largeImages src to the src of the img clicked (set in html)
//   largeImage.src = src;
//   // setting the display of the containrer for the large img to flex so its visible
//   container.style.display = 'flex';
// }

function showLargeImage(src) {
    // This selects the element with the id of largeImage, then accesses its attributes and sets its src as the src of the image clicked
    // we set this in the html to pass the clicked img's src as the parameter here.
    $('#largeImage').attr('src', src);
    // here we are accessing the element with the id of largeImageContainer and settings its display to flex so its no longer hidden
    $('#largeImageContainer').css('display', 'flex');
    // we dont need to worry about hiding it as this is dont inside the html
  }

  //////////////////////////////////////////////////////////////////////////////////