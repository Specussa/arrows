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

// start header active
const headertransparent = document.querySelector('.header__transparent');
if (headertransparent) {
  window.addEventListener("scroll", () => {
    if (Math.round(window.scrollY) > 1) {
      headertransparent.classList.add('active');
    } else {
      headertransparent.classList.remove('active');
    }
  })
}
// end header active

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
    header.classList.remove("open");
    document.documentElement.classList.remove("noscroll");
  } else {
    menu.scrollTop = 0;
    overlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    headerbuttons.classList.add("active");
    header.classList.add("open");
    document.documentElement.classList.add("noscroll");
  }
})
// end header__burger

// кнопка overlay
overlay.addEventListener('click', function() {
  overlay.classList.remove("active");
  menu.classList.remove("active");
  burger.classList.remove("active");
  headerbuttons.classList.remove("active");
  document.documentElement.classList.remove("noscroll");
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
const pcb = document.querySelector('.personal__competitions_button');
if (pcb) {
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

// start personal__image_file
const inputfile = document.getElementById('input__file');
const personalfile = document.getElementById('personal__file');

if (personalfile) {
  inputfile.addEventListener("change", (event) => {
    let photo = document.getElementById("input__file").files[0];
    let formData = new FormData();
        
    formData.append("photo", photo);
    fetch('/ajax/avatar.php', {method: "POST", body: formData});
  });
}
// end personal__image_file

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

// start partner__list
const partnerlist = document.querySelector('.partner__list');
if(partnerlist){
  const partnerlists = document.querySelectorAll('.partner__list');
  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".partner__item").length <= 1) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l + l
      })
    } else if (document.querySelectorAll(".partner__item").length <= 2) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l + l + l + l + l + l + l + l
      })
    } else if (document.querySelectorAll(".partner__item").length <= 3) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l + l + l + l + l
      })
    } else if (document.querySelectorAll(".partner__item").length <= 6) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l + l + l + l + l
      })
    } else if (document.querySelectorAll(".partner__item").length <= 11) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l + l + l
      })
    } else if (document.querySelectorAll(".partner__item").length <= 17) {
      [...document.querySelectorAll('.partner__block')].map((n, i) => {
        let l = partnerlists[i].innerHTML;
        n.querySelector('.partner__list').innerHTML = l + l
      })
    }
  });
}
// end partner__list

// start accordion filter
const filters = document.querySelector('.filters');
const ffb = document.querySelectorAll(".filters .filters__button");
const ffs = document.querySelectorAll(".filters .filter__sublist");
if(filters) {
  var filter = document.getElementsByClassName("filters__button");
  for (i = 0; i < filter.length; i++) {
    filter[i].onclick = function(e) {
      var filterAccordion = this.nextElementSibling;
      var courseFilterAccordion = document.getElementsByClassName("filter__sublist");
      var courseFilterAccordionActive = document.getElementsByClassName("filters__button active");
      if (filterAccordion.style.maxHeight) {
        filterAccordion.style.maxHeight = null;
        this.classList.remove("active");
        filterAccordion.classList.remove("active");
      } else {
        for (var q = 0; q < courseFilterAccordionActive.length; q++) {
          courseFilterAccordionActive[q].classList.remove("active");
          courseFilterAccordion[q].classList.remove("active");
        }
        for (var p = 0; p < courseFilterAccordion.length; p++) {
          this.classList.remove("active");
          courseFilterAccordion[p].classList.remove("active");
          courseFilterAccordion[p].style.maxHeight = null;
        }
        filterAccordion.style.maxHeight = (filterAccordion.scrollHeight * 2) + "px";
        filterAccordion.classList.add("active");
        this.classList.add("active");
      }
    };
  }
  var filtersublink = document.getElementsByClassName("filter__subitem");
  for (i = 0; i < filtersublink.length; i++) {
    filtersublink[i].onclick = function(e) {
      this.parentNode.classList.toggle('active');
    };
  }

  const fl = document.querySelectorAll('.filter__sublist'); 
  [...fl].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
  
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.filter__list')) {
      ffb.forEach((n) => n.classList.remove("active"));
      ffs.forEach((n) => n.classList.remove("active"));
      ffs.forEach((n) => n.style.maxHeight = null);
    }
  })
}
// end accordion filter

// start tour__accordion_button
const tourab = document.querySelector('.tour__accordion_button');
if (tourab) {
  const tourabutton = document.getElementsByClassName("tour__accordion_button");
  for (i = 0; i < tourabutton.length; i++) {
    tourabutton[i].onclick = function(e) {
      const tourabuttonNext = this.nextElementSibling;

      if (tourabuttonNext && this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
        tourabuttonNext.style.maxHeight = null;
      } else if (tourabuttonNext) {
        tourabuttonNext.style.maxHeight = tourabuttonNext.scrollHeight + "px";
        this.parentElement.classList.add("active");
      }
    };
  }
}
// end tour__accordion_button

// start personal__competitions_tab
const ttabActive = document.querySelectorAll(".tour .tour__tab");
const ttabtournament = document.querySelector('.tour__tab_tournament');
const ttabphoto = document.querySelector('.tour__tab_photo');

const tinfoActive = document.querySelectorAll(".tour .tour__info");
const titournament = document.querySelector('.tour__info_tournament');
const tiphoto = document.querySelector('.tour__info_photo');

if (ttabtournament && ttabphoto) {
  ttabtournament.addEventListener('click', function() {
    if (!ttabtournament.classList.contains("active")) {
      ttabActive.forEach((n) => n.classList.remove("active"));
      tinfoActive.forEach((n) => n.classList.remove("active"));
      titournament.classList.add("active");
      ttabtournament.classList.add("active");
    }
  })
  
  ttabphoto.addEventListener('click', function() {
    if (!ttabphoto.classList.contains("active")) {
      ttabActive.forEach((n) => n.classList.remove("active"));
      tinfoActive.forEach((n) => n.classList.remove("active"));
      tiphoto.classList.add("active");
      ttabphoto.classList.add("active");
    }
  })
}
// end personal__competitions_tab

// start tour__accordion_button
const toursliderswiper = document.querySelector('.tour__slider_swiper');
  if(toursliderswiper){
  var swiper = new Swiper(".tour__slider_swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 500,
    navigation: {
      nextEl: '.tour__next',
      prevEl: '.tour__prev',
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      clickable: true,
    },
    breakpoints: {
      1439: {
        spaceBetween: 40,
      },
    },
  });
}
// end tour__accordion_button

// start select
const SELECT = '[data-select]'
const SELECT_LIST = '[data-select-list]'
const SELECT_ARROW = '[data-select-arrow]'
const SELECT_ACTION = '[data-select-action]'
const SELECT_TITLE = '[data-select-title]'
const SELECT_INPUT = '[data-select-input]'
const SELECT_ITEM = 'selectItem'
const OPEN_SELECT = 'selectOpen'

class Select {
  static attach() {
    document.querySelectorAll(SELECT)
      .forEach(select => new Select().init(select))
  }

  init(select) {
    if (this.findSelect(select)) {
      this.applyListener()
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)

      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList();
        } else {
          this.openSelectList()
        }
      }

      if (this.isCallSelectItemElement(element)) {
        this.addSelectedValue(element)
      }

      if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
        this.closeSelectList()
      }
    })
  }

  isCallSelectElement(element, target) {
    return element && OPEN_SELECT in element.dataset
  }

  isCallSelectItemElement(element, target) {
    return element && SELECT_ITEM in element.dataset
  }

  findSelect(select) {

    if (select) {
      this.select = select
      this.selectList = this.select.querySelector(SELECT_LIST)
      this.selectArrow = this.select.querySelector(SELECT_ARROW)
      this.selectTitle = this.select.querySelector(SELECT_TITLE)
      this.selectInput = this.select.querySelector(SELECT_INPUT)
      return true
    }
    return false
  }

  isOpened() {
    return this.selectList.classList.contains('form__select_list_opened')
  }

  openSelectList() {
    this.selectList.style.maxHeight = this.selectList.scrollHeight + "px";
    this.selectList.classList.add('form__select_list_opened')
    this.selectArrow.classList.add('form__select_arrow_rotate')
  }

  closeSelectList() {
    this.selectList.style.maxHeight = null;
    this.selectList.classList.remove('form__select_list_opened')
    this.selectArrow.classList.remove('form__select_arrow_rotate')
  }

  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML;
    this.selectInput.value = element.innerHTML;
    element.parentNode.parentNode.classList.add("success");
    element.parentNode.parentNode.classList.remove("error");
    this.selectInput.setAttribute('value', this.selectInput.value);
  }

  selectOverlayIsClickedElement(element, target) {
    return element && 'select' in element.dataset
  }
}

Select.attach()
// end select

// start rating__item
const ratingitem = document.querySelector('.rating__item');
if (ratingitem) {
  const ratingnumber = document.getElementsByClassName("rating__number");
  for (i = 0; i < ratingnumber.length; i++) {
    ratingnumber[i].onclick = function(e) {
      const ratingnumberNext = this.nextElementSibling;

      if (ratingnumberNext && this.parentElement.parentElement.parentElement.classList.contains("active")) {
        this.parentElement.parentElement.parentElement.classList.remove("active");
        ratingnumberNext.style.maxHeight = null;
      } else if (ratingnumberNext) {
        ratingnumberNext.style.maxHeight = ratingnumberNext.scrollHeight + "px";
        this.parentElement.parentElement.parentElement.classList.add("active");
      }
    };
  }
}
// end rating__item

// start faq
const faq = document.querySelector('.faq');
const faqActive = document.querySelectorAll("html .faq");
if (faq) {
  const faqbutton = document.getElementsByClassName("faq__button");
  for (i = 0; i < faqbutton.length; i++) {
    faqbutton[i].onclick = function(e) {
      if (this.parentElement.classList.contains("active")) {
        this.parentElement.classList.remove("active");
      } else {
        faqActive.forEach((n) => n.classList.remove("active"));
        this.parentElement.classList.add("active");
      }
    }
  }
  const faqclose = document.getElementsByClassName('faq__close');
  for (i = 0; i < faqclose.length; i++) {
    faqclose[i].onclick = function(e) {
      this.parentElement.parentElement.classList.remove("active");
    }
  }
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.faq')) {
      faqActive.forEach((n) => n.classList.remove("active"));
    }
  })
}
// end faq

// start tournament__popup
const tpb = document.querySelector('.tournament__popup_button');
const tp = document.querySelector('.tournament__popup');
const toverlay = document.querySelector('.tournament__overlay');
if (tp) {
  tpb.addEventListener('click', function() {
    if (!tp.classList.contains("active")) {
      tp.classList.add("active");
      toverlay.classList.add("active");
      document.documentElement.classList.add("noscroll");
    } else {
      tp.classList.remove("active");
      toverlay.classList.remove("active");
      document.documentElement.classList.remove("noscroll");
    }
  })
  toverlay.addEventListener('click', function() {
    tp.classList.remove("active");
    toverlay.classList.remove("active");
    document.documentElement.classList.remove("noscroll");
  })
  const tournamentnumber = document.getElementsByClassName("tournament__popup_number");
  for (i = 0; i < tournamentnumber.length; i++) {
    tournamentnumber[i].onclick = function(e) {
      const tournamentnumberNext = this.nextElementSibling;

      if (tournamentnumberNext && this.parentElement.parentElement.parentElement.classList.contains("active")) {
        this.parentElement.parentElement.parentElement.classList.remove("active");
        tournamentnumberNext.style.maxHeight = null;
      } else if (tournamentnumberNext) {
        tournamentnumberNext.style.maxHeight = tournamentnumberNext.scrollHeight + "px";
        this.parentElement.parentElement.parentElement.classList.add("active");
      }
    };
  }
}
// end tournament__popup