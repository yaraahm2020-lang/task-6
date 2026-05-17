var num=Number(window.prompt("Enter a number"));

console.log(num)


var num1=window.prompt("Enter another number");

if(num1%2==0||num1%3==0&&num1%4==0){
    console.log("yes");}
else{    console.log("no")
}



var num3 = Number(window.prompt("Enter first integer:"));
var num4 = Number(window.prompt("Enter second integer:"));

if (num3 > num4) {
    console.log(num3);
} else {
    console.log(num4);
}


var num5 = Number(window.prompt("Enter another integer:"));
if (num5 >= 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}



var num1 = Number(window.prompt("Enter first integer:"));
var num2 = Number(window.prompt("Enter second integer:"));
var num3 = Number(window.prompt("Enter third integer:"));

var max = num1;
var min = num1;

if (num2 > max) {
    max = num2;
}

if (num3 > max) {
    max = num3;
}

if (num2 < min) {
    min = num2;
}

if (num3 < min) {
    min = num3;
}

console.log("Max = " + max);
console.log("Min = " + min);



var num6 = Number(window.prompt("Enter an integer:"));

if (num6 % 2 == 0) {
    console.log("The number is even.");
} 
else { console.log("The number is odd.");
}


var leter = window.prompt("Enter a letter:");
if (leter == "a" || leter == "e" || leter == "i" || leter == "o" || leter == "u") {
    console.log("The letter is a vowel.");
} else {
    console.log("The letter is not a consonant.");
}


var num7 = Number(window.prompt("Enter an integer:"));


 for (var i = 1; i <= num7; i++) {
       
              console.log(i);

         }
    
var num = Number(window.prompt("Enter an integer:"));

for (var i = 1; i <= 12; i++) {
    console.log(num * i);
}




    
var num = Number(window.prompt("Enter another integer:"));

for (var i = 0; i <= num; i=2+i) {
    console.log(i);
}



var num = Number(window.prompt("enter integer:"));
var num2 = Number(window.prompt("enter another one:"));


    console.log(num ** num2);



var sub1 = Number(window.prompt("Enter marks for subject 1:"));
var sub2 = Number(window.prompt("Enter marks for subject 2:"));
var sub3 = Number(window.prompt("Enter marks for subject 3:"));
var sub4 = Number(window.prompt("Enter marks for subject 4:"));
var sub5 = Number(window.prompt("Enter marks for subject 5:"));


var totalMarks =  (sub1 + sub2 + sub3 + sub4 + sub5);
var averageMarks =  (totalMarks / 5);
var percentage =  ((totalMarks / 500) * 100);


console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);
console.log("Percentage: " + percentage);




var month = Number(window.prompt("Enter month number (1-12):"));


if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log("The month has 31 days.");
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("The month has 30 days.");
} else if (month == 2) {
    console.log("The month has 28 or 29 days.");
} else {
    alert("Invalid month number.");
    console.log("Invalid month number.");
}





var math = Number(window.prompt("Enter marks for Math:"));
var chemistry = Number(window.prompt("Enter marks for Chemistry:"));
var physics = Number(window.prompt("Enter marks for Physics:"));
var english = Number(window.prompt("Enter marks for English:"));
var biology = Number(window.prompt("Enter marks for Biology:"));

var totalMarks = math + chemistry + physics + english + biology
var percentage = (totalMarks / 500) * 100;


if (percentage >= 90) {
    console.log("Grade: A");
} else if (percentage >= 80) { 
    console.log("Grade: B");
} else if (percentage >= 70) {
    console.log("Grade: C");
} else if (percentage >= 60) {
    console.log("Grade: D");
}else if (percentage >= 50) {
    console.log("Grade: E");
}else {
    console.log("Grade: F");
}















