<?PHP
//header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
include_once ('../php/config.php');

$conn2=$conn;

// manager information

//mysql_select_db($SGdb, $conn2);

$q2="select * from MANAGER where USER_ID ='".$_SESSION["session__id"]."';";  //USER 테이블의 레코드 중 매니저 아이디에 속한 레코드 모두 뽑아오기

$sql_result2=mysql_query($q2, $conn2);          //질의(위 내용)를 수행하라.

$count2=mysql_num_rows($sql_result2);          //mysql_num_rows() 함수 : 행의 개수를 세는 함수.


for($i=0; $i<$count2; $i++)
{
	$manager_dbNO[$i]=mysql_result($sql_result2, $i, NO);
	$manager_dbMAC_ADDRESS[$i]=mysql_result($sql_result2, $i, MAC_ADDRESS);
	$manager_dbIP_ADDRESS_LONG[$i]=mysql_result($sql_result2, $i, IP_ADDRESS);

	$manager_dbUSER_ID[$i]=mysql_result($sql_result2, $i, USER_ID);
	$manager_dbUSER_PASSWORD[$i]=mysql_result($sql_result2, $i, USER_PASSWORD);
	$manager_dbE_MAIL[$i]=mysql_result($sql_result2, $i, E_MAIL);
	$manager_dbSUBNET_MASK[$i]=mysql_result($sql_result2, $i, SUBNET_MASK);

	$manager_dbGATEWAY_LONG[$i]=mysql_result($sql_result2, $i, GATEWAY);
	$manager_dbBASIC_DNS[$i]=mysql_result($sql_result2, $i, BASIC_DNS);
	$manager_dbSUB_DNS[$i]=mysql_result($sql_result2, $i, SUB_DNS);
	$manager_dbACCEPT[$i]=mysql_result($sql_result2, $i, ACCEPT);
	$manager_dbUSER_NICKNAME[$i]=mysql_result($sql_result2, $i, USER_NICKNAME);
	
}

$manager_dbIP_ADDRESS=long2ip($manager_dbIP_ADDRESS_LONG[0]);
$manager_dbGATEWAY=long2ip($manager_dbGATEWAY_LONG[0]);

echo ("<script>manager_NO='$manager_dbNO[0]';</script>");
echo ("<script>manager_MAC_ADDRESS='$manager_dbMAC_ADDRESS[0]';</script>");
echo ("<script>manager_IP_ADDRESS='$manager_dbIP_ADDRESS';</script>");
echo ("<script>manager_USER_ID='$manager_dbUSER_ID[0]';</script>");
echo ("<script>manager_USER_PASSWORD='$manager_dbUSER_PASSWORD[0]';</script>");
echo ("<script>manager_E_MAIL='$manager_dbE_MAIL[0]';</script>");
echo ("<script>manager_SUBNET_MASK='$manager_dbSUBNET_MASK[0]';</script>");
echo ("<script>manager_GATEWAY='$manager_dbGATEWAY';</script>");
echo ("<script>manager_BASIC_DNS='$manager_dbBASIC_DNS[0]';</script>");
echo ("<script>manager_SUB_DNS='$manager_dbSUB_DNS[0]';</script>");
echo ("<script>manager_ACCEPT='$manager_dbACCEPT[0]';</script>");
echo ("<script>manager_USER_NICKNAME='$manager_dbUSER_NICKNAME[0]';</script>");
?>