const side = document.getElementById('ipad'); 
const nav = document.getElementById('navbar'); 
const back = document.getElementById('fx'); 
if (side) {
    side.addEventListener('click',() =>{
    nav.classList.add('active');

    })
}
if (back) {
    back.addEventListener('click',() =>{
    nav.classList.remove('active');

    })
}

var bigimg = document.getElementById("bigp");

var smallimg = document.getElementsByClassName("spic");

smallimg[0].onclick = function() {
    bigimg.src=smallimg[0].src;}
smallimg[1].onclick = function() {
    bigimg.src=smallimg[1].src;}
smallimg[2].onclick = function() {
    bigimg.src=smallimg[2].src;}
smallimg[3].onclick = function() {
    bigimg.src=smallimg[3].src;
} 