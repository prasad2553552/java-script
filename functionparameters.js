//FUNCTION PARAMETERS
function addNumbers(num1,num2) {
    let sum = num1 + num2;
    console.log("the sum is: " + sum);
}
addNumbers(5, 10);

//single parameter function
function greetUser(name) {
    console.log("hello " + name);
}
greetUser("Ramprasad");

//Multiple Parameters
function personDetails(name, age, city) {
    console.log("name: " + name);;
    console.log("age: " + age);
    console.log("city: " + city);
}
personDetails("Ramprasad", 27, "Hyderabad")

//default parameter values
function greetUser(name = "Gest") {
    console.log("hello " + name);
}
greetUser(); // will use default value "Guest"
//Argument ఇవ్వకపోతే default value ఉపయోగిస్తుంది.

//Rest Parameterd
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    console.log("the sum is: " + total);
}
sumAll(5, 10, 15);
//both rest parameters and default parameters are used to handle variable number of arguments in a function. Rest parameters allow you to represent an indefinite number of arguments as an array, while default parameters provide default values for function parameters if no value or undefined is passed.
function total(...numbers) {
    console.log(numbers);
}
total(10, 20, 30, 40);




