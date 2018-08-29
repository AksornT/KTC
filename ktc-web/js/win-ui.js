$(document).ready(function() {
    $('#menu-global').addClass('mini-header alway-mini');
    $('#menu-global.expand-menu').removeClass('mini-header alway-mini');
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
    var navScrollTo = function(elementId, offset) {
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
        navScrollTo(hash, 150);
    });

    $("#nav-flexi-mobile a.nav-link, #nav-flexi-modal .nav a.nav-link").each(function (index, elem) {
        elem.addEventListener('touchend', function (event) {
            event.preventDefault();
            var hash = this.hash;
            navScrollTo(hash, 100);
            $("#nav-flexi-modal").modal("hide");
        }, {passive: false})
    });
    
    //global sub-nav sticky bar
    $('.sub-sticky a').on('click touch', function (event) {
        event.preventDefault();
        var hash = this.hash;
        if (hash !== "#") {
            navScrollTo(hash);
        }
    });
    $('.sub-sticky a').each(function (index, elem) {
        elem.addEventListener('touchend', function (event) {
            event.preventDefault();
            var hash = this.hash;
            if (hash !== "#") {
                navScrollTo(hash);
            }
        }, {passive: false})
    });


    //Sticky page nav
    var stickyNavScrollTo = function(elementId, offset) {
        offset = offset == null ? 0 : offset;
        $('html, body').animate({
            scrollTop: $(elementId).offset().top - offset
        }, 800);
    };

    $("body").scrollspy({target: ".sub-sticky", offset: 180});

    $('body').on('activate.bs.scrollspy', function (event) {
        //sync scrollspy to other menu
        var currentSection = event.target.firstElementChild.hash;
        $("#sticky-modal li a").each(function(i, el) {
            var $el = $(el);
            if (el.firstElementChild.hash === currentSection) {
                $el.addClass("active");
            } else {
                $el.removeClass("active");
            }
            console.log(els.firstElementChild.hash, currentSection);
        });
    });

    $(".sub-sticky .sticky-left a").on('click touch', function (event) {
        event.preventDefault();
        var hash = this.hash;
        stickyNavScrollTo(hash, 150);
    });


    $("#sticky-modal a").each(function (index, elem) {
        elem.addEventListener('touchend', function (event) {
            event.preventDefault();
            var hash = this.hash;
            flexiNavScrollTo(hash, 100);
            $("#sticky-modal").modal("hide");
        }, {passive: false})
    });

    //for styling form 
    $('.form-wrap [type="text"]').each(function(){
      var fLabel = $(this).attr('placeholder');
      $(this).after( '<label>' + fLabel + '</label>' );
      $(this).focusout(function(){
        if ($(this).val().length == 0){
            $(this).removeClass("hasText");
        } else {
            $(this).addClass("hasText");
        }
      });
     });

    //for switch language
    $(".lang-footer").on('click touch', function () {
      $(".lang-wrap").toggleClass('active');
    });


    //for search
    $(".suggess-list").on('click touch', function () {
      $("#fake-result").empty();
      $(this).clone().appendTo( "#fake-result" );
      var searchtext = $(this).find("p").text();
      $( "#search" ).val( searchtext );
      $("#suggest-box").blur();
    });
    $("#search").on('click touch', function () {
      $("#fake-result").empty();
    });
});

//change header when scroll down.
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#head-trigger').position().top){
        $('#menu-global').addClass('mini-header');
        $('.ghost-footer').addClass('active');
    }else{
        $('#menu-global').removeClass('mini-header');
        $('#menu-global.expand-menu .scrolled-menu > li').removeClass('active');
        $('.ghost-footer').removeClass('active');
    };

    var stickyTrigger = $('#sticky-trigger');
    var isStickyTriggerExisted = stickyTrigger.length > 0;
    if(isStickyTriggerExisted &&
        $(this).scrollTop() >= stickyTrigger.position().top){
        $('.sub-sticky').addClass('active');
    }else{
        $('.sub-sticky').removeClass('active');
    }

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
