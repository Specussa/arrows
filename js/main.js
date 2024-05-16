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

// start personal__tab
const ptActive = document.querySelectorAll(".personal__data .personal__tab");
const ptforms = document.querySelector('.personal__tab_forms');
const ptcompetitions = document.querySelector('.personal__tab_competitions');
const ptstatistics = document.querySelector('.personal__tab_statistics');

const ptbActive = document.querySelectorAll(".personal__data .personal__tab_block");
const pforms = document.querySelector('.personal__forms');
const pcompetitions = document.querySelector('.personal__competitions');
const pstatistics = document.querySelector('.personal__statistics');

if (ptforms && ptcompetitions && ptstatistics) {
  ptforms.addEventListener('click', function() {
    if (!ptforms.classList.contains("active")) {
      ptActive.forEach((n) => n.classList.remove("active"));
      ptbActive.forEach((n) => n.classList.remove("active"));
      pforms.classList.add("active");
      ptforms.classList.add("active");
    }
  })
  
  ptcompetitions.addEventListener('click', function() {
    if (!ptcompetitions.classList.contains("active")) {
      ptActive.forEach((n) => n.classList.remove("active"));
      ptbActive.forEach((n) => n.classList.remove("active"));
      pcompetitions.classList.add("active");
      ptcompetitions.classList.add("active");
    }
  })
  
  ptstatistics.addEventListener('click', function() {
    if (!ptstatistics.classList.contains("active")) {
      ptActive.forEach((n) => n.classList.remove("active"));
      ptbActive.forEach((n) => n.classList.remove("active"));
      pstatistics.classList.add("active");
      ptstatistics.classList.add("active");
    }
  })
}
// end personal__tab

// start personal__tab
if (ptforms && ptcompetitions && ptstatistics) {
  const pcbutton = document.getElementsByClassName("personal__competitions_button");
  for (i = 0; i < pcbutton.length; i++) {
    pcbutton[i].onclick = function(e) {
      const pcbuttonNext = this.nextElementSibling;
      const headernsl = document.getElementsByClassName("personal__competitions_info");
      const pcbuttonActive = document.getElementsByClassName("personal__competitions_button active");

      if (pcbuttonNext && pcbuttonNext.classList.contains("active")) {
        this.classList.remove("active");
        pcbuttonNext.classList.remove("active");
        pcbuttonNext.style.maxHeight = null;
      } else if (pcbuttonNext) {
        for (var q = 0; q < pcbuttonActive.length; q++) {
          pcbuttonActive[q].classList.remove("active");
          headernsl[q].classList.remove("active");
        }
        for (var p = 0; p < headernsl.length; p++) {
          this.classList.remove("active");
          headernsl[p].classList.remove("active");
          headernsl[p].style.maxHeight = null;
        }
        pcbuttonNext.style.maxHeight = pcbuttonNext.scrollHeight + "px";
        pcbuttonNext.classList.add("active");
        this.classList.add("active");
      }
    };
  }
}
// end personal__tab