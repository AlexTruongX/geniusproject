//Javascript

//Declaring variables for everything required to make calculator function

var operators = document.querySelectorAll("button.operators");
var numbers = document.querySelectorAll("button.numbers");
var display = document.getElementById("screen");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
var sqrt = document.getElementById("sqrt");

function Numbers(htmlObj, index) {
    htmlObj.addEventListener("click", function() {
        display.value += index; 
    });
}

function Operators (htmlObj, index) {
    htmlObj.addEventListener("click", function() {
        display.value += index; 
    });
}

for (var i= 0; i < operators.length; i++) {
    Operators(operators[i], operators[i].value);
}

for (var i= 0; i < numbers.length; i++) {
    Operators(numbers[i], numbers[i].value);
}

if (equal.addEventListener("click", function() {
    display.value = eval(display.value);
}));

clear.addEventListener("click", function() {
  display.value = "";  
})

var mean = document.getElementById("mean");
mean.addEventListener("click", function() {
    
    var ans; 
    
    ans = eval(display.value);
    ans = ans /((display.value.length / 2) + 0.5);
    display.value = ans; 
});