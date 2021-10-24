var width = window.innerWidth;
var height = window.innerHeight;
const footCont = document.querySelector(".footCont");
const headCont = document.querySelector(".headCont");

const bars = document.querySelectorAll(".bar");
const spanWrap = document.querySelector(".span-wrap");
const hamburger = document.querySelector(".hamburger");

const spanWrap1 = document.querySelector(".span-wrap.fix");
const hamburger1 = document.querySelector(".hamburger.fix");

spanWrap.addEventListener("mouseenter", hamResizeEnter);
spanWrap.addEventListener("mouseleave", hamResizeLeave);

function hamResizeEnter() {
  hamburger.classList.toggle("hov");
}

function hamResizeLeave() {
  hamburger.classList.remove("hov");
}
spanWrap1.addEventListener("mouseenter", hamResizeEnter1);
spanWrap1.addEventListener("mouseleave", hamResizeLeave1);

function hamResizeEnter1() {
  hamburger1.classList.toggle("hov");
}

function hamResizeLeave1() {
  hamburger1.classList.remove("hov");
}

console.log(width);
function screenResp(x) {
  if (x.matches) {
    // If media query matches
    footCont.classList.remove("footer-container");
    headCont.classList.remove("header-container");
  } else {
    footCont.classList.add("footer-container");
    headCont.classList.add("header-container");
  }
}

var maxWidth = window.matchMedia("(max-width: 1300px)");
screenResp(maxWidth);
maxWidth.addListener(screenResp);
