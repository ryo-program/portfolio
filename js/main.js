const vueSmoothScroll = window['VueSmoothScroll'];
Vue.use(vueSmoothScroll);

var header = new Vue({
  el: '.header',
  data: {
    isShown: false,
  },
});

var vm = new Vue({
  el: '.top-wrapper',
  data: {
    topWrapperHeight: window.innerHeight + 'px',
    isShown: false,
  },
  methods: {
    resize() {
      this.topWrapperHeight = window.innerHeight + 'px';
    },
    toggle() {
      this.isShown = !this.isShown;
      header.isShown = !header.isShown;
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize);
  }
});

$(function() {
  
  function animation() {
    $('.slidein').each(function() {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > target - windowHeight) {
        $(this).css('transform', 'translateX(0)');
      } else {
        $(this).css('opacity', '1');
      }
    });
  }
  animation();
  $(window).scroll(function() {
    animation();
  });
});

