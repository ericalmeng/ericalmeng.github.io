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
	$("#project").click(function() {
		$(".about-text").hide();
		$(".resume").hide();
		$(".contact").hide();
		$(".projects").show();
		location.reload();
	})

	// when click on resume, hide everything else
	$("#r").click(function() {
		$(".resume").show();
		$(".about-text").hide();
		$(".projects").hide();
		$(".contact").hide();
		location.reload();
	})

	// when click on contact, hide everything else
	$("#c").click(function() {
		$(".about-text").hide();
		$(".projects").hide();
		$(".resume").hide();
		$(".contact").show();
		location.reload();
	})

	//check url
	if (window.location.hash.indexOf("#project") > -1) {
		$(".projects").show();
		$(".resume").hide();
		$(".contact").hide();
		$(".about-text").hide();
		// location.load();
	}

	if (window.location.hash.indexOf("#r") > -1) {
		$(".resume").show();
		$(".projects").hide();
		$(".contact").hide();
		$(".about-text").hide();
		// location.load();
	}
	if (window.location.hash.indexOf("#c") > -1) {
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