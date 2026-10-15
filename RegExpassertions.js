//^ - string Beginning 
let text = "ramprasad"
console.log(/^ram/.test(text));
//Matches the beginning of a string.

//$--string Ending
let text1 = "Hello World";
console.log(/World$/.test(text1))
//Matches the end of a string

//b -- word Boundary
let text2 = "javaScript is easy";
console.log(/\bjava/.test(text2));
//Matches a position at the beginning or end of a word.

//\B Non word Boundary
let value = "javaScript";
console.log(/\Bava/.test(value))
//matches a position that is not a word boundary

//(?=...) positive lookahed
let values = "javaScript";
console.log(/java(?=Script)/.test(values))
// matches a pattern only if it is followed by another specified pattern

//(?!...) Negative Lookahead
let text5 = "javapython";
console.log(/java(?!Script)/.test(text5))
//matches a pattern only if it is not followed by the specified pattern

//(?<=...) - positive lookbehind
let text6 = "₹500";
console.log(/(?<=₹)\d+/.test(text6));
//Matches a pattern only if it is preceded by the specified pattern.

//(?<!...)--- Negative Lookbehind
let value1 = "$500";
console.log(/(?<!₹)\d+/.test(value1));

let value2 = "₹500";
console.log(/(?<!₹)\d+/.test(value2));

