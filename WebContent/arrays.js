var obj = new Array();
function student(name,department)
{
	alert("inside student");
	this.name = document.getElementById("name").value;
	this.department = document.getElementById("department").value;
	obj.push(this.name,this.department);
	document.getElementById("name").value = "";
	document.getElementById("department").value = "";
}
function display()
{		
		var up = document.getElementById("up");
		up.innerHTML = "";
		var down = document.getElementById("down");
		down.innerHTML = "Saved Student Info"+"<br />";
		for(var x=0; x<obj.length;x++)
			if(x%2==0)
				down.innerHTML +="Name: "+obj[x];
			else
				down.innerHTML +="\t Department: "+obj[x]+"<br />";	
}

	