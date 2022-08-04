const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");
const nav = document.querySelector("nav");
const form = document.querySelector("form");
const email = document.querySelector("#email");


hamburger.addEventListener("click", () => {
    navUl.classList.toggle("hiding");
    nav.classList.toggle("media-0-height");
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    email.value = "";
    alert("your email is submitted")
});