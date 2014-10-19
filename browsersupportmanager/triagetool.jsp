<HTML>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" href="supportmgr.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<title>SM | Triage Tool</title>
	</head>
	<body>
		<header>
			<h1>Triage Tool</h1>
			<button>Logout</button>
		</header>
		<div id="bigbox">
			<div id="navbox">
				<ul id="navlist">
					<li>Escalate Tier 2</li>
					<li>Escalate Tier 3</li>
					<li>Escalate CS</li>
				</ul>
			</div>
			<div id="ticketbox">
			</div>
			<div id="logbox">
				<h1>Log</h1>
			</div>
		</div>
		<div id="summarybox">
			<ul>
				<li><h3>PLC Info</h3></li>
				<table>
					<tr>
						<td>IP Address: </td>
						<td>192.168.1.20</td>
					</tr>
					<tr>
						<td>Model: </td>
						<td>Zotac AD-04</td>
					</tr>
					<tr>
						<td>Display: </td>
						<td>HDMI</td>
					</tr>
					<tr>
						<td>TV Type: </td>
						<td>IP</td>
					</tr>
				</table>
				<li><h3>History</h3></li>
				<li><h3>Other Shit</h3></li>
			</ul>
		</div>
	</body>
	
	<script>
	$(document).ready(function () {
		$("table").hide();
		$("ul li").hover(function () {
			$(this).fadeTo('fast',0.75);
		},
		function (){
			$(this).fadeTo('fast',1);
		});
		$("ul li").click(function () {
			$("table").slideToggle();
		});
	});
	</script>
	