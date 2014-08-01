<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../../php/config.php');

mysql_select_db($SGdb, $conn);

$q="select * from RULESET";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.


$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
// echo $count;     //mysql query 수행 후 반환되는 결과값을 매개변수로 받고 그 레코드의 개수를 반환

// echo "<br><br>";

//mysql_result(쿼리실행결과, 행번호, 변수값) : 결과값을 행 단위로 화면에 출력해주는 함수.

for($i=0; $i<$count; $i++)
{
    $dbACTION[$i]=mysql_result($sql_result, $i, ACTION);
    $dbPROTOCOL[$i]=mysql_result($sql_result, $i, PROTOCOL);
    $dbSOURCE_IP[$i]=mysql_result($sql_result, $i, SOURCE_IP);
    
    $dbSOURCE_PORT[$i]=mysql_result($sql_result, $i, SOURCE_PORT);
    $dbDESTINATION_IP[$i]=mysql_result($sql_result, $i, DESTINATION_IP);
    $dbDESTINATION_PORT[$i]=mysql_result($sql_result, $i, DESTINATION_PORT);
    $dbMESSAGE[$i]=mysql_result($sql_result, $i, MESSAGE);
    
    $dbSIGNATURE_TYPE[$i]=mysql_result($sql_result, $i, SIGNATURE_TYPE);
    $dbSIGNATURE[$i]=mysql_result($sql_result, $i, SIGNATURE);
    
}

echo "<table id=\"addUser\" border=4 width=100%>
<tr  style=\" text-align: center; font-weight: bold; \">
<td>ACTION</td><td>PROTOCOL</td><td>SOURCE_IP</td>
    		<td>SOURCE_PORT</td><td>DESTINATION_IP</td><td>DESTINATION_PORT</td><td>MESSAGE</td>
    		<td>SIGNATURE_TYPE</td><td>SIGNATURE</td>
</tr>";

for($i=0; $i<$count; $i++)
{
echo "
<tr style=\" text-align: center;\">
<td>$dbACTION[$i]</td><td>$dbPROTOCOL[$i]</td><td> $dbSOURCE_IP[$i]</td>
<td>$dbSOURCE_PORT[$i]</td><td>$dbDESTINATION_IP[$i]</td><td>$dbDESTINATION_PORT[$i]</td><td>$dbMESSAGE[$i]</td>
<td> $dbSIGNATURE_TYPE[$i]</td><td>$dbSIGNATURE[$i]</td>
</tr>
";
};
echo "</table>";

?>