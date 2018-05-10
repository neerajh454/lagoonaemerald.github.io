(function() {

  var logo_height = $('#logo').height();
  setTimeout(function(){ 
    window.scrollTo(0, 0);
  }, 300);

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > logo_height) {
      $('nav').addClass('navbar-fixed-top');
    } else {
      $('nav').removeClass('navbar-fixed-top');
    }
  });

  $('.tab_lazy').on('click', function() {
    setTimeout(function(){ 
      window.scrollTo(0, 20);
      window.scrollTo(0, 0);
    }, 300);
  });

  var myLazyLoad = new LazyLoad();
  
}).call(this);

