//RETURN VALUE
function multiplyNumbers(a,b) {
    return a * b;
}
let result = multiplyNumbers(5, 10);
console.log("the product is: " + result);
//return అనేది function లో వచ్చిన result/value ని function బయటకు పంపడానికి ఉపయోగిస్తాం.

//Returning a Calculated Value
function calculateArea(length, width) {
    return length * width;
}
let area = calculateArea(10, 32);
console.log("the area is: " + area);
//The return statement sends a value from a function back to the place where the function was called.

//Using Return Values in Expressions

function addNumbers(D, E, F) {
    return D + E * F;
}
let result1 = addNumbers(4, 8, 2) * 10;
console.log(result1);
//return చేసిన value ని ఇంకొక calculation/expression లో directly use చేయవచ్చు.

//Return Statements Stop Execution
function test() {
    console.log("hello");
    return 100;
    console.log("world");
}
let result2 = test();
console.log(result2);
//return execute అయిన వెంటనే function execution stop అవుతుంది.

//Functions Without return
function hello() {
    console.log("Hello");
}
let result3 = hello();
console.log(result3);
//return statement లేకుండా function call చేసినప్పుడు, function execution complete అయిన తర్వాత, result3 variable లో undefined value store అవుతుంది.

//Returning Values Early
function login(username, password) {
    if (username === "");{
    return "Username cannot be empty";
    }
    if (password ==="" ) {
        return "password cannot be empty";
    }
    return "login successful"
}
console.log(login("ram", "1234"));