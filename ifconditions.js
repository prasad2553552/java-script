//if conditions
let age = 25;
if (age >= 18) {
    console.log(" eligible to vote");
}

//nested if  is Oka if lopala another if undadam.
let value = 25;
let hasID =true;
if (age >= 18) {
   if (hasID) {
        console.log("entry allowed")
    }
}

 // else if   ని multiple conditions check చేయడానికి ఉపయోగిస్తాం.
 let username = "@ram1819";
 let password = "12345";
 if (username === "@ram1819" && password === "1234") {
    console.log("login succssful");
} else {
    console.log("invalid login")
}

let experience = 5;
if (experience >= 7) {
    console.log("senior developer");
} else if (experience >= 4) {
    console.log("mid-level developer");
} else if (experience >= 1) {
    console.log("junior developer");
} else {
    console.log("invalid experience")
}

//. Ternary Operator (if...else ni short ga rayadaniki ternary operator use chestham.)
let isLoggedIn = false;
let meassage = isLoggedIn ? "welcome user" :"pleace Login";
console.log(meassage)

let marks = 30;
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

//switch  switch is used when we have multiple possible cases for one value.
let status = "delivered"
switch (status) {
    case "pending":
        console.log("order is pending");
        break;
    case "processing":
        console.log("order is processing");
        break;
    case "shipped":
        console.log("order is shipped");
        break;
    case "delivered":
        console.log("order is delivered");
        break
    default:
        console.log("unknown order status");
}

let role = "n";

switch (radmiole) {
    case "admin":
        console.log("Open Admin Dashboard");
        break;

    case "employee":
        console.log("Open Employee Dashboard");
        break;

    case "customer":
        console.log("Open Customer Dashboard");
        break;

    default:
        console.log("Invalid Role");
}

//boolean
let isAvailable = false;

if (isAvailable) {
    console.log("Product available");
} else {
    console.log("Product not available");
}

// Logical Operators
// && (AND): both conditions must be true.
let votingAge = 25;
let hasValidID = true;

if (votingAge >= 18 && hasValidID) {
    console.log("Entry allowed");
}

//or
let hasEmail = false;
let hasPhone = true;

if (hasEmail || hasPhone) {
    console.log("Contact information available");
}

//not
let isBlocked = false;

if (!isBlocked) {
    console.log("User is not blocked");
}