<HTML>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" href="pagetwo.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<title>SMmobile</title>
	</head>
	<body>
		<header class="fade">
			<h1>Support Manager</h1>
		</header>
		<ul>
			<a href="queue.jsp"><li id="button1"><h2>Queue</h2></li></a>
			<a href="search.jsp"><li id="button2"><h2>Search</h2></li></a>
			<a href="triage.jsp"><li id="button3"><h2>Triage Tool</h2></li></a>
		</ul>
		<div class="fade"></div>
		<footer>
			<a href="www.getwellnetwork.com">www.getwellnetwork.com</a>
		</footer>
	</body>
</HTML>


<script>
	$(document).ready(function() {
		// $('ul').hover(function() {
// 	        $('.fade').fadeTo('fast',0.10);
// 	    	},
// 	    	function() {
// 	       	 $('.fade').fadeTo('fast',1);
// 	   		});

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
</script>