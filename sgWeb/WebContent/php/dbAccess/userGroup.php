<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../../php/config.php');

mysql_select_db($SGdb, $conn);

$q="select * from USERGROUP";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.


$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
// echo $count;     //mysql query 수행 후 반환되는 결과값을 매개변수로 받고 그 레코드의 개수를 반환

// echo "<br><br>";

//mysql_result(쿼리실행결과, 행번호, 변수값) : 결과값을 행 단위로 화면에 출력해주는 함수.

for($i=0; $i<$count; $i++)
{
    $dbNO[$i]=mysql_result($sql_result, $i, NO);
    $dbGROUP_ID[$i]=mysql_result($sql_result, $i, GROUP_ID);
    $dbGROUP_INFO[$i]=mysql_result($sql_result, $i, GROUP_INFO);
    $dbBLACK_FLAG[$i]=mysql_result($sql_result, $i, BLACK_FLAG);
    $dbEVENT_ID[$i]=mysql_result($sql_result, $i, EVENT_ID);
}

echo "<table id=\"userGroup\" border=4 width=100%>
<tr  style=\" text-align: center; font-weight: bold; \">
<td>NO</td><td>GROUP_ID</td><td>GROUP_INFO</td><td>BLACK_FLAG</td><td>EVENT_ID</td>
</tr>";

for($i=0; $i<$count; $i++)
{
echo "
<tr style=\" text-align: center;\">
<td>$dbNO[$i]</td><td>$dbGROUP_ID[$i]</td><td>$dbGROUP_INFO[$i]</td><td>$dbBLACK_FLAG[$i]</td><td>$dbEVENT_ID[$i]</td>
</tr>
";
};
echo "</table>";

?>