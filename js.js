let toggleButton = document.querySelector('.toggleButton');
let close = document.querySelector('.close');
let content = document.querySelector('.content');
let menu = document.querySelector('.menu');
let asside = document.querySelector('.asside');
let menuclos = document.querySelector('.menuclos');




toggleButton.onclick = function () {
    content.classList.add('active');

}
close.onclick = function () {
    content.classList.remove('active');
}

menu.onclick = function () {
    asside.classList.add('action');

}
menuclos.onclick = function () {
    asside.classList.remove('action');
}
 

let menu_1 = document.querySelector('.menu-1');
let color = document.querySelector('.colors');

let menuclose_1 = document.querySelector('.menuclose-1');



menu_1.onclick = function () {
    color.classList.add('active-1');

}
menuclose_1.onclick = function () {
    color.classList.remove('active-1');
}
// swich colors


    /// cart
