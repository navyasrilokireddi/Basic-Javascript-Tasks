//Changing button color onclick
let btn=document.querySelector("button");
btn.onclick=()=>{
    btn.style.backgroundColor="red";
}

//Alert box

  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow >= 18) {
    greeting = "Good evening!";
  } else if (hourNow >= 12) {
    greeting = "Good afternoon!";
  } else if (hourNow >= 0) {
    greeting = "Good morning!";
  } else {
    greeting = "Hello!";
  }

  alert(greeting);

//Calculator
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var sum = num1 + num2;
alert("The sum is: " + sum);