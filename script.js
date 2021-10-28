function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
	var date = new Date(); 
    cur = date.getFullYear() + Number(y);

    result = Number(p) + (p*r*y)/100
	
	var res = document.getElementById("res");
	res.innerHTML = 'If you deposit <mark>'+ p + '</mark> <br/> at an interest rate of <mark>'+ r +'% </mark><br/>You will recieve an amount of <mark>' + result + '</mark><br/>' + 'in the year <mark>' + cur +'</mark>';
	
}

        
