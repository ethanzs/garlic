export function hamburger() {
  const hamburger = document.getElementById("hamburger");
  const hamburgerTop = document.querySelector(".nav-hamburger-line-top");
  const hamburgerMid = document.querySelector(".nav-hamburger-line-mid");
  const hamburgerBtm = document.querySelector(".nav-hamburger-line-btm");

  // class toggles on click
  hamburger.classList.toggle("hamburger-active");
  hamburgerTop.classList.toggle("hamburger-top-active");
  hamburgerMid.classList.toggle("hamburger-mid-active");
  hamburgerBtm.classList.toggle("hamburger-btm-active");
}
