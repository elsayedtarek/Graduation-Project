
////show menu in small devices
$(function(){
    $('#menu-btn').click(function(){
        $('#list').toggleClass('hidden');
 });
    
});

////start here button handller
$('.start-btn').click(function(){
    $('html,body').animate({
        scrollTop: $('.start').offset().top},'slow'
    );
});