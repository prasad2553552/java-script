let str = "Hello JavaScript";

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.charAt(0));

console.log(str.charCodeAt(0));

console.log(str.at(-1));

console.log(str.includes("Java"));

console.log(str.startsWith("Hello"));

console.log(str.endsWith("Script"));

console.log(str.indexOf("Java"));

console.log(str.lastIndexOf("a"));

console.log(str.slice(0, 5));

console.log(str.substring(0, 5));

console.log(str.replace("JavaScript", "Python"));

console.log(str.replaceAll("a", "A"));

console.log(str.trim());

console.log(str.trimStart());

console.log(str.trimEnd());

console.log(str.concat(" Programming"));

console.log(str.split(" "));

console.log(str.repeat(2));

console.log(str.padStart(20, "*"));

console.log(str.padEnd(20, "*"));

console.log(str.search("Java"));

console.log(str.match("Java"));

console.log("apple".localeCompare("banana"));

//lentgh String lo total characters count chestundi.
let name = "ramprasad";
console.log(name.length);

//toUpperCase()
console.log(name.toUpperCase());

//tolowercase()
console.log(name.toLowerCase());

//charAt() Given index lo unna character ni return chestund
console.log(name.charAt(3));

//charCodeAt()Given character yokka Unicode value ni return chestund
console.log(name.charCodeAt(8));
let string = "ramprasad"

for (let i = 0; i < string.length; i++) {
    console.log(string[i],string.charCodeAt(i))

}

//at Given index lo character ni return chestundi; negative index kuda support chestundi.
console.log (name.at(-5));

// includes()String lo specified text undho ledo check chestundi.
console.log(name.includes("ram"));

//startsWith()String specified text tho start avutundo check chestundi
console.log(name.startsWith("ram"))

//endswith String specified text tho end avutundo check chestundi.
console.log(name.endsWith("prasad"));

//indexOfSpecified text first occurrence index ni return chestundi.
console.log(name.indexOf("sad"));

//iastIndexOf()Specified character/text last occurrence index ni return chestundi.
console.log(name.lastIndexOf("d"));

