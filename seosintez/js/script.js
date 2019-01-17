	setTimeout(function() {$('.section-01, .section-02').removeClass('prelod-01')}, 500);
	setTimeout(function() {$('.preload1500').removeClass('prelod-01')}, 500);

/*-----------------------------------------------------------------------------------*/
/*	NICESCROLL
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery("body").niceScroll({
		// cursorcolor:"#333",
		// cursorborder:"0px",
		cursorwidth :"11px",
		zindex:"9999"
	});
});
$(function() {

  $(".get-nicer").niceScroll("div.nice-wrapper", {
    cursorwidth: "11px"
  });

  $(".get-nicer").scroll(function() {
    $("#scroll-info-value").val($(".get-nicer").scrollTop());
  });

  $("a.btn").click(function(e) {
    e.preventDefault();

    console.log('click', e.target);

    $('#nice-modal1').modal();
  });

});


$(function() {
	$("#menu, .menu-ex").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
	$('.pop501').click(function(){
		$('.section-08').addClass('act_pop');
		// $('.section-08').addClass('act_pop_op');
		setTimeout(function() {$('.section-08').addClass('act_pop_op')}, 100);
	});
	$('.close_pop').click(function(){
		$('.section-08').removeClass('act_pop_op');
		setTimeout(function() {$('.section-08').removeClass('act_pop')}, 500);
		// setTimeout(function() {$('.wr_pop').removeClass('wr_pop-act')}, 700);
	});
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

// $(function() {
// var time =3, ch=1;
// $(window).scroll(function(){
// 	$('#line').each(function(){
// 		var
// 		counter =$(this).offset().top,
// 		topWindow =$(window).scrollTop();
// 		if (counter<topWindow+200) {
// 			if (ch<2) {
// 			$('.line-num').addClass('visible');
// 			$({blurRadius: 3}).animate({blurRadius: 0},{
// 	duration: 2000,
// 	easing: 'swing',
// 	step: function() {
// 		$('.line-num').css({
// 			"filter": "blur("+this.blurRadius+"px)"
// 		});
// 	}
// });
// $('.line-num').each(function(){
// 	var
// 	i=1,
// 	number=$(this).data('nmbr'),
// 	step = 1000*time/number,
// 	that=$(this),
// 	int=setInterval(function(){
// 		if (i<=number) {
// 			that.html(i);
// 		}
// 		else{
// 			ch=ch+2;
// 			clearInterval(int);
// 		}
// 		i++;
// 	},step);
// });
// }
// }
// });
// });
// });





