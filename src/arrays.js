let fruits = ["apple", "mango", "banana", "grapes"]
console.log(fruits[2])
console.log(fruits[1])
//adding an element
fruits.push("litchi");
console.log(fruits)
// removing an last element 
fruits.pop();
console.log(fruits)

// getting length
a = fruits.length;
console.log(a)

// iterating using for each loop
fruits.forEach(function(items){
    console.log(items);
})

let marks = [99, 100, 88, 87, 90];
marks.forEach(function(numbers){
console.log(numbers)
})