$(document).ready(function(){
	var carouselList = $("#carousel ul");
	var slideIndex = 1;


	$('.next').click(function() {
			carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
			slideIndex++;
			nextSlide(slideIndex);
			console.log(slideIndex);
			
	});

	$('.prev').click(function() {
			$('.slides').css('margin-left','-400px');
			carouselList.find("li:first").before(carouselList.find("li:last"));
			carouselList.animate({'marginLeft':0}, 500);
			slideIndex--;
			nextSlide(slideIndex);
			console.log(slideIndex);
	});

	function moveFirstSlide () {
		carouselList.find("li:last").after(carouselList.find("li:first"));
		carouselList.css({marginLeft:0});
	}

	function nextSlide (n) {
		if (slideIndex>5) {
			slideIndex=1;
	    	
		} else if (slideIndex<1) {
			slideIndex=5;
		}

		switch (slideIndex) {
		  case 1:
		    $('#dot-1').addClass("active");
		    $('#dot-2').removeClass("active");
			$('#dot-3').removeClass("active");
			$('#dot-4').removeClass("active");
			$('#dot-5').removeClass("active");
		  break;
		  case 2:
		    $('#dot-2').addClass("active");
		    $('#dot-1').removeClass("active");
			$('#dot-3').removeClass("active");
			$('#dot-4').removeClass("active");
			$('#dot-5').removeClass("active");
		  break;
		  case 3:
		    $('#dot-3').addClass("active");
		    $('#dot-2').removeClass("active");
			$('#dot-1').removeClass("active");
			$('#dot-4').removeClass("active");
			$('#dot-5').removeClass("active");
		  break;
		  case 4:
		    $('#dot-4').addClass("active");
		    $('#dot-2').removeClass("active");
			$('#dot-3').removeClass("active");
			$('#dot-1').removeClass("active");
			$('#dot-5').removeClass("active");
		  break;
		  case 5:
		    $('#dot-5').addClass("active");
		    $('#dot-2').removeClass("active");
			$('#dot-3').removeClass("active");
			$('#dot-4').removeClass("active");
			$('#dot-1').removeClass("active");
		  break;
		}
	}

	$('#dot-1').click(function() {
		switch (slideIndex) {
		  case 2:
		  	for (var i = 0; i < 4; i++) {
		  		carouselList.animate({'marginLeft':-400}, 200, moveFirstSlide);
		  	}
		    slideIndex=1;
		    $('#dot-1').addClass("active");
		    $('#dot-2').removeClass("active");
		  break;
		  case 3:
		    for (var i = 0; i < 3; i++) {
		  		carouselList.animate({'marginLeft':-400}, 300, moveFirstSlide);
		  	}
		    $('#dot-1').addClass("active");
		    $('#dot-3').removeClass("active");
		    slideIndex=1;
		  break;
		  case 4:		    
		    for (var i = 0; i < 2; i++) {
		  		carouselList.animate({'marginLeft':-400}, 400, moveFirstSlide);
		  	}
		    $('#dot-1').addClass("active");
		    $('#dot-4').removeClass("active");
		    slideIndex=1;
		  break;
		  case 5:		    
		    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		    $('#dot-1').addClass("active");
		    $('#dot-5').removeClass("active");
		    slideIndex=1;
		  break;
		}	

	});

	$('#dot-2').click(function() {
		switch (slideIndex) {
		  case 3:
		  	for (var i = 0; i < 4; i++) {
		  		carouselList.animate({'marginLeft':-400}, 200, moveFirstSlide);
		  	}
		    slideIndex=2;
		    $('#dot-2').addClass("active");
		    $('#dot-3').removeClass("active");
		  break;
		  case 4:
		    for (var i = 0; i < 3; i++) {
		  		carouselList.animate({'marginLeft':-400}, 300, moveFirstSlide);
		  	}
		    $('#dot-2').addClass("active");
		    $('#dot-4').removeClass("active");
		    slideIndex=2;
		  break;
		  case 5:		    
		    for (var i = 0; i < 2; i++) {
		  		carouselList.animate({'marginLeft':-400}, 400, moveFirstSlide);
		  	}
		    $('#dot-2').addClass("active");
		    $('#dot-5').removeClass("active");
		    slideIndex=2;
		  break;
		  case 1:		    
		    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		    $('#dot-2').addClass("active");
		    $('#dot-1').removeClass("active");
		    slideIndex=2;
		  break;
		}	

	});

		$('#dot-3').click(function() {
		switch (slideIndex) {
		  case 4:
		  	for (var i = 0; i < 4; i++) {
		  		carouselList.animate({'marginLeft':-400}, 200, moveFirstSlide);
		  	}
		    slideIndex=3;
		    $('#dot-3').addClass("active");
		    $('#dot-4').removeClass("active");
		  break;
		  case 5:
		    for (var i = 0; i < 3; i++) {
		  		carouselList.animate({'marginLeft':-400}, 300, moveFirstSlide);
		  	}
		    $('#dot-3').addClass("active");
		    $('#dot-5').removeClass("active");
		    slideIndex=3;
		  break;
		  case 1:		    
		    for (var i = 0; i < 2; i++) {
		  		carouselList.animate({'marginLeft':-400}, 400, moveFirstSlide);
		  	}
		    $('#dot-3').addClass("active");
		    $('#dot-1').removeClass("active");
		    slideIndex=3;
		  break;
		  case 2:		    
		    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		    $('#dot-3').addClass("active");
		    $('#dot-2').removeClass("active");
		    slideIndex=3;
		  break;
		}	

	});

	$('#dot-4').click(function() {
		switch (slideIndex) {
		  case 5:
		  	for (var i = 0; i < 4; i++) {
		  		carouselList.animate({'marginLeft':-400}, 200, moveFirstSlide);
		  	}
		    slideIndex=4;
		    $('#dot-4').addClass("active");
		    $('#dot-5').removeClass("active");
		  break;
		  case 1:
		    for (var i = 0; i < 3; i++) {
		  		carouselList.animate({'marginLeft':-400}, 300, moveFirstSlide);
		  	}
		    $('#dot-4').addClass("active");
		    $('#dot-1').removeClass("active");
		    slideIndex=4;
		  break;
		  case 2:		    
		    for (var i = 0; i < 2; i++) {
		  		carouselList.animate({'marginLeft':-400}, 400, moveFirstSlide);
		  	}
		    $('#dot-4').addClass("active");
		    $('#dot-2').removeClass("active");
		    slideIndex=4;
		  break;
		  case 3:		    
		    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		    $('#dot-4').addClass("active");
		    $('#dot-3').removeClass("active");
		    slideIndex=4;
		  break;
		}	

	});

	$('#dot-5').click(function() {
		switch (slideIndex) {
		  case 1:
		  	for (var i = 0; i < 4; i++) {
		  		carouselList.animate({'marginLeft':-400}, 200, moveFirstSlide);
		  	}
		    slideIndex=5;
		    $('#dot-5').addClass("active");
		    $('#dot-1').removeClass("active");
		  break;
		  case 2:
		    for (var i = 0; i < 3; i++) {
		  		carouselList.animate({'marginLeft':-400}, 300, moveFirstSlide);
		  	}
		    $('#dot-5').addClass("active");
		    $('#dot-2').removeClass("active");
		    slideIndex=5;
		  break;
		  case 3:		    
		    for (var i = 0; i < 2; i++) {
		  		carouselList.animate({'marginLeft':-400}, 400, moveFirstSlide);
		  	}
		    $('#dot-5').addClass("active");
		    $('#dot-3').removeClass("active");
		    slideIndex=5;
		  break;
		  case 4:		    
		    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		    $('#dot-5').addClass("active");
		    $('#dot-4').removeClass("active");
		    slideIndex=5;
		  break;
		}	

	});

});


			