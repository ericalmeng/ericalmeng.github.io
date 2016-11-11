$(document).ready(function() {
 // all your jQuery code goes in here!

 	//add class for social media
 	$(".home-social_media").addClass("clear");
	
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

	// when click on drawings, hide everything else
	// $("#drawings").click(function() {
	// 	$(".about-text").hide();
	// 	$(".projects").hide();
	// 	$(".resume").hide();
	// 	$(".contact").hide();
	// 	$(".drawings").show();
	// })

	// when click on resume, hide everything else
	$("#resume").click(function() {
		// if ($(window).width() <= 720) {
  //  			$(".resume img").hide();
  //  			$(".resume a").show();
		// } else {
		// 	$(".resume").show();
		// }
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

	//check url try using switch statement but it didn't work
	// var param;

	// switch(window.location.hash.indexOf(param) > -1) {
 //    case "#projects":
 //        $(".about-text").hide();
 //        $(".projects").show();
 //        break;
 //    case "#drawings":
 //        $(".about-text").hide();
 //        $(".drawings").show();
 //        break;
 //    case "#resume":
 //        $(".about-text").hide();
 //        $(".resume").show();
 //        break;
 //    case "#contact":
 //        $(".about-text").hide();
 //        $(".contact").show();
 //        break;
 //    default:
 //        $(".projects").hide();
	// 	$(".drawings").hide();
	// 	$(".resume").hide();
	// 	$(".contact").hide();
	// }

	//check url
	if (window.location.hash.indexOf("#projects") > -1) {
		$(".projects").show();
		$(".drawings").hide();
		$(".resume").hide();
		$(".contact").hide();
		$(".about-text").hide();
	}
	// if (window.location.hash.indexOf("#drawings") > -1) {
	// 	$(".drawings").show();
	// 	$(".projects").hide();
	// 	$(".resume").hide();
	// 	$(".contact").hide();
	// 	$(".about-text").hide();
	// }
	if (window.location.hash.indexOf("#resume") > -1) {
		// if ($(window).width() <= 720) {
  //  			$(".resume img").hide();
  //  			$(".resume a").show();
		// } else {
		// 	$(".resume").show();
		// }
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