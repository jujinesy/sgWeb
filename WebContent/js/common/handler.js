//Class Network
var wsURI = "ws://localhost:8080";
function Network()
{
	this.URI = "";

	this.websocket = null;
	this.intervalId = null;

	this.disconnectionAsked = false;
}

Network.prototype.connect = function(URI)
{
	console.log("connect call....");
	
	this.disconnectionAsked = false;
	if (typeof URI !== "undefined")
	{
		this.URI = URI;
	}

	try
	{
		if (this.websocket)
		{
			if (this.connected())
			{
				console.log('connected....');
				//this.websocket.close();
			}
			delete this.websocket;
		}

		if (typeof MozWebSocket === 'function')
		{
			WebSocket = MozWebSocket;
		}

		this.websocket = new WebSocket(this.URI);

		this.websocket.onopen = function(evt)
		{
			console.log('onopen call....');
			
			this.send('management reset!!!!');
			
			updateSocketState(this.websocket);
		}.bind(this);
		
		this.websocket.onclose = function(evt)
		{
			updateSocketState(this.websocket);
			if (!this.disconnectionAsked)
			{
				//setTimeout(this.connect.bind(this), 500);
			}
			delete this.websocket;
		}.bind(this);
		this.websocket.onmessage = function(evt)
		{
			console.log(getLogDate() + "Message received :", evt.data);
			displayMessage(evt.data);
		}.bind(this);
		this.websocket.onerror = function(evt)
		{
			console.warn("Websocket error:", evt.data);
		};
		updateSocketState(this.websocket);
	}
	catch(exception)
	{
		alert("Websocket fatal error, maybe your browser can't use websockets. You can look at the javascript console for more details on the error.");
		console.error("Websocket fatal error", exception);
	}
}

Network.prototype.connected = function()
{
	if (this.websocket && this.websocket.readyState == 1)
	{
		return true;
	}
	return false;
};

Network.prototype.reconnect = function()
{
	if (this.connected())
	{
		this.disconnect();
	}
	this.connect();
}

Network.prototype.disconnect = function()
{
	this.disconnectionAsked = true;
	if (this.connected())
	{
		this.websocket.close();
		updateSocketState(this.websocket);
	}
}

Network.prototype.send = function(message)
{
	if (this.connected())
	{
		this.websocket.send(message);
	}
};

Network.prototype.checkSocket = function()
{
	if (this.websocket)
	{
		var stateStr;
		switch (this.websocket.readyState)
		{
		case 0:
			stateStr = "CONNECTING";
			break;
		case 1:
			stateStr = "OPEN";
			break;
		case 2:
			stateStr = "CLOSING";
			break;
		case 3:
			stateStr = "CLOSED";
			break;
		default:
			stateStr = "UNKNOW";
		break;
		}
		console.log("Websocket state : " + this.websocket.readyState + " (" + stateStr + ")");
	}
	else
	{
		console.log("Websocket is not initialised");
	}
}

/////////////////////////////////////////////////

// global functions
function displayMessage(message)
{
	//chatTextArea.value += message + "\n";
	//chatTextArea.scrollTop = chatTextArea.scrollHeight;
}

function sendMessage(msg)
{
	//var pseudo = document.getElementById("inputPseudo").value;
	var pseudo = managerId;
	//pseudo = pseudo ? pseudo : document.getElementById("inputPseudo").getAttribute("placeholder");
	//var message = document.getElementById("inputMessage").value;
	var message = msg;
	message = message ? message : "echo";
	var strToSend = pseudo + ": " + message;
	if (network && network.connected())
	{
	//	document.getElementById("inputMessage").value = "";
		network.send(strToSend);
		console.log("Message sent :", '"'+strToSend+'"');
	}
}

function updateSocketState(websocket)
{
	if (websocket != null)
	{
		var stateStr;
		switch (websocket.readyState)
		{
		case 0:
			stateStr = "CONNECTING";
			break;
		case 1:
			stateStr = "OPEN";
			break;
		case 2:
			stateStr = "CLOSING";
			break;
		case 3:
			stateStr = "CLOSED";
			break;
		default:
			stateStr = "UNKNOW";
		break;
		}
		//document.querySelector("#socketState").innerText = websocket.readyState + " (" + stateStr + ")";
		console.log(getLogDate() + "socket state changed: " + websocket.readyState + " (" + stateStr + ")");
	}
	else
	{
	//	document.querySelector("#socketState").innerText = "3 (CLOSED)";
	}
}

function getLogDate()
{
	return "[" + (new Date).toLocaleTimeString() + "] ";
}

function secureURI(secured)
{
	var regExpRep = /^(wss?):\/\//i;
	var uri = document.querySelector("#wsURI").value;
	if (secured)
	{
		uri = uri.replace(regExpRep,"wss://");
	}
	else
	{
		uri = uri.replace(regExpRep,"ws://");
	}
	document.querySelector("#wsURI").value = uri;
}

//document.querySelector("#inputPseudo").setAttribute("placeholder", "user" + Math.floor(Math.random() * 8999 + 1000));

var chatTextArea = document.getElementById("chatTextArea");
var network = new Network();
updateSocketState();