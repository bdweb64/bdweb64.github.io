// $.cookie('header_111111111111111111', 'cookie_value_11111111111111', {
//     expires: 1,
//     path: '/',
//     domain: 'bdweb.pro/#header_1'
// });
// $.cookie('header_22222222222222222', 'cookie_value_22222222222222', {
//     expires: 1,
//     path: '/',
//     domain: 'bdweb.pro/#header_2'
// });
// $.cookie('header_3333333333333333', 'cookie_value_333333333333333', {
//     expires: 1,
//     path: '/',
//     domain: 'bdweb.pro/#header_3'
// });



	$(".home_101").niceScroll({
		cursorwidth :"11px",
		zindex:"9999"
	});



jQuery(document).ready(function() {

	$("#menu, .menu-ex").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
	$('.btn_sec_1000').fancybox({
		toolbar  : false,
		smallBtn : true,
		iframe : {
			preload : true,
			css : {
	            width : '100%',
	    				maxHeight : '100%'
	        }
		}
	});
	$('.btn_sec_003').fancybox({
		toolbar  : false,
		smallBtn : true,
		iframe : {
			preload : true,
			css : {
	            width : '100%',
	    				maxHeight : '100%'
	        }
		}
	});
	$('.btn_sec_001').fancybox({
		toolbar  : false,
		smallBtn : true,
		iframe : {
			preload : true,
			css : {
	            // paddingTop : '100px',btn_sec_001
	            // width : '100%',
	            width : '480px',
	    				maxHeight : '605px'
	        }
		}
	});
	$('[data-fancybox]').fancybox({
    // youtube : {
    //     controls : 0,
    //     showinfo : 0
    // },
    // vimeo : {
    //     color : 'f00'
    // }
	});

});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       200,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

var options1 = {
	offset: 700
}
var header = new Headhesive('.sec_000', options1);

var options2 = {
	offset: 2500,
	// offsetSide: 'bottom',
	classes: {
		clone: 'headhesive1000',
		stick: 'headhesive1000--stick',
		unstick: 'headhesive1000--unstick'
	}
}
var header2 = new Headhesive('.sec_1000', options2);
$('.close_1000').click(function () {
	$('.sec_1000').addClass('sec_1000dn');
});

$(window).scroll(function(){
$('.sec_004').each(function(){
var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
if (cPos < topWindow + screen - 150) {
      $('.sec_004').removeClass('op0_03d');
  }
});
});
$(window).scroll(function(){
$('.sec_005').each(function(){
var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
if (cPos < topWindow + screen - 150) {
      $('.sec_005').removeClass('op0_03d');
  }
});
});
$(window).scroll(function(){
$('.sec_006').each(function(){
var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
if (cPos < topWindow + screen - 150) {
      $('.sec_006').removeClass('op0_03d');
  }
});
});
$(window).scroll(function(){
$('.sec_007').each(function(){
var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
if (cPos < topWindow + screen - 150) {
      $('.sec_007').removeClass('op0_03d');
  }
});
});
$(window).scroll(function(){
$('.sec_008').each(function(){
var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
if (cPos < topWindow + screen - 150) {
      $('.sec_008').removeClass('op0_03d');
  }
});
});
$(window).scroll(function(){
$('.sec_009').each(function(){
var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
if (cPos < topWindow + screen - 150) {
      $('.sec_009').removeClass('op0_03d');
  }
});
});
$(window).scroll(function(){
$('.sec_010').each(function(){
var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
if (cPos < topWindow + screen - 150) {
      $('.sec_010').removeClass('op0_03d');
  }
});
});
$(window).scroll(function(){
$('.sec_011').each(function(){
var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
if (cPos < topWindow + screen - 150) {
      $('.sec_011').removeClass('op0_03d');
  }
});
});
$(window).scroll(function(){
$('.sec_012').each(function(){
var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
if (cPos < topWindow + screen - 150) {
      $('.sec_012').removeClass('op0_03d');
  }
});
});



// $('.f1_btn').click(function () {
//         $.post('http://plodorodie64.ru/order2.php', {
//             name: $('[name="name"]').val(),
//             phone: $('[name="phone"]').val()
//         },
//         function(data) {$('.result1').html(data);}
//         );
//     });




var audio=document.querySelector("#audio");
audio.volume=0.2;

var tracks=[
						"http://bdweb.pro/muz/Haddaway2_-_What_Is_Love_2017_Tommer_Mizrahi_Club_Remix_(iPleer.fm).mp3",
						"http://bdweb.pro/muz/Nicky_Jam_-_Travesuras-_(iPleer.fm).mp3",
						"http://bdweb.pro/muz/Becky_G_Natti_Natasha_-_Sin_Pijama_(iPleer.fm).mp3",
						"http://bdweb.pro/muz/Nicky_Jam_-_Voy_A_Beber_(iPleer.fm).mp3",
						"http://bdweb.pro/muz/Sean_Paul_David_Guetta_-_Mad_Love_ft._Becky_G_(iPleer.fm).mp3",
						"http://bdweb.pro/muz/La_Rompe_Corazones_-_Daddy_Yankee_Ft_Ozuna_(iPleer.fm).mp3",
						"http://bdweb.pro/muz/natti_natasha_x_ozuna_-_criminal_cri_criminal_(iPleer.fm).mp3"
						];
// var reklams=["reklama1.mp3","reklama2.mp3","reklama3.mp3","reklama4.mp3","reklama5.mp3"];
var index=0;
// var index2=0;
// var gotovnost=1; // реклама в 15 ч. ещё не была в эфире
var status=0; // цикл воспроизведения рекламы ещё не начался
audio.onended=function(){
	index++;
	if(index>=tracks.length){index=0};
	audio.src=tracks[index];
	audio.play(); // запуск следующего трека
	status=0;
}
// audio2.onended=function(){
	// index2++;
	// if(index2>=reklams.length){
		// audio2.pause();
		// audio.play();
	// }
	// audio2.src=reklams[index2];
	// audio2.play(); // запуск следующего блока рекламы
// }
// setInterval(function () {
	// var h = new Date().getHours();
	// if(h == 15){
		// if(gotovnost==1){
		// gotovnost=0; // во избежание повторения рекламы до 15 ч. в сдедующих сутках
		// audio.pause(); // останавливаем текущее аудио
			// if(status==0){
			// audio2.src=reklams[index2];
			// audio2.play(); // наше второе аудио
			// }
			// status=1; // если цикл воспроизведения рекламы уже запущен, то не обновлять его через setInterval
		// }
	// }
	// else{gotovnost=1};
// },1000);
audio.src=tracks[index];
// setTimeout(function() {audio.play()}, 9000);
// audio.play(); 



