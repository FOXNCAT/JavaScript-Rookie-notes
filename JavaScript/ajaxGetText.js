window.onload = Request_text;

function getXMLHTTPRequest(){
	if(typeof XMLHttpRequest == "undefined")
	
	XMLHttpRequest = function() {
		try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
		catch(e){}
		
		try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
		catch(e){}
		
		try{return new ActiveXObject("Msxml2.XMLHTTP");}
		catch(e){}
		
		return false;
	}
	return new XMLHttpRequest();
}
function Request_text(){
	var request = getXMLHTTPRequest();
	if(request) {
		request.open("GET","new_file.txt",true);
		request.onreadystatechange = function() {
			if(request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("text").appendChild(para);
			}
		}
		request.send(null);
	}
	else{
		alert("hello");
	}
}
