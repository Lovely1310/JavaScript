// literal notation
let pattern = /hello/;
let a = new RegExp("hello");
// pattern matching is used to search any specific text or character , sequence
let str = "i love Javascript";
let res = /love/.test(str);
console.log(res);
// global matching 
let fruits = "apple apple mango apple orange";
let result = fruits.match(/apple/g);
console.log(result); 
// Extraction using exec() or match()
// using exec()
let p = /js/;
let r = p.exec("i am learning js");
console.log(r[0]);
// using match()

let l = "i am a student";
let q = l.match(/student/);
console.log(q);