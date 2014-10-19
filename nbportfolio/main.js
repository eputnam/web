/**
 * Created by ericputnam on 9/30/14.
 */

$(document).ready(function() {
    $('#title_main').hide().fadeIn(3000);
    $('.sections').hide();

    $('.headings').hover(function () {
        $(this).fadeTo('fast', .6);
    },
        function() {
        $(this).fadeTo('fast',1);
    });

    $('#title_paint').click(function () {
        if($('#div_about_main').css('opacity') > 0){
            $('#div_about_main').hide();
        }
        $('#div_paint_main').fadeToggle(1000);
    });

    $('#title_about').click(function () {
        if($('#div_paint_main').css('opacity') > 0){
            $('#div_paint_main').hide();
        }
        $('#div_about_main').fadeToggle(1000);
    });
});