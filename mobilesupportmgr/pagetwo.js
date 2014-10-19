console.log("hello");

$p = $('<ul><li>ERROR</li></ul>');

$(document).ready(function() {
	$('p').hide();
	$('ul').hover(function() {
        $('.fade').fadeTo('fast',0.25);
    	},
    	function() {
       	 $('.fade').fadeTo('fast',1);
   		});
	
    $('ul li').hover(function() {
        $(this).fadeTo('fast',0.75);
	    },
	    function() {
	        $(this).fadeTo('fast',1);
	    });
	
    $('#button1').click(function() {
        $('p').slideDown('fast');
    });
});