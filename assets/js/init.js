$(document).ready(function () {
	$('.fixed-action-btn').floatingActionButton({
		direction: 'left', 
		hoverEnabled: false
	});

	$('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();

    let searchParams = new URLSearchParams(window.location.search);
    let param = searchParams.get('collapse');
    if (param !== null) {
    	console.log("inside");
    	$('#' + param).addClass('active');
    }
    $('.collapsible').collapsible();
    
/*
     $('.button-collapse').sideNav();
     $('.parallax').parallax();
     $('.collapsible').collapsible();
     $('.carousel.carousel-slider').carousel({fullWidth: true});
     $('.materialboxed').materialbox();
     $('.scrollspy').scrollSpy();
*/

}); // end of document ready
