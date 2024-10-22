window.onload = function () {
    // this code is adding .hamburger to menu_btn
    const menu_btn = document.querySelector('.hamburger');

    const menu = document.querySelector('.links-container');
    // then im listening for a click on menu_btn(.hamburger) and changing its class with classList that can be toggled and adding is-acive
    // this is so when the hamburger is clicked it forms a J
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

}