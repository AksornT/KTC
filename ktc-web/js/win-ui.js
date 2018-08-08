$(document).ready(function() {
	$('.footer-menu h3').on('click touch', function () {
        $('.footer-menu h3').not(this).each(function(){
	        $(this).removeClass('active');
	    });
        $(this).toggleClass('active');
    });

    $(".to-top").on('click touch', function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });


    //search-category selected
    $(".subcat-wrap label").on('click touch', function () {
      $(this).parent().siblings().prop("checked", false);
    });
    $(".search-cat-wrap > label").on('click touch', function () {
      $(".subcat-wrap input").prop("checked", false);
    });


    //profile
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
        $('.ghost-footer').addClass('active');
    }else{
        $('#menu-global').removeClass('mini-header');
        $('.ghost-footer').removeClass('active');
    };

//something appeared on footer
    if($(this).scrollTop()>=$('#foot-trigger').position().top){
        $('.ghost-footer').addClass('active-mobile');
    }else{
        $('.ghost-footer').removeClass('active-mobile');
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
