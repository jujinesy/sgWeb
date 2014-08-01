<?php 
// user 정보 넣기
echo("<script>var num=0;</script>");
for($i = 0 ; $i < $count; $i++){
	$changIP=long2ip($dbIP_ADDRESS[$i]);
	$changGATEWAY=long2ip($dbGATEWAY[$i]);
echo ("<script>		
		user_dbNO[num]='$dbNO[$i]';
		user_dbGROUP_ID[num]='$dbGROUP_ID[$i]';
		user_dbMAC_ADDRESS[num]='$dbMAC_ADDRESS[$i]';
		user_dbOBTAIN_FLAG[num]='$dbOBTAIN_FLAG[$i]';
		user_dbIP_ADDRESS[num]='$changIP';
		
		user_dbUSER_ID[num]='$dbUSER_ID[$i]';
		user_dbUSER_PASSWORD[num]='$dbUSER_PASSWORD[$i]';
		user_dbBLACK_FLAG[num]='$dbBLACK_FLAGT[$i]';
		user_dbE_MAIL[num]='$dbE_MAIL[$i]';
		user_dbSUBNET_MASK[num]='$dbSUBNET_MASK[$i]';
		
		user_dbGATEWAY[num]='$changGATEWAY';
		user_dbBASIC_DNS[num]='$dbBASIC_DNS[$i]';
		user_dbSUB_DNS[num]='$dbSUB_DNS[$i]';
		user_dbEVENT_ID[num]='$dbEVENT_ID[$i]';
		user_dbACCEPT[num]='$dbACCEPT[$i]';
		
		user_dbUSER_NICKNAME[num]='$dbUSER_NICKNAME[$i]';
		</script>");

echo("<script>num++;</script>");
}
?>