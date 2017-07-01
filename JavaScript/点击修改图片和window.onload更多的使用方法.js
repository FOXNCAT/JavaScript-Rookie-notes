/*	window.onload = function(){
	functionA();
	functionB();				将更多的函数包括在一个事件中；
	functionC();}*/
	//NEW
/* function addLoadEvent(func){//页面加载完毕时执行的函数
	var oldonload = window.onload;
	if(typeof window.onload !='function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(functionA);页面加载完毕时执行的函数名，
addLoadEvent(functionB);*/
window.onload = gallery;//网页加载完毕时触发事件onload；
function gallery(){//新的函数
	if(!document.getElementById)return false;//检测浏览器是否理解getElementById,如果否，返回false
	if(!document.getElementsByTagName)return false;//检测浏览器是否理解getElementsByTagName,如果否，返回false
	if(!document.getElementById("image_a"))return false;//检测浏览器是否理解Id("image_a")如果否，返回false
	var ul_l = document.getElementById("ul_l");//获取对象赋给变量
	 var a_a = ul_l.getElementsByTagName("a");//获取对象赋给变量tag获取数组；
	 for (var i=0;i<a_a.length;i++) {//循环变量所有的a元素；
	 	a_a[i].onclick = function(){//没循环到一个a执行一次点击事件onclick；
	 		ickima(this); //事件要执行的函数ickima，this代表它本身，他本身是a元素；
	 		return false;//事件点击时要执行的方法,返回false，作用禁止本元素生效；
	 	}
	 }
	
}
function ickima(this_a){//新的函数，参数变量this_a=从a_a[i].onclick = function()中获取；
	var a_href = this_a.getAttribute("href");//获取它的属性href的值；
	var black_imag = document.getElementById("image_a");//获取对象；
	black_imag.setAttribute("src",a_href);//修改属性src的值
	var titletext = this_a.getAttribute("title");//获取属性title
	var p_text = document.getElementById("imageid");//获取对象
	p_text.firstChild.nodeValue = titletext;
	//修改p元素下firstchild节点的值，firstchild==childnodes[0]；nodetype==3；属于文本节点；
}
