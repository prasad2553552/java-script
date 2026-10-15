//[abc] --- FIND ANY CHARACTER
let text = "Hello world";
let pattern = /[aeiou]/;
console.log(pattern.test(text));
//Matches any one character from the characters inside the brackets.

//[A-Z]-- FIND CAPITAL LETTERS
let text1 = "Hello";
let pattern1 = /[A-Z]/;
console.log(pattern1.test(text1));
//Matches any uppercase English letter from A to Z.

//[a-z] -- find small letters
let text2 = "HELLO world"
let pattern2 = /[a-z]/;
console.log(pattern2.test(text2));
//Matches any lowercase English letter from a to z.

//[0-9]--find Number
let num = "my age is 27 ";
let pattern3 = /[0-9]/;
console.log(pattern3.test(num))

//Matches any single digit from 0 to 9.

//[A-z] -- Character Range
let text3 = "Hello";
let pattern4 = /[A-z]/;
console.log(pattern4.test(text3));
// matches characters based on their character codes between uppercase A and lowercase z

//[^abc]-- sind Characters NOT listed
let text4 = "apple";
let pattern5 = /[^abc]/;
console.log(pattern5.test(text4));
//Matches any character except the characters specified inside the brackets

//\d-- find Digits
let text5 = "Room 5 ";
let pattern6 = /\d/;
console.log(pattern6.test(text5));
//Matches a digit from 0 to 9.

//\D -- find Non-Digits
let number = "1234A"
let pattern7 = /\D/;
console.log(pattern7.test(number));
// /Matches any character that is not a digit from 0 to 9.

//\w-- find word characters
let tex = "user_123";
let pattern8 = /\w/;
console.log(pattern8.test(tex));
