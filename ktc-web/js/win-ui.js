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

    //flexi page nav
    $("body").scrollspy({target: "#nav-flexi-navbar", offset: 180});
    $("#nav-flexi a.nav-link").on('click touch', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 150
        }, 800);
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

    //flexi navbar
    if($(this).scrollTop() >= $('#nav-flexi-scroll-trigger').offset().top) {
        $('#nav-flexi').addClass('fixed');
    } else {
        $('#nav-flexi').removeClass('fixed');
        $('#nav-flexi-navbar li.nav-item:first-child').addClass('active');
    }
});

//for menu mobile


$(document).ready(function() {
	$('.menu-responsive-dropdown h3').on('click touch', function () {
        $('.menu-responsive-dropdown h3').not(this).each(function(){
	        $(this).removeClass('active');
	    });
        $(this).toggleClass('active');
    });

    $('body').on('click touch', function (e) {
        $('.scrolled-menu > li').removeClass('active');
        $('.login-btn.logged-in').removeClass('active');
    });
    $('.scrolled-menu > li').on('click touch', function (e) {
        e.stopPropagation();
        $('.scrolled-menu > li').not(this).each(function(){
            $(this).removeClass('active');
        });
        $(this).toggleClass('active');
        $('.login-btn.logged-in').removeClass('active');
    });
    $('.login-btn.logged-in').on('click touch', function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.scrolled-menu > li').removeClass('active');
    });

    $('.menu-mobile.only-mobile').on('click touch', function () {
        $('#scrolled-menu-responsive').addClass('active');
    });
    $('.menu-resp-close').on('click touch', function () {
        $('#scrolled-menu-responsive').removeClass('active');
    });

});
