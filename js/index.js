<!-- Preloader -->

    //<![CDATA[
        jQuery(window).on('load', function() { // makes sure the whole site is loaded 
            jQuery('#status').fadeOut(); // will first fade out the loading animation 
            jQuery('#preloader').delay(950).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            jQuery('body').delay(350).css({'overflow':'visible'});
            jQuery(this).scrollTop(0);
        })
    //]]>



$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 10) {
   
        $(".stick header").addClass("scroll");
		
	}else{
	$(".stick header").removeClass("scroll");
    } 
});




var clickEvent = (function() {
  if ('ontouchstart' in document.documentElement === true)
    return 'touchstart';
  else
    return 'click';
})();







var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());

if (isAndroid)
{
$(document).on("click", ".closeit", function(e){
	e.stopImmediatePropagation();
	jQuery( "a.closebtn" ).click();
	$(this).addClass("burg");  
	  $(this).removeClass("closeit");
	e.stopPropagation();
            e.preventDefault();
});

$(document).on("click", ".burg", function(e){
	e.stopImmediatePropagation();
	jQuery( ".openNav" ).click();
	 $(this).addClass("closeit");  
	  $(this).removeClass("burg"); 
	  e.stopPropagation();
            e.preventDefault(); 
});



}else{


$(document).on("click touchstart", ".closeit", function(e){
	e.stopImmediatePropagation();
	jQuery( "a.closebtn" ).click();
	$(this).addClass("burg");  
	  $(this).removeClass("closeit");
	e.stopPropagation();
            e.preventDefault();
});

$(document).on("click touchstart", ".burg", function(e){
	e.stopImmediatePropagation();
	jQuery( ".openNav" ).click();
	 $(this).addClass("closeit");  
	  $(this).removeClass("burg"); 
	  e.stopPropagation();
            e.preventDefault(); 
});




}


















/*
$(document).on("click touchstart", "#menuover", function(){
	
	jQuery( ".burgbase.closeit" ).click();
	
});

*/


 
//  ---------------------- Animation

var wh = window.innerHeight,
	$buildingpart = $('.buildingpart'),
$buildingpart2 = $('.buildingpart2'),
	$city = $('.city'),
	$factory = $('.factory'),
	$cafe = $('.cafe'),
	$people = $('.people'),
        $grid = $('.grid'),
	$innerS1 = $('.innerS1'),
	$innerS2 = $('.innerS2'),
	$innerS3 = $('.innerS3'),
	$innerS4 = $('.innerS4'),
	$innerS5 = $('.innerS5'),
	$hording = $('.hording'),
	$final1 = $('.final1'),
	$final2 = $('.final2'),
	$final3 = $('.final3'),
	$final4 = $('.final4'),
        $mainimage = $('.mainimage p img'),
        $mainimage1 = $('.mainimage'),
        $arrow = $('.arrow'),
        $intobg = $('.intobg');
	



	// init
	var ctrl = new ScrollMagic.Controller({
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});

	// Create scene


	
  var iphoneContentyep = new TimelineMax();
  iphoneContentyep
         
.to($intobg, 0, {autoAlpha: 1, ease: SlowMo.easeInOut}, '-1')
.to($buildingpart, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($buildingpart2, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($people, 0, {y: '+=50', autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($city, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($final1, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($final2, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($final3, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($final4, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($factory, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($factory, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.to($grid, 0, {autoAlpha: 0, ease: SlowMo.easeInOut},'-4')
.fromTo($city, 35, { autoAlpha: 1}, {autoAlpha: 0.7,  ease: SlowMo.easeInOut}, '6')
   
 new ScrollMagic.Scene({
    triggerElement: $('body')[0],
    duration: '0%'
  })
.setTween(iphoneContentyep)
  .addIndicators()
  .addTo(ctrl);
	




// Animate the hat up, letter A in and fade in content of section 2
  var iphoneContentHat1 = new TimelineMax();
  iphoneContentHat1		
    

.fromTo($factory, 40, { autoAlpha: 0}, {autoAlpha: 1,  ease: SlowMo.easeInOut}, '15')


  new ScrollMagic.Scene({
    triggerElement: $('body')[0],
    duration: '100%'
  })
  .setTween(iphoneContentHat1)
  .addIndicators()
  .addTo(ctrl);




  var iphoneContentHat = new TimelineMax();
  iphoneContentHat	
.fromTo($people, 30, { autoAlpha: 0 }, {y: '-=50', autoAlpha: 1, ease: SlowMo.easeOut}, '30')
.fromTo($factory, 35, { autoAlpha: 1}, {autoAlpha: 0.6,  ease: SlowMo.easeInOut}, '10')
.fromTo($cafe, 30, { autoAlpha: 0}, {autoAlpha: 1,  ease: SlowMo.easeOut}, '42')
.fromTo($grid, 30, { autoAlpha: 0}, {autoAlpha: 1,  ease: SlowMo.easeOut}, '42')

	


  new ScrollMagic.Scene({
    triggerElement: $('.innerS1 h2')[0],
    duration: '100%'
  })
  .setTween(iphoneContentHat)
  .addIndicators()
  .addTo(ctrl);




	// Animate letter A out, letter B in and fade in content of section 3
  var iphoneContent1Tl = new TimelineMax();
  iphoneContent1Tl	
.fromTo($people, 10, { autoAlpha: 1}, {y: '+=50', autoAlpha: 0, ease: SlowMo.easeOut})
.to($factory, 10, {autoAlpha: 0, ease: SlowMo.easeOut},'-0.4')
.to($cafe, 30, { autoAlpha: 0, ease: SlowMo.easeInOut},'-0.3')
.fromTo($buildingpart, 30, { autoAlpha: 0}, {autoAlpha: 1, ease: SlowMo.easeInOut},'-0.2')
	

  new ScrollMagic.Scene({
    triggerElement: $('.innerS2 h2')[0],
    duration: '100%'
  })
  .setTween(iphoneContent1Tl)
 .addIndicators()
  .addTo(ctrl);





	// Animate letter B out, letter C in and fade in content of section 4
  var iphoneContent2Tl = new TimelineMax();
  iphoneContent2Tl	
.to($grid, 30, { autoAlpha: 0, ease: SlowMo.easeInOut},'-0.3')	
.fromTo($buildingpart, 30, { autoAlpha: 1}, {autoAlpha: 0, ease: SlowMo.easeInOut})
.fromTo($buildingpart2, 20, { autoAlpha: 0}, {autoAlpha: 1, ease: SlowMo.easeInOut},'-2')
.fromTo($hording, 60, {yPercent: -20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: SlowMo.easeInOut},'-2')

  new ScrollMagic.Scene({
    triggerElement: $('.innerS3 h2')[0],
    duration: '50%'
  })
  .setTween(iphoneContent2Tl)
 .addIndicators()
  .addTo(ctrl);
  
  
  
  
  
  	// Animate Last scene
  var iphoneContent3Tl = new TimelineMax();
  iphoneContent3Tl	
   
.to($hording, 60, {yPercent: -20, autoAlpha: 0, ease: SlowMo.easeInOut})
.fromTo($final4, 60, { autoAlpha: 0}, {scale: 1, autoAlpha: 1, ease: SlowMo.easeInOut})
.fromTo($final1, 25, { autoAlpha: 0}, {scale: 1, autoAlpha: 1, ease: SlowMo.easeInOut})
.fromTo($buildingpart2, 1, { autoAlpha: 1}, {autoAlpha: 0, ease: SlowMo.easeInOut})	
.fromTo($final2, 25, { autoAlpha: 0}, {scale: 1, autoAlpha: 1, ease: SlowMo.easeInOut})
.fromTo($final3, 25, { autoAlpha: 0}, {scale: 1, autoAlpha: 1, ease: SlowMo.easeInOut})

  new ScrollMagic.Scene({
    triggerElement: $('.innerS4 h2')[0],
    duration: '50%'
  })
  .setTween(iphoneContent3Tl)
 .addIndicators()
  .addTo(ctrl);
  
  
  
  
  	
  var iphoneContent4Tl = new TimelineMax();
  iphoneContent4Tl	
   
.to($mainimage, 30, {xPercent: -40, autoAlpha: 0, ease: SlowMo.easeInOut },'-3')
.to($mainimage1, 30, {xPercent: -40, autoAlpha: 0, ease: SlowMo.easeInOut },'-3')	
.to($arrow, 25, {autoAlpha: 0, ease: SlowMo.easeInOut},'-3')

  new ScrollMagic.Scene({
    triggerElement: $('.innerS5 h2')[0],
    duration: '90%'
  })
  .setTween(iphoneContent4Tl)
 .addIndicators()
  .addTo(ctrl);




  
  
  // Smooth Scroll
  
  $(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 2200, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
  
 


// Scroll Icon on home page

$(function() {
	$('a[href*=#one]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});



// stop orientation

 


