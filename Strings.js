const o = 5
const i = String(o)
console.log(typeof(o))
console.log(typeof(i))

//string
let name= "ram";
let city= "bangalore"
let course= "javascript"
let email= "ram@gmail.com"
console.log(name);
console.log(city);
console.log(course);
console.log(email);

//double quotes, single quotes, backtics
let a = "babu"; //double quotes
let b = 'ram';  //single quotes
let c = `prasad`;   //backtics
console.log(a);
console.log(b);
console.log(c);

//strins vs number
let d = 98765;
let e = "23456"
console.log(typeof (d));
console.log(typeof (e));

//string length and index
let person = "prasad"
let village = "thimmapuram" //index
console.log(person.length);
console.log(village[5]) //a
console.log(village[7]) //u
console.log(village[0]) //u

//index String లో ప్రతి character కి index ఉంటుంది.

//String Concatenation
//Two or more strings combine చేయడం concatenation
let firstName = "Ram";
let lastName = "Prasad";
let fullName = firstName +" " + lastName;
console.log(fullName);

let humanName ="ramprasad";
let place = "bangalore";
console.log("my name is " + humanName);
console.log("i live in " + city)

//string + number combine
const h = "krishna";
const g = 27;
console.log("my name is " + h);
console.log("my age is " + g)