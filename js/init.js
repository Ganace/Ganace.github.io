/* Material scrolltop */

$(document).ready(function () {
  $("body").materialScrollTop({
    revealElement: "header",
    revealPosition: "bottom",
    onScrollEnd: function () {
      console.log("Scrolling End");
    },
  });
});

/* Materialize */

// modal
$(function () {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $(".modal").modal();
});

// toc dropdown
$(function () {
  $(".post-toc").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: false,
    gutter: 0,
    belowOrigin: false,
    alignment: "left",
  });
});

// scrollspy
$(function () {
  $(".scrollspy").scrollSpy({
    scrollOffset: 150,
  });
});

// SideNav
$(".button-collapse").sideNav({
  menuWidth: 240,
  //edge: 'right', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
});
$(".button-collapse").off("click").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

// toc-container

(function($) {
  function mTocShow(element, settings) {

      var _ = this,
          breakpoint;
      var scrollTo = 0;

      _.btnClass = '.toc-container';
      _.revealClass = 'reveal';
      _.btnElement = $(_.btnClass);

      _.initial = {
          revealElement: 'body',
          revealPosition: 'top',
          padding: 0,
          duration: 600,
          easing: 'swing',
          onScrollEnd: false
      }

      _.options = $.extend({}, _.initial, settings);

      _.revealElement = $(_.options.revealElement);
      breakpoint = _.options.revealPosition !== 'bottom' ? _.revealElement.offset().top : _.revealElement.offset().top + _.revealElement.height();
      scrollTo = element.offsetTop + _.options.padding;

      $(document).scroll(function() {
          if (breakpoint < $(document).scrollTop()) {
              _.btnElement.addClass(_.revealClass);
          } else {
              _.btnElement.removeClass(_.revealClass);
          }
      });
  }

  $.fn.tocShow = function() {
      var _ = this,
          opt = arguments[0],
          l = _.length,
          i = 0;
      if (typeof opt == 'object' || typeof opt == 'undefined') {
          _[i].tocShow = new mTocShow(_[i], opt);
      }
      return _;
  };
}(jQuery));

$("body").tocShow({
  revealElement: "header",
  revealPosition: "bottom",
  onScrollEnd: function () {
    console.log("Scrolling End");
  },
});