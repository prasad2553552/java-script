// ARRAY 
let student = ["Ram","ravi","sita"]
console.log(student);

// Creating an array
let number = [10,20,30,40,50]
console.log(number)
//JavaScript lo array create cheyadaniki common ga 2 methods unnayi.
//Array literal
let car = ["BMW","Audi","Toyota"]
console.log(car)

//new Array()
let fruits = new Array("apple", "banana", "mango");
console.log(fruits);
//We can create an array using the Array constructor.

//ACCESSING ARRAY ELEMENTS
let language = ["HTML", "CSS", "javascript"];
console.log(language[0]);
console.log(language[1]);
console.log(language[2]);
//Use the index number to access an element

//chaging Array elements
let fruits1 = ["Apple", "Banana", "Mango"];
fruits1[1] = "0range";
console.log(fruits1);

//Accessing first element
let stu = ["ram", "ravi", "lokesh", "kiran"]
console.log(stu[3])
// First element index 0

//Accessing Last Element
let fruites1 = [ "Apple", "Banana", "Mango"];
console.log(fruites1[fruites1.length - 1]  )

//Array Length
console.log(fruites1.length)
// .length array lo enni elements unnayo cheptundi

//Looping Through an Array
//forloop
let fruits2 = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits2.length; i++) {
    console.log(fruits2[i]);
}
//Array lo unna elements ni one-by-one print cheyyadaniki loop use chestamu.

//Adding Array Elements
let sub = ["python", "HTML", "css",]
sub.push("javascript")
console.log(sub)


//Arrays with Objects
let person = [
    {
        name: "Ramprasad",
        age: 26
    },
    {
        name: "Ravi",
        age: 27
    }
];
console.log(person);


let fruits3 = ["Apple", "Banana", "Mango"];

// Access
console.log(fruits3[0]);

// Change
fruits3[1] = "Orange";

// Add
fruits3.push("Grapes");

// Length
console.log(fruits3.length);

// First element
console.log(fruits3[0]);

// Last element
console.log(fruits3[fruits3.length - 1]);

// Loop
for (let i = 0; i < fruits3.length; i++) {
    console.log(fruits3[i]);
}