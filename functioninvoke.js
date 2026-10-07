//FUNCTION INVOCATION
function greet(){
    console.log("hello world")
};
greet(); //function invocation
//Function ni call/execute cheyyadam ni Function Invocation antaru.

//Method Invocation
let user = {
    name: "Ramprasad",
    login: function() {
        console.log("login successful");
    }
}
user.login();

//Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("this is an IIFE");
})();