<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../php/config.php');

mysql_select_db($SGdb, $conn);
// netflowentry 에서 최근 시간의 bytecount가 가장 큰 값 5개의  SRC_ADDR 을 가져온다. TOP5
$q="SELECT DISTINCT SRC_ADDR, BYTE_COUNT, START_TIME FROM NETFLOWENTRY, (SELECT * FROM (SELECT DISTINCT N.SRC_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.DST_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."' UNION SELECT DISTINCT N.DST_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.SRC_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."')x) AS T  WHERE SRC_ADDR=T.SERVER_IP GROUP BY SRC_ADDR ORDER BY BYTE_COUNT DESC LIMIT 5";
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.
$count=mysql_num_rows($sql_result);

for($i=0; $i<$count; $i++)
{
	$dbSRC_ADDR_TOP5[$i]=mysql_result($sql_result, $i, SRC_ADDR);
}

echo("<script>top5Count=0;</script>");
for($i=0; $i<$count; $i++){
	$tempTop=long2ip($dbSRC_ADDR_TOP5[$i]);
	echo ("<script>
			top5[top5Count]='$tempTop';
			</script>");
	echo("<script>top5Count++;</script>");
}

// 최근것 즉 start_time이 가장 큰것으로 bytecount와 packetcount를 가지고옴/ 5개 주소이기 때문에 각각 30개씩 150개를 가지고 옮.
$q2="SELECT SRC_ADDR, BYTE_COUNT, PACKET_COUNT, START_TIME FROM NETFLOWENTRY, (SELECT * FROM (SELECT DISTINCT N.SRC_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.DST_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."' UNION SELECT DISTINCT N.DST_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.SRC_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."')x) AS T  WHERE SRC_ADDR=T.SERVER_IP ORDER BY START_TIME DESC LIMIT 150";

$sql_result2=mysql_query($q2, $conn);          //질의(위 내용)를 수행하라.
$count2=mysql_num_rows($sql_result2);

for($i=0; $i<$count2; $i++)
{
	$dbBYTE_COUNT[$i]=mysql_result($sql_result2, $i, BYTE_COUNT);
	$dbPACKET_COUNT[$i]=mysql_result($sql_result2, $i, PACKET_COUNT);
}

echo("<script>top5Count=0;</script>");
for($i=0; $i<30; $i++){
	$changBYTE_COUNT=round($dbBYTE_COUNT[$i]/pow(1024,2)*10)/10;
	echo ("<script>
			BYTE_COUNT_1[top5Count]=$changBYTE_COUNT;
			PACKET_COUNT_1[top5Count]='$dbPACKET_COUNT[$i]';
			</script>");
	echo("<script>top5Count++;</script>");
}

echo("<script>top5Count=0;</script>");
for($i=30; $i<60; $i++){
	$changBYTE_COUNT=round($dbBYTE_COUNT[$i]/pow(1024,2)*10)/10;
	echo ("<script>
			BYTE_COUNT_2[top5Count]=$changBYTE_COUNT;
			PACKET_COUNT_2[top5Count]='$dbPACKET_COUNT[$i]';
			</script>");
	echo("<script>top5Count++;</script>");
}

echo("<script>top5Count=0;</script>");
for($i=60; $i<90; $i++){
	$changBYTE_COUNT=round($dbBYTE_COUNT[$i]/pow(1024,2)*10)/10;
	echo ("<script>
			BYTE_COUNT_3[top5Count]=$changBYTE_COUNT;
			PACKET_COUNT_3[top5Count]='$dbPACKET_COUNT[$i]';
			</script>");
	echo("<script>top5Count++;</script>");
}

echo("<script>top5Count=0;</script>");
for($i=90; $i<120; $i++){
	$changBYTE_COUNT=round($dbBYTE_COUNT[$i]/pow(1024,2)*10)/10;
	echo ("<script>
			BYTE_COUNT_4[top5Count]=$changBYTE_COUNT;
			PACKET_COUNT_4[top5Count]='$dbPACKET_COUNT[$i]';
			</script>");
	echo("<script>top5Count++;</script>");
}

echo("<script>top5Count=0;</script>");
for($i=120; $i<150; $i++){
	$changBYTE_COUNT=round($dbBYTE_COUNT[$i]/pow(1024,2)*10)/10;
	echo ("<script>
			BYTE_COUNT_5[top5Count]=$changBYTE_COUNT;
			PACKET_COUNT_5[top5Count]='$dbPACKET_COUNT[$i]';
			</script>");
	echo("<script>top5Count++;</script>");
}
?>