// loops.js

// ---------------------------
// 1️⃣ For Loop
// ---------------------------
// For loop ka use tab hota hai jab hume pata ho ki kitni baar loop chalani hai

console.log("---- For Loop ----");
for (let i = 1; i <= 5; i++) {
    console.log(`For loop iteration ${i}`); // Template literal ka use
}

// ---------------------------
// 2️⃣ While Loop
// ---------------------------
// While loop ka use tab hota hai jab hume loop condition ke true hone tak chalana ho

console.log("---- While Loop ----");
let j = 1;
while (j <= 5) {
    console.log(`While loop iteration ${j}`);
    j++;
}

// ---------------------------
// 3️⃣ Do-While Loop
// ---------------------------
// Do-While loop ek baar minimum run hota hai phir condition check hoti hai

console.log("---- Do-While Loop ----");
let k = 1;
do {
    console.log(`Do-While loop iteration ${k}`);
    k++;
} while (k <= 5);

// ---------------------------
// 4️⃣ For-Of Loop
// ---------------------------
// Arrays me iterate karne ke liye for-of loop best hai

console.log("---- For-Of Loop ----");
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// ---------------------------
// 5️⃣ For-In Loop
// ---------------------------
// Objects me properties ke liye for-in loop ka use hota hai

console.log("---- For-In Loop ----");
let person = {
    name: "Monika",
    age: 22,
    profession: "Student"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Access values using object[key]
}

// ---------------------------
// 6️⃣ Literals
// ---------------------------
// Literal means fixed value in JS

let numberLiteral = 100;      // Number literal
let stringLiteral = "Hello";  // String literal
let booleanLiteral = true;    // Boolean literal

console.log("Number:", numberLiteral);
console.log("String:", stringLiteral);
console.log("Boolean:", booleanLiteral);

// ---------------------------
// 7️⃣ Template Literals
// ---------------------------
// Template literals allow embedding variables inside strings

let greeting = `Hi, my name is ${person.name} and I am ${person.age} years old.`;
console.log(greeting);

// ---------------------------
// ✅ End of loops.js
// ---------------------------
