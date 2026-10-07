//FUNCTION ARGUMENTS
function user(name) {
    console.log("hello " + name);
}
user("ramprasad");
//Argument అంటే function ని call చేసేటప్పుడు function కి మనం పంపే actual value.

//Positional Arguments
function add(a,b) {
    console.log(a + b);
}
add(5, 10)

function user(name, age, place) {
    console.log("name: " , name);
    console.log("age: " , age);
    console.log("place: " , place);
}
user("Ramprasad", 27, "Thimmampuram");

function login(username, password) {
    console.log("Username:", username);
    console.log("Password:", password);
}
login("ram123", "abc@123");

function student(name, course) {
    console.log(name);
    console.log(course);
}
student("Ramprasad", "MCA");

// The arguments Object
function show() {
    console.log(arguments);
}
show(10,20,30,40,50,60);
 
//individul values
function show1() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
show1("Ram", 25, "Banalore")

//arguments count
function show2() {
    console.log(arguments.length);
}
show2(10,20,30,40,50,60)

//argument variables
function add1 (c, d) {
    return c + d;
}
let x = 10;
let y = 20;

let result = add1(x, y);
console.log(result);

function calculateTotal(price, quantity){
    return price * quantity;
}
let productprice = 500;
let productquantity = 5
let total = calculateTotal(productprice,productquantity);
console.log("total",total)

//Extra arguments allowed
function add2(x, y) {
    return x + y;
}
console.log(add2(10,20,40));

// Incorrect Arguments
function value(ab , cd){
    return ab + cd
}
console.log(value(10, "20"))
//Arguments technically "incorrect" అయినా JavaScript చాలాసార్లు error ఇవ్వదు. కానీ unexpected result రావచ్చు.

//Default Argument — Useful Concept
function welcome(name = "guest"){
    return "welcome " + name;
}
console.log(welcome());
console.log(welcome("ram"));

function calculateBill(price, quantity, discount = 0) {

    let total = price * quantity;

    return total - discount;
}

let productPrice = 1000;
let productQuantity = 2;
let discount = 200;

let finalBill = calculateBill(
    productPrice,
    productQuantity,
    discount
);

console.log("Final Bill: ₹" + finalBill);