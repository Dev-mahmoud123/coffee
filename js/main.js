//// Display shor menu
let shortMenu = document.querySelector(".short-menu");
let links = document.querySelector(".links");
shortMenu.addEventListener("click", (e) => {
  links.classList.toggle("active");
});

window.onscroll = function () {
  links.classList.remove("active");
};
