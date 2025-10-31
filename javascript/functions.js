function avg(a , b,c){
    return (a+b+c)/3;
}
c= avg(10,20,10);
console.log(c)
function avg(a , b,c){
    return a+b+c;
}
avg(10,20,10);
 
//  FUNCTIONS IN JAVASCRIPT


// 🔹 1️⃣ Function Declaration
// A simple function that adds two numbers and returns the result.
function addNumbers(a, b) {
  return a + b; // 'return' gives back the result to where the function is called
}

// Call the function and store the result
let sum = addNumbers(10, 20);
console.log("Sum of two numbers:", sum);
// Output: Sum of two numbers: 30


// 🔹 2️⃣ Function Expression
// Function stored in a variable (also called anonymous function)
const multiply = function (x, y) {
  return x * y;
};

console.log("Product of numbers:", multiply(4, 5));
// Output: Product of numbers: 20


// 🔹 3️⃣ Arrow Function (ES6 Feature)
// A shorter syntax for writing functions
const subtract = (x, y) => x - y;
console.log("Difference of numbers:", subtract(15, 5));
// Output: Difference of numbers: 10


// 🔹 4️⃣ Function with Default Parameters
// If you don’t pass an argument, default values will be used.
function greet(name = "Lovely") {
  console.log(`Hello, ${name}! Welcome to JavaScript 🚀`);
}

greet(); // Uses default name
greet("Monika"); // Uses given name
// Output: 
// Hello, Lovely! Welcome to JavaScript 🚀
// Hello, Monika! Welcome to JavaScript 🚀


// 🔹 5️⃣ Function Returning Another Function
// Demonstrates closures (function inside function)
function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
console.log("Double of 5 is:", double(5)); // Output: 10

const triple = makeMultiplier(3);
console.log("Triple of 5 is:", triple(5)); // Output: 15


// ===============================
// 🌟 forEach LOOP with ARRAYS
// ===============================

// Create an array of numbers
const numbers = [10, 20, 30, 40, 50];

// 🔹 Using forEach to iterate through array
numbers.forEach((num, index) => {
  console.log(`Index ${index}: Value ${num}`);
});
// Output:
// Index 0: Value 10
// Index 1: Value 20
// Index 2: Value 30
// Index 3: Value 40
// Index 4: Value 50


// 🔹 Using forEach with an array of objects
const students = [
  { name: "Lovely", marks: 85 },
  { name: "Monika", marks: 92 },
  { name: "Piyush", marks: 78 },
];

students.forEach((student) => {
  console.log(`${student.name} scored ${student.marks} marks.`);
});
// Output:cd javascript


// Lovely scored 85 marks.
// Monika scored 92 marks.
// Piyush scored 78 marks.
