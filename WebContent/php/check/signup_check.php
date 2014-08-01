<?PHP
$db_host = "172.16.100.61"; // 호스트네임(IP 값으로도 가능)
$db_user = "root"; // 사용자 아이디값(root는 최상위 아이디 이며, 데이터베이스마다 별도 설정 가능합니다)
$db_passwd = "aaaaaa"; // 사용자 비밀번호
$db_name = "TestSGdb"; // 사용할 데이터베이스 이름
$conn = mysqli_connect($db_host,$db_user,$db_passwd) or die ("데이터베이스 연결에 실패하였습니다!");
mysql_select_db($db_name, $conn); // DB 선택
// 데이터베이스를 연결합니다.

// on se connecte à example.com et au port 3307
?>