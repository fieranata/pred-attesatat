let inbutton = document.querySelector('.button');
let loginpopup = document.querySelector('.login-popup');
 
inbutton.addEventListener('click', showpopup)
 
function showpopup(evt) {
    loginpopup.classList.toggle('show-popup');
    evt.preventDefaut();
}