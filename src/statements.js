// // conditional js
let age = 22;
if (age>18){
    console.log("you can vote")
}
if(age<18){
    console.log("u cannot vote");
// }
let mode = "dark";
if(mode == "dark"){
    color = "black";
}
if(mode =="light"){
    color="WHITE";
}

console.log(color);

// // // if else statement'
let mode = "red";
if(mode == "dark"){
    color = "black";
}
else {
    color="WHITE";
}
console.log(color);

// // odd or even
let num=50;
if(num%2 ==0){
    console.log("number is even")
}
else{
    console.log("number is odd");
}
console.log(num)

//else if statement
let age = 55;
if(age<22){
    console.log(" your age is lesser than 22");
}
else if(age>22){
    console.log("your age is  greater than 22");
}
else{
 console.log("your age is 22");
}

// ternary operator
let age = 35;
let result = age>=18 ? "adult": "not adult";
console.log(result)

// switch'
let marks = 99;
switch(marks){
    case 88:
        console.log("output is 88");
        break;
    case "44":
        console.log("output are 44");
        break;
    case 99:
        console.log("output is 99")
        break;
    default:
        console.log("no match found");
        
}

// practice question

let num = prompt("enter the value of num");
if(num%5==0){
    console.log("num is divisible by 5")
}
else{
    console.log("num is not divisible by 5")
}