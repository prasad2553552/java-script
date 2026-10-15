// compile() DEPRECATED
let pattern = /hello/i
console.log(pattern.test("HELLO"));
//Earlier, it was used to recompile a regular expression. It is deprecated and should not be used in modern JavaScript.

//CONSTRUCTOR
let text = /hello/;
console.log(text.constructor);
console.log(text.constructor === RegExp);
//Returns the constructor function that created the RegExp object.

// dot All
let value = /hello.world/s;
console.log(value.dotAll);
console.log(value.test("hello\nworld"));
//Returns true if the s flag is enabled.

// regExp.escape() ES2025
let values = "a.b";
let escaped = RegExp.escape(values);
console.log(escaped);
console.log(new RegExp(escaped).test("a.b"));
// Escapes special characters in a string so they can be treated as literal text in a regular expression.


//exec()
let patern = /cat/;
let text1 = "i have a cat";
console.log(patern.exec(text1))
//Searches a string for a match and returns an array containing the match details, or null if no match is found.

// FLAGS
let pattern1 = /hello/gi;
console.log(pattern1.flags)
//Returns all flags used in a regular expression.

//global
let A = /cat/g;
console.log(A.global);


//hasIndices
let B = /cat/d;
console.log(B.hasIndices);
//Returns true if the d flag is enabled.

//ignoreCase
let C = /hello/i;
console.log(C.ignoreCase);
console.log(C.test("HELLO"));
//Returns true if the i flag is enabled.

//lastIndex
let D = /cat/g;
let E = "cat cat";
console.log(D.lastIndex);
console.log(D.exec(E)[0]);
console.log(D.lastIndex);
//Specifies the index at which the next match should start for global or sticky regular expressions.

//MULTILINE
let multi =/^hello/m
console.log(multi.multiline);
console.log(multi.test("hi\nhello"));
//returns true if the m flag is enabled

//sorce 
let line = /hello/i
console.log(line.source);
//return the regular expression pattern as a string

//sticky
let pat = /cat/y;
console.log(pat.sticky);
console.log(pat.test("cat"));
//return true if the y flag is enabled

//test()
let tern = /hello/;
console.log(tern.test("hello world"))

//toString()
let con = /hello/gi;
console.log(con.toString());
//returns the regular expression as a string including its delimiters flags.

//unicode
let set = /hello/u;
console.log(set.unicode)
//returns true if the u flag is enabled

//unicodeSets
let reg = /[a-z]/v;
console.log(reg.unicodeSets);
