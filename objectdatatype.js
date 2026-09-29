//object
let person ={
    name: "Ramprasad",
    age: 27,
    city: "bangalore"
};
console.log(person);
console.log(person.name);
console.log(person.city);

//array

let fruits=["apple","mango","banana"]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//function
function greet() {
    console.log("hello world");
}
greet();

// fcunction with parameters
function add(a,b) {
    return (a + b)* (b/a);
    

}
console.log(add(20, 30));

//date
let today = new Date();
console.log(today);

//specific date
let birthday = new Date(1999-3-28);
console.log(birthday);

//regexp
let pattern = /javascript/i;
console.log(pattern.test("i am learning javascript"));
console.log(pattern.test("i am learning python"));

//set
let numbers = new Set([10,20,20,30,30]);
console.log(numbers);
numbers.add(40);
console.log(numbers);
numbers.delete(20);
console.log(numbers);


//map
let student = new Map();

student.set("name","ramprasad");
student.set("age",26);
student.set("course","MCA")

console.log(student);
 console.log(student.get("name"));
 console.log(student.get("age"));
 console.log(student.get("course"))

