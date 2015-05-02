$(document).ready(function () {
    $(".btn-toggle-js").on('click', function(){
        $(this).parent().parent().find('.tbl-toggle').slideToggle();
    });
});