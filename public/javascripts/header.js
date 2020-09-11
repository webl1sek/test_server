let modalWindow = document.getElementsByClassName('modal-background')[0];
let modalClose = document.getElementsByClassName('modal-close')[0];
let signIn = document.getElementById('sign-in');

signIn.onclick = function () {
    modalWindow.style.display = 'block';
}

/* Modal window close function */

modalWindow.onclick = function(event) {
    if (event.target == modalWindow) {
        modalWindow.style.display = "none";
    }
  }

modalClose.onclick = function () {
    modalWindow.style.display = 'none';
}

/*  Tabs switching  */

let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');

let loginTab = document.getElementsByClassName('login')[0];
let signinTab = document.getElementsByClassName('signup')[0];

tab2.onclick = function() {
    signinTab.style.display = "block";
    loginTab.style.display = "none";
    tab2.classList.add('active');
    tab1.classList.remove('active');
}

tab1.onclick = function() {
    signinTab.style.display = "none";
    loginTab.style.display = "block";
    tab1.classList.add('active');
    tab2.classList.remove('active');
}

/* Input fields validation  */

/* Когда-то потом, потому что такая дичь дикая... */




