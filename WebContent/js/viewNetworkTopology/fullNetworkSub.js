//layer popUp

function ViewManagerLayer(){
	//var layerPos_x=832+nodePos.x;
	//var layerPos_y=520+nodePos.y;
//	var layerPos_x=nodePosX;
//	var layerPos_y=nodePosY;
	document.getElementById("popupManagerNode").style.left=nodePosX;
	document.getElementById("popupManagerNode").style.top=nodePosY;
	//만일 Pop라는 녀석이 닫혀있다면??
	if(document.getElementById("popupManagerNode").style.visibility=="hidden"){
//console.log("x="+nodePos.x);console.log("y="+nodePos.y);
		//열어주어라
		document.getElementById("popupManagerNode").style.visibility='visible';
		//그렇지 않은 모든 경우라면??
	}else{
		//닫아주어라
		document.getElementById("popupManagerNode").style.visibility='hidden';
	}
}

function ViewServerLayer(){
	document.getElementById("popupServerNode").style.left=nodePosX;
	document.getElementById("popupServerNode").style.top=nodePosY;
	//만일 Pop라는 녀석이 닫혀있다면??
	if(document.getElementById("popupServerNode").style.visibility=="hidden"){

		//열어주어라
		document.getElementById("popupServerNode").style.visibility='visible';
		//그렇지 않은 모든 경우라면??
	}else{
		//닫아주어라
		document.getElementById("popupServerNode").style.visibility='hidden';
	}
}

function ViewUserLayer(){
	document.getElementById("popupUserNode").style.left=nodePosX;
	document.getElementById("popupUserNode").style.top=nodePosY;
	//만일 Pop라는 녀석이 닫혀있다면??
	if(document.getElementById("popupUserNode").style.visibility=="hidden"){
		//열어주어라
		document.getElementById("popupUserNode").style.visibility='visible';
		//그렇지 않은 모든 경우라면??
	}else{
		//닫아주어라
		document.getElementById("popupUserNode").style.visibility='hidden';
		//document.getElementById("popupChildNode").style.visibility='hidden';
	}
}

//매니저 노드 -> User 추가
function ViewUserAddLayer(){
	//만일 Pop라는 녀석이 닫혀있다면??
	if(document.getElementById("popupUserAddNode").style.visibility=="hidden"){
		document.getElementById("popupUserAddNode").style.left=nodePosX;
		document.getElementById("popupUserAddNode").style.top=nodePosY;
		//열어주어라
		document.getElementById("popupManagerNode").style.visibility='hidden';
		document.getElementById("popupUserAddNode").style.visibility='visible';
		//그렇지 않은 모든 경우라면??
	}else{
		//닫아주어라
		document.getElementById("popupUserAddNode").style.visibility='hidden';
	}
}

function ViewLayerClose(){
	document.getElementById("popupManagerNode").style.visibility='hidden';
	document.getElementById("popupUserNode").style.visibility='hidden';
	document.getElementById("popupUserAddNode").style.visibility='hidden';
	document.getElementById("popupServerNode").style.visibility='hidden';
}



///////////////////////////////////////////////////////////////////////////////


//매니저 노드 -> 관리자 정보
/*
function managerInfo(){
	var html = "<h4>" + managerId + "</h4><b> Manager Information:</b><br><br>" +
	"Manager ID <br> -> "+manager_USER_ID+"<br><br>"+
	"E-mail <br> -> "+manager_E_MAIL+"<br><br>"+
	"MAC ADDRESS <br> -> "+manager_MAC_ADDRESS+"<br><br>"+
	"IP ADDRESS <br> -> "+manager_IP_ADDRESS+"<br><br>"+
	"GATEWAY <br> -> "+manager_GATEWAY+"<br><br>";
	$jit.id('inner-details').innerHTML = html;// + list.join("</li><li>") + "</li></ul>";
}
 */

//매니저 노드 -> 연결된 User 정보 
/*
function connectUserView(){
	var html = "<h4>" + managerId + "</h4><b> Connections:</b><ul><li>",
	list = [];

	for(var userNum=0; userNum<userCount; userNum++){
		list.push(user_dbUSER_ID[userNum]);
	}
	//append connections information
	$jit.id('inner-details').innerHTML = html + list.join("</li><li>") + "</li></ul>";
	//alert("노드 클릭!!");
}
 */

//매니저 노드 -> 현재 Traffic
/*
function presentTraffic(){
	var html = "<h4>" + managerId + "</h4><b> Whole Traffic:</b>";

	$jit.id('inner-details').innerHTML = html;
}
 */

//매니저 노드 -> User 추가 -> Add User
function addUserSubmit(){
	var userId = document.getElementById("userId").value;
	var ipAddress = ip2long(document.getElementById("ipAddress").value);
	var macAddress = document.getElementById("macAddress").value;
	var nickname = document.getElementById("nickname").value;

	var msg = "{TYPE:\"REQ\", " +
	"COMMAND:\"ADDUSER\", " +
	"DATANUM:3, " +
	"DATA1:\"" + userId + "\", " +
	"DATA2:\"" + ipAddress + "\"," +
	"DATA3:\"" + macAddress + "\"," +
	"DATA4:\"" + nickname + "\"}";

	sendMessage(msg);

	document.getElementById("popupManagerNode").style.visibility='hidden';
	document.getElementById("popupUserAddNode").style.visibility='hidden';

//	location.href = "../php/viewNetworkTopology/eventAddUser.php";
	$(document).ready(function(){
		jQuery.ajax({
		type:"GET",
		url:"../php/viewNetworkTopology/eventAddUser.php?a="+userId+"&b="+nickname+"&c="+ipAddress+"&d="+macAddress,
		success:function(msg){
			//alert(msg); 
		}, error: function(xhr,status,error){
			alert(error);
		}
		}); 
	});

		tid=setTimeout(re,100); //1초후re함수실행
		
}

// 매니저 노드 -> 모든 사용자 차단
function allUserBlock(){
	var returnValue = confirm("연결된 모든 User를 차단 하시겠습니까?");
	//document.write(returnValue);
	if(returnValue==true){

		var userId = managerId;

		var msg = "{TYPE:\"REQ\", " +
		"COMMAND:\"AllUSERADDBLACKLIST\", " +
		"DATANUM:1, " +
		"DATA1:\"" + userId + "\"}";

		sendMessage(msg);

		document.getElementById("popupManagerNode").style.visibility='hidden';
//		location.href = "../php/allUserDelete.php"; 
		$(document).ready(function(){
			jQuery.ajax({
			type:"GET",
			url:"../php/viewNetworkTopology/eventAllUserBlock.php",
			success:function(msg){
			//	alert(msg); 
			}, error: function(xhr,status,error){
				alert(error);
			}
			}); 
		});
		tid=setTimeout(re,100); //1초후re함수실행

	}
	document.getElementById("popupManagerNode").style.visibility='hidden';

}

//매니저 노드 -> 모든 사용자 차단 해제
function allUserRelease(){
	var userId = managerId;

		var msg = "{TYPE:\"REQ\", " +
		"COMMAND:\"AllUSERRELEASEBLACKLIST\", " +
		"DATANUM:1, " +
		"DATA1:\"" + userId + "\"}";

		sendMessage(msg);
		document.getElementById("popupManagerNode").style.visibility='hidden';
//		location.href = "../php/allUserDelete.php"; 
		$(document).ready(function(){
			jQuery.ajax({
			type:"GET",
			url:"../php/viewNetworkTopology/eventAllUserRelease.php",
			success:function(msg){
			//	alert(msg); 
			}, error: function(xhr,status,error){
				alert(error);
			}
			}); 
		});

	document.getElementById("popupManagerNode").style.visibility='hidden';

	tid=setTimeout(re,100); //1초후re함수실행
}

//매니저 노드 -> 모든 사용자 제거
function allUserDelete(){
	var returnValue = confirm("연결된 모든 User를 삭제 하시겠습니까?");
	//document.write(returnValue);
	if(returnValue==true){

		var userId = managerId;

		var msg = "{TYPE:\"REQ\", " +
		"COMMAND:\"CUTALLCONNECT\", " +
		"DATANUM:1, " +
		"DATA1:\"" + userId + "\"}";

		sendMessage(msg);

		document.getElementById("popupManagerNode").style.visibility='hidden';
//		location.href = "../php/allUserDelete.php"; 
		$(document).ready(function(){
			jQuery.ajax({
			type:"GET",
			url:"../php/viewNetworkTopology/eventAllUserDelete.php",
			success:function(msg){
				//alert(msg); 
			}, error: function(xhr,status,error){
				alert(error);
			}
			}); 
		});
		tid=setTimeout(re,100); //1초후re함수실행

	}
	document.getElementById("popupManagerNode").style.visibility='hidden';
}


///////////////////////////////////////////////////////////////////////////////


//유저 노드 -> User 정보
/*
function userInfo(){
	var uc;
	for(uc=0; uc<userCount; uc++){
		if(tempUserNodeID==user_dbUSER_ID[uc]){
			console.log(tempUserNodeID);
			console.log(user_dbUSER_ID[uc]);
			var html = "<h4>" + user_dbUSER_ID[uc] + "</h4><b> User Information:</b><br><br>" +
			"User ID <br> -> "+user_dbUSER_ID[uc]+"<br><br>"+
			"User Name <br> -> "+user_dbUSER_NICKNAME[uc]+"<br><br>"+
			"E-mail <br> -> "+user_dbE_MAIL[uc]+"<br><br>"+
			"MAC ADDRESS <br> -> "+user_dbMAC_ADDRESS[uc]+"<br><br>"+
			"IP ADDRESS <br> -> "+user_dbIP_ADDRESS[uc]+"<br><br>"+
			"GATEWAY <br> -> "+user_dbGATEWAY[uc]+"<br><br>";

			$jit.id('inner-details').innerHTML = html;// + list.join("</li><li>") + "</li></ul>";
		}
	}
}
 */

//유저 노드 -> BlackList 추가
function addBlackList(){
	var tempUserIP;
	var returnValue = confirm("블랙 리스트로 지정하시겠습니까?");
	if(returnValue==true){
		var userID;
		for(var i=0; i<userCount; i++){
			if(user_dbUSER_ID[i]===tempUserNodeID){
				userID=user_dbUSER_ID[i];//console.log(userID);
				tempUserIP=user_dbIP_ADDRESS[i];
			}
		}
		var msg = "{TYPE:\"REQ\", " +
		"COMMAND:\"ADDUSERBLACKLIST\", " +
		"DATANUM:1, " +
		"DATA1:\"" + tempUserIP + "\"}";
		
		sendMessage(msg);

		document.getElementById("popupManagerNode").style.visibility='hidden';
		document.getElementById("popupUserNode").style.visibility='hidden';
//		location.href = "../php/addUserBlackList.php"; 
		//$_SESSION["tempUserID"]=tempUserNodeID;
		//console.log($_SESSION["tempUserID"]);
		$(document).ready(function(){
			jQuery.ajax({
			type:"GET",
			url:"../php/viewNetworkTopology/eventUserBlock.php?a="+userID,
			success:function(msg){
			//	console.log(tempUserNodeID);//alert(msg); 
			}, error: function(xhr,status,error){
				alert(error);
			}
			}); 
		});
		tid=setTimeout(re,100); //1초후re함수실행

	}
}

//유저 노드 -> BlackList 추가 해제
function releaseBlackList(){
	var tempUserIP;
	var userID;
	for(var i=0; i<userCount; i++){
		if(user_dbUSER_ID[i]===tempUserNodeID){
			userID=user_dbUSER_ID[i];//console.log(userID);
			tempUserIP=user_dbIP_ADDRESS[i];
		}
	}
		var msg = "{TYPE:\"REQ\", " +
		"COMMAND:\"RELEASEUSERBLACKLIST\", " +
		"DATANUM:1, " +
		"DATA1:\"" + tempUserIP + "\"}";

		sendMessage(msg);

		document.getElementById("popupManagerNode").style.visibility='hidden';
		document.getElementById("popupUserNode").style.visibility='hidden';
//		location.href = "../php/addUserBlackList.php"; 
		$(document).ready(function(){
			jQuery.ajax({
			type:"GET",
			url:"../php/viewNetworkTopology/eventUserRelease.php?a="+userID,
			success:function(msg){
				//alert(msg); 
			}, error: function(xhr,status,error){
				alert(error);
			}
			}); 
		});
		tid=setTimeout(re,100); //1초후re함수실행
}

//유저 노드 -> User 제거
function deleteUser(){
	var tempUserIP;
	var returnValue = confirm("연결된 User를 삭제하시겠습니까?");
	if(returnValue==true){
		var userID;
		for(var i=0; i<userCount; i++){
			if(user_dbUSER_ID[i]===tempUserNodeID){
				tempUserIP=user_dbIP_ADDRESS[i];
				userID=user_dbUSER_ID[i];//console.log(userID);
			}
		}
		var msg = "{TYPE:\"REQ\", " +
		"COMMAND:\"DELETEUSER\", " +
		"DATANUM:1, " +
		"DATA1:\"" + tempUserIP + "\"}";
		sendMessage(msg);
		document.getElementById("popupManagerNode").style.visibility='hidden';
		document.getElementById("popupUserNode").style.visibility='hidden';
//		json.push({
//			"adjacencies":[{"nodeTo":managerId,
//				"nodeFrom":exCloud, 
//				"data":{}}], 
//				"data":{"$color":"#EBB056", "$type": "cloud"}, 
//				"id":exCloud, 
//				"name":exCloud,
//				"kind": "cloud",
//				"ip": "nothing"
//		});
		
		$(document).ready(function(){
			jQuery.ajax({
			type:"GET",
			url:"../php/viewNetworkTopology/eventUserDelete.php?a="+userID,
			success:function(msg){
				//alert(msg); 
			}, error: function(xhr,status,error){
				alert(error);
			}
			}); 
		});
		tid=setTimeout(re,100); //1초후re함수실행

	}
//	location.href = "../php/deleteUser.php";

}

//서버 노드 -> 사이트 차단
function addServerBlockList(){
	var userId = ip2long (tempUserNodeID);
	
	var returnValue = confirm("외부 노드를 차단 하시겠습니까?");
	//document.write(returnValue);
	if(returnValue==true){
		//console.log(userId);
		var msg = "{TYPE:\"REQ\", " +
		"COMMAND:\"ADDSUSPENSIONSITE\", " +
		"DATANUM:1, " +
		"DATA1:\"" + tempUserNodeID + "\"}";

		sendMessage(msg);
		document.getElementById("popupServerNode").style.visibility='hidden';
//		location.href = "../php/addSuspensionSite.php";
		$(document).ready(function(){
			jQuery.ajax({
			type:"GET",
			url:"../php/viewNetworkTopology/eventExServerBlock.php?a="+tempUserNodeID,
			success:function(msg){
				//alert(msg); 
			}, error: function(xhr,status,error){
				alert(error);
			}
			}); 
		});
		tid=setTimeout(re,100); //1초후re함수실행
	}
	
}

//서버 노드 -> 사이트 차단 해제
function releaseServerBlockList(){
	
	var userId = ip2long (tempUserNodeID);

	var msg = "{TYPE:\"REQ\", " +
	"COMMAND:\"RELEASESUSPENSIONSITE\", " +
	"DATANUM:1, " +
	"DATA1:\"" + tempUserNodeID + "\"}";

	sendMessage(msg);
	document.getElementById("popupServerNode").style.visibility='hidden';
//	location.href = "../php/addSuspensionSite.php";
	$(document).ready(function(){
		jQuery.ajax({
		type:"GET",
		url:"../php/viewNetworkTopology/eventExServerRelease.php?a="+tempUserNodeID,
		success:function(msg){
			//alert(msg); 
		}, error: function(xhr,status,error){
			alert(error);
		}
		}); 
	});
	
	tid=setTimeout(re,100); //1초후re함수실행
}

function testtest(){
	
	document.getElementById("popupServerNode").style.visibility='hidden';

	console.log("테스트 테스트");
	
	$(document).ready(function(){
		jQuery.ajax({
		type:"GET",
		url: init(),
		success:function(msg){
			//alert(msg); 
		}, error: function(xhr,status,error){
			alert(error);
		}
		}); 
	});

//	json.push({
//		"adjacencies":[{"nodeTo":managerId,
//			"nodeFrom":"aaaaaaaaaaaaaa",
//			"data":{}}],
//			"data":{"$color":"#EBB056", "$type": "user"},
//			"id":"aaaaaaaaaaaaaa",
//			"name":"aaaaaaaaaaaaaa",
//			"kind": "user",
//			"ip": "aaaaaaaaaaaaaaa",
//			"byte": "aaaaaaaaaaaaaaa",
//			"edge": "aaaaaaaaaaaaaaa"
//	});

	
//	fd.loadJSON(json);
//	init();
//	$(document).ready(function(){
//		jQuery.ajax({
//		type:"GET",
//		url:fd.loadJSON(json),
//		success:function(msg){
//			//alert(msg); 
//		}, error: function(xhr,status,error){
//			alert(error);
//		}
//		}); 
//	});
}
//////////////////////////////////////////////////////////////////////////////////////


// ip -> long
function ip2long (IP) {
	// http://kevin.vanzonneveld.net
	// +   original by: Waldo Malqui Silva
	// +   improved by: Victor
	// +    revised by: fearphage (http://http/my.opera.com/fearphage/)
	// +    revised by: Theriault
	// *     example 1: ip2long('192.0.34.166');
	// *     returns 1: 3221234342
	// *     example 2: ip2long('0.0xABCDEF');
	// *     returns 2: 11259375
	// *     example 3: ip2long('255.255.255.256');
	// *     returns 3: false
	var i = 0;
	// PHP allows decimal, octal, and hexadecimal IP components.
	// PHP allows between 1 (e.g. 127) to 4 (e.g 127.0.0.1) components.
	IP = IP.match(/^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i); // Verify IP format.
	if (!IP) {
		return false; // Invalid format.
	}
	// Reuse IP variable for component counter.
	IP[0] = 0;
	for (i = 1; i < 5; i += 1) {
		IP[0] += !! ((IP[i] || '').length);
		IP[i] = parseInt(IP[i]) || 0;
	}
	// Continue to use IP for overflow values.
	// PHP does not allow any component to overflow.
	IP.push(256, 256, 256, 256);
	// Recalculate overflow of last component supplied to make up for missing components.
	IP[4 + IP[0]] *= Math.pow(256, 4 - IP[0]);
	if (IP[1] >= IP[5] || IP[2] >= IP[6] || IP[3] >= IP[7] || IP[4] >= IP[8]) {
		return false;
	}
	return IP[1] * (IP[0] === 1 || 16777216) + IP[2] * (IP[0] <= 2 || 65536) + IP[3] * (IP[0] <= 3 || 256) + IP[4] * 1;
}

// long -> ip
function long2ip (ip) {
	// http://kevin.vanzonneveld.net
	// +   original by: Waldo Malqui Silva
	// *     example 1: long2ip( 3221234342 );
	// *     returns 1: '192.0.34.166'
	if (!isFinite(ip))
		return false;

	return [ip >>> 24, ip >>> 16 & 0xFF, ip >>> 8 & 0xFF, ip & 0xFF].join('.');
}


function re(){
	location.reload(); //페이지를 리로드
	}