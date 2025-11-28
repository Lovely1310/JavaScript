let marks = [700, 67, 39, 390];
console.log(marks);
console.log(marks.length); 
// array itself an object data type
// str = " hello";
console.log(marks[0]);
console.log(marks[100]);
str = "hello"     
str[0] = "y";      
console.log(str);    // output is hello because string is immutable but array in js is mutable which means we can change the
//                value of any variable by accessing their index but in string if we want to change this string then we store
//             a value in another string 

// looping over an array 

let marks1 = [7, 67, 39, 390];
for(let i  =0; i< marks1.length; i++){
    console.log(marks[i]);

}
console.log("---ended---");


// for - of loop 
for(let i of marks){
   console.log(marks);
}

let cities = ["delhi", "gurgaon", "mumbai","goa"];
for(let city of cities){
    console.log(city.toLocaleUpperCase());
}

let marks2 = [85,97,44,37,76,60];
let sum = 0;
for(let val of marks){
 sum+= val;
}
let avg = sum/marks.length;
console.log(`avg marks of the class ${avg}`);


// arrays method 
//  push(): add to end 
//  Pop() : delete from end & return
//  toString() : converts array to string

let items = ["potato", "apple", "litchi ", "guava"];
items.push("chips");
console.log(items);
let deleted_items = items.pop();
console.log(items);
console.log(items.toString());
console.log(items.concat("mango")); // concate
// unshift(): add to start
items.unshift("banana");
console.log(items);
// shift(): delete from start & return 
items.shift();
console.log(items)

// slice - return a piece of the array 
console.log(items.slice(0,2));

// splice() : change original array (add, remove , replace)
// splice(startidx , delcount , newE(1..))
let arr = [1,2,3,4,5,6,7,8]

// arr.splice(2,2,101,102);
// console.log(arr);
// add element 
// arr.splice(2,0, 101);
// console.log(arr);
// delete element
// arr.splice(3,1);
// console.log(arr);
//replace element 
arr.splice(3,1,101);  // 1 represent in middle that we want to replace one element
console.log(arr);
