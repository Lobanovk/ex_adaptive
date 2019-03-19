/**
 * Rules for carousel
 * @type Object {nav: boolean, dots: boolean, navClass: Array, items: number, margin: number, responsive: Object}
 */
const rules = {
  nav: true,
  dots: false,
  navClass: ["angle-left", "angle-right"],
  items: 1,
  margin: null,
  responsive: null
};
/**
 * Carousel
 */
$('.owl-carousel').each(function () {
  rules.items = 1;
  rules.margin = null;
  rules.responsive = null;
  if($(this).data('slider') === 'slider3'){
    rules.items = 3;
    rules.margin = -68;
    rules.responsive= {
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
    };
  }
  if($(this).data('slider') === 'slider4'){
    rules.responsive= {
      768: {
        nav: true
      },
      320: {
        nav: false
      }
    };
  }
  if($(this).data('slider') === 'slider5'){
    rules.responsive= {
      768: {
        nav: true
      },
      320: {
        items: 1,
        nav: false
      }
    }
  }
  if($(this).data('slider') === 'slider6'){
    rules.responsive={
      320: {
        items: 1
      }
    }
  }
  $(this).owlCarousel($.extend({}, rules, $(this).data('params')));
});

$('<div>', {
  class: 'rectangle-white'
}).appendTo('.owl-nav3');