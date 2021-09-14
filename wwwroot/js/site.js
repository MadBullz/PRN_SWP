// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
  const signUpButton = document.getElementById('signUp');
 const signInButton = document.getElementById('signIn');
const container = document.getElementById('login_container');

 signUpButton.addEventListener('click', () => {
 	container.classList.add("right-panel-active");
 });

 signInButton.addEventListener('click', () => {
 	container.classList.remove("right-panel-active");
 });
const searchBtn = document.querySelector(".fa-search");
const seacrhBox = document.querySelector(".search");

searchBtn.addEventListener("click", myfunction);
function myfunction() {
    seacrhBox.classList.add("active");
}