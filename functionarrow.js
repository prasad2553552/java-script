//ARROW FUNCTION
const add = (a, b) => {
    return a + b ;
};
console.log(add(10,20));

const functionNmae =(parametres) => {
    // code
}
//Arrow Function అంటే function ని short syntax లో రాయడం.
const greet = (name) => {
    console.log ("hello " +  name)
};
greet ("Ramprasad")

// Shorter Syntax
const add1 = (x, y)=> x + y
console.log(add1(5, 10));
//ఒక statement మాత్రమే ఉంటే {} మరియు return remove చేయవచ్చు.

// Arrow Functions with One Parameter
const square = x => x * x;
console.log(square(5));

const user = name => "hello" + name
console.log (greet ("Ram"));
//ఒక parameter మాత్రమే ఉంటే () కూడా remove చేయవచ్చు.

// Arrow Functions Return Value by Default
const multiply = (a, b) => a * b;
console.log(multiply(5, 4));
// return keyword లేకుండానే value return అవుతుంది

//ARROW FUNCTION PARAMETERS
const total = (price, quantity)=>price * quantity;
console.log(total(100, 3));

// Arrow Functions with No Parameters
const welcome = () => {
    return "welcome to javaScript";
};
console.log(welcome());

//Arrow Functions and this Keyword
const person = {
    name: "Ram",
    greet: function() {
        const message =() => {
            console.log("hai " + this.name)
        };
        message();
    }
}
person.greet();

//Normal function vs Arrow
const person1 = {
    name: "Ram",
    greet() {
        console.log(this.name);
    }
};
person1.greet();

//When to Use Arrow Functions
const numbers = [1, 2, 3, 4];
const double = numbers.map(num => num * 2);
console.log(double);
//Short operations/callbacks కోసం arrow functions చాలా useful.

//When NOT to use arrow Functions
const user1 = {
    name: "ram",
    showName() {
        console.log(this.name);
    }
};
user1.showName();