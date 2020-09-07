// JavaScript Document
function PTB2()
{
	var a = parseInt(document.getElementById("a").value);
	var b = parseInt(document.getElementById("b").value);
	var c = parseInt(document.getElementById("c").value);
	var kq, x, x1;
	if(a == 0)
	{
		if(b == 0)
			if(c == 0)
				kq = "PT vô số nghiệm";
			else
				kq = "PT vô nghiệm";
		else
		{
			x = -c/b;
			kq = "PT có nghiệm là" + x.toFixed(2);
		}
	}
	else
	{
		var delta =  b*b -4*a*c;
		if(delta <0)
			kq = "PT vô nghiệm";
		else if (delta == 0)
		{
			x = -b/(2*a);
			kq = "PT có nghiệm kép là" + x.toFixed(2);
		}
		else
		{
			x = (-b + Math.sqrt(delta))/(2*a);
			x1 = (-b - Math.sqrt(delta))/(2*a);
			kq = "Nghiệm thứ nhất là "+x.toFixed(2)+"<br>"+ "nghiệm hai là "+x1.toFixed(2);
		}
	}
	document.getElementById("kq").innerHTML= kq;
}
function Xoa()
{
	document.getElementById("a").value="";
	document.getElementById("b").value="";
	document.getElementById("c").value="";
	document.getElementById("kq").innerHTML="";
	
}