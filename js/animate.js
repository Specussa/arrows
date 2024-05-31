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