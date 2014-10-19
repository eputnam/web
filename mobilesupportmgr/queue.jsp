<HTML>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" href="pagetwo.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="queue.js" type="text/javascript"></script>
		<title>QUEUE</title>
	</head>
	<body>
		<header class="fade">
			<h1>Queue<h1>
		</header>
		<nav>
			<a href="pagetwo.jsp">Home</a>
			<a href="search.jsp">Search</a>
			<a href="triage.jsp">Triage Tool</a>
		</nav>
		<ul>
			<li id="button1"><h2>Tier 1</h2></li>
			<table id="tier1queue">
				<tr>
					<td class="tier1item"><a href="PLCDown.jsp">PLC Down</a></td>
					<td class="ticketnum">PLATSUP-101<td>
				</tr>	
				<tr>	
					<td class="tier1item">TV sucks</td>
					<td class="ticketnum">PLATSUP-102<td>
				</tr>
				<tr>		
					<td class="tier1item">PLC Down</td>
					<td class="ticketnum">PLATSUP-103<td>
				</tr>		
			</table>
			<li id="button2"><h2>Tier 2</h2></li>
			<li id="button3"><h2>Tier 3</h2></li>
		</ul>
		<div class="fade"></div>
		<footer>
			<a href="www.getwellnetwork.com">www.getwellnetwork.com</a>
		</footer>
	</body>
</HTML>