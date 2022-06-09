const cat = document.querySelector('.red');
console.log(cat);
cat.addEventListener('click', (ev) => {
   cat.style.background = 'blue';
   cat.style.color = 'yellow';
});
const white = document.querySelector('.white');
console.log(white);
white.addEventListener('click', (ev) =>{
    white.style.background = 'black';
    white.style.color = 'red';
    cat.style.background = 'black';
});
const dodik = document.querySelector('.violet');
console.log(dodik);
dodik.addEventListener('mouseenter',(ev) =>{
  dodik.style.background = 'black';
  dodik.style.color = 'white';
  cat.style.background = 'black';
  cat.style.color = 'white';
  white.style.background = 'black';
  white.style.color = 'white';
});
