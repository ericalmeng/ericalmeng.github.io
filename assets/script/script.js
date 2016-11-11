$(document).ready(function() {
 // all your jQuery code goes in here!

 	//add class for social media
 	$(".home-social_media").addClass("clear");

 	//hovering for project
	$(".box1").one('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd', 
	function() {
	 	$(this).removeClass("box1");
	})

	$(".project-box").hover(function() {
		$(this).removeClass("box2");
		$(this).removeClass("box3");
		$(this).removeClass("box4");
		$(this).css("-webkit-transition:", "linear 0.2s");
		$(this).css("-moz-transition:", "linear 0.2s");
		$(this).css("-o-transition:", "linear 0.2s");
		$(this).css("-transition-transition:", "linear 0.2s");
		$(this).css("opacity", "1");
		$(this).css("cursor", "pointer");
		}, function() {
		$(this).css("opacity", "0.7");
	})
	
 	//hovering in nav
	$(".home-title .links-container .link").hover(function() {
		$(this).css("border-bottom", "1px solid #3A4750");
		$(this).css("color", "#3A4750");
		}, function() {
		$(this).css("border-bottom", "1px solid rgba(58,71,80,.4)");
		$(this).css("color", "#3A4750");
		$(this).css("text-decoration", "none");
	})

	// when click on projects, hide everything else
	$("#projects").click(function() {
		$(".about-text").hide();
		$(".drawings").hide();
		$(".resume").hide();
		$(".contact").hide();
		$(".projects").show();
	})

	// when click on resume, hide everything else
	$("#resume").click(function() {
		$(".resume").show();
		$(".about-text").hide();
		$(".drawings").hide();
		$(".projects").hide();
		$(".contact").hide();
	})

	// when click on contact, hide everything else
	$("#contact").click(function() {
		$(".about-text").hide();
		$(".projects").hide();
		$(".resume").hide();
		$(".drawings").hide();
		$(".contact").show();
	})

	//check url
	if (window.location.hash.indexOf("#projects") > -1) {
		$(".projects").show();
		$(".drawings").hide();
		$(".resume").hide();
		$(".contact").hide();
		$(".about-text").hide();
	}

	if (window.location.hash.indexOf("#resume") > -1) {
		$(".resume").show();
		$(".drawings").hide();
		$(".projects").hide();
		$(".contact").hide();
		$(".about-text").hide();
	}
	if (window.location.hash.indexOf("#contact") > -1) {
		$(".contact").show();
		$(".projects").hide();
		$(".resume").hide();
		$(".drawings").hide();
		$(".about-text").hide();
	}

});