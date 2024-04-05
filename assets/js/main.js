const navbarMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close"),
  header = document.getElementById("header");
/*show menu */
btnMenu.addEventListener("click", () => {
  navbarMenu.classList.add("show-menu");
});
/*hide menu */
btnClose.addEventListener("click", () => {
  navbarMenu.classList.remove("show-menu");
});
/*stycky header */
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
