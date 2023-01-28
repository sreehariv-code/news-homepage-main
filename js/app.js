let menuBtn = document.getElementsByClassName("menu-btn")[0];
let navBar = document.getElementsByTagName("nav")[0];
console.log(navBar);
menuBtn.onclick = menuToggle;
// navBar.onclick = menuToggle;

function menuToggle() {
  menuBtn.classList.toggle("open");
  navBar.classList.toggle("open");
}
