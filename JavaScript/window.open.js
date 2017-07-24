window.onload = fun; 	//浏览器加载文档后腰执行的事件；
function fun(){
	var a = document.getElementsByTagName("a");	//找到<a>类目，是一个数组；
	for (var i=0;i<a.length;i++) {	//循环遍历所有的<a>类；
		if(a[i].getAttribute("class")=="ahreE"){	 //找到a类，类名为ahreE的元素；
			a[i].onclick=function(){	//执行点击类名为ahreE的a元素；
				opes(this.getAttribute("href"));	//执行opes函数,获取a元素href的值；
				return false;		//禁止a元素的href属性；
			}
		}
	}
}
function opes(href_f){
	window.open(href_f);//打开新窗口，新窗口URL为href_f；
}
