$(document).ready(function () {
    $(".btn-toggle-js").on('click', function(){
        $(this).parent().parent().find('.tbl-toggle').slideToggle();
    });

    $(".btn-popup").click(function(){
        $('body').css('overflow','hidden');

        $('#bg-popup, .wrap-form-popup').css('top', $(window).scrollTop());

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

    $('#animate-top').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    });

    $('.side-bar > li').on('click', function(){
        $this = $(this);

        $this.children('.sub-menu-side-bar').slideToggle(500, function(){
            $this.toggleClass('active');
        });
    });

    $('.question-js').on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().children('p').slideToggle();
    });
});