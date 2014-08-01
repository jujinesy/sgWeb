<?php 
// user 정보 넣기
echo("<script>num=0;</script>");
for($i = 0 ; $i < $count; $i++){
	echo ("<script>
			SRC_PORT[num]='$dbSRC_PORT[$i]';
			SRC_PORT_COUNT[num]='$dbSRC_PORT_COUNT[$i]';
			</script>");
	echo("<script>num++;</script>");
}

echo("<script>num=0;</script>");
for($i = 0 ; $i < $count2; $i++){
	echo ("<script>
			DST_PORT[num]='$dbDST_PORT[$i]';
			DST_PORT_COUNT[num]='$dbDST_PORT_COUNT[$i]';
			</script>");
	echo("<script>num++;</script>");
}

echo("<script>num=0;</script>");
for($i = 0 ; $i < $count_TCP; $i++){
	echo ("<script>
			SRC_PORT_TCP[num]='$dbSRC_PORT_TCP[$i]';
			SRC_PORT_COUNT_TCP[num]='$dbSRC_PORT_COUNT_TCP[$i]';
			PROTOCOL_TCP[num]='$dbPROTOCOL_TCP[$i]';
			</script>");
	echo("<script>num++;</script>");
}

echo("<script>num=0;</script>");
for($i = 0 ; $i < $count_UDP; $i++){
	echo ("<script>
			SRC_PORT_UDP[num]='$dbSRC_PORT_UDP[$i]';
			SRC_PORT_COUNT_UDP[num]='$dbSRC_PORT_COUNT_UDP[$i]';
			PROTOCOL_UDP[num]='$dbPROTOCOL_UDP[$i]';
			</script>");
	echo("<script>num++;</script>");
}
?>