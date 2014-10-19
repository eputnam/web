<HTML>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" href="supportmgr.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<title>Support Manager - Home</title>
	</head>
	<body>
		<header>
			<h1>Support Manager</h1>
			<button>Logout</button>
		</header>
		<div id="mainnav">
			<a href="queue.jsp"><div class="navbutton"><h1>Queues</h1></div><a>
			<a href="search.jsp"><div class="navbutton"><h1>Search Incidents</h1></div><a>
			<a href="triagetool.jsp"><div class="navbutton"><h1>Triage Tool</h1></div><a>
		</div>
		<div id="bigdatadiv">
			<div id="littledatadiv"><img src='linegraph1.jpg'/></div>
			<div id="littledatadiv"><img src='piechart.png'/></div>
			<div id="littledatadiv"><img src='linegraph2.jpg'/></div>
		</div>
	</body>
	
	<script>
	$(document).ready(function () {
		$('.navbutton').hover(function () {
			$(this).fadeTo('fast',.90);
		},
		function () {
			$(this).fadeTo('fast',1);
		});
	});
	</script>