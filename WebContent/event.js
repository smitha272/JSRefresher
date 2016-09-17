function enterCode(){
	var area = document.getElementById("disp");
	area.innerHTML = "Mouse has entered.";
	area.style.backgroundColor	= "yellow";
	area.style.height = "200px";
	area.style.width = "200px";
}
function leaveCode(){
	var area = document.getElementById("disp");
	area.innerHTML = "Mouse has left.";
	area.style.backgroundColor	= "red";
	area.style.height = "100px";
	area.style.width = "100px";
}