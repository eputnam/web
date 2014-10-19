function navHover() {
	
	
}



$(document).ready(function () {
	
	$('li').hover(function() {
		
		var $gallery = $('#div_gallery');
		var $baby = $("<img id='baby' class='img_gallery' src='img/gal_baby.jpg'>");
		var $portrait = $("<img class='img_gallery' src='img/gal_portrait.jpg'>");
		var $engage = $("<img class='img_gallery' src='img/gal_engagement.jpg'>");
		var $wedding = $("<img class='img_gallery' src='img/gal_wedding.jpg'>");
		
		if($(this).text()=='Babies'){
			$($gallery).empty();
			$($gallery).append($baby);
			$('#baby').fadeIn('slow');
		}
		if($(this).text()=='Portraits'){
			$($gallery).empty();
			$($gallery).append($portrait);
		}
		if($(this).text()=='Engagements'){
			$($gallery).empty();
			$($gallery).append($engage);
		}
		if($(this).text()=='Weddings'){
			$($gallery).empty();
			$($gallery).append($wedding);
		}	
	});

});