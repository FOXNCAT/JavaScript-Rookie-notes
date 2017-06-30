window.onload=funp;//浏览器加载文档执行的事件；
function funp(){
	var p_tag = document.getElementsByTagName("p");//获取所有的P元素，
	for (var i = 0;i<p_tag.length;i++) {	//循环遍历所有的P元素，
		if(p_tag[i].getAttribute("class")=="text_a"){ //找到类名为text_a的p元素,
			var pp = p_tag[i].childNodes; //获取类名为text_a的p元素下的所有子节点；
			p_tag[i].onclick=function(){ //执行点击事件
				for (var i = 0;i<pp.length;i++) {//循环遍历所有的子节点
					if(pp[i].nodeType==3){ //找到p元素下的文本节点，文本节点nodetype==3；
						pp[i].nodeValue="hello world";//为文本节点复制为hello world；
					}
				}
			}
		}
	}
}
