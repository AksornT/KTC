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
    $(".subcat + label").on('click touch', function () {
      $("#all-cat").prop('checked', false).checkboxradio('refresh');
    });
    $("#all-cat + label").on('click touch', function () {
      $(".subcat").prop('checked', false).checkboxradio('refresh');
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
        if (hash.length > 0) {
            navScrollTo(hash, 150);
        }
    });

    $("#nav-flexi-mobile a.nav-link, #nav-flexi-modal .nav a.nav-link").each(function (index, elem) {
        elem.addEventListener('touchend', function (event) {
            event.preventDefault();
            var hash = this.hash;
            if (hash.length > 0) {
                navScrollTo(hash, 100);
            }
            $("#nav-flexi-modal").modal("hide");
        }, {passive: false})
    });

    //global sub-nav sticky bar
    $('.sub-sticky a[href^="#"]').each(function (index, elem) {
        var touchHandler = function (event) {
            event.preventDefault();
            var hash = this.hash;
            var topOffset = $('#menu-global').innerHeight() + $('.sub-sticky').innerHeight();
            if (hash !== "#" && hash.length > 0) {
                navScrollTo(hash, topOffset);
            }
        };
        elem.addEventListener('click', touchHandler);
        elem.addEventListener('touchend', touchHandler, {passive: false});
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

    $("#sticky-modal a").each(function (index, elem) {
        elem.addEventListener('touchend', function (event) {
            event.preventDefault();
            var hash = this.hash;
            flexiNavScrollTo(hash, 100);
            $("#sticky-modal").modal("hide");
        }, {passive: false})
    });

    //for styling form
    $('.form-wrap input[type="text"], .form-wrap input[type="password"]').each(function(){
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
    $(".lang-wrap").on('click touch', function () {
      $(".lang-wrap").toggleClass('active');
    });

    //for favorite button
    $(".fav-btn").on('click touch', function () {
      $(this).toggleClass('active');
    });

    /* FILTER FORM */
    $('#filter-modal input').change(function(){
        var hasChecked = false;
        var checkedAll = true;
        $('#filter-modal').find('input').each(function(){
            if($(this).prop('checked')){
                hasChecked=true;
            }
            else{
                checkedAll=false;
            }
        });
        if(checkedAll){
            $('#filter-modal').find('.select-all-btn').attr('disabled', 'disabled');
        }
        else{
            $('#filter-modal').find('.select-all-btn').removeAttr('disabled');
        }
        if(hasChecked){
            $('#filter-modal').find('.submit-filter-btn').removeAttr('disabled');
            $('#filter-modal').find('.reset-btn').removeAttr('disabled');
        }
        else{
            $('#filter-modal').find('.submit-filter-btn').attr('disabled','disabled');
            $('#filter-modal').find('.reset-btn').attr('disabled', 'disabled');
        }
    });

    $('#filter-modal .select-all-btn').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#filter-modal').find('input').prop('checked', true).trigger('change'); 
    });

    $('#filter-modal .reset-btn').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#filter-modal').find('input').prop('checked', false).trigger('change'); 
    });

    $('.form-check-required input').change(function(){
        //Check if all required input has filled
        var filledAll = true;
        var form = $(this).parents('form');
        form.find('.required').each(function(){
            if($(this).is(':checkbox')){
                if(!$(this).prop('checked')){
                    filledAll = false;
                }  
            }
            else{
                if($(this).val().length <= 0){
                    filledAll = false;
                }  
            } 
        });
        if(filledAll) {
            form.find('.btn-submit-form').removeClass('disabled');
        }
        else {
            form.find('.btn-submit-form').addClass('disabled');
        }
    });

    $('.form-check-required input').keyup(function(){
        $(this).trigger('change');
    });  


    //for sort list in promotion
    var sortList = 0;
    $('#edit-my-link-modal .all-type-list').on('click touch', function (){
        if(sortList <= 3) {
            if ($(this).hasClass('active')) {
                $('.all-type-list').removeClass( "active" );
                sortList = 0;
                $('.list-number').text('');
                return false;
            } else {
                sortList = sortList + 1;
                $(this).addClass( "active" );
                $(this).find('.list-number').text(sortList);
                console.log(sortList);
                if(sortList == 4) {
                    $('.submit-btn').prop("disabled", false);
                } else {
                    $('.submit-btn').prop("disabled", true);
                }
                return false;
            } 
        } else {
            if ($(this).hasClass('active')) {
                $('.all-type-list').removeClass( "active" );
                sortList = 0;
                $('.list-number').text('');
                $('.submit-btn').prop("disabled", true);
                return false;
            }
        }

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

    //for anchor
    $('a[data-scroll="scroll"]').on('click touch', function (event) {
        event.preventDefault();
        var hash = this.hash;
        var offset = $(this).attr('data-offset') | 0;
        navScrollTo(hash, offset);
    });
    $('a[href="#"]').on('click touch', function (event) {
        event.preventDefault();
    });

    //discard credit cards in compare table
    $('.campare-table th .compare-cancel').on('click touch', function (event) {
        var indexZ = $(this).parent().parent().index();
        $(this).parent().parent().remove();
        $('.campare-table tbody tr').each(function(){
          $(this).find('td').eq( indexZ ).remove();
        });
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

//for chackbox
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("email");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

//for compare credit
function myFunction() {
    var x = document.getElementById("myCompare");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
