$(document).ready(function() {
	$('table').hide();
	// $('ul').hover(function() {
	//         $('.fade').fadeTo('fast',0.10);
	//     	},
	//     	function() {
	//        	 $('.fade').fadeTo('fast',1);
	//    		});
	
    $('ul li').hover(function() {
        $(this).fadeTo('fast',0.75);
	    },
	    function() {
	        $(this).fadeTo('fast',1);
	    });
	
    $('#button1').click(function() {
        $('table').slideToggle('slow');
    });
});