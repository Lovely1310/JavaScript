// map in js - creates a new array with the results of some operation. the value its callback returns are used to form new array
let nums = [67,52,39];
nums.map((val) => {
    console.log(val);
})

let newarr = nums.map((val)=>{
    return val*2;
})
console.log(newarr)

// filter method - creates a new array of elements that give true for a condition/filter. e.g - even numbers
let num = [1,2,3,4,5,6,7]
let evenarr = num.filter((val)=>{
return val % 2 ===0;
});
console.log(evenarr);

// reduce method - performs some operations & reduces the array to a single value. it returns that single value 
const array = [1,2,3,4,5];
const i = 0;
const sum= array.reduce((res,val)=>{
    return res+ val;
}
)
console.log(sum);

const a= array.reduce((res,val)=>{
    return res > val ? res : val;
}
)
console.log(a);


// we are given of marks of students. filter out of the marks of students that scored 90
let mark = [98,65,60,56,90,92,95];
const b = mark.filter((val)=>{
    return val>90;
})
console.log(b);


// let n = prompt("enter a number ")
// let arr = [];
// for(let i =1; i <=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);
