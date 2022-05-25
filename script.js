
// }

function compute()
{



var p,t,r,si,ci;
p = document.getElementById ("first").value;
t = document.getElementById ("second").value;
r = document.getElementById ("third").value;
si = parseInt((p*t*r)/100 );
amount = p*Math.pow((1 +r/100),t );
ci = amount-p;
document.getElementById ('num').innerHTML ="Simple Interest : "+si;
// document.getElementById ('num1').innerHTML ="Compound Interest : "+ci;
}

