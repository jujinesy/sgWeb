<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../../php/config.php');

mysql_select_db($SGdb, $conn);

$q="select * from ILLNETFLOWENTRY";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.


$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
// echo $count;     //mysql query 수행 후 반환되는 결과값을 매개변수로 받고 그 레코드의 개수를 반환

// echo "<br><br>";

//mysql_result(쿼리실행결과, 행번호, 변수값) : 결과값을 행 단위로 화면에 출력해주는 함수.

for($i=0; $i<$count; $i++)
{
	$dbUNIX_SECS[$i]=mysql_result($sql_result, $i, UNIX_SECS);	
    $dbSRC_ADDR[$i]=mysql_result($sql_result, $i, SRC_ADDR);
    $dbDST_ADDR[$i]=mysql_result($sql_result, $i, DST_ADDR);
    $dbISTCP[$i]=mysql_result($sql_result, $i, ISTCP);
    $dbPACKET_COUNT[$i]=mysql_result($sql_result, $i, PACKET_COUNT);
    
    $dbBYTE_COUNT[$i]=mysql_result($sql_result, $i, BYTE_COUNT);
    $dbSTART_TIME[$i]=mysql_result($sql_result, $i, START_TIME);
    $dbEND_TIME[$i]=mysql_result($sql_result, $i, END_TIME);
    $dbSRC_PORT[$i]=mysql_result($sql_result, $i, SRC_PORT);
    $dbDST_PORT[$i]=mysql_result($sql_result, $i, DST_PORT);

    $dbPROTOCOL[$i]=mysql_result($sql_result, $i, PROTOCOL);
    $dbENTRY_ID[$i]=mysql_result($sql_result, $i, ENTRY_ID);
}

echo "<table id=\"illNetflowEntry\" border=4 width=100%>
<tr  style=\" text-align: center; font-weight: bold; \">
<td>UNIX_SECS</td><td>SRC_ADDR</td><td>DST_ADDR</td><td>ISTCP</td><td>PACKET_COUNT</td><td>BYTE_COUNT</td><td>START_TIME</td><td>END_TIME</td><td>SRC_PORT</td><td>DST_PORT</td><td>PROTOCOL</td><td>ENTRY_ID</td>
</tr>";

for($i=0; $i<$count; $i++)
{
echo "
<tr style=\" text-align: center;\">
<td>$dbUNIX_SECS[$i]</td><td>".long2ip($dbSRC_ADDR[$i])." </td><td>".long2ip($dbDST_ADDR[$i])." </td><td>$dbISTCP[$i]</td><td>$dbPACKET_COUNT[$i]</td>
<td>$dbBYTE_COUNT[$i]</td><td>".date("M j G:i:s Y", $dbSTART_TIME[$i])."</td><td>".date("M j G:i:s Y", $dbEND_TIME[$i])."</td><td>$dbSRC_PORT[$i]</td><td>$dbDST_PORT[$i]</td>
<td>$dbPROTOCOL[$i]</td><td>$dbENTRY_ID[$i]</td>
</tr>
";
};
echo "</table>";

?>

<!--  ".long2ip($dbDST_ADDR[$i])."   -->