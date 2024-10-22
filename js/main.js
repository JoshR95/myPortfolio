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
            i++; // this increments the counter
            setTimeout(typeWriter, speed); // this sets the timer to each letter being added
        }
    }

    typeWriter(); // this calls the function to make the text appear on load
});