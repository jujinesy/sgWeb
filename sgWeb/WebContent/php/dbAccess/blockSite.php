<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../../php/config.php');

mysql_select_db($SGdb, $conn);

$q="select * from BLOCKSITE";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.


$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
// echo $count;     //mysql query 수행 후 반환되는 결과값을 매개변수로 받고 그 레코드의 개수를 반환

// echo "<br><br>";

//mysql_result(쿼리실행결과, 행번호, 변수값) : 결과값을 행 단위로 화면에 출력해주는 함수.

for($i=0; $i<$count; $i++)
{
    $dbSITE_NAME[$i]=mysql_result($sql_result, $i, SITE_NAME);
    $dbSITE_IP[$i]=mysql_result($sql_result, $i, SITE_IP);
    $dbSITE_URL[$i]=mysql_result($sql_result, $i, SITE_URL);
}

echo "<table id=\"userGroup\" border=4 width=100%>
<tr  style=\" text-align: center; font-weight: bold; \">
<td>SITE_NAME</td><td>SITE_IP</td><td>SITE_URL</td>
</tr>";

for($i=0; $i<$count; $i++)
{
echo "
<tr style=\" text-align: center;\">
<td>$dbSITE_NAME[$i]</td><td>$dbSITE_IP[$i]</td><td>$dbSITE_URL[$i]</td>
</tr>
";
};
echo "</table>";

?>