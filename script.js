



var form=document.getElementById ("for");
var one = document.getElementById ("one");
var two =  document.getElementById ("two");
var three =  document.getElementById ("three");
var four =  document.getElementById ("four");
var five =  document.getElementById ("five");
var six =  document.getElementById ("six");
var seven= document.getElementById ("seven");
var eight =document.getElementById("eight");
var nine =  document.getElementById ("nine");
var zero =  document.getElementById ("zero");
var plus = document.getElementById ("plus");
var sum = document.getElementById("minus");
var ap =  document.getElementById ("ap");
var doub =  document.getElementById ("double");
var dd =  document.getElementById ("divide");
var calc = document.getElementById("got");

calc.onclick = myFunction;

one.onclick = myFunction1;

two.onclick = myFunction2;

three.onclick = myFunction3;

four.onclick = myFunction4;

five.onclick = myFunction5;

six.onclick = myFunction6;

seven.onclick = myFunction7;

eight.onclick = myFunction8;

nine.onclick = myFunction9;

zero.onclick=myFunction0;

plus.onclick = myPlus;

doub.onclick =myDouble;

sum.onclick= myFunction10;

dd.onclick = myFunctiondd;

ap.onclick =myAp;

function myPlus(){
form.value += "+";
plus.onclick = ""


}

 function myDouble (){
 form.value += "*"
 doub.onclick = ""

 }
 function myFunction10(){
 form.value += "-"
  sum.onclick = ""
 
 } 
 
 function myFunctiondd(){
	 form.value += "/"
	dd.onclick = ""
	 
 }
 
 function myAp(){
	 form.value += "."
	 ap.onclick = ""
	 
 }





 
























