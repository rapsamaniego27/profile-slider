/* Code javascript here */

const profileSlider = new East({
 /* The Slider Element */
 sliderEl: document.querySelector('.slider-row'),

 /* Slider Controls */
 controls: {
  prevEl: document.querySelector('.goToPrev'),
  nextEl: document.querySelector('.goToNext')
 }
});


const jovinaEl = document.querySelector('#jovina');

jovinaEl.addEventListener('click', ()=> {
  alert('Good Day Jovina! Hope you have a nice day today! Kain and workout din pag may time! :D');
});