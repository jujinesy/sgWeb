<?PHP
	$host="localhost";
	$user="root";
	$password="aaaaaa";
	$conn=mysql_connect($host, $user, $password);
	$SGdb="SGdb";
	
	mysql_select_db($SGdb, $conn);
	extract($_POST);
	
	$Setting_ServerThreshold = $_POST["ServerThreshold"];
	$Setting_UserThreshold = $_POST["UserThreshold"];
	
	$server_UpdateQuery = "update EVENT set INFO = '$Setting_ServerThreshold' where EVENT_ID = 'SERVER_BYTE_COUNT_LIMIT'";
	$user_UpdateQuery = "update EVENT set INFO = '$Setting_UserThreshold' where EVENT_ID = 'USER_BYTE_COUNT_LIMIT'";
	
	mysql_query($server_UpdateQuery);
	mysql_query($user_UpdateQuery);
	
	mysql_close($conn);
	
	echo "<script>location.replace('../viewIPSStatus/viewIPSStatus.html'); alert('Update Complete');</script>";
	?>