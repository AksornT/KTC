$(document).ready(function() {


});
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#head-trigger').position().top){
        $('#menu-global').addClass('mini-header');
    }else{
    	$('#menu-global').removeClass('mini-header');
    };
});