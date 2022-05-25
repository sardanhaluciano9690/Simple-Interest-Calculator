
// }

function compute()
{



var p,t,r,si,ci = Number;
p = document.getElementById ("first").value;
t = document.getElementById ("second").value;
r = document.getElementById ("third").value;
si = parseInt((p*t*r)/100 );
amount = p*Math.pow((1 +r/100),t );
ci = amount-p;
const dt = new Date();
let thisYear  = dt.getFullYear();
let endYear = parseInt(t) + parseInt(thisYear)  ;


document.getElementById ('num1').innerHTML ="If you deposit: "+p +", ";
document.getElementById ('num2').innerHTML =" "+" at an interest rate of "+r + "%.";
document.getElementById ('num3').innerHTML ="You will receive an amount of: "+si +",";
document.getElementById ('num4').innerHTML ="in the year of: "+ endYear+".";
// document.getElementById ('num1').innerHTML ="Compound Interest : "+ci;
}

