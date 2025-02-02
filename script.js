let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-container');
let formClose = document.querySelector("#form-close");
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
window.onscroll =()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});