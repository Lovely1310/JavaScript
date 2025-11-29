// global scope -- a variable declared outside any function or block or can be acceseed anywhere in the program 
let global = "hello i am a global variable";
function msg(){
    console.log(global);
} 
msg();
console.log(global);
// --------------------------------------------------------------------------------------------
// local scope -- a variable can be accessed within a specific block & cannot be accessed outside
let local = "hello i am a local variable";
function lc(){
    let a = "javascript";
    console.log(a);
    console.log(local);
}
lc();
console.log(local);
// console.log(a); error shows a is not defined because it is local variable 
// --------------------------------------------------------------------------------------------

// block scope - let & constant are block scope keywords but var is not block scope var can be accessed outside 
if(true){
    let x = 10;
     const y = 20;
     var z = 30;
}
// console.log(x); error shows x is not defined 
// console.log(y);  error shows y is not defined 
console.log(z);
// --------------------------------------------------------------------------------------------
// lexical scope -- Inner functions can access variables from their outer functions due to JavaScript’s lexical scoping nature.
function outer(){
 let a = "Atomic Habit";
 function inner(){
    console.log(a);
 }
 inner();
}
outer();
// --------------------------------------------------------------------------------------------
// variable shadowing -- When a variable with the same name is declared in inner scope, it hides (overrides) the variable from an outer scope.
let name = "global name";
function test() {
    let name = "Local Name";  // Shadows global variable
    console.log(name);        // Output: Local Name
}
test();
console.log(name);            // Output: Global Name
