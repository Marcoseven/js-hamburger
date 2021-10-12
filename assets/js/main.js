/* dobbiamo mostrare/nascondere menu hamburger */

// variabili const
const openHamburger = document.querySelector(".header-right>a");
const closeHamburger = document.querySelector(".hamburger-menu>a");
const hamburger = document.querySelector(".hamburger-menu");

// apertura e chiusura .hamburger-menu
openHamburger.addEventListener("click", function (addActiveClass) {
	hamburger.classList.add("active");
});

closeHamburger.addEventListener("click", function (addActiveClass) {
	hamburger.classList.remove("active");
});
