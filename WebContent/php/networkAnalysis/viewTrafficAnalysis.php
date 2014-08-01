<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../php/config.php');

mysql_select_db($SGdb, $conn);

$q="SELECT NETFLOWENTRY.SRC_ADDR AS SERVER_IP, NETFLOWENTRY.START_TIME, NETFLOWENTRY.BYTE_COUNT FROM NETFLOWENTRY, (SELECT * FROM (SELECT DISTINCT N.SRC_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.DST_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."' UNION SELECT DISTINCT N.DST_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.SRC_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."')x) AS T  WHERE SRC_ADDR=T.SERVER_IP ORDER BY START_TIME DESC LIMIT 1000";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.
$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
echo("<script>EX_Qcount=$count;</script>");

$q2="SELECT NETFLOWENTRY.SRC_ADDR AS USER_IP, NETFLOWENTRY.START_TIME, NETFLOWENTRY.BYTE_COUNT FROM NETFLOWENTRY, (select IP_ADDRESS from USER where ACCEPT ='".$_SESSION["session__id"]."') AS T  WHERE SRC_ADDR=T.IP_ADDRESS ORDER BY START_TIME DESC LIMIT 1000";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result2=mysql_query($q2, $conn);          //질의(위 내용)를 수행하라.
$count2=mysql_num_rows($sql_result2);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
echo("<script>IN_Qcount=$count2;</script>");
// echo $count;     //mysql query 수행 후 반환되는 결과값을 매개변수로 받고 그 레코드의 개수를 반환

// echo "<br><br>";
//$reseult_count=($count > $count2) ? $count : $count2;

//mysql_result(쿼리실행결과, 행번호, 변수값) : 결과값을 행 단위로 화면에 출력해주는 함수.

for($i=0; $i<$count; $i++)
{
	//$dbSERVER_IP_EX[$i]=mysql_result($sql_result, $i, SERVER_IP);
	//$dbSTART_TIME_EX[$i]=mysql_result($sql_result, $i, START_TIME);
	$dbBYTE_COUNT_EX[$i]=mysql_result($sql_result, $i, BYTE_COUNT);
}
for($i=0; $i<$count2; $i++)
{
	//$dbUSER_IP_IN[$i]=mysql_result($sql_result2, $i, USER_IP);
	//$dbSTART_TIME_IN[$i]=mysql_result($sql_result2, $i, START_TIME);
	$dbBYTE_COUNT_IN[$i]=mysql_result($sql_result2, $i, BYTE_COUNT);
}
//echo("<script>console.log($dbBYTE_COUNT_IN[100]);</script>");


echo("<script>var num=0;</script>");
for($i=0; $i<$count; $i++){
	echo("<script>


			dbBYTE_COUNT_EX[num]='$dbBYTE_COUNT_EX[$i]';


			dbBYTE_COUNT_IN[num]='$dbBYTE_COUNT_IN[$i]';
			</script>");
	echo("<script>num++;</script>");
}

?>