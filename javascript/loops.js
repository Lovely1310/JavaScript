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
let a= "hi \t lovely"
console.log("hi \n lovely");
console.log(a.length);

// string methods in js
// str.toUpperCase , str.toLowerCase, str.trim (remove whitespace)
let b= "   hi \t lovely cutie "
console.log(a.toUpperCase());
console.log(a.toLowerCase()); 
console.log(a.trim()) // it only trim starting & ending whitespace

// it creates new string , it does not change orginal string
let c = "THIS is a BOOK";
n = c.toLowerCase();
console.log(n);
console.log(c);      // In JS , String is immutable


// str.slice(start, end?) // returns part of string
// str1.concat(str2) join str2 with str1
// str.replace(searchVal,newValue)
// str.charAt(idx)

let st = "012562";
console.log(st.slice(1,5));    // 5th index not inclusive {output - 1256}

let st1 = "0125hello62";
let st2 = "hello";
console.log(st1.slice(1));  
console.log(st1.concat(st2));
console.log(st1.replace("2","M"));
a1 =st1.charAt(3);
console.log(a1);