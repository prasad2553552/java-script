//x+ -- one or more 
let text = "xxx";
console.log(/x+/.test(text));  // true

let text1 = "abc";
console.log(/x+/.test(text1));  //false //abc లో x లేదు.
//Matches one or more occurrences of x.

//x* -- zero or more
 console.log(/x*/.test("xxx")); // true
//Matches zero or more occurrences of x.
 console.log(/x*/.test("abc")); //true
//x* zero occurrences ను కూడా match చేస్తుంది. అందుకే abc లో x లేకపోయినా true వస్తుంది. 

//x? -- Zero or one 
console.log(/x?/.test("x")); //true
//Matches zero or one occurrence of x.
console.log(/x?/.test("abc")); //true

//x{n}--Exactly n Time
console.log(/x{3}/.test("xxx"));// true
//Matches exactly n occurrences of x.
console.log(/x{3}/.test("xx"));// flase

//x{n,m} -- minimum n, maximum m
console.log(/x{2,4}/.test("xxx")); //true
//Matches between n and m occurrences of x, inclusive.
console.log(/x{2,4}/.test("x")); // false
//at list two x character must be prasent here thefe is only one

//x{n ,} -- n or more 
console.log(/x{2,}/.test("xxxx"))
// Matches at least n occurrences of x.
console.log(/x{2,}/.test("x"));

//JavaScript RegExp Patterns
//RegExp flags change how a regular expression searches or matches text.

let value= "Hello hello";
console.log(value.match(/hello/i));

// /d -- indices Flag
let values = "hello World";
let result = /World/d.exec(values)
console.log(result[0]);
console.log(result.indices[0]);
//Provides the start and end indices of matched substrings.

// /g -- Global Flag
let A = "cat dog cat"
console.log(A.match(/cat/g));
// Finds all matches instead of stopping at the first match.

// /i  --- case - insensitive 
let B = "hello world";
console.log(/hello/i.test(B))
//Matches uppercase and lowercase letters without distinguishing between them.

// /m --- multiline flag
let C = "Hello\nWorld";
console.log(C.match(/^World/m));
//Makes ^ and $ match the beginning and end of each line.

// /s -- DotAll Flag
let D = "Hello\nWorld";
console.log(/Hello.World/s.test(D));
// Allows the dot (.) to match line terminators such as newline characters

// /u -- unicode flag
let E = "😘";
console.log(/\u{1F600}/u.test(E));

let f = "😀";
console.log(/\u{1F600}/u.test(f));
//Enables Unicode-aware pattern matching.

// /v -- Unicode sets flag
let G = "A"
console.log(/[\p{ASCII}&&\p{Letter}]/v.test(G))
//Provides enhanced Unicode-aware matching, including advanced character-set operations.

// /y -- Sticky Flag
let a = "cat dog";
let regex = /dog/y;
regex.lastIndex = 4;
console.log(regex.exec(a));
