import mobileNav from './modules/mobile-nav.js';
import setValidation from './modules/form-validation.js';
mobileNav();
setValidation();


//sliders
const swiper = new Swiper('.swiper.what-we-do__slider', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const blogSlilder = new Swiper('.blog-slider', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

