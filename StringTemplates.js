// String variables

let firstName = "Ram";
let lastName = "Prasad";
let city = "Bangalore";
let course = "JavaScript";
let age = 27;


//  Print strings

console.log(firstName);
console.log(lastName);
console.log(city);
console.log(course);


//  Length

console.log(firstName.length);
console.log(course.length);


//  Index

console.log(firstName[0]);
console.log(firstName[firstName.length - 1]);


//  Concatenation

let fullName = firstName + " " + lastName;

console.log(fullName);


//  Template Literal

console.log(`My name is ${fullName}`);
console.log(`I am ${age} years old`);
console.log(`I live in ${city}`);
console.log(`I am learning ${course}`);


//  Uppercase

console.log(firstName.toUpperCase());


//  Lowercase

console.log(firstName.toLowerCase());


//  Includes

console.log(course.includes("Script"));


//StartsWith

console.log(course.startsWith("Java"));


// EndsWith

console.log(course.endsWith("Script"));


// IndexOf

console.log(course.indexOf("Script"));


//  Slice

console.log(course.slice(0, 4));


// Replace

let message = "I am learning Python";

console.log(message.replace("Python", "JavaScript"));


// Split

let skills = "HTML CSS JavaScript Python";

console.log(skills.split(" "));


//Templates literal
let name = "ram";
let age1 = 26;
let course1 = "MCA";
let skill ="Javascript"
console.log(`student details
    Name : ${name}
    Age : ${age1}
    Course : ${course}
    Skill : ${skill}
    `); 

let a = `ram`;
let b = 24;
let c = `mca`;
console.log(`student informations ${a}, ${b}, ${c} `);

let sms = `Hello Ram Welcome to javaScript keep Learing`;
console.log(sms);

//templates calculations
let R = 50;
let S = 70
console.log(`Addition = ${R+S}`);
console.log(`multiplication = ${R*S}`);
console.log(`subtraction = ${R-S}`);
console.log(`division = ${R/S}`);
console.log(`remainder = ${R%S}`);