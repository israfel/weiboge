//随机图片
window.onload = function() {
	var no = Math.floor((Math.random()*7));
	var filename = "doge-" + no + ".gif";
	var path = "img/dogegif/" + filename;
	document.getElementById("navbar-logo").src  = path;
}