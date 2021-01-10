// document.querySelector('.menu').addEventListener( 'click', 'topmenu');
// function topmenu() {
//     if(menu === 'topnav') {
//         menu += ' responsive';
//     } else {
//         menu = 'topnav';
//     }
// }

menu.onclick = function myFunction() {
    let x = document.getElementById("myTopnav");

    if(x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav"
    }
}