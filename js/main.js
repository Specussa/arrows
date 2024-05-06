var i;

// start height
const header = document.querySelector('.header');
const main = document.querySelector('.main');
let oldWidth = window.innerWidth;
const docheight = document.documentElement
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start year
const year = document.querySelector('.footer__year');
if(year){
  const currentYear = new Date().getFullYear();
  year.insertAdjacentText('beforebegin', currentYear);
  year.remove();
}
// end year

// start navbar
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

// кнопка header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    overlay.classList.remove("active");
    // menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
  } else {
    overlay.classList.add("active");
    // menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
// end header__burger

// кнопка overlay
overlay.addEventListener('click', function() {
  overlay.classList.remove("active");
  // menu.classList.remove("active");
  burger.classList.remove("active");
  document.body.style.overflow = null;
  document.body.style.height = null;
})
// end overlay