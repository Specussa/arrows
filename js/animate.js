const tournamentitem = document.querySelector('.tournament__item');
const tournamentitems = document.querySelectorAll('.tournament__item');
if(tournamentitem){
  function onEntry(entry) {entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
      change.target.classList.add('visible');
    }
     else {
      change.target.classList.remove('visible');
    }
  });};

  let tournamentitemsopt = {threshold: [0.7]};
  let tournamentitemsserv = new IntersectionObserver(onEntry, tournamentitemsopt);
  for (let elm of tournamentitems) {tournamentitemsserv.observe(elm);}
}

const animateimage = document.querySelector('.animate_image');
const animateimages = document.querySelectorAll('.animate_image');
if(animateimage){
  function onEntry(entry) {entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
    }
  });};

  let animateimagesopt = {threshold: [0.5]};
  let animateimagesserv = new IntersectionObserver(onEntry, animateimagesopt);
  for (let elm of animateimages) {animateimagesserv.observe(elm);}
}

const animatetop = document.querySelector('.animate_top');
const animatetops = document.querySelectorAll('.animate_top');
if(animatetop){
  function onEntry(entry) {entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
    }
  });};

  let animatetopsopt = {threshold: [0.5]};
  let animatetopsserv = new IntersectionObserver(onEntry, animatetopsopt);
  for (let elm of animatetops) {animatetopsserv.observe(elm);}
}

const animateleft = document.querySelector('.animate_left');
const animatelefts = document.querySelectorAll('.animate_left');
if(animateleft){
  function onEntry(entry) {entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
    }
  });};

  let animateleftsopt = {threshold: [0.5]};
  let animateleftsserv = new IntersectionObserver(onEntry, animateleftsopt);
  for (let elm of animatelefts) {animateleftsserv.observe(elm);}
}

const animateright = document.querySelector('.animate_right');
const animaterights = document.querySelectorAll('.animate_right');
if(animateright){
  function onEntry(entry) {entry.forEach(change => {
    if(change.isIntersecting){
      change.target.classList.add('animated');
    }
  });};

  let animaterightsopt = {threshold: [0.5]};
  let animaterightsserv = new IntersectionObserver(onEntry, animaterightsopt);
  for (let elm of animaterights) {animaterightsserv.observe(elm);}
}