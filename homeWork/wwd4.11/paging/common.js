function $(id){
	return document.getElementById(id);
}

//Asynchronous Javascript And XML  Ajax
/*************************Ajax封装函数***************************/


 /*
 type:	请求的的类型， 值为get或者post
 url：		请求的文件地址
 data：	往后台发送数据，数据类型为对象或者字符串
 		//字符串格式：a=b&c=d&e=f
  		//对象格式：{a:b，e:d，e:f}
 fn：		请求成功时执行的回调函数，自定义。
 async：	异步， 默认值为true。
 */
function ajax({type, url, data, fn, async = true} = {}){
	//将请求数据全部转换为大写
	type = type.toUpperCase();
	//创建Ajax对象。
	let oXhr = null;
	//兼容写法
	if(window.ActiveXObject){
		//在IE下创建ajax
		oXhr = new  ActiveXObject('Microsoft.XMLHTTP');
	}else{
		//在非IE下创建ajax
		oXhr = new XMLHttpRequest();
	}
	
	//开始判断如果发送的数据类型为对象格式。
	let sData = '';
	//如果发送的数据为对象类型，
	if(typeof data === 'object'){
		//循环遍历对象。
		for(var sAttr in data) {
			//将对象里的键值拼接成字符串格式
			sData += sAttr + '=' + encodeURIComponent(data[sAttr]) + '&';
		}
		//利用slice方法将字符串进行分割，把最后一个&符去掉。 
		sData = sData.slice(0, -1);
		//否则，发送的数据为字符串格式。 
	} else {
		sData = data;
	}
	
	
	//开始判断， 传输的方式为GET时， 将数据追加到url后面。
	if(type === 'GET') {
		url += '?' + sData;
	}
	/*连接服务器，后面三个参数，第一个参数是，传输的方式，是post还是get，第二个参数是文件的地址，第三个参数是是否异步，true为是。*/
	oXhr.open(type,url,async);
	/*发送请求
	判断， 如果传输方式为POST时，*/
	if(type === 'POST') {
		oXhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		oXhr.send(sData);
	}else {
		// 第三步 发送数据
		oXhr.send();
	} 
	
		
	
	

	/*ajax.readyState有五个状态码
    0：请求未初始化（还没有调用 open()）。
    1：请求已经建立，但是还没有发送（还没有调用 send()）。
    2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
    3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
    4：响应已完成；您可以获取并使用服务器的响应了。*/           
	//接收服务器的返回
	//通过onreadystatechange属性指定readystate属性改变时的事件处理回调函数
	oXhr.onreadystatechange = function () {
		//如果服务器的readystate返回的状态为4 并且 返回请求的状态码为200时。
		if(oXhr.readyState === 4 && oXhr.status === 200){
			//执行函数fnsucc(oAjax身上的responseText)来获取完整的响应数据
				fn && fn(oXhr.responseText);
				
			}
		}
	};
/***********************************promise******************/
function promiseAjax({type,url,data,fn,async = true} = {}){
	type = type.toUpperCase();
	var oAjax = null;
	
	if(window.XMLHttpRequest){
		oAjax = new XMLHttpRequest();
	}else{
		oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	let sData = '';
	if(typeof data === 'object'){
		for(sAttr in data){
			sData +=  sAttr + '=' + encodeURIComponent(data[sAttr]) + '&';
		}
	}else{
		sData = data;
	}
	
	
	if(type === 'GET'){
		url += '?' + sData;
	}
	
	oAjax.open(type,url,async);
	if(type === 'POST'){
		oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		oAjax.send(sData);
	}else{
		oAjax.send();
	}
	
	
	oAjax.onreadystatechange  = function(){
		if(oAjax.readyState === 4 && oAjax.status === 200){
			fn && fn(oAjax.responseText);
		}
	}
	
};
	
	
	
	
/********************************************运动封装***************************/
function Run(obj, oTarget, fn){
	clearInterval(obj.oTimer);
	obj.oTimer = setInterval(function () {
		// 假设所有的属性均已运动完毕
		var bBtn = true;
		// 遍历对象
		for(var sAttr in oTarget) {
			// 获取当前值
			if(sAttr === 'opacity') {
				var iCur = parseInt(getStyle(obj, sAttr) * 100);
			} else {
				var iCur = parseInt(getStyle(obj, sAttr));
			}
			// 计算速度
			var iSpeed = (oTarget[sAttr] - iCur) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

			// 开始赋值
			var iNext = iCur + iSpeed;
			if(sAttr === 'opacity') {
				obj.style.opacity = iNext / 100;
				obj.style.filter = 'alpha(opacity=' + iNext + ')';
			} else {
				obj.style[sAttr] = iNext + 'px';
			}

			// 检测当前属性是否真的已经运动完毕
			if(iNext !== oTarget[sAttr]) {
				bBtn = false;
			}
		}

		if(bBtn) {
			clearInterval(obj.oTimer);
			fn && fn();
		}
	}, 50);
}

function getStyle(obj, sAttr) {
	if(obj.currentStyle) {
		return obj.currentStyle[sAttr];
	} else {
		return getComputedStyle(obj, false)[sAttr];
	}
}