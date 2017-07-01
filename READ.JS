window.onload = photoimag;
function photoimag(){
	var a_a = document.getElementsByTagName("a");
	for (var i=0;i<a_a.length;i++) {
		a_a[i].onclick = function(){
			photot(this);
			return false;
		}
	}
}
function photot(image_a){
	var a_href = image_a.getAttribute("href");
	var ima = document.getElementById("myimage");
	ima.setAttribute("src",a_href);
}
