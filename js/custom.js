// Based on  http://codetheory.in/change-active-state-links-sticky-navigation-scroll/
//
// Track active section when scrolling
//
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      nav.find('a[href="#'+ $(this).attr('id') +'"]').addClass('active');
    }
  });
});

// 
// Change active state on click
//
nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);

  $el.addClass('active');
  $el.blur();
 
  return false;
});
