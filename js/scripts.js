$(document).ready(function(){
	var carouselList = $("#carousel ul");
	var slideIndex = 1;
	var dotsNumber = $('.dot').length;

	$('.next').click(nextSlide);
	$('.prev').click(previousSlide);	

	function nextSlide() {
			carouselList.animate({'marginLeft': -525}, 500, moveFirstSlideToEnd);
			slideIndex++;
			checkSlide();
	}

	function previousSlide() {
			moveLastSlideToStart();
			carouselList.animate({'marginLeft': 0}, 500);
			slideIndex--;
			checkSlide();
	}

	function moveFirstSlideToEnd () {
		carouselList.find("li:last").after(carouselList.find("li:first"));
		carouselList.css({marginLeft:0});
	}

	function moveLastSlideToStart () {
		$('.slides').css('margin-left','-525px');
		carouselList.find("li:first").before(carouselList.find("li:last"));
	}

	function checkSlide () {
		if (slideIndex > dotsNumber) {
			slideIndex = 1;
		} else if (slideIndex < 1) {
			slideIndex = dotsNumber;
		}

		$('.dot').removeClass('active');
		$('#dot-' + slideIndex).addClass('active');
	}

	$('.dot').each(function(index, element) {
		$(element).click(function() {
			var diff = index + 1 - slideIndex;
			if(diff > 0) {
				for (var i = 0; i < diff; i++) {
					nextSlide();
				}
			} else if (diff < 0) {
				for (var i = 0; i > diff; i--) {
					previousSlide();
				}				
			}
		})
	});
});


			