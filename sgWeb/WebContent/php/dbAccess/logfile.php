<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../../php/config.php');

mysql_select_db($FAdb, $conn);

$q="select * from FILE_LOG";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.


$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
// echo $count;     //mysql query 수행 후 반환되는 결과값을 매개변수로 받고 그 레코드의 개수를 반환

// echo "<br><br>";

//mysql_result(쿼리실행결과, 행번호, 변수값) : 결과값을 행 단위로 화면에 출력해주는 함수.

for($i=0; $i<$count; $i++)
{
    $dbUSER_ID[$i]=mysql_result($sql_result, $i, USER_ID);
    $dbEVENT_TYPE[$i]=mysql_result($sql_result, $i, EVENT_TYPE);
    $dbEVENT_TIME[$i]=mysql_result($sql_result, $i, EVENT_TIME);
    $dbOLD_FILE_NAME[$i]=mysql_result($sql_result, $i, OLD_FILE_NAME);
    $dbNEW_FILE_NAME[$i]=mysql_result($sql_result, $i, NEW_FILE_NAME);
    
    $dbREADONLY[$i]=mysql_result($sql_result, $i, READONLY);
    $dbHIDDEN[$i]=mysql_result($sql_result, $i, HIDDEN);
    $dbSYSTEM[$i]=mysql_result($sql_result, $i, SYSTEM);
    $dbDIRECTORY[$i]=mysql_result($sql_result, $i, DIRECTORY);
    $dbARCHIVE[$i]=mysql_result($sql_result, $i, ARCHIVE);
    
    $dbDEVICE[$i]=mysql_result($sql_result, $i, DEVICE);
    $dbNORMAL[$i]=mysql_result($sql_result, $i, NORMAL);
    $dbTEMPORARY[$i]=mysql_result($sql_result, $i, TEMPORARY);
    $dbSPARSE_FILE[$i]=mysql_result($sql_result, $i, SPARSE_FILE);
    $dbREPARSE_POINT[$i]=mysql_result($sql_result, $i, REPARSE_POINT);
    
    $dbCOMPRESSED[$i]=mysql_result($sql_result, $i, COMPRESSED);
    $dbOFFLINE[$i]=mysql_result($sql_result, $i, OFFLINE);
    $dbNOT_CONTENT_INDEXED[$i]=mysql_result($sql_result, $i, NOT_CONTENT_INDEXED);
    $dbENCRYPTED[$i]=mysql_result($sql_result, $i, ENCRYPTED);
    $dbINTEGRITY_STREAM[$i]=mysql_result($sql_result, $i, INTEGRITY_STREAM);
    
    $dbVIRTUAL[$i]=mysql_result($sql_result, $i, VIRTUAL);
    $dbNO_SCRUB_DATA[$i]=mysql_result($sql_result, $i, NO_SCRUB_DATA);
    $dbMD5_HASH[$i]=mysql_result($sql_result, $i, MD5_HASH);
}

echo "<table id=\"logfile\" border=4 width=100%>
<tr  style=\" text-align: center; font-weight: bold; \">
    		
<td>USER_ID</td><td>EVENT_TYPE</td><td>EVENT_TIME</td><td>OLD_FILE_NAME</td><td>NEW_FILE_NAME</td>
<td>READONLY</td><td>HIDDEN</td><td>SYSTEM</td><td>DIRECTORY</td><td>ARCHIVE</td>
<td>DEVICE</td><td>NORMAL</td><td>TEMPORARY</td><td>SPARSE_FILE</td><td>REPARSE_POINT</td>
<td>COMPRESSED</td><td>OFFLINE</td><td>NOT_CONTENT_INDEXED</td><td>ENCRYPTED</td><td>INTEGRITY_STREAM</td>
<td>VIRTUAL</td><td>NO_SCRUB_DATA</td><td>MD5_HASH</td>
</tr>";

for($i=0; $i<$count; $i++)
{
echo "
<tr style=\" text-align: center;\">
<td>$dbUSER_ID[$i]</td><td>$dbEVENT_TYPE[$i]</td><td>$dbEVENT_TIME[$i]</td><td>$dbOLD_FILE_NAME[$i]</td><td>$dbNEW_FILE_NAME[$i]</td>
<td>$dbREADONLY[$i]</td><td>$dbHIDDEN[$i]</td><td>$dbSYSTEM[$i]</td><td>$dbDIRECTORY[$i]</td><td>$dbARCHIVE[$i]</td>
<td>$dbDEVICE[$i]</td><td>$dbNORMAL[$i]</td><td>$dbTEMPORARY[$i]</td><td>$dbSPARSE_FILE[$i]</td><td>$dbREPARSE_POINT[$i]</td>
<td>$dbCOMPRESSED[$i]</td><td>$dbOFFLINE[$i]</td><td>$dbNOT_CONTENT_INDEXED[$i]</td><td>$dbENCRYPTED[$i]</td><td>$dbINTEGRITY_STREAM[$i]</td>
<td>$dbVIRTUAL[$i]</td><td>$dbNO_SCRUB_DATA[$i]</td><td>$dbMD5_HASH[$i]</td>
</tr>
";
};
echo "</table>";

?>