<?PHP
 /* this is must used to make db dummy data
	$host = "localhost";
	$user = "root";
	$password = "aaaaaa";
	$conn = mysql_connect($host, $user, $password);
	
	mysql_select_db("SGdb", $conn);
	 
	echo "<html> <head></head> <body>";
	
	$srcIPArr = array();
	$dstIPArr = array(array('name' => 'naver', 'ip'=> '222.122.195.5', 'port' => '80', 'protocol' => 'tcp'),
										array('name' => 'nateon', 'ip'=> '211.234.241.140', 'port' => '5004', 'protocol' => 'udp'),
										array('name' => 'daum', 'ip'=> '144.108.157.117', 'port' => '80', 'protocol' => 'tcp'),
										array('name' => 'google', 'ip'=> '74.125.128.99', 'port' => '8080', 'protocol' => 'tcp'),
										array('name' => 'kakaotalk', 'ip'=> '1.201.1.239', 'port' => '5223', 'protocol' => 'udp'),
										array('name' => 'yahoo', 'ip'=> '111.67.226.84', 'port' => '80', 'protocol' => 'tcp'),
										array('name' => 'facebook', 'ip'=> '31.13.68.16', 'port' => '8080', 'protocol' => 'udp'),
										array('name' => 'youtube', 'ip'=> '74.125.128.91', 'port' => '80', 'protocol' => 'tcp'),
										array('name' => 'baram', 'ip'=> '54.65.28.61', 'port' => '4556', 'protocol' => 'udp'),
										array('name' => 'tetris', 'ip'=> '6.95.197.98', 'port' => '637', 'protocol' => 'tcp'),
										array('name' => 'baram', 'ip'=> '54.65.28.61', 'port' => '4556', 'protocol' => 'udp'),
										array('name' => 'tetris', 'ip'=> '6.95.197.98', 'port' => '637', 'protocol' => 'tcp'),
										array('name' => 'baram', 'ip'=> '54.65.28.61', 'port' => '4556', 'protocol' => 'udp'),
										array('name' => 'tetris', 'ip'=> '6.95.197.98', 'port' => '637', 'protocol' => 'tcp')
										);
	$randomSrcPort = array('1237', '567', '3146', '324', '3658', '158', '547', '950', '167'); 
	

	do {
		for($i = 0; $i < 40; $i++) {
			$srcIPArr[$i] = "192.168"."."."0".".".($i+1); // 1 to 40
		}
		//$srcIPArr = array_unique($srcIPArr);
	} while(count($srcIPArr) != 40);
	
	sort($arcIPArr, SORT_STRING);
	
 $count = 0;
 $beginDate = 0;
 $endDate = 0;
 $packet = mt_rand(1000, 100000);
 
	for($k = 1; $k <= 30; $k++) // for 30 days
		for($i = 0; $i < 40; $i++) {
			for($j = 0; $j < mt_rand(1, 14); $j++) {
				$beginDate = (time() + $k * 24 * 60 * 60) + mt_rand(0, 1 * 24 * 60 * 59);
				$endDate = $beginDate + mt_rand(10, 30);
				$src_ip = ip2long($srcIPArr[$i]);
				$src_port = $randomSrcPort[mt_rand(0, count($randomSrcPort) - 1)];
				$dst_ip = ip2long($dstIPArr[$j]['ip']);
				$dst_port = $dstIPArr[$j]['port'];
				$packet = mt_rand(10, 500);
				$packet_size = $packet * mt_rand(32, 1343);
				$protocol = $dstIPArr[$j]['protocol'];
				$isTCP = strcmp($dstIPArr[$j]['protocol'], "tcp") == 0 ? 1 : 0;
				
				
				$sqlQuery1 = "INSERT INTO NETFLOWENTRY (SRC_ADDR, DST_ADDR, SRC_PORT, DST_PORT, ISTCP, PACKET_COUNT, BYTE_COUNT, START_TIME, END_TIME, PROTOCOL)
 										VALUES
 										('$src_ip', '$dst_ip', '$src_port', '$dst_port', '$isTCP', '$packet', '$packet_size', '$beginDate', '$endDate', '$protocol')"; // packet to outbound
 				
 				echo "To out ".$count++.") "."Begin unix time - ".date("M j G:i:s",$beginDate)." End unix time - ".date("M j G:i:s", $endDate)." ".long2ip($src_ip).":".$src_port." => ".$dst_ip.":".$dst_port."(".$dstIPArr[$j]['name'].") ".$k."day ".$protocol." ".$packet."Packets ".$packet_size."Bytes"."<Br>";
 				
 				
 				$packet = $packet * 30;
 				$packet_size = $packet * mt_rand(32, 1343);
 				
 				$sqlQuery2 = "INSERT INTO NETFLOWENTRY (SRC_ADDR, DST_ADDR, SRC_PORT, DST_PORT, ISTCP, PACKET_COUNT, BYTE_COUNT, START_TIME, END_TIME, PROTOCOL)
 										VALUES
 										('$dst_ip', '$src_ip', '$dst_port', '$src_port', '$isTCP', '$packet', '$packet_size', '$beginDate', '$endDate', '$protocol')"; // packet to inbound
 				
 				echo "In to ".$count++.") "."Begin unix time - ".date("M j G:i:s",$beginDate)." End unix time - ".date("M j G:i:s", $endDate)." ".long2ip($src_ip).":".$src_port." => ".$dst_ip.":".$dst_port."(".$dstIPArr[$j]['name'].") ".$k."day ".$protocol." ".$packet."Packets ".$packet_size."Bytes"."<Br>";						
				
				if(!mysql_query($sqlQuery1,$conn)) {
				  die('Error: ' . mysql_error());
				}
				
				if(!mysql_query($sqlQuery2,$conn)) {
				  die('Error: ' . mysql_error());
				}
				
				
			}
		}

 	echo "</body><html>";
 	*/
?>