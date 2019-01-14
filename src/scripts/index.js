import '../styles/index.scss';

let matchMedia = window.matchMedia('(min-width: 681px)');
const menu_wrap = document.querySelector('.menu-wrap');
const ul = document.querySelector('.ul');
const line_1 = document.querySelector('.button__line_1');
const line_2 = document.querySelector('.button__line_2');
const line_3 = document.querySelector('.button__line_3');
const item_close = document.querySelector('.item_close');
let lastScrollTop = 0;

function menuToggle(close) {
  // click menu
  close.addEventListener('click', function (e) {
    if (!matchMedia.matches) {

      [].map.call(document.querySelectorAll('.ul'), function (el) {
        el.classList.toggle('show');
      });


      [].map.call(document.querySelectorAll('.button__line_1'), function (el) {
        el.classList.toggle('line_1');
      });

      [].map.call(document.querySelectorAll('.button__line_2'), function (el) {
        el.classList.toggle('line_2');
      });

      [].map.call(document.querySelectorAll('.button__line_3'), function (el) {
        el.classList.toggle('line_3');
      });
      // ul li animate
      [].map.call(document.querySelectorAll('.item_gall'), function (el) {
        el.classList.toggle('mjs-fadeInLeft');
      });

      [].map.call(document.querySelectorAll('.item_info'), function (el) {
        el.classList.toggle('mjs-fadeInRight');
      });

      [].map.call(document.querySelectorAll('.item_summer'), function (el) {
        el.classList.toggle('mjs-fadeInLeft');
      });

      [].map.call(document.querySelectorAll('.item_close'), function (el) {
        el.classList.toggle('mjs-fadeInRight');
      });
    }
  });
}

// Проверка видин ли элемент
function isPartiallyVisible(el) {
  const elementBoundary = el.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function widthChanging() {
  if (matchMedia.matches) { // If media query matches
    menu_wrap.classList.remove('active');

    line_1.classList.remove('line_1');
    line_2.classList.remove('line_2');
    line_3.classList.remove('line_3');

  }

}


window.onbeforeunload = function load() {
  if (window.scrollTo) window.scrollTo(0, 0);
};
// активация анимации при скролле
function Scroll() {
  // #############################################################################
  // computer version
  // ##############################################################################

  if (matchMedia.matches) { // If media query matches
    const prize = document.getElementById('js-section-item_prize');
    const aerostat = document.getElementById('js-section-item_aerostat');
    const vacation = document.getElementById('js-section-item_vacation');
    const map = document.getElementById('js-section-item_map');
    const ypos = window.pageYOffset;

    if (isPartiallyVisible(prize)) {
      prize.classList.add('js-fadeInLeft');
      aerostat.classList.add('js-fadeInRight');
    }

    if (isPartiallyVisible(vacation)) {
      map.classList.add('js-fadeInRight');
      vacation.classList.add('js-fadeInLeft');
    }
  } else {
    // #############################################################################
    // mobile version
    // #############################################################################
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      menu_wrap.classList.add('active');
      ul.classList.remove('show');
      line_1.classList.remove('line_1');
      line_2.classList.remove('line_2');
      line_3.classList.remove('line_3');
      // ul li animate
      // ul li animate

      [].map.call(document.querySelectorAll('.item_gall'), function (el) {
        el.classList.remove('mjs-fadeInLeft');
      });

      [].map.call(document.querySelectorAll('.item_info'), function (el) {
        el.classList.remove('mjs-fadeInRight');
      });

      [].map.call(document.querySelectorAll('.item_summer'), function (el) {
        el.classList.remove('mjs-fadeInLeft');
      });

      [].map.call(document.querySelectorAll('.item_close'), function (el) {
        el.classList.remove('mjs-fadeInRight');
      });
    }

    if (st < lastScrollTop || st < 160) {
      menu_wrap.classList.remove('active');
    }
    if (st > 160) {
      menu_wrap.style.transition = 'transform 0.7s';
    } else {
      menu_wrap.style.transition = 'transform 0.2s';
    }
    lastScrollTop = st;
  }
}
window.addEventListener('scroll', Scroll);

// hamburger menu btn
menuToggle(menu_wrap);
// item_close btn
menuToggle(item_close);
// media
widthChanging(matchMedia); // Call listener function at run time

matchMedia.addListener(widthChanging); // Attach listener function on state changes
