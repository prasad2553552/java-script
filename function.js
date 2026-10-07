///function introduction
function greet() {
    console.log("hello Ramprasad")
}
greet();

function logout() {
    console.log("You have been logged out")
}
logout();

function login() {
    let username = "Ramprasad";
    let password = "password123";
    if (username === "Ramprasad" && password === "password123") {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}
login();
//Function ante oka particular task perform cheyyadaniki reusable block of code.

//Function invocation 
function checkBalance() {
    let balance = 25000;
    console.log("your account balance is:" + balance);
}
checkBalance();
checkBalance();
//Function ni call/execute cheyyadam ni Function Invocation antaru.

//FUNCTION PARAMETERS
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log("The sum is: " + sum);
}
addNumbers(5, 10);
addNumbers(15, 20);

function calculateArea(length, width) {
    let area = length * width;
    console.log("The area is: " + area);
}
calculateArea(10, 32)

function twovalues(a, b) {
    let sum = (a + b);
    let product = (a * b);
    let difference = (a - b);
    console.log("The two values are: " + sum + ", " + product + ", and " + difference);
}

twovalues(5, 10);

function calculateprice(price, quantity) {
    let total = price * quantity;
    console.log("the total price is: ",total);
}
calculateprice(100, 5);
//Function ki input values receive cheyyadaniki parameters use chestam.

//FUNCTION RETURN VALUE
function multiplyNumbers(num1, num2) {
    let product = num1 * num2;
    return product;
}
let result = multiplyNumbers(5, 10);
console.log("The result is: " + result);

function calculateTotal(price, quantity) {
    return price / quantity;
}
let total = calculateTotal(1000, 50);
console.log("The total is: " , total);

//Function calculation/result ni bayataki pampinchadaniki return use chestam.

function calculateDiscount(price, discountpercentage) {
    let discountAmount = (price * discountpercentage)/100;
    return price -discountAmount;
}
let finalprice =calculateDiscount(10000,25);
console.log("final price:",finalprice);


//Function Arguments
function greetUser(name) {
    console.log("hello" + name )
}
greetUser("Ramprasad");
greetUser("John");
greetUser("Jane");


function calculateSalary(basicSalary, bonus) {
    let totalSalary = basicSalary + bonus;
    console.log("The total salary is : " + totalSalary + " and the bonus is : " + bonus);
}
calculateSalary(50000, 10000);
calculateSalary(60000, 15000);
calculateSalary(70000, 20000);
//Function ni call chesetappudu pass chese actual values ni arguments antaru.

//FUNCTION EXPRESSION
const makePayment = function(amount) {
    if (amount > 0) {
        return "payment of " + amount + " successful";
    }
    return "invalid payment amount";
};
 console.log(makePayment(5000));
//Function ni variable lo store chesi use cheyyadam Function Expression.

const calculateGST = function(price) {
    let gst = price * 0.18;
    return gst + price;
}
console.log(calculateGST(1000));
//Function ni const variable lo store chesi execute chestunnam.


//ARROW FUNCTION
const calculateDiscountPrice = (price, discountPercentage) => {
    let discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
};
console.log(calculateDiscountPrice(1000, 20));







function login(username, password) {
    if (username === "local" && password === "Babu@123") {
        return "login successful";
    } else {
        return "invalid credentials";
    }
}
let result1 = login("local", "Babu@123");
console.log(result1);
const checklogin = function(username, password) {
    if (username === "admin" && password === "admin123") {
        return "Admin login successful";
    }
    return "Admin login failed";
    };
console.log(checklogin("admin", "admin123"));
const userLogin = (username, password) => {

    if (username === "user" && password === "user123") {
        return "User Login Successful";
    }

    return "User Login Failed";
};

console.log(userLogin("user", "user123"));
