function $(id){
	return document.getElementById(id);
}
/************************************/
function Ajax({type,url,data,fn,async = true} = {}){
	type = type.toUpperCase();
	let oXhor = null;
	if(window.ActiveXObject){
		oXhor = new ActiveXObject('Microsoft.XMLHTTP');
	}else{
		oXhor = new XMLHttpRequest();
	}
	
	let sData = '';
	if(typeof data === 'object'){
		for(var sAttr in data){
			sData += sAttr + '=' + encodeURIComponent(data[sAttr]) + '&' ;
		}
		sData = sData.slice(0,-1);
	}else{
		sData = data;
	}
	
	if(type === 'GET'){
		url += '?' + sData;
	}
	
	oXhor.open(type,url,async);
	
	if(type === 'POST'){
		oXhor.setRequestHeader('Content-Type','application/x-www-form-rulencoded');
	}
	
	oXhor.send(sData);
	
	oXhor.onreadystatechange = function(){
		if(oXhor.status === 200 && oXhor.readyState === 4){
			fn && fn(oXhor.responseText);
		}
	}
}
