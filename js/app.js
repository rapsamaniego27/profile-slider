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


function isMobile(){
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i))

    return true;
}

const jovinaEl = document.querySelector('#jovina');
const jovinaAction = isMobile() ? 'touchstart' : 'click';

jovinaEl.addEventListener(jovinaAction, ()=> {
  alert('Good Day Jovina! Hope you have a nice day today! Kain and workout din pag may time! :D Stay awesome!');
});

