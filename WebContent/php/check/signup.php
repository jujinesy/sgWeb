<?PHP
header('Content-Type: text/html; charset=utf-8');
?>

<?php
include_once ('./config.php');

extract($_POST);
$USER_ID=$_POST["USER_ID"];
$USER_PASSWORD=$_POST["USER_PASSWORD"];
$E_MAIL=$_POST["E_MAIL"];
$IP_ADDRESS=$_POST["IP_ADDRESS"];
$MAC_ADDRESS=$_POST["MAC_ADDRESS"];

// echo $USER_ID.'<br/>';
// echo $USER_PASSWORD.'<br/>';
// echo $E_MAIL.'<br/>';
// echo $IP_ADDRESS.'<br/>';
// echo $MAC_ADDRESS.'<br/>';

mysql_select_db("TestSGdb", $conn);

$q="INSERT INTO user(USER_ID,
USER_PASSWORD,
E_MAIL,
IP_ADDRESS,
MAC_ADDRESS)
VALUES('$USER_ID',
'$USER_PASSWORD',
'$E_MAIL',
'$IP_ADDRESS',
'$MAC_ADDRESS')";

mysql_query($q, $conn);
?>

<meta http-equiv="refresh" content="0; url=../../page/index.html">
<script>
alert("회원가입을 축하드립니다.");
</script>