$(document).ready(function () {
    $(".btn-toggle-js").on('click', function(){
        $(this).parent().parent().find('.tbl-toggle').slideToggle();
    });

    $(".btn-popup").click(function(){
        $('#bg-popup').fadeIn(300);
        $('#box_1').fadeIn(300);
        $('.wrap-form-popup').fadeIn(300);
    });

    $('.close-btn-popup, .wrap-form-popup').click(function (e) {
        e.stopPropagation();
        $('#bg-popup').fadeOut(300);
        $('#box_1').fadeOut(300);
        $('.wrap-form-popup').fadeOut(300);
    });

    $('.wrap-form').click(function (e) {
        e.stopPropagation();
    });
});