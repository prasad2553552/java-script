//\d --MATCHES DIGITS
let text = "my age is 25";
let result = text.match(/\d/g);
console.log(result);
//Matches any digit from 0 to 9.

//\D --- Matches NonDigits 
let tex = "abc123";
console.log(tex.match(/\D/g));

let A = "mynameisram"
console.log(A.match(/\D/g))
//Matches any character that is not a digit

//\w--matche word characters
let text1 = "Hello_123";
console.log(text1.match(/\w/g));

//\W--Matches Non-word Characters
let texts = "hello@123";
console.log(texts.match(/\W/g));
//Matches characters other than ASCII letters, digits, and underscore.


//\s-- Matches
let value = "Hello World";
console.log(text.match(/\s/g));
//Matches whitespace characters, including spaces, tabs, and line breaks.

//\S --- Matches Non-WHITESPACE
let values = " hello world"
console.log(values.match(/\S+/g))
//Matches any character that is not whitespace.

//\ddd ---- OCTAL Escape
let text3 = "a";
console.log(/\141/.test(text3));

let text4 = "b";
console.log(/\142/.test(text4));
//Represents a character using an octal escape sequence in applicable regular-expression contexts.

//\xhh --- Hexadecimal Escape
let text5 = "A"
console.log(/\x41/.test(text5));
//Represents a character using a two-digit hexadecimal value.

//\uhhhh --- unicode Escape
let uh = "A";
console.log(/\u0041/.test(uh));
