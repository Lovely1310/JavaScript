let day = 3;
switch(day){
    case 1:
    console.log("monday");
        break;
 case 2:
     console.log("Tuesday");
        break;
  case 3:
  console.log("Wednesday");
        break;

     case 4:
  console.log("Thursday");
        break;
        default:
            console.log("invalid Match")
}

// loops in javascript
// for loop 
for(let i =0; i<5;i++){
    console.log(i);
}

// while loop
let i = 1;
while(i<4){
    console.log(i);
    i++;
}

// do while loop 
let x = 1;
do{
    console.log(x);
    x++
}while(x<10);
// for of loop 
let fruits = ["apple" , "mango ", "litchi", "orange"];
for(let items of fruits){
    console.log(items)
}

// for- in )(objects)
let students ={
name : "monika",
degination : "Data Scientist",
age : 22,
}
for(let key in students){
    console.log(key , ": ",students[key])
}
