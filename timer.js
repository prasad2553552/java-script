//SET TIMEOUT
function loginsuccess() {
    console.log("login successfull")
}
setTimeout(loginsuccess, 3000); // 3 seconds delay before executing the loginsuccess function
//Given time తర్వాత only one time function execute cheyyadaniki.
setTimeout(function() {
    console.log("This message is displayed");
}, 5000); // 5 seconds delay before executing the anonymous function

//SET INTERVAL
let count = 2;
setInterval(function() {
    console.log("seconds:" + count);
    count++;
    if (count > 10) {
        clearInterval(this);
    }
} , 2000);
//Given time తర్వాత only one time function execute cheyyadaniki.

//clear TIMEOUT
let timeoutId = setTimeout(function() {
    console.log("hello");
},4000);
clearTimeout(timeoutId);

let count1 = 1;

let timer = setInterval(function () {
    console.log(count1);
    count1++;

    if (count1 > 5) {
        clearInterval(timer);
    }
}, 1000);