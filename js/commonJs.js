$(document).ready(function () {
    $(".btn-toggle-js").on('click', function(){
        $(this).parent().parent().find('.tbl-toggle').slideToggle();
    });

    $("body").append('<span class="wrap-form-ajax"></span>');
    $('.wrap-form-ajax').load("form.html #form-ajax", function(){
        $(".btn-popup").click(function(){
            $('body').css('overflow','hidden');
            $('#bg-popup').fadeIn(300);
            $('#box_1').fadeIn(300);
            $('.wrap-form-popup').fadeIn(300);
        });

        $('.close-btn-popup, .wrap-form-popup').click(function (e) {
            $('body').css('overflow','visible');

            e.stopPropagation();
            $('#bg-popup').fadeOut(300);
            $('#box_1').fadeOut(300);
            $('.wrap-form-popup').fadeOut(300);
        });

        $('.wrap-form').click(function (e) {
            e.stopPropagation();
        });
    });
});