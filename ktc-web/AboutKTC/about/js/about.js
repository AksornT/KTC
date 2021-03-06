
$(function(){
    var _h = $('.switch-popup'),
        _close = $('.close-popup');

    _h.click(function(e){
        e.preventDefault();
        var _numPopup = $(this).data('popup');
        $('.active-popup-'+_numPopup).addClass('show');
    });
    _close.click(function(e){
        e.preventDefault();
        $('.active-popup').removeClass('show');
    });
});

$(function(){
    var _box = $(".px-box");
    $(".fxPopup").click(function(e){
        e.preventDefault();
        document.body.scrollTop = 0;
        _box.addClass("showPopup");
        $($(this).attr('href')).addClass("show");
    });
    $(".fx-cls").click(function(e){
        e.preventDefault();
        $(".px-box-popup").removeClass("show")
        _box.removeClass("showPopup");
    });
    $(".fx-prev").click(function(e){
        e.preventDefault();
        $(this).closest('.px-box-popup').removeClass("show").prev().addClass("show")
    });
    $(".fx-next").click(function(e){
        e.preventDefault();
        $(this).closest('.px-box-popup').removeClass("show").next().addClass("show")
    })
})