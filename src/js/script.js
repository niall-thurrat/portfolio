$(window).on("load", function() {

	$(".loader .inner").fadeOut(750, function() {
		$(".loader").fadeOut(500);
	});

  $(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
})

$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	const typed = new Typed(".typed", {
		strings: ["Web Developer", "Programmer", "Full stack"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	const slider = tns({
		container: '.my-slider',
		items: 1,
		slideBy: 3,
		controls: true,
		controlsPosition: "bottom",
		controlsText: [ '<', '>'],
		autoplayButtonOutput: false,
		nav: false,
		speed: 3000,
		autoplay: true,
		autoplayTimeout: 6000,
		responsive: {
			400: {
				items: 2
			},
			640: {
				items: 3
			},
			1000: {
				items: 4
			},
			1400: {
				items: 5
			}
		}
	});

	$("[data-fancybox]").fancybox();

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		const selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});

	$(".navbar li a").click(function(e) {
		e.preventDefault();

		const targetElement = $(this).attr("href");
		const targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
	});

	const nav = $(".navbar");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {
		let body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}
});