$('.owl-carousel1').owlCarousel({
  nav: true,
  dots: false,
  navClass: [
    'angle-left','angle-right'
  ],
  items: 1
});
$('.owl-carousel2').owlCarousel({
  nav: true,
  dots: false,
  navContainerClass: 'owl-nav owl-nav2',
  navClass: [
    'angle-left','angle-right'
  ],
  items: 1
});
$('.owl-carousel3').owlCarousel({
  nav: true,
  dots: false,
  loop: false,
  navContainerClass: 'owl-nav owl-nav3',
  navClass: [
    'angle-left','angle-right'
  ],
  items: 3,
  margin: -68,
  responsive: {
    1024: {
      items: 3,
      margin: -45
    },
    768: {
      items: 3,
      margin: -35
    },
    320: {
      items: 1,
    }
  }
});
$('.owl-carousel4').owlCarousel({
  nav: true,
  dots: false,
  navContainerClass: 'owl-nav owl-nav4',
  navClass: [
    'angle-left','angle-right'
  ],
  items: 1,
  responsive: {
    768: {
      nav:true
    },
    320: {
      nav: false
    }
  }
});
$('.owl-carousel5').owlCarousel({
  nav: true,
  dots: false,
  navContainerClass: 'owl-nav owl-nav5',
  navClass: [
    'angle-left','angle-right'
  ],
  items: 1,
  responsive: {
    768: {
      nav:true
    },
    320: {
      items: 1,
      nav: false
    }
  }
});
$('.owl-carousel6').owlCarousel({
  nav: true,
  dots: false,
  navContainerClass: 'owl-nav owl-nav5',
  navClass: [
    'angle-left','angle-right'
  ],
  items: 1,
  responsive: {
    320: {
      items: 1
    }
  }
});

$('<div>', {
  class: 'rectangle-white'
}).appendTo('.owl-nav3');