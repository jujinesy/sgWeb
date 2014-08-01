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
?>