let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active'),
    menu.classList.toggle('header__nav--active'),
    document.body.classList.toggle('stop-scroll')
});

let menuLinks = menu.querySelectorAll('.nav__link');

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
});

const btnSearch = document.querySelector('.search__btn');
btnSearch.addEventListener('click', function () {
  document.querySelector('.header__search').style.visibility = 'visible';
})

const btnClose = document.querySelector('.btn-close');
btnClose.addEventListener('click', function () {
  document.querySelector('.header__search').style.visibility = 'hidden';
})


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 150,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }

});


document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});
