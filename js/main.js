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

// start domen
const domen = document.querySelector('.domen');
if(domen){
  let domens = document.querySelectorAll(".domen");
  for (let i = 0; i < domens.length; i++) {
    domens[i].innerText = window.location.hostname;
  }
}
// end domen

// Change color mode start
const toggleClrMode = document.querySelector('.header__set_mode');
const toggleClrModeBtnArr = document.querySelectorAll('.header__set_mode .header__set_mode_btn');
const toggleClrModeTxt = document.querySelector('.header__set_mode .header__set_mode_name');

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
	document.body.classList.add("dark");
  toggleClrMode.setAttribute('data-clr-mode-active', 'dark');
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('clrMode') === 'dark') {
  document.body.classList.add("dark");
  toggleClrMode.setAttribute('data-clr-mode-active', 'dark');
  // toggleClrModeTxt.innerHTML = 'light on';
} else {
  document.body.classList.remove("dark");
  toggleClrMode.setAttribute('data-clr-mode-active', 'light');
  // toggleClrModeTxt.innerHTML = 'dark on';
}

// Если меняются системные настройки, меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
  const newColorScheme = event.matches ? "dark" : "light";

  if (newColorScheme === "dark") {
    document.body.classList.add("dark");
    localStorage.setItem("clrMode", "dark");
    toggleClrMode.setAttribute('data-clr-mode-active', 'dark');
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("clrMode", "light");
    toggleClrMode.setAttribute('data-clr-mode-active', 'light');
  }
});

// переключение темного/светлого режима
toggleClrModeBtnArr.forEach((btn) => {
  btn.addEventListener('click', function () {
    const clrModeAttr = this.getAttribute('data-clr-mode');
    // const clrModeName = clrModeAttr === 'dark' ? 'light' : 'dark';

    toggleClrMode.setAttribute('data-clr-mode-active', clrModeAttr);
    // toggleClrModeTxt.innerHTML = `${clrModeName} on`;
    localStorage.setItem("clrMode", clrModeAttr);
    document.body.classList.toggle("dark");
  });
});
// Change color mode end

// start navbar
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__navigation');
const burger = document.querySelector('.header__burger');
const headerbuttons = document.querySelector('.header__buttons');

// кнопка header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    overlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    headerbuttons.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
  } else {
    menu.scrollTop = 0;
    overlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    headerbuttons.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
// end header__burger

// кнопка overlay
overlay.addEventListener('click', function() {
  overlay.classList.remove("active");
  menu.classList.remove("active");
  burger.classList.remove("active");
  headerbuttons.classList.remove("active");
  document.body.style.overflow = null;
  document.body.style.height = null;
})
// end overlay

// start personal__tab
const ptabsbutton = document.querySelector('.personal__tabs_button');
const ptActive = document.querySelectorAll(".personal__data .personal__tab");
const ptforms = document.querySelector('.personal__tab_forms');
const ptcompetitions = document.querySelector('.personal__tab_competitions');
const ptstatistics = document.querySelector('.personal__tab_statistics');

const ptbActive = document.querySelectorAll(".personal__data .personal__tab_block");
const pforms = document.querySelector('.personal__tabs_forms');
const pcompetitions = document.querySelector('.personal__tabs_competitions');
const pstatistics = document.querySelector('.personal__tabs_statistics');

if (ptforms && ptcompetitions && ptstatistics) {
  ptforms.addEventListener('click', function() {
    if (!ptforms.classList.contains("active")) {
      ptActive.forEach((n) => n.classList.remove("active"));
      ptbActive.forEach((n) => n.classList.remove("active"));
      pforms.classList.add("active");
      ptforms.classList.add("active");
      ptabsbutton.children[0].innerText = ptforms.innerText;
      ptabsbutton.parentElement.classList.remove("active");
      ptabsbutton.nextElementSibling.style.maxHeight = null;
    }
  })
  
  ptcompetitions.addEventListener('click', function() {
    if (!ptcompetitions.classList.contains("active")) {
      ptActive.forEach((n) => n.classList.remove("active"));
      ptbActive.forEach((n) => n.classList.remove("active"));
      pcompetitions.classList.add("active");
      ptcompetitions.classList.add("active");
      ptabsbutton.children[0].innerText = ptcompetitions.innerText;
      ptabsbutton.parentElement.classList.remove("active");
      ptabsbutton.nextElementSibling.style.maxHeight = null;
    }
  })
  
  ptstatistics.addEventListener('click', function() {
    if (!ptstatistics.classList.contains("active")) {
      ptActive.forEach((n) => n.classList.remove("active"));
      ptbActive.forEach((n) => n.classList.remove("active"));
      pstatistics.classList.add("active");
      ptstatistics.classList.add("active");
      ptabsbutton.children[0].innerText = ptstatistics.innerText;
      ptabsbutton.parentElement.classList.remove("active");
      ptabsbutton.nextElementSibling.style.maxHeight = null;
    }
  })
}
// end personal__tab

// start personal__competitions_button
if (ptforms && ptcompetitions && ptstatistics) {
  const pcbutton = document.getElementsByClassName("personal__competitions_button");
  for (i = 0; i < pcbutton.length; i++) {
    pcbutton[i].onclick = function(e) {
      const pcbuttonNext = this.nextElementSibling;

      if (pcbuttonNext && this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
        pcbuttonNext.style.maxHeight = null;
      } else if (pcbuttonNext) {
        pcbuttonNext.style.maxHeight = pcbuttonNext.scrollHeight + "px";
        this.parentElement.classList.add("active");
      }
    };
  }
}
// end personal__competitions_button

// start personal__competitions_tab
const ptabActive = document.querySelectorAll(".personal__data .personal__competitions_tab");
const pctabfuture = document.querySelector('.personal__competitions_tab_future');
const pctabpast = document.querySelector('.personal__competitions_tab_past');

const pblockActive = document.querySelectorAll(".personal__data .personal__competitions_block");
const pcfuture = document.querySelector('.personal__competitions_future');
const pcpast = document.querySelector('.personal__competitions_past');

if (pctabfuture && pctabpast) {
  pctabfuture.addEventListener('click', function() {
    if (!pctabfuture.classList.contains("active")) {
      ptabActive.forEach((n) => n.classList.remove("active"));
      pblockActive.forEach((n) => n.classList.remove("active"));
      pcfuture.classList.add("active");
      pctabfuture.classList.add("active");
    }
  })
  
  pctabpast.addEventListener('click', function() {
    if (!pctabpast.classList.contains("active")) {
      ptabActive.forEach((n) => n.classList.remove("active"));
      pblockActive.forEach((n) => n.classList.remove("active"));
      pcpast.classList.add("active");
      pctabpast.classList.add("active");
    }
  })
}
// end personal__competitions_tab

// start header__personal_button
const hpbutton = document.querySelector('.header__personal_button');
const hpflex = document.querySelector('.header__personal_flex');
const hplist = document.querySelector('.header__personal_list');
const hoverlay = document.querySelector('.header__personal_overlay');

if (hpbutton) {
  const headerpersonalButton = document.getElementsByClassName("header__personal_button");
  for (i = 0; i < headerpersonalButton.length; i++) {
    headerpersonalButton[i].onclick = function(e) {
      if (hplist && this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
        hoverlay.classList.remove("active");
        hplist.style.maxHeight = null;
      } else if (hplist) {
        hplist.style.maxHeight = hplist.scrollHeight + "px";
        this.parentElement.classList.add("active");
        hoverlay.classList.add("active");
      }
    };
  }
  hoverlay.addEventListener('click', function() {
    if (hoverlay.classList.contains("active")) {
      hoverlay.classList.remove("active");
      hpflex.classList.remove("active");
      hplist.style.maxHeight = null;
    }
  })
  const hplink = document.getElementsByClassName("header__personal_link");
  for (i = 0; i < hplink.length; i++) {
    hplink[i].onclick = function(e) {
      hoverlay.classList.remove("active");
      hpflex.classList.remove("active");
      hplist.style.maxHeight = null;
    };
  }
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.header__personal_flex')) {
      hoverlay.classList.remove("active");
      hpflex.classList.remove("active");
      hplist.style.maxHeight = null;
    }
  })
}
// end header__personal_button

// start personal__tabs_button
if (ptabsbutton) {
  const ptbutton = document.getElementsByClassName("personal__tabs_button");
  for (i = 0; i < ptbutton.length; i++) {
    ptbutton[i].onclick = function(e) {
      const ptbuttonNext = this.nextElementSibling;
      if (ptbuttonNext && this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
        ptbuttonNext.style.maxHeight = null;
      } else if (ptbuttonNext) {
        ptbuttonNext.style.maxHeight = ptbuttonNext.scrollHeight + "px";
        this.parentElement.classList.add("active");
      }
    };
  }
}
// end personal__tabs_button