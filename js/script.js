/*****************************
Homepage banner
******************************/	
$(function() {
	// Adjust Height
    adjustHeight();

	//Adjust Height
	function adjustHeight() {
	    $winHeight = $(window).height();
	    if($winHeight>520){
	        $('.auto-height').css('min-height',$winHeight);
	    }
	    else{
	        $('.auto-height').css('min-height','420px');
	    }
	}
	// Window Resize
    $(window).resize(function(){
        adjustHeight();
    });
});

/*****************************
Scroll down page
******************************/	
$(function() {
	$('.scroll_down').click(function() {
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'data-href') ).offset().top - 100
	    }, 700);
	    return false;
	});
});

/*****************************
Toggle Nav
******************************/	
$(function() {
	$('.hamburger_menu').click(function() {
	    $('body').toggleClass('toggle_nav');
	    
	    return false;
	});
	$('.sidebar-menu-overlay').click(function() {
	    $('body').removeClass('toggle_nav');
	});
});

/*****************************
Sticky Header
******************************/
$(window).scroll(function(){
	var winTop = $(window).scrollTop();
	if(winTop >= 1){
		$(".main-header").addClass("sitcky-header");
	} else {
		$(".main-header").removeClass("sitcky-header");
	}
});


/*****************************
Dropdown Subpage Menu
******************************/	
$(function() {
	$('.btn_dropdown_trigger').click(function(){
	    var myelement = $(this).attr('href')
	        $(myelement).toggleClass('fast_show');
	    $('.body-dropdown:visible').not(myelement).removeClass('fast_show');
	    $(this).parent('.toggle_dropdown').toggleClass('active_nav');
	    return false;
	});

	$('.btn_dropdown_trigger').click(function(event){
	    event.stopPropagation();
	});

	$(document).click(function() {
	  $('.body-dropdown').removeClass('fast_show');
	  $('.btn_dropdown_trigger').parent('.toggle_dropdown').removeClass('active_nav');
	});
});

/*****************************
Custom Animation
******************************/	
$(function() {
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

	var nav = $('.body_animation');

	if (nav.length) {
		var containerFromTop = nav.offset().top;
		
		$(window).scroll(function() {

			var scrollP = $(this).scrollTop();

			if (scrollP > containerFromTop - ($(window).height()/1.4)) {

				$('.fade-right-to-left').each(function(i) {
					setTimeout(function(){
						$('.fade-right-to-left').eq(i).addClass('show-right-to-left');
					}, 200 * i );
				});
			}
		});
	}
});





/*****************************
Play and Pause Video
******************************/	
$(function() {
    $('.playpause').click(function () {
        if($(this).parents(".main-video-body").find(".video-1").get(0).paused){
            $(this).parents(".main-video-body").find(".video-1").get(0).play();
            $(this).parents(".main-video-body").find(".mobile_details").fadeOut();
            $('.showreel_bg video').css("opacity", "1");
            $('.main-video-body').css("background", "transparent");
        } else {
            $(this).parents(".main-video-body").find(".video-1").get(0).pause();
            $(this).parents(".main-video-body").find(".mobile_details").fadeIn();
        }
    });

    $('.video-1').click(function() {
	  if (this.paused == false) {
	      this.pause();
	      $(".mobile_details").fadeIn();
	  }
	});

    $('.video-1').on('ended',function() {
        $(this).parents(".main-video-body").find(".mobile_details").fadeIn();
        $('.main-video-body').addClass("video-banner");
        $('.showreel_bg video').css("opacity", "0");
    });
});

/*****************************
Media Query
******************************/	
$(function() {
	var windowWidth = $(window).width();

	if(windowWidth<=1024) {
	    $(function() {
			$('.scroll_down').click(function() {
			    $('html, body').animate({
			        scrollTop: $( $.attr(this, 'data-href') ).offset().top - 85
			    }, 700);
			    return false;
			});
		});
	}
});

/* <![CDATA[ */
var BB_ALLOW_CLASS_NAME = "true";
var BB_SCENES = {"scroll-delay-y":{"settings":{"general":{"name":"scroll-delay-y","duration":"1000","offset":"","pin":"off","pushFollowers":"true","triggerHook":"0.23","vertical":"on"},"ease":{"delay":"","duration":"0.5","ease":""},"class":{"classToggleEnable":"off","classCSS":"bounce"},"scene_id":"58"},"init":{"x":"0","y":"0","scaleX":"1","scaleY":"1","opacity":"1"},"tween":{"position":"fixed","x":"150","y":"340","scaleX":"0.5","scaleY":"0.5","opacity":"1"},"misc":{"drawSVG":"off","selector":""},"bezier":[]},"left-slide-delay":{"settings":{"general":{"name":"left-slide-delay","duration":"70","offset":"","pin":"off","pushFollowers":"true","triggerHook":"0.61","vertical":"on"},"ease":{"delay":"","duration":"0.5","ease":""},"class":{"classToggleEnable":"off","classCSS":"bounce"}},"init":{"x":"-500"},"tween":{"x":"0"},"misc":{"drawSVG":"off","selector":""},"bezier":[]},"fade-in-delay":{"settings":{"general":{"name":"fade-in-delay","duration":"50","offset":"","pin":"off","pushFollowers":"true","triggerHook":"0.59","vertical":"on"},"ease":{"delay":"","duration":"0.5","ease":""},"class":{"classToggleEnable":"off","classCSS":"bounce"}},"init":{"opacity":"0"},"tween":{"opacity":"1"},"misc":{"drawSVG":"off","selector":""},"bezier":[]},"fade-in-immediate":{"settings":{"general":{"name":"fade-in-immediate","duration":"50","offset":"","pin":"off","pushFollowers":"true","triggerHook":"0.71","vertical":"on"},"ease":{"delay":"","duration":"0.5","ease":""},"class":{"classToggleEnable":"off","classCSS":"bounce"}},"init":{"opacity":"0"},"tween":{"opacity":"1"},"misc":{"drawSVG":"off","selector":""},"bezier":[]},"slide-from-right":{"settings":{"general":{"name":"slide-from-right","duration":"50","offset":"","pin":"off","pushFollowers":"true","triggerHook":"0.71","vertical":"on"},"ease":{"delay":"","duration":"0.5","ease":""},"class":{"classToggleEnable":"off","classCSS":"bounce"},"scene_id":"52"},"init":{"x":"500","opacity":"0"},"tween":{"x":"0","opacity":"1"},"misc":{"drawSVG":"off","selector":""},"bezier":[]},"slide-from-left":{"settings":{"general":{"name":"slide-from-left","duration":"50","offset":"","pin":"off","pushFollowers":"true","triggerHook":"0.71","vertical":"on"},"ease":{"delay":"","duration":"0.5","ease":""},"class":{"classToggleEnable":"off","classCSS":"bounce"},"scene_id":"51"},"init":{"x":"-500","opacity":"0"},"tween":{"x":"0","opacity":"1"},"misc":{"drawSVG":"off","selector":""},"bezier":[]},"slide-up-scale-up":{"settings":{"general":{"name":"slide-up-scale-up","duration":"30","offset":"","pin":"off","pushFollowers":"true","triggerHook":"0.71","vertical":"on"},"ease":{"delay":"","duration":"0.5","ease":""},"class":{"classToggleEnable":"off","classCSS":"bounce"}},"init":{"y":"500","scaleX":"0","scaleY":"0"},"tween":{"y":"0","z":"0","scaleX":"1","scaleY":"1"},"misc":{"drawSVG":"off","selector":""},"bezier":[]}};
/* ]]> */