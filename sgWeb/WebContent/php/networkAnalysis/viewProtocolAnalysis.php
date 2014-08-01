<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../php/config.php');

mysql_select_db($SGdb, $conn);

$q="SELECT SRC_PORT, COUNT(*) SRC_PORT_COUNT FROM NETFLOWENTRY WHERE SRC_PORT GROUP BY SRC_PORT";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.
$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.

$q2="SELECT DST_PORT, COUNT(*) DST_PORT_COUNT FROM NETFLOWENTRY WHERE DST_PORT GROUP BY DST_PORT";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result2=mysql_query($q2, $conn);          //질의(위 내용)를 수행하라.
$count2=mysql_num_rows($sql_result2);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.

// echo $count;     //mysql query 수행 후 반환되는 결과값을 매개변수로 받고 그 레코드의 개수를 반환

// echo "<br><br>";
//$reseult_count=($count > $count2) ? $count : $count2;

//mysql_result(쿼리실행결과, 행번호, 변수값) : 결과값을 행 단위로 화면에 출력해주는 함수.

for($i=0; $i<$count; $i++)
{
    $dbSRC_PORT[$i]=mysql_result($sql_result, $i, SRC_PORT);
    $dbSRC_PORT_COUNT[$i]=mysql_result($sql_result, $i, SRC_PORT_COUNT);
}
for($i=0; $i<$count2; $i++)
{
	$dbDST_PORT[$i]=mysql_result($sql_result2, $i, DST_PORT);
	$dbDST_PORT_COUNT[$i]=mysql_result($sql_result2, $i, DST_PORT_COUNT);
}

// TCP
$q_TCP="SELECT SRC_PORT, COUNT(*) SRC_PORT_COUNT, PROTOCOL FROM NETFLOWENTRY WHERE PROTOCOL='TCP' AND SRC_PORT GROUP BY SRC_PORT";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result_TCP=mysql_query($q_TCP, $conn);          //질의(위 내용)를 수행하라.
$count_TCP=mysql_num_rows($sql_result_TCP);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
for($i=0; $i<$count_TCP; $i++)
{
	$dbSRC_PORT_TCP[$i]=mysql_result($sql_result_TCP, $i, SRC_PORT);
	$dbSRC_PORT_COUNT_TCP[$i]=mysql_result($sql_result_TCP, $i, SRC_PORT_COUNT);
	$dbPROTOCOL_TCP[$i]=mysql_result($sql_result_TCP, $i, RPOTOCOL);
}

// UDP
$q_UDP="SELECT SRC_PORT, COUNT(*) SRC_PORT_COUNT, PROTOCOL FROM NETFLOWENTRY WHERE PROTOCOL='UDP' AND SRC_PORT GROUP BY SRC_PORT";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result_UDP=mysql_query($q_UDP, $conn);          //질의(위 내용)를 수행하라.
$count_UDP=mysql_num_rows($sql_result_UDP);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
for($i=0; $i<$count_UDP; $i++)
{
	$dbSRC_PORT_UDP[$i]=mysql_result($sql_result_UDP, $i, SRC_PORT);
	$dbSRC_PORT_COUNT_UDP[$i]=mysql_result($sql_result_UDP, $i, SRC_PORT_COUNT);
	$dbPROTOCOL_UDP[$i]=mysql_result($sql_result_UDP, $i, RPOTOCOL);
}
?>