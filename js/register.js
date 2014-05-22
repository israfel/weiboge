//注册表单核查
function checkForm() {
	var email = document.getElementById("email");
	var passwd = document.getElementById("password");
	var passwd2 = document.getElementById("password_2");
	var nickname = document.getElementById("nickname");
	var comefrom = document.getElementById("comefrom");
	
	var emailErr = document.getElementById("email-err");
	emailErr.style.display = "none";
	var emailReg = /^[a-zA-Z0-9].*@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
	if (!emailReg.test(email.value)) {
		emailErr.style.display = "table-row";
	}
	
	var passwdErr = document.getElementById("passwd-err");
	var passwdReg = /^\w{6,16}$/;
	passwdErr.style.display = "none";
	if ((!passwdReg.test(passwd.value)) || (!passwdReg.test(passwd2.value)) || (passwd.value != passwd2.value)) {
		passwdErr.style.display = "table-row";
	}
	
	var nicknameErr = document.getElementById("nickname-err");
	nicknameErr.style.display = "none";
	var nicknameReg = /^[\w\u4E00-\u9FA5]{2,16}$/;
	if (!nicknameReg.test(nickname.value)) {
		nicknameErr.style.display = "table-row";
	}
	
	var comefromErr = document.getElementById("comefrom-err");
	comefromErr.style.display = "none";
	var comefromReg = /^[\w\u4E00-\u9FA5]{2,16}$/;
	if (!comefromReg.test(comefrom.value)) {
		comefromErr.style.display = "table-row";
	}
}
