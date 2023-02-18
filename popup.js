let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector('.login-popup');

console.log(loginButton);
console.log(loginPopUp);

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
     console.log(evt);
     evt.preventDefalt();

     loginPopUp.classList.toggle('show-popup')
};
