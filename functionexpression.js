//function Expression
let add = function (a,b) {
    return a + b; // function expression
};
console.log(add(10,20));
//Function Expression అంటే function ని ఒక variable లో store చేయడం.

//anonymous function
let greet = function() {
    console.log("hello")
};
//ఇక్కడ function కి పేరు లేదు. greet variable ద్వారా call చేస్తాం.

//Function Declaration vs Function Expression
//function declaration
function add(a, b) {
    return a + b
};
//function expression
let add =function (a, b) {
    return a + b
};
//Declaration లో directly function name ఉంటుంది; Expression లో function ని variable కి assign చేస్తాం.

