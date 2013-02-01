$(function() {

  var toc = $('#toc-content');

  $(document).scroll(function() {

	if ($(document).scrollTop() >= 166) {
	  toc.addClass('fixed-toc');
	}
	else {
	  toc.removeClass('fixed-toc');
	}
  });


  $('[href="/"]').click(function() {
	$('html, body').animate({"scrollTop": 0 }, 400);
	return false;
  });


});

$("#chunk").hover( 
  function() {
    $(this).fadeTo("fast", 1.0) 
  },
  function() { 
	$(this).fadeTo("fast", 0.4)
  }
);