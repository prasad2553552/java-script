//Array toString
let fruits =["Apple","banana","mango"];
let result = fruits.toString();
console.log(result);
console.log(typeof result);

//Data string
let today = new Date();
let dateString = today.toDateString();
console.log(dateString);

//number tostring
let number = 108;
let x = number.toString();
console.log(x);
console.log(typeof x)

let y = 10;

console.log(y.toString(2));
console.log(y.toString(8));
console.log(y.toString(16));

//function toString
function greet() {
    console.log("hello");
}
let z = greet.toString();
console.log(z)

//object tostring
let person ={
    name: "Ramprasad",
    age:27
}
console.log(person.name);

//toLocaleString
let a = 1000000;

console.log(a.toLocaleString());
console.log(a.toLocaleString("en-IN"));
