<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../../php/config.php');

mysql_select_db($SGdb, $conn);

$q="select * from MANAGER";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.


$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
// echo $count;     //mysql query 수행 후 반환되는 결과값을 매개변수로 받고 그 레코드의 개수를 반환

// echo "<br><br>";

//mysql_result(쿼리실행결과, 행번호, 변수값) : 결과값을 행 단위로 화면에 출력해주는 함수.

for($i=0; $i<$count; $i++)
{
    $dbNO[$i]=mysql_result($sql_result, $i, NO);
    $dbMAC_ADDRESS[$i]=mysql_result($sql_result, $i, MAC_ADDRESS);
    $dbIP_ADDRESS[$i]=mysql_result($sql_result, $i, IP_ADDRESS);
    
    $dbUSER_ID[$i]=mysql_result($sql_result, $i, USER_ID);
    $dbUSER_PASSWORD[$i]=mysql_result($sql_result, $i, USER_PASSWORD);
    $dbE_MAIL[$i]=mysql_result($sql_result, $i, E_MAIL);
    $dbSUBNET_MASK[$i]=mysql_result($sql_result, $i, SUBNET_MASK);
    
    $dbGATEWAY[$i]=mysql_result($sql_result, $i, GATEWAY);
    $dbBASIC_DNS[$i]=mysql_result($sql_result, $i, BASIC_DNS);
    $dbSUB_DNS[$i]=mysql_result($sql_result, $i, SUB_DNS);
    $dbACCEPT[$i]=mysql_result($sql_result, $i, ACCEPT);
    $dbUSER_NICKNAME[$i]=mysql_result($sql_result, $i, USER_NICKNAME);
}

echo "<table id=\"addUser\" border=4 width=100%>
<tr  style=\" text-align: center; font-weight: bold; \">
<td>NO</td><td>MAC_ADDRESS</td><td>IP_ADDRESS</td>
    		<td>USER_ID</td><td>USER_PASSWORD</td><td>E_MAIL</td><td>SUBNET_MASK</td>
    		<td>GATEWAY</td><td>BASIC_DNS</td><td>SUB_DNS</td><td>ACCEPT</td><td>USER_NICKNAME</td>
</tr>";

for($i=0; $i<$count; $i++)
{
echo "
<tr style=\" text-align: center;\">
<td>$dbNO[$i]</td><td>$dbMAC_ADDRESS[$i]</td><td> $dbIP_ADDRESS[$i]</td>
<td>$dbUSER_ID[$i]</td><td>$dbUSER_PASSWORD[$i]</td><td>$dbE_MAIL[$i]</td><td>$dbSUBNET_MASK[$i]</td>
<td> $dbGATEWAY[$i]</td><td>$dbBASIC_DNS[$i]</td><td>$dbSUB_DNS[$i]</td><td>$dbACCEPT[$i]</td><td>$dbUSER_NICKNAME[$i]</td>
</tr>
";
};
echo "</table>";

?>