//Asynchronous Javascript And XML  Ajax

function ajax(url,fnsucc,fnFaild){
	//创建Ajax对象。
	var oAjax = null;
	//兼容写法
	if(window.XMLHttpRequest){
		//在非IE下创建ajax
		oAjax = new XMLHttpRequest();
	}else{
		//在IE下创建ajax
		oAjax = new  ActiveXObject('Microsoft.XMLHTTP')
	}
	
	//Ajax('data.txt?t='+new Data().getTime(),fnSucc,fnFail)
	//连接服务器，后面三个参数，第一个参数是，传输的方式，是post还是get，第二个参数是文件的地址，第三个参数是是否异步，true为是。
	oAjax.open('GET', url,true);
	
	//发送请求
	oAjax.send();
	
	//ajax.readyState有五个状态码
    //0：请求未初始化（还没有调用 open()）。
    //1：请求已经建立，但是还没有发送（还没有调用 send()）。
    //2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
    //3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
    //4：响应已完成；您可以获取并使用服务器的响应了。
    
    
    
	//接收服务器的返回
	//通过onreadystatechange属性指定readystate属性改变时的事件处理回调函数
	oAjax.onreadystatechange = function(){
		//如果服务器的readystate返回的状态为4 并且 返回请求的状态码为200时。
		if(oAjax.readystate == 4 && oAjax.status == 200){
			//执行函数fnsucc(oAjax身上的responseText)来获取完整的响应数据
				fnsucc(oAjax.responseText);
			//否则，如果是请求发生错误的时候执行错误的时候应该执行的函数。
			}else{
				if(fnFaild){
					fnFaild(oAjax.status);
				}
			}
		}
	};

