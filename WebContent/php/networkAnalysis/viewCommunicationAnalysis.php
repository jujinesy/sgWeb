<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../php/config.php');

mysql_select_db($SGdb, $conn);
// protocol type이  TCP 인것 중에서  최근 데이타 즉 start 값이 가장 큰 레코드 추출
$q="SELECT SRC_PORT, PROTOCOL, BYTE_COUNT, PACKET_COUNT FROM NETFLOWENTRY WHERE PROTOCOL='TCP'  GROUP BY SRC_PORT ORDER BY START_TIME DESC;";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.
$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
echo("<script>TCP_qCount='$count';</script>");

// protocol type이  UDP 인것 중에서  최근 데이타 즉 start 값이 가장 큰 레코드 추출
$q2="SELECT SRC_PORT, PROTOCOL, BYTE_COUNT, PACKET_COUNT FROM NETFLOWENTRY WHERE PROTOCOL='UDP'  GROUP BY SRC_PORT ORDER BY START_TIME DESC;";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result2=mysql_query($q2, $conn);          //질의(위 내용)를 수행하라.
$count2=mysql_num_rows($sql_result2);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
echo("<script>UDP_qCount='$count2';</script>");

for($i=0; $i<$count; $i++)
{
    $dbSRC_PORT_TCP[$i]=mysql_result($sql_result, $i, SRC_PORT);
    $dbBYTE_COUNT_TCP[$i]=mysql_result($sql_result, $i, BYTE_COUNT);
    $dbPACKET_COUNT_TCP[$i]=mysql_result($sql_result, $i, PACKET_COUNT);
}
for($i=0; $i<$count2; $i++)
{
    $dbSRC_PORT_UDP[$i]=mysql_result($sql_result2, $i, SRC_PORT);
    $dbBYTE_COUNT_UDP[$i]=mysql_result($sql_result2, $i, BYTE_COUNT);
    $dbPACKET_COUNT_UDP[$i]=mysql_result($sql_result2, $i, PACKET_COUNT);
}

echo("<script>num=0;</script>");
for($i=0; $i<$count; $i++){
	$changBYTE_COUNT=round($dbBYTE_COUNT_TCP[$i]/pow(1024,1)*10)/10;
	echo ("<script>
			SRC_PORT_TCP[num]='$dbSRC_PORT_TCP[$i]';
			BYTE_COUNT_TCP[num]='$changBYTE_COUNT';
			PACKET_COUNT_TCP[num]='$dbPACKET_COUNT_TCP[$i]';
			</script>");
	echo("<script>num++;</script>");
}
echo("<script>num=0;</script>");
for($i=0; $i<$count2; $i++){
	$changBYTE_COUNT2=round($dbBYTE_COUNT_UDP[$i]/pow(1024,1)*10)/10;
	echo ("<script>
			SRC_PORT_UDP[num]='$dbSRC_PORT_UDP[$i]';
			BYTE_COUNT_UDP[num]='$changBYTE_COUNT2';
			PACKET_COUNT_UDP[num]='$dbPACKET_COUNT_UDP[$i]';
			</script>");
	echo("<script>num++;</script>");
}
?>