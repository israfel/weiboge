//判定字数
function checkWords() {
	var maxlimit = 140;
	var content = document.getElementById("input-box");
	var length = content.value.length;
	var contentMsg = document.getElementById("limit-message");
	if (length > maxlimit) {
          content.value=content.value.substring(0, maxlimit);
	}
	else {
		if (length == 0) {
			contentMsg.innerHTML = "内容限140字内";
		} else {
			contentMsg.innerHTML = "您已输入<font color='red'>"  
                        + length
                        + "</font>个字符，还可输入<font color='red'>"  
                        + (maxlimit-length)
                        + "</font>字符。";
		}
	}		
}

//控制“更换头像”按钮的出现
function showButton() {
	var btn = document.getElementById("btn-c-a");
	btn.style.visibility = "visible";
}

function hideButton() {
	var btn = document.getElementById("btn-c-a");
	btn.style.visibility = "hidden";
}

//navbar明暗效果
function setOpaque() {
	var sb = document.getElementById("navbar");
	sb.style.opacity = 1;
}

function unsetOpaque() {
	var sb = document.getElementById("navbar");
	sb.style.opacity = 0.75;
}