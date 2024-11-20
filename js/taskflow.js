//JavaScript for Toggle Menu
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
burger.addEventListener('click', () => {
   if (menu.classList.contains('hidden')){
       menu.classList.remove('hidden');
   } else {
       menu.classList.add('hidden');
   }
});

burger.addEventListener('click', () => {
   if (time.classList.contains('hidden')){
       time.classList.remove('hidden');
   } else {
       time.classList.add('hidden');
   }
});