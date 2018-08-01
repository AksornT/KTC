$(document).ready(function() {


});
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#head-trigger').position().top){
        $('#menu-global').addClass('mini-header');
        $('.open-on-top').hide();
    };

    if($(this).scrollTop()<= 0){
    	$('#menu-global').removeClass('mini-header');
    	$('.open-on-top').fadeIn();
    };
});