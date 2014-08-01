<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../php/config.php');

$conn3=$conn;

// manager information

//mysql_select_db($SGdb, $conn3);
// 10 (ACCEPT 된 user ip 중 SRC_ADDR 과 같은 SERVER_IP와 user ip랑 DST_ADDR 과 같은 SERVER_IP를 합쳐 외부 즉 SERVER IP 의 종류를 구하는 쿼리 문)
$q3="SELECT * FROM
		(SELECT DISTINCT N.SRC_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.DST_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."'
				UNION
				SELECT DISTINCT N.DST_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.SRC_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."')x;";

$sql_result3=mysql_query($q3, $conn3);          //질의(위 내용)를 수행하라.

$count3=mysql_num_rows($sql_result3);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.


for($i=0; $i<$count3; $i++)
{
	$server_dbSERVER_IP[$i]=mysql_result($sql_result3, $i, SERVER_IP);
}

// server KIND 정보 넣기
echo("<script>var num3=0;</script>");
for($i = 0 ; $i < $count3; $i++){
	$changSeverIp=long2ip($server_dbSERVER_IP[$i]);
	echo ("<script>
			server_dbSERVER_IP[num3]='$changSeverIp';
			</script>");

	echo("<script>num3++;</script>");
}
echo("<script>serverKind=$count3;</script>");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// server CONNECT 정보 넣기
$conn4=$conn;
//mysql_select_db($SGdb, $conn4);
//(SERVER -> NETFLOWENTRY.DST_ADDR가 USER_IP인 경우 + SERVER -> NETFLOWENTRY.SRC_ADDR가 USER_IP인 경우 /  ACCEPT 된 경우)
$q4="SELECT DISTINCT SERVER_IP, CONNECT_IP FROM (
		(SELECT DISTINCT SERV.SERVER_IP AS SERVER_IP, DST_ADDR AS CONNECT_IP FROM
		(SELECT SERVER_IP FROM
		(SELECT DISTINCT NETFLOWENTRY.SRC_ADDR AS SERVER_IP FROM NETFLOWENTRY, USER WHERE NETFLOWENTRY.DST_ADDR=USER.IP_ADDRESS AND USER.ACCEPT='".$_SESSION["session__id"]."'
				UNION
				SELECT DISTINCT NETFLOWENTRY.DST_ADDR AS SERVER_IP FROM NETFLOWENTRY, USER WHERE NETFLOWENTRY.SRC_ADDR=USER.IP_ADDRESS AND USER.ACCEPT='".$_SESSION["session__id"]."')x) AS SERV, NETFLOWENTRY AS NFE WHERE

						SERV.SERVER_IP=NFE.SRC_ADDR)
						UNION
						(SELECT DISTINCT SERV.SERVER_IP AS SERVER_IP, SRC_ADDR AS CONNECT_IP FROM
						(SELECT SERVER_IP FROM
						(SELECT DISTINCT NETFLOWENTRY.SRC_ADDR AS SERVER_IP FROM NETFLOWENTRY, USER WHERE NETFLOWENTRY.DST_ADDR=USER.IP_ADDRESS AND USER.IP_ADDRESS='".$_SESSION["session__id"]."'
								UNION
								SELECT DISTINCT NETFLOWENTRY.DST_ADDR AS SERVER_IP FROM NETFLOWENTRY, USER WHERE NETFLOWENTRY.SRC_ADDR=USER.IP_ADDRESS AND USER.IP_ADDRESS='".$_SESSION["session__id"]."')y) AS SERV, NETFLOWENTRY AS NFE WHERE

										SERV.SERVER_IP=NFE.DST_ADDR)ORDER BY SERVER_IP ASC)z;";
$sql_result4=mysql_query($q4, $conn4);
$count4=mysql_num_rows($sql_result4);
for($i=0; $i<$count4; $i++)
{
	$server_SERVER_IP[$i]=mysql_result($sql_result4, $i, SERVER_IP);
	$server_CONNECT_IP[$i]=mysql_result($sql_result4, $i, CONNECT_IP);
}
//echo("<script>console.log(\"cont4=\"+$count4);</script>");

echo("<script>var num4=0;</script>");
for($i = 0; $i < $count4; $i++){
	$changedSeverIp=long2ip($server_SERVER_IP[$i]);
	$changedConnectIp=long2ip($server_CONNECT_IP[$i]);
	echo ("<script>
			server_SERVER_IP[num4]='$changedSeverIp';
			server_CONNECT_IP[num4]='$changedConnectIp';
			</script>");
	echo("<script>num4++;</script>");
}
echo("<script>serverConnectCount=$count4;</script>");


// BLOCK SITE 검색하기
$q_bockSite="SELECT * FROM BLOCKSITE";
$sql_result_bockSite=mysql_query($q_bockSite, $conn);
$count_bockSite=mysql_num_rows($sql_result_bockSite);
echo("<script>bock_SITE_qCOUNT=$count_bockSite;</script>");

for($i=0; $i<$count_bockSite; $i++)
{
	$dbbock_SITE_NAME[$i]=mysql_result($sql_result_bockSite, $i, SITE_NAME);
	$dbbock_SITE_IP[$i]=mysql_result($sql_result_bockSite, $i, SITE_IP);
	$dbbock_SITE_URL[$i]=mysql_result($sql_result_bockSite, $i, SITE_URL);
}

echo("<script>var bock_SITE_qCOUNT_temp=0;</script>");
for($i=0; $i<$count_bockSite; $i++){
	$changeIPBlockIP=long2ip($dbbock_SITE_IP[$i]);
	echo ("<script>
			bock_SITE_NAME[bock_SITE_qCOUNT_temp]='$dbbock_SITE_NAME[$i]';
			bock_SITE_IP[bock_SITE_qCOUNT_temp]='$changeIPBlockIP';
			bock_SITE_URL[bock_SITE_qCOUNT_temp]='$dbbock_SITE_URL[$i]';
			</script>");
	echo("<script>bock_SITE_qCOUNT_temp++;</script>");
}

// block site 검출
echo("<script>
		for(var i=0; i<serverKind; i++){
		for(var j=0; j<bock_SITE_qCOUNT; j++){
		if(server_dbSERVER_IP[i]==bock_SITE_IP[j]){
		server_dbBLACK_FLAT[i]=\"Y\";
		break;
}
		else{
		server_dbBLACK_FLAT[i]=\"N\";
}
}
}
		</script>");
?>