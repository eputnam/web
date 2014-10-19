function displayChild() {
	$children = $(self).children().css('h2');
	$(self).click(function() {
		$(children).toggle('slow');
	});
}



$(document).ready(function() {
   
    //THE BAND
    $('#title_theband').click(function() {
		$('p').fadeIn('slow');
        $('#list_theband').toggle('slow');
    });
	
    $('#view_extband').click(function() {
		$('#view_extband').toggle('fast');
		$('#list_extband').toggle('slow');
    });
	
    $('#title_extband').click(function() {
		$('#view_extband').toggle('fast');
		$('#list_extband').toggle('slow');
    });
	
	//THE MUSIC
	$('#title_themusic').click(function() {
		// $('#list_themusic').toggle('slow');
		displayChild();
	});

	$('#title_sights').click(function() {
		$('#table_sights').toggle('slow');
	});
	
	$('#title_sounds').click(function() {
		$('#table_sounds').toggle('slow');
	});
	
	
	//THE MERCH
	$('#title_themerch').click(function() {
		$('.titles_themerch').toggle('slow');
	});
	
	
	//CONTACT US
	$('#title_contactus').click(function() {
		$('#form_contactus').toggle('slow');
	});
	
	

	 	//    $('#title_themusic').click(function() {
	// $('#title_sights').toggle('slow') {
	// 	$('table_sights').toggle('slow');
	// });
	// $('#title_sounds').toggle(function() {
	// 	$('table_sounds').toggle('slow');
	// });
	//     });

});