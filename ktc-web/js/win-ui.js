$(document).ready(function() {
	$('.footer-menu h3').on('click touch', function () {
        $('.footer-menu h3').not(this).each(function(){
	        $(this).removeClass('active');
	    });
        $(this).toggleClass('active');
    });



});

//change header when scroll down.
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#head-trigger').position().top){
        $('#menu-global').addClass('mini-header');
    }else{
    	$('#menu-global').removeClass('mini-header');
    };
});

//for menu mobile
function myFunction() {
    var x = document.getElementById("scrolled-menu-responsive");
    if (x.style.opacity === "1") {
        x.style.opacity = "0";
    } else {
        x.style.opacity = "1";
    }
}

$(document).ready(function() {
	$('.menu-responsive-dropdown h3').on('click touch', function () {
        $('.menu-responsive-dropdown h3').not(this).each(function(){
	        $(this).removeClass('active');
	    });
        $(this).toggleClass('active');
    });

});
