$(document).ready(function() {
 // all your jQuery code goes in here!

 	//add class
 	$(".home-social_media").addClass("clear");
 	$(".title-page h1").addClass("load");
 	$(".title-page h2").addClass("load");
 	$(".title-page .nav").addClass("load");
 	$(".about-text").addClass("load");
 	$(".resume").addClass("load");
 	$(".contact .link1").addClass("load");
 	$(".contact .link2").addClass("load");
 	$(".contact .link3").addClass("load");

 	//hovering in nav
	$(".title-page .nav a").hover(function() {
		$(this).css("color", "#20272c");
		}, function() {
		$(this).css("color", "#3A4750");
	})

	// when click on projects, hide everything else
	$(".lk#p").click(function() {
		$(".about-text").hide();
		$(".resume").hide();
		$(".contact").hide();
		$(".projects").show();
	})
	$(".lk#p").click(function() {
		// location.reload();
	})
	// when click on resume, hide everything else
	$(".lk#r").click(function() {
		$(".resume").show();
		$(".about-text").hide();
		$(".projects").hide();
		$(".contact").hide();
		// location.reload();
	})
	$(".lk#r").click(function() {
		// location.reload();
	})

	// when click on contact, hide everything else
	$(".lk#c").click(function() {
		$(".about-text").hide();
		$(".projects").hide();
		$(".resume").hide();
		$(".contact").show();
		// location.reload();
	})

	//check url
	if (window.location.hash.indexOf("#project") > -1) {
		$(".projects").show();
		$(".resume").hide();
		$(".contact").hide();
		$(".about-text").hide();
		// location.load();
	}

	if (window.location.hash.indexOf("#resume") > -1) {
		$(".resume").show();
		$(".projects").hide();
		$(".contact").hide();
		$(".about-text").hide();
		// location.load();
	}
	if (window.location.hash.indexOf("#contact") > -1) {
		$(".contact").show();
		$(".projects").hide();
		$(".resume").hide();
		$(".about-text").hide();
		// location.load();
	}

	//checking the validation of url
	function validateUrl(url)
	{
	    var pattern = '^((ht|f)tp(s?)\:\/\/|~/|/)?([\w]+:\w+@)?([a-zA-Z]{1}([\w\-]+\.)+([\w]{2,5}))(:[\d]{1,5})?((/?\w+/)+|/?)(\w+\.[\w]{3,4})?((\?\w+=\w+)?(&\w+=\w+)*)?';

	    if(url.match(pattern))
	    {
	        return true;
	    }
	    else
	    {
	        return false;
	    }
	}

});
