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
    var flexiNavScrollTo = function(elementId, offset) {
        offset = offset == null ? 0 : offset;
        $('html, body').animate({
            scrollTop: $(elementId).offset().top - offset
        }, 800);
    };
    $("body").scrollspy({target: "#nav-flexi-navbar", offset: 180});
    $('body').on('activate.bs.scrollspy', function (event) {
        //sync scrollspy to other menu
        var currentSection = event.target.firstElementChild.hash;
        $("#nav-flexi-modal li.nav-item").each(function(i, el) {
            var $el = $(el);
            if (el.firstElementChild.hash === currentSection) {
                $el.addClass("active");
            } else {
                $el.removeClass("active");
            }
            console.log(el.firstElementChild.hash, currentSection);
        });
    });
    $("#nav-flexi a.nav-link").on('click touch', function (event) {
        event.preventDefault();
        var hash = this.hash;
        flexiNavScrollTo(hash, 150);
    });

    $("#nav-flexi-mobile a.nav-link, #nav-flexi-modal .nav a.nav-link").each(function (index, elem) {
        elem.addEventListener('touchend', function (event) {
            event.preventDefault();
            var hash = this.hash;
            flexiNavScrollTo(hash, 100);
            $("#nav-flexi-modal").modal("hide");
        }, {passive: false})
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
    var navFlexiScrollTrigger = $('#nav-flexi-scroll-trigger');
    var navFlexiMobileScrollTrigger = $('#nav-flexi-mobile-scroll-trigger');
    if(navFlexiScrollTrigger.length > 0 && $(this).scrollTop() >= navFlexiScrollTrigger.offset().top) {
        $('#nav-flexi').addClass('fixed');
    } else {
        $('#nav-flexi').removeClass('fixed');
        $('#nav-flexi-navbar li.nav-item:first-child').addClass('active');
    }

    if(navFlexiMobileScrollTrigger.length > 0 && $(this).scrollTop() >= navFlexiMobileScrollTrigger.offset().top) {
        $('#nav-flexi-mobile .nav.mini').addClass('show');
    } else {
        $('#nav-flexi-mobile .nav.mini').removeClass('show');
        // $('#nav-flexi-mobile .nav.mini li.nav-item:first-child').addClass('active');
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
