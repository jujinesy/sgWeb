<?PHP
header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../config.php');
//echo("<script>console.log(\"aaaaaaa\");</script>");

// extract($_POST);
// $USER_ID=$_POST["userId"];//$_GET['a'];
// $USER_NICKNAME=$_POST["nickname"];
// //$USER_PASSWORD=$_POST["USER_PASSWORD"];
// //$E_MAIL=$_POST["E_MAIL"];
// $IP_ADDRESS=$_POST["ipAddress"];
// $MAC_ADDRESS=$_POST["macAddress"];
// $session__id=$_SESSION["session__id"];

$USER_ID=$_GET['a'];
$USER_NICKNAME=$_GET['b'];
$IP_ADDRESS=$_GET['c'];
$MAC_ADDRESS=$_GET['d'];
$session__id=$_SESSION["session__id"];

mysql_select_db($SGdb, $conn);

$q="INSERT INTO USER(USER_ID,
USER_NICKNAME,
IP_ADDRESS,
MAC_ADDRESS,
ACCEPT)
VALUES('$USER_ID',
'$USER_NICKNAME',
'$IP_ADDRESS',
'$MAC_ADDRESS',
'$session__id')";

mysql_query($q, $conn);
?>

<!-- <meta http-equiv="refresh" content="0; url=../page/viewManagement.html">
 --><!-- 
<script>
alert("회원가입을 축하드립니다.");
</script> -->