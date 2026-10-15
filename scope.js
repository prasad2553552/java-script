//scopejavascript
//Scope అంటే ఒక variable ని program లో ఎక్కడ access/use చేయగలమో ఆ area.

//global scope
let name = "Ram";
function showName() {
    console.log(name);
}
showName();
console.log(name)
//Function లేదా block బయట declare చేసిన variable Global Scope లో ఉంటుంది.

//function scope
function student(){
    let name = "Ravi";
    console.log(name);
}
student();
//Function లో declare చేసిన variable ఆ function లో మాత్రమే accessible.

//Block scope
if (true) {
    let age = 25;
    const name ="Ramprasad";
    console.log(age);
    console.log(name);
}

//nested scope
let x = 10;
function outer() {
    let y = 20;
    function inner() {
        let z = 30;
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}
outer();


//JavaScript Hoisting 
//Hoisting అంటే JavaScript execution ప్రారంభించే ముందు variable declarations
//  మరియు function declarations memoryలోకి తీసుకెళ్లడం.
//var  HOISTING 
console.log(a);

var a = "Ramprasad";