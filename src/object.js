let person={
    name:"Monika",
    roll_no : 14,
    Subject: "Javascript",
    skills: ["c++", "java" , "Python", "HTML", "CSS"],
    greet:function(){
       console.log("hello "+ this.name);
    } 
};
// accessing Properties
console.log(person.name);
console.log(person.roll_no);
console.log(person.Subject);
console.log(person.skills);

person.greet();
// updating value
person.roll_no = 22;
console.log(person.roll_no);

// deleting a value 
delete person.Subject;
console.log(person.Subject);

// strings
let name1 = "lovely";
let message = `hello my dear ${name1}`;
console.log(message);
console.log(name1.length)
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.toLocaleLowerCase());
console.log(name1.slice(1,4));