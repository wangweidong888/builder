function callback(data){
					var
						oList = $('list1');
						
					oList.innerHTML = '';
					data.result.forEach(function(v){
						var oLi = document.createElement('li');
						oLi.innerHTML = v[0];
						oList.appendChild(oLi);
					});
				}
				window.onload = function(){
					var 
						oL	= $('list'),
						oList = $('list1'),
						oBaby = $('baby'),
						oSo = $('soso'),
						oSub = $('sub'),
						oLis = document.getElementsByClassName('active');
						
						
						
					oSo.oninput = function(){
						
						var oScript = document.createElement('script');
							oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q='+encodeURIComponent(this.value)+'&_ksTS=1491999930712_659&callback=callback&k=1&area=c2c&bucketid=8';
							
							document.body.appendChild(oScript);
							document.body.removeChild(oScript);
					}
					
					oBaby.onmouseenter = function(){
						for(var sAttr in oLis){
							oLis[sAttr].style.display = 'block';
						}
					}
					oL.onmouseleave = function(){
						for(var sAttr in oLis){
							oLis[sAttr].style.display = 'none';
						}
					}
					
					oSo.onfocus = function(){
						oList.style.display = 'block';
						
						var oScript = document.createElement('script');
							oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q='+encodeURIComponent(this.value)+'&_ksTS=1491999930712_659&callback=callback&k=1&area=c2c&bucketid=8';
							
							document.body.appendChild(oScript);
							document.body.removeChild(oScript);
					}
					oSo.onblur = function(){
						oList.style.display = 'none';
					}
			}