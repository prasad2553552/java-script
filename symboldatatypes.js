const x = Symbol("id");
const y = Symbol("id");
 console.log(x === y);

 //hidden identifier
 const id = Symbol("id");
let person = {
    name:"ram",
    age:26,
    [id]: "bangalore"   
};

console.log(person.name);
console.log(person.age);
console.log(person[id]);

//symbol property
const secret = Symbol("secret");

let user = {
    name: "Ramprasad",
    [secret]: "My Secret Data"
};

console.log(user.name);
console.log(user[secret]);

//typesoff 

console.log(typeof "Hello");       // string
console.log(typeof 100);          // number
console.log(typeof 10.5);         // number
console.log(typeof 123n);         // bigint
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof {});            // object
console.log(typeof []);            // object


//NaN Not a Number
let a = 10 / "Hello";
let b = 0 / 0;

console.log(a);
console.log(b);

// Check NaN
console.log(Number.isNaN(a));
console.log(Number.isNaN(b));

// typeof NaN
console.log(typeof a);