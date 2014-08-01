<?php 
// 10 (ACCEPT 된 SERVER 10개 중에 NETFLOWENTRY의 SRC_ADDR 과 같은 것 중 START_TIME이 가장 큰 것 즉 최근 것의 BYTE_COUNT를 가져옴)
$q_server_startTime="SELECT NETFLOWENTRY.SRC_ADDR AS SERVER_SRC_ADDR, NETFLOWENTRY.BYTE_COUNT AS SERVER_BYTE_COUNT, MAX(NETFLOWENTRY.START_TIME) AS SERVER_START_TIME FROM NETFLOWENTRY, (SELECT * FROM (SELECT DISTINCT N.SRC_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.DST_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."' UNION SELECT DISTINCT N.DST_ADDR AS SERVER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.SRC_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."')x)y WHERE NETFLOWENTRY.SRC_ADDR=SERVER_IP GROUP BY NETFLOWENTRY.SRC_ADDR;";
$sql_result_server_startTime=mysql_query($q_server_startTime, $conn);          //질의(위 내용)를 수행하라.
$count_server_startTime=mysql_num_rows($sql_result_server_startTime);
echo("<script>SERVER_GETBYTECOUNTQUERY_COUNT=$count_server_startTime;</script>");
for($i=0; $i<$count_server_startTime; $i++){
	$dbSERVER_SRC_ADDR[$i]=mysql_result($sql_result_server_startTime, $i, SERVER_SRC_ADDR);
	$dbSERVER_BYTE_COUNT[$i]=mysql_result($sql_result_server_startTime, $i, SERVER_BYTE_COUNT);
	$dbSERVER_START_TIME[$i]=mysql_result($sql_result_server_startTime, $i, SERVER_START_TIME);
}

// 40 (ACCEPT 된 USER 40개 중에 NETFLOWENTRY의 SRC_ADDR 과 같은 것 중 START_TIME이 가장 큰 것 즉 최근 것의 BYTE_COUNT를 가져옴)
$q_user_startTime="SELECT NETFLOWENTRY.SRC_ADDR AS USER_SRC_ADDR, NETFLOWENTRY.BYTE_COUNT AS USER_BYTE_COUNT, MAX(NETFLOWENTRY.START_TIME) AS USER_START_TIME FROM NETFLOWENTRY, (SELECT * FROM
		(SELECT DISTINCT N.SRC_ADDR AS USER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.SRC_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."'
				UNION
				SELECT DISTINCT N.DST_ADDR AS USER_IP FROM NETFLOWENTRY AS N, USER AS U WHERE N.DST_ADDR=U.IP_ADDRESS AND U.ACCEPT='".$_SESSION["session__id"]."')x)y WHERE NETFLOWENTRY.SRC_ADDR=USER_IP GROUP BY NETFLOWENTRY.SRC_ADDR;
						";
$sql_result_user_startTime=mysql_query($q_user_startTime, $conn);          //질의(위 내용)를 수행하라.
$count_user_startTime=mysql_num_rows($sql_result_user_startTime);
echo("<script>USER_GETBYTECOUNTQUERY_COUNT=$count_user_startTime;</script>");
for($i=0; $i<$count_user_startTime; $i++){
	$dbUSER_SRC_ADDR[$i]=mysql_result($sql_result_user_startTime, $i, USER_SRC_ADDR);
	$dbUSER_BYTE_COUNT[$i]=mysql_result($sql_result_user_startTime, $i, USER_BYTE_COUNT);
	$dbUSER_START_TIME[$i]=mysql_result($sql_result_user_startTime, $i, USER_START_TIME);
}

// topology map 에서 bytecount 한계치 DB에서 가져오기 -- SERVER
$q_SBCL="SELECT * FROM EVENT WHERE EVENT_ID=\"SERVER_BYTE_COUNT_LIMIT\"";
$sql_result_q_SBCL=mysql_query($q_SBCL, $conn);          //질의(위 내용)를 수행하라.
$count_sql_result_q_SBCL=mysql_num_rows($sql_result_q_SBCL);
echo("<script>server_byteCountLimit_qCount=$count_sql_result_q_SBCL;</script>");
for($i=0; $i<$count_sql_result_q_SBCL; $i++){
	$dbserver_byteCountLimit[$i]=mysql_result($sql_result_q_SBCL, $i, INFO);
}
echo("<script>server_byteCountLimit=$dbserver_byteCountLimit[0];</script>");

// topology map 에서 bytecount 한계치 DB에서 가져오기 -- USER
$q_UBCL="SELECT * FROM EVENT WHERE EVENT_ID=\"USER_BYTE_COUNT_LIMIT\"";
$sql_result_q_UBCL=mysql_query($q_UBCL, $conn);          //질의(위 내용)를 수행하라.
$count_sql_result_q_UBCL=mysql_num_rows($sql_result_q_UBCL);
echo("<script>user_byteCountLimit_qCount=$count_sql_result_q_UBCL;</script>");
for($i=0; $i<$count_sql_result_q_UBCL; $i++){
	$dbuser_byteCountLimit[$i]=mysql_result($sql_result_q_UBCL, $i, INFO);
}
echo("<script>user_byteCountLimit=$dbuser_byteCountLimit[0];</script>");

?>

<?php 
// getByteCount 정보 넣기
echo("<script>var num_server_getCount=0;</script>");
for($i = 0 ; $i < $count_server_startTime; $i++){
	$changIP_SERVER_SRC_ADDR=long2ip($dbSERVER_SRC_ADDR[$i]);
	$changSERVER_BYTE_COUNT=round($dbSERVER_BYTE_COUNT[$i]/pow(1024,2)*10)/10;
	echo ("<script>
		SERVER_SRC_ADDR[num_server_getCount]='$changIP_SERVER_SRC_ADDR';
		SERVER_BYTE_COUNT[num_server_getCount]='$changSERVER_BYTE_COUNT';
		SERVER_START_TIME[num_server_getCount]='$dbSERVER_START_TIME[$i]';
		</script>");

echo("<script>num_server_getCount++;</script>");
}


echo("<script>var num_user_getCount=0;</script>");
for($i = 0 ; $i < $count_user_startTime; $i++){
	$changIP_USER_SRC_ADDR=long2ip($dbUSER_SRC_ADDR[$i]);
	$changUSER_BYTE_COUNT=round($dbUSER_BYTE_COUNT[$i]/pow(1024,2)*10)/10;
	echo ("<script>
			USER_SRC_ADDR[num_user_getCount]='$changIP_USER_SRC_ADDR';
			USER_BYTE_COUNT[num_user_getCount]='$changUSER_BYTE_COUNT';
			USER_START_TIME[num_user_getCount]='$dbUSER_START_TIME[$i]';
			</script>");

	echo("<script>num_user_getCount++;</script>");
}

echo("<script>
for(var i=0; i<serverKind; i++){
for(var t=0; t<SERVER_GETBYTECOUNTQUERY_COUNT; t++){
if(server_dbSERVER_IP[i]==SERVER_SRC_ADDR[t]){
server_byte[i]=SERVER_BYTE_COUNT[t];
}
}
}

for(var i=0; i<userCount; i++){
for(var t=0; t<USER_GETBYTECOUNTQUERY_COUNT; t++){
if(user_dbIP_ADDRESS[i]==USER_SRC_ADDR[t]){
user_byte[i]=USER_BYTE_COUNT[t];
}
}
}

for(var i=0; i<serverKind; i++){
if(server_dbBLACK_FLAT[i]==\"Y\"){
server_edgeColor[i]='#000';
server_iconType[i]='server03';
}
else if(server_byte[i]>=server_byteCountLimit){
server_edgeColor[i]='#ff3030';
server_iconType[i]='server02';
}
else
{
server_edgeColor[i]='#23a4ff';
server_iconType[i]='server01';
}
}

for(var i=0; i<userCount; i++){
if(user_dbBLACK_FLAG[i]==\"Y\"){
user_edgeColor[i]='#000';
user_iconType[i]='user03';
}
else if(user_byte[i]>=user_byteCountLimit){
user_edgeColor[i]='#ff3030';
user_iconType[i]='user02';
}
else
{
user_edgeColor[i]='#23a4ff';
user_iconType[i]='user01';
}
}
 </script>");

?>

