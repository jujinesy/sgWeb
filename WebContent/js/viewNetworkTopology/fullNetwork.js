var labelType, useGradients, nativeTextSupport, animate;

//var tempUserNodeID;    //user메뉴에서 user 정보 눌렀을 때 사용
//var tempUserNum;    //user메뉴에서 user 정보 눌렀을 때 사용

//(function() {
//var ua = navigator.userAgent,
//iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
//typeOfCanvas = typeof HTMLCanvasElement,
//nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
//textSupport = nativeCanvasSupport 
//&& (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
////I'm setting this based on the fact that ExCanvas provides text support for IE
////and that as of today iPhone/iPad current text support is lame
//labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
//nativeTextSupport = labelType == 'Native';
//useGradients = nativeCanvasSupport;
//animate = !(iStuff || !nativeCanvasSupport);
//})();
//echo "<script>alert(\"이렇게 띄우면 되자나\");</script>";
var Log = {
		elem: false,
		write: function(text){
			if (!this.elem) 
				this.elem = document.getElementById('log');
			this.elem.innerHTML = text;
			//this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
		}
};

function init() {
	// document.addEventListener('mousemove',SaveMouseEvent,false);  // 실시간 마우스 포지션 캡쳐
	var json = [{
		"adjacencies": []
	, 
	"data":{
		"$color": "#83548B", 
		"$type": "manager"
	}, 
	"id": managerId, 
	"name": "Security Gate",
	"kind": "manager",
	"ip": "nothing",
	"byte": "MB",
	"edge": '#23a4ff'
	}];

	json.push({
		"adjacencies":[{"nodeTo":managerId,
			"nodeFrom":exCloud, 
			"data":{}}], 
			"data":{"$color":"#EBB056", "$type": "cloud"}, 
			"id":exCloud, 
			"name":exCloud,
			"kind": "cloud",
			"ip": "nothing",
			"byte": "MB",
			"edge": '#23a4ff'
	});

	for(var userNum=0; userNum<userCount; userNum++){
		json.push({
			"adjacencies":[{"nodeTo":managerId,
				"nodeFrom":user_dbUSER_ID[userNum],
				"data":{}}],
				"data":{"$color":"#EBB056", "$type": user_iconType[userNum]},
				"id":user_dbUSER_ID[userNum],
				"name":user_dbUSER_NICKNAME[userNum],
				"kind": "user",
				"ip": user_dbIP_ADDRESS[userNum],
				"byte": user_byte[userNum],
				"edge": user_edgeColor[userNum]
		});
	}

	for(var serverNum=0; serverNum<serverKind; serverNum++){
		json.push({
			"adjacencies":[{"nodeTo":exCloud,
				"nodeFrom":server_dbSERVER_IP[serverNum],
				"data":{}}],
				"data":{"$color":"#EBB056", "$type": server_iconType[serverNum]},
				"id":server_dbSERVER_IP[serverNum],
				"name":server_dbSERVER_IP[serverNum],
				"kind": "server",
				"ip": server_dbSERVER_IP[serverNum],
				"byte": server_byte[serverNum],
				"edge": server_edgeColor[serverNum]
		});
	}
//	end
//	init ForceDirected
	var fd = new $jit.ForceDirected({
		injectInto: 'infovis',

		Navigation: {
			enable: true,
			type: 'Native',

			panning: 'avoid nodes',
			zooming: 40 
		},

		Node: {
			overridable: true,
			dim: 7   //dim : 7->30    노드 클릭 범위
		},
		Edge: {
			overridable: true, 
			color: '#23A4FF',
			lineWidth: 0.4
		},

		Tips: {
			enable: true,
			onShow: function(tip, node) {
				var count = 0;
				node.eachAdjacency(function() { count++; });

				if(node.kind=="manager"){
					getMousePosition(event, this);
					tip.innerHTML = "<h4>" + manager_USER_ID + "</h4><b>Information:</b><br><br>" +
					"Manager ID <br> -> "+manager_USER_ID+"<br><br>"+
					"Manager Name <br> -> "+manager_USER_NICKNAME+"<br><br>"+
					"MAC ADDRESS <br> -> "+manager_MAC_ADDRESS+"<br><br>"+
					"IP ADDRESS <br> -> "+manager_IP_ADDRESS+"<br><br>"+
					"GATEWAY <br> -> "+manager_GATEWAY+"<br><br>";
				}
				else if(node.kind=="cloud"){
					getMousePosition(event, this);
					tip.innerHTML = "<h4>" + node.kind + "</h4>";
				}
				else if(node.kind=="server"){
					getMousePosition(event, this);
					list=[];
					for(var u=0; u<serverConnectCount; u++){
						if(node.ip===server_SERVER_IP[u]){
							for(var v=0;v<userCount;v++){
								if(server_CONNECT_IP[u]===user_dbIP_ADDRESS[v]){		
									list.push(user_dbUSER_NICKNAME[v]);
								}
							}
						}
					}
					tip.innerHTML = "<h4>" + node.ip + "</h4>" +
					"Traffic <br> -> "+node.byte+" MB<br><br>"+		
					"<b>Connect List:</b><ul><li>"+
					list.join("</li><li>") + "</li></ul>";
				}
				else if(node.kind=="user"){
					getMousePosition(event, this);
					list=[];
					for(var u=0; u<serverConnectCount; u++){
						if(node.ip===server_CONNECT_IP[u]){
							for(var v=0;v<serverKind;v++){
								if(server_SERVER_IP[u]===server_dbSERVER_IP[v]){		
									list.push(server_dbSERVER_IP[v]);
								}
							}
						}
					}
					var uc;
					for(uc=0; uc<userCount; uc++){
					if(node.ip===user_dbIP_ADDRESS[uc]){
					//display node info in tooltip
					tip.innerHTML = "<h4>" + user_dbUSER_ID[uc] + "</h4><b>Information:</b><br><br>" +
					"User ID <br> -> "+user_dbUSER_ID[uc]+"<br><br>"+
					"User Name <br> -> "+user_dbUSER_NICKNAME[uc]+"<br><br>"+
					"E-mail <br> -> "+user_dbE_MAIL[uc]+"<br><br>"+
					"MAC ADDRESS <br> -> "+user_dbMAC_ADDRESS[uc]+"<br><br>"+
					"IP ADDRESS <br> -> "+user_dbIP_ADDRESS[uc]+"<br><br>"+
					"GATEWAY <br> -> "+user_dbGATEWAY[uc]+"<br><br>"+
					"Traffic <br> -> "+node.byte+" MB<br><br>"+
					"</h4><b>Connect List:</b><ul><li>"+
					list.join("</li><li>") + "</li></ul>";
					}
					}
//					list=[];
//					for(var u=0; u<serverConnectCount; u++){
//						if(node.ip===server_CONNECT_IP[u]){
//							for(var v=0;v<serverKind;v++){
//								if(server_SERVER_IP[u]===server_dbSERVER_IP[v]){		
//									list.push(server_dbSERVER_IP[v]);
//								}
//							}
//						}
//					}
//					tip.innerHTML = "<h4>" + node.byte + "</h4><b>Connect List:</b><ul><li>"+
//					list.join("</li><li>") + "</li></ul>";

				}
			}
		},
		Events: {
			enable: true,
			type: 'Native',
			onMouseEnter: function() {
				fd.canvas.getElement().style.cursor = 'move';
			},
			onMouseLeave: function() {
				fd.canvas.getElement().style.cursor = '';
			},
			onDragMove: function(node, eventInfo, e) {
				var pos = eventInfo.getPos();
				node.pos.setc(pos.x, pos.y);
				fd.plot();
			},
			onTouchMove: function(node, eventInfo, e) {
				$jit.util.event.stop(e); //stop default touchmove event
				this.onDragMove(node, eventInfo, e);
			},
			onClick: function(node) {
				getMousePosition(event, this);
				ViewLayerClose();
				if(!node) return;
				if(node.kind == "manager") {
					//var nodePos=node.getPos();
					ViewManagerLayer();
				}
				else if(node.kind == "cloud"){
					//var nodePos=node.getPos();
					ViewLayerClose();
				}
				else if(node.kind=="server"){
					//var nodePos=node.getPos();
					tempUserNodeID = node.id;
					ViewServerLayer();
				}
				else{
					var nodePos=node.getPos();
					tempUserNodeID = node.id;
					ViewUserLayer();
				}
			}
		},
		iterations: 500,  //200 -> 1000 가로 퍼지는 정도
		levelDistance: 400, //130->230->400 파란색 선 길이

		onCreateLabel: function(domElement, node){

			var nameContainer = document.createElement('span'),
			closeButton = document.createElement('span'),
			style = nameContainer.style;
			nameContainer.className = 'name';
			nameContainer.innerHTML = node.name;
			closeButton.className = 'close';
			closeButton.innerHTML = '';  // 'x' -> ''
			domElement.appendChild(nameContainer);
			domElement.appendChild(closeButton);
			style.fontSize = "0.8em";
			style.color = "#000";
			//Fade the node and its connections when
			//clicking the close button
			closeButton.onclick = function() {//deleteUser();
				node.setData('alpha', 0, 'end');
				node.eachAdjacency(function(adj) {
					//adj.setData('alpha', 0, 'end');
					adj.setData('alpha', 0, 'end');
				});
				fd.fx.animate({
					modes: ['node-property:alpha',
					        'edge-property:alpha'],
					        duration: 500   //500  // 라인 사라지는 속도 적을 수록 빨리
				});
				this.node=null;
			};

			nameContainer.onclick = function() {
				fd.graph.eachNode(function(n) {
					if(n.id != node.id) delete n.selected;  // 노드들 로테이션 돌다가 선택된 노드랑 같지 않으면 selected 됨!!
					n.setData('dim', 7, 'end');   //7->30
					n.eachAdjacency(function(adj) {
						adj.setDataset('end', {
							lineWidth: 0.4,
							color: '#23a4ff'    // 연파랑//'#FF0'//노랑    //'#23a4ff'    // 연파랑
						});	

						if(node.byte>=server_byteCountLimit && node.kind=="server"){//console.log("연빨강n.name="+n.name);//console.log("n.name=>"+n.name);//console.log("검정색");//console.log("aa");
							for(var u=0; u<serverConnectCount; u++){
								if((node.ip===server_SERVER_IP[u] && n.ip===server_CONNECT_IP[u] && !node.selected) || (n.kind=="cloud")){
									adj.setDataset('end', {
										lineWidth: 1.4,
										color: '#FF3030'   // 연빨강'#23a4ff'    // 연파랑'#000'  // 검정색    //'#36acfb'     //진파랑           //'#FF3030'   // 연빨강
									});
								}
							}
						}
						else if(node.byte<server_byteCountLimit && node.kind=="server"){
							for(var u=0; u<serverConnectCount; u++){
								if((node.ip===server_SERVER_IP[u] && n.ip===server_CONNECT_IP[u] && !node.selected) || (n.kind=="cloud")){
									adj.setDataset('end', {
										lineWidth: 1.4,
										color: '#3BC900'//'#23a4ff'    // 연파랑'#FF3030'   // 연빨강'#23a4ff'    // 연파랑'#000'  // 검정색    //'#36acfb'     //진파랑           //'#FF3030'   // 연빨강
									});
								}
							}
						}
						else if(node.byte>=user_byteCountLimit && node.kind=="user") {
							for(var u=0; u<serverConnectCount; u++){
								if((node.ip===server_CONNECT_IP[u] && n.ip===server_SERVER_IP[u] && !node.selected) || (n.kind=="cloud")){
									adj.setDataset('end', {
										lineWidth: 1.4,
										color: '#FF3030'   // 연빨강'#23a4ff'    // 연파랑'#000'  // 검정색    //'#36acfb'     //진파랑           //'#FF3030'   // 연빨강
									});
								}
							}	
						}
						else if(node.byte<user_byteCountLimit && node.kind=="user"){
							for(var u=0; u<serverConnectCount; u++){
								if((node.ip===server_CONNECT_IP[u] && n.ip===server_SERVER_IP[u] && !node.selected) || (n.kind=="cloud")){
									adj.setDataset('end', {
										lineWidth: 1.4,
										color: '#3BC900'//'#23a4ff'    // 연파랑'#FF3030'   // 연빨강'#23a4ff'    // 연파랑'#000'  // 검정색    //'#36acfb'     //진파랑           //'#FF3030'   // 연빨강
									});
								}
							}
						}
						else {
							adj.setDataset('end', {
								lineWidth: 0.4,
								color: '#23a4ff'    // 연파랑'#FF3030'   // 연빨강'#23a4ff'    // 연파랑'#000'  // 검정색    //'#36acfb'     //진파랑           //'#FF3030'   // 연빨강
							});
						}
					});
				});
				if(!node.selected) {   //console.log("!node.selected="+node.name); // !node.selected 는 선택한 노드
				node.selected = true;
				node.setData('dim', 17, 'end');
				node.eachAdjacency(function(adj) {
					if(node.byte>=server_byteCountLimit && node.kind=="server" ){//console.log("진빨강");//console.log(node.name);
						adj.setDataset('end', {
							lineWidth: 3,
							color: '#F00'       // 진빨강
						});
					}
					else if(node.byte>=user_byteCountLimit && node.kind=="user"){//console.log("진빨강");//console.log(node.name);
						adj.setDataset('end', {
							lineWidth: 3,
							color: '#F00'       // 진빨강
						});
					}
					else if((node.kind=="server" || node.kind=="user")){//console.log("분홍");//console.log("dd");//console.log(node.name);
						adj.setDataset('end', {
							lineWidth: 3,
							color: '#44b316'// 진녹색'#36acfb'		// 진파랑
						});
					}
					else{
						adj.setDataset('end', {
							lineWidth: 0.4,
							color: '#23a4ff'    // 연파랑
						});
					}
				});
				} else {
					delete node.selected;
				}
				fd.fx.animate({
					modes: ['node-property:dim',
					        'edge-property:lineWidth:color'],
					        duration: 500
				});
//				var html = "<h4>" + node.name + "</h4><b> connections:</b><ul><li>",
//				list = [];
//				node.eachAdjacency(function(adj){
//				if(adj.getData('alpha')) list.push(adj.nodeTo.name);
//				});
//				$jit.id('inner-details').innerHTML = html + list.join("</li><li>") + "</li></ul>";
			};
		},

		onPlaceLabel: function(domElement, node){
			var style = domElement.style;
			var left = parseInt(style.left);
			var top = parseInt(style.top);
			var w = domElement.offsetWidth;
			style.left = (left - w / 2) + 'px';
			style.top = (top + 10) + 'px';
			style.display = '';
		}
	});
//	load JSON data.
	fd.loadJSON(json);
	fd.computeIncremental({
		iter: 40,   //40 ->200 위에 loaded 숫자 간격
		property: 'end',
		onStep: function(perc){
			Log.write(perc + '% loaded...');
		},
		onComplete: function(){
			Log.write('done');    //'done'->''
			document.getElementById("log").style.visibility='hidden';
			fd.animate({
				modes: ['linear'],
				transition: $jit.Trans.Elastic.easeOut,
				duration: 500  //2500->1000  오프닝 속도
			});
		}
	});
//	end
}

//마우스 클릭 했을 때 좌표 받아오기
var nodePosX;
var nodePosY
function getMousePosition(evt, currentObj){
	var x, y;

	if(evt.pageX){
		x = evt.pageX;// - currentObj.offsetLeft;
		y = evt.pageY;// - currentObj.offsetTop;
	}
	else if (evt.clientX){
		x = evt.clientX + document.body.scrollLeft - document.body.clientLeft - currentObj.offsetLeft;
		y = evt.clientY + document.body.scrollTop - document.body.clientTop - currentObj.offsetTop;
	}

	if(document.body.parentElement && document.body.parentElement.clientLeft){
		var b = document.body.parentElement;
		x += b.scrollLeft - b.clientLeft;
		y += b.scrollTop - b.clientTop;
	}

	// alert(x + ',' + y);
	nodePosX=x;nodePosY=y;
	return [x,y];
}
