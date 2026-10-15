let text = "i am learning javaScript";
let pattern = /javaScript/;
console.log(pattern.test(text));
//A Regular Expression is a sequence of characters used to search, match, and validate patterns in text.

let num = "my age is 26";
let pattern1 = /[0-9]/;
console.log(pattern1.test(num));

let name = "hello world"
let pattern2 = /[0-9]/;
console.log(pattern2.test(name))

//REGULAR EXPRESSIONS FLAGS
// g flags - global search
let text1 = "cat cat cat";
let results = text1.match(/cat/g);
console.log(results)
// The g flag finds all matches instead of stopping at the first match.

let tex = "hello world"
let result = tex .match(/hello world/g);
console.log(result)

// i flag---ignore case
let value = "Hello world";
console.log(/hello/i.test(value));
//The i flag makes matching case-insensitive.

//m FLAG ---- multiline
let word = "hello\nram\nprasad"
console.log(/^prasad/m.test(word));
//The m flag allows ^ and $ to match the start and end of each line.

//s flag---Dot All
let line = "web\ndeveloper"
console.log(/web.developer/s.test(line));
//The s flag allows the dot (.) to match newline characters.

//u FLAG --- UNICODE
let emoji = "🧑";
console.log (/^.$/u.test(emoji))
//The u flag enables Unicode-aware regular expression behavior

//y FLAG -- STICKY
let text2 = " hello world";
let pattern3 = /world/y;
pattern3.lastIndex = 6;
console.log(pattern3.exec(text2))
//The y flag requires the match to begin exactly at the position specified by lastIndex

//d FLAG --- has indices 
let pattern4 = /cat/d;
let result1 = pattern4.exec("cat dog");
console.log(result1.indices)
//The d flag provides the start and end indices of matched text.

//one pattern multiple flags
//gi flag
let A = "Hello hello HELLO";
console.log(A.match(/hello/gi));

//gm flag
let B = "Hello\nworld\nHello";
console.log(text.match(/^Hello/gm));

