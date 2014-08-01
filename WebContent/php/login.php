<?PHP
header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('./config.php');
mysql_select_db($SGdb, $conn);

extract($_POST);
$USER_ID=$_POST["username"];
$USER_PASSWORD=$_POST["password"];

// echo $USER_ID.'<br/>';
// echo $USER_PASSWORD.'<br/>';


$q="select * from MANAGER";                         //test 테이블의 레코드를 모두 뽑아오기
$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.


$count=mysql_num_rows($sql_result);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.
// echo $count;     //mysql query 수행 후 반환되는 결과값을 매개변수로 받고 그 레코드의 개수를 반환

// echo "<br><br>";

//mysql_result(쿼리실행결과, 행번호, 변수값) : 결과값을 행 단위로 화면에 출력해주는 함수.

for($i=0; $i<$count; $i++)
{
    $dbUSER_ID=mysql_result($sql_result, $i, USER_ID);
    $dbUSER_PASSWORD=mysql_result($sql_result, $i, USER_PASSWORD);
        
    if((trim($USER_ID) == $dbUSER_ID) && (trim($USER_PASSWORD) == $dbUSER_PASSWORD))
    {
    	$_SESSION["session__id"] =  $USER_ID;
    	$_SESSION["session__pw"] =  $USER_PASSWORD;
    	echo "<script>location.href='../page/management.html';</script>";     		 
    }
}
echo "<script>alert('로그인실패');location.href='../page/index.html';</script>";
?>