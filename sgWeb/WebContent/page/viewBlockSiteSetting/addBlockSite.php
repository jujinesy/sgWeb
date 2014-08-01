<?PHP
	$host="localhost";
	$user="root";
	$password="aaaaaa";
	$conn=mysql_connect($host, $user, $password);
	$SGdb="SGdb";
	
	mysql_select_db($SGdb, $conn);
	extract($_POST);
	
	$Site_Name = $_POST["Name"];
	$Site_IP = $_POST["WebSiteIP"];
	$Site_URL = $_POST["WebSiteURL"];
	
	$query = "INSERT INTO BLOCKSITE (SITE_NAME, SITE_IP, SITE_URL) 
						  VALUES ('$Site_Name', '$Site_IP', '$Site_URL')";
			
	mysql_query($query);
	mysql_close($conn);
	
	echo "<script>location.replace('../viewBlockSiteSetting/viewBlockSiteSetting.html')</script>";
?>
