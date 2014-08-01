<?PHP
	$host="localhost";
	$user="root";
	$password="aaaaaa";
	$conn=mysql_connect($host, $user, $password);
	$SGdb="SGdb";
	
	mysql_select_db($SGdb, $conn);
	extract($_POST);
	
	$Rule_Action = $_POST["Action"];
	$Rule_Protocol = $_POST["Protocol"];
	$Rule_SourceIP = $_POST["SourceIP"];
	$Rule_Source_Port = $_POST["SourcePort"];
	$Rule_DestinationIP = $_POST["DestinationIP"];
	$Rule_DestinationPort = $_POST["DestinationPort"];
	$Rule_SignatureType = $_POST["SignatureType"];
	$Rule_SignatureString = $_POST["Signature"];
	$Rule_Message = $_POST["Message"];
	
	$query = "INSERT INTO RULESET 
			(ACTION, PROTOCOL, SOURCE_IP, SOURCE_PORT, DESTINATION_IP, DESTINATION_PORT, MESSAGE, SIGNATURE_TYPE, SIGNATURE) 
			VALUES
			('$Rule_Action', '$Rule_Protocol', '$Rule_SourceIP', '$Rule_Source_Port', '$Rule_DestinationIP', '$Rule_DestinationPort', 
			'$Rule_Message', '$Rule_SignatureType', '$Rule_SignatureString')";
			
	mysql_query($query);
	mysql_close($conn);
	
	echo "<script>location.replace('../viewRulesetSetting/viewRulesetSetting.html')</script>";
?>
