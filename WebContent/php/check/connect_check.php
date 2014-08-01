<?PHP
header('Content-Type: text/html; charset=utf-8');
?>

<?php
//$host="172.16.100.61";
$host="192.168.19.128";
$user="root";
$password="aaaaaa";
$conn=mysql_connect($host, $user, $password);
mysql_select_db("TestSGdb", $conn);
//$sql="insert into php_tbl values(1, '홍길동')";
$sql="INSERT INTO user(USER_ID,
USER_PASSWORD,
E_MAIL,
IP_ADDRESS,
MAC_ADDRESS)
VALUES('aa',
'aa',
'aa@aa',
'aa',
'aa')";

mysql_query($sql, $conn);

?>
<script>
alert("DB 입력 성공! mysql에서 확인해보세요!");
</script>
