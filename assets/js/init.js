$(document).ready(function () {
	$('.tap-target').tapTarget();
	$('.tap-target').tapTarget('open');
	if (localStorage.getItem('cookieconsent') === 'true') {
		$('#cookies').hide();
	}
	$('#cookies').on('click', function(event) {
		localStorage.setItem('cookieconsent', 'true');
		$('#cookies a').addClass("scale-out");
	});
	
	$('.fixed-action-btn').floatingActionButton({
		direction: 'left', 
		hoverEnabled: false
	});


	$('.sidenav').sidenav();
    $('.parallax').parallax();
/*
     $('.button-collapse').sideNav();
     $('.parallax').parallax();
     $('.collapsible').collapsible();
     $('.carousel.carousel-slider').carousel({fullWidth: true});
     $('.materialboxed').materialbox();
     $('.scrollspy').scrollSpy();
*/

}); // end of document ready
