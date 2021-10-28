function compute()
{
    p = document.getElementById("principal").value;
	if(p=='' || p<=0) {
		var res = document.getElementById("res");
		res.innerHTML = "";
        alert("Invalid input. Please enter positive number")
		document.getElementById("principal").focus();
		
		return;

    } 
		
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
	var date = new Date(); 
    cur = date.getFullYear() + Number(y);

    result = (p*r*y)/100
	
	var res = document.getElementById("res");
	res.innerHTML = 'If you deposit <mark>'+ p + '</mark> <br/> at an interest rate of <mark>'+ r +'% </mark><br/>You will recieve an amount of <mark>' + result + '</mark><br/>' + 'in the year <mark>' + cur +'</mark>';
	
}
        
