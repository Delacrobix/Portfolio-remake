/*
 * Works scroll animation
 */
// var imgs = document.querySelectorAll('.work-container');
// var imgs_container = document.querySelector('.section-gallery');
// var work_tittle = document.querySelector('#work-tittle');

// function showScroll_works() {
//   let work_tittleHeight = work_tittle.getBoundingClientRect().top;
//   let last_img;

//   imgs.forEach((element) => {
//     element.style.opacity = 0;
//     last_img = element;
//   });

//   let last_imgHeight = last_img.getBoundingClientRect().top;

//   if (screen.height / 2 > work_tittleHeight && last_imgHeight > 0) {
//     imgs.forEach((element) => {
//       element.style.opacity = 1;
//     });
//   }
// }

// window.addEventListener('scroll', showScroll_works);

/*
 * code for button dark mode
 */
// var btn_switch = document.querySelector('.switch');

// btn_switch.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
//   btn_switch.classList.toggle('active');
// });

/*
 * code for button dark mode (mobile)
 */
var btn_switchMobile = document.querySelector('#switch-mobile');

btn_switchMobile.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btn_switchMobile.classList.toggle('active');
});

var btn_languageMobile = document.querySelector('#switch-mobile-language');

btn_languageMobile.addEventListener('click', () => {
  let pathname = window.location.pathname;

  if (pathname === '/en') {
    window.location.href = '/';
  } else {
    window.location.href = '/en';
  }
});

/*
 * Code for language selector
 */
const languageSelector = document.getElementById('language-selector');

function languageChange(event) {
  let selectedOption = event.target.options[event.target.selectedIndex].value;

  if (selectedOption === 'es') {
    window.location.href = '/';
  } else if (selectedOption === 'en') {
    window.location.href = '/en';
  }
}
