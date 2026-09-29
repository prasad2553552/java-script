//Arithmetic operators
let x = 5;
let y = 6;
console.log(x + y);
console.log(x * y);
console.log(x % y);
console.log(x / y);
console.log(x - y);
console.log(x ** y);
//Arithmetic operators use the +,-,*,/,%,**

//Assignment operators
let a = 10; 
a += 4;
a -= 5;
a /= 6;
a *= 7;
a **= 8;
a %= 9;
console.log(a);
//Assignment operators step by step +=,-=,/=,%=,**=,*=

//comparisam operators
let b = 30;
let c = 40;
console.log(b == c);
console.log(b != c);
console.log(b===c);
console.log(b !== c);
console.log(b > c);
console.log(b < c);
console.log(b >= c);
console.log(b <= c);
//comparison operators use this ==,===,!=,!==,<,>,<=,>=

//logical operators
let age = 27 ;
let hasID = true;
console.log(age <= 18 && hasID); //AND
console.log(age >= 18 || hasID);//OR
console.log(!hasID);            //NOT


//Bitwise Operators
let d = 7;  //7=0111 binary
let e = 9;  //9=1001 binary
console.log(d & e);
console.log(d | e);
console.log(d ^ e);
console.log(~d);
console.log(d << 2);
console.log(d >> 2);
console.log(e >>> 2);
//bitwise operators &,|,^,~,<<,>>,<<<

//Conditional / Ternary Operator
let vote = 16;
let result =vote >= 18 ? "Eligible" : "Not Eligible"
console.log(result);
//Conditional / Ternary Operator condition ?, value1 : value2

//Comma Operator
let value = (10 * 5, 60 + 50, 80 - 60)
console.log(value)
//comma operator is ,

// unary Operator
let  s = 5
let r = "ram"

 console.log(+s);
 console.log(-s);
 console.log(++s);
 console.log(--s);
 console.log(typeof r);
 console.log(!s );
//unary Operator +,-,++,--,!,typeof

let marks = 35;

if (marks >= 35) {
    console.log("Pass");

    for (let i = 1; i <= 3; i++) {
        console.log("Practice");
    }
}
