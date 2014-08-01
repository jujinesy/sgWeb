<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
 include_once ('../config.php');

// all user
mysql_select_db($SGdb, $conn);
$session__id=$_SESSION["session__id"];
$node__id=$_GET['a'];
//var_dump($_GET["a"]);
// 	echo $_GET["a"];
$q="UPDATE USER SET BLACK_FLAG='N' WHERE ACCEPT='$session__id' AND USER_ID='$node__id';";  //USER 테이블의 레코드 삭제

$sql_result=mysql_query($q, $conn);          //질의(위 내용)를 수행하라.
// echo("<script>serverKind=$node__ip;</script>");
//echo "<script>console.log(aaaaaa);</script>";
?>
<!-- <meta http-equiv="refresh" content="0; url=../page/viewManagement.html"> -->
