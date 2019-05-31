$(function() {
	$(".Chrome-bg,.Chrome").stop().fadeIn();
	$(".closeBtn").click(function(e) {
		$(".Chrome-bg,.Chrome").stop().fadeOut()
	});
	$(".scrollUp").hide();

	function myFn(par1) {
		$(".nav ul li").eq(par1).addClass("cur").siblings().removeClass("cur")
	}
	$(window).scroll(function(e) {
		var windowTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var skillHeight = $(".skill").offset().top;
		skillHeight = skillHeight -500;
		if(windowTop > windowHeight) {
			$(".scrollUp").show();
			$("header").addClass("header01");
			$(".nav ul li .navFont2").addClass("navFont3")
		} else {
			$(".scrollUp").hide();
			$("header").removeClass("header01");
			$(".nav ul li .navFont2").removeClass("navFont3")
		}
		if(windowTop >= skillHeight) {
			$(".skiCon").addClass("skiCon_cur");
			$(".padSkill_left").addClass("padS_cur");
			$(".padSkill_right").addClass("padSR_cur")
		} else {
			$(".skiCon").removeClass("skiCon_cur");
			$(".padSkill_left").removeClass("padS_cur");
			$(".padSkill_right").removeClass("padSR_cur")
		}
		if(windowTop >= $(".louCeng").eq(4).offset().top) {
			myFn(4)
		} else {
			if(windowTop >= $(".louCeng").eq(3).offset().top) {
				myFn(3)
			} else {
				if(windowTop >= $(".louCeng").eq(2).offset().top) {
					myFn(2)
				} else {
					if(windowTop >= $(".louCeng").eq(1).offset().top) {
						myFn(1)
					} else {
						if(windowTop >= $(".louCeng").eq(0).offset().top) {
							myFn(0)
						}
					}
				}
			}
		}
	});
	$(".scrollUp").click(function() {
		$("body,html").animate({
			"scrollTop": "0"
		}, 800)
	});
	$(".nav ul li").click(function(e) {
		$(this).addClass("cur").siblings().removeClass("cur");
		var jamp = $(".louCeng").eq($(this).index()).offset().top;
		$("body,html").animate({
			"scrollTop": jamp + "px"
		}, 300)
	});
	$(".navM ul li").click(function() {
		var jamp = $(".louCeng").eq($(this).index()).offset().top;
		$("html,body").animate({
			"scrollTop": jamp + "px"
		}, 300);
		$(".navBtn").removeClass("navShow");
		$(".navM").slideUp()
	});
	$(".nav ul li:first,.navM ul li:first").click(function(e) {
		$("body,html").animate({
			"scrollTop": "0"
		}, 300)
	});
	$(".navBtn").click(function() {
		if($(this).hasClass("navShow")) {
			$(this).removeClass("navShow");
			$(".navM").slideUp()
		} else {
			$(this).addClass("navShow");
			$(".navM").slideDown()
		}
		return false
	});
	$(".navBtn2").click(function() {
		if($(this).hasClass("navShow")) {
			$(this).removeClass("navShow");
			$(".nav").animate({
				"left": "0",
				opacity: "show"
			})
		} else {
			$(this).addClass("navShow");
			$(".nav").animate({
				"left": "50px",
				opacity: "hide"
			})
		}
		return false
	})
});