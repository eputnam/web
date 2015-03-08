
$(document).ready(function() {
	
	var music = $(document.getElementById('header_music'));
	var musicAdd = $(document.getElementById('add_music'));
	var musicAdd2 = $(document.getElementById('add_music2'));
	
	var web = $(document.getElementById('header_web'));
	var webAdd = $(document.getElementById('add_web'));
	var webAdd2 = $(document.getElementById('add_web2'));
	
	var games = $(document.getElementById('header_games'));
	var gamesAdd = $(document.getElementById('add_games'));
	var gamesAdd2 = $(document.getElementById('add_games2'));
	
	function empHeader(header, add, add2) {
		header.mouseenter(function() {
			add.fadeTo(400,"0.5",function(){
				$(add2).fadeTo(500,".25");
			});
		})
		header.mouseleave(function() {
			$('.remove').fadeOut(200);
			if(add2.is(':visible') && !add.is(':visible')){
				add2.hide();
			}
		})
	} 
	
	empHeader(music,musicAdd,musicAdd2);
	empHeader(web,webAdd,webAdd2);
	empHeader(games,gamesAdd,gamesAdd2);

});