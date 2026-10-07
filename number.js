//Number 
let age = 25;
console.log(age);
//Number data type integer or decimal values ni store cheyadaniki use chestaru.

//decimal
let price = 45.67; 
console.log(price);

// Example of another decimal number
let tax = 8.75;
console.log(tax);
//Decimal values ni JavaScript lo number type ga store chestundi.

//nagitiv 
let a = -25
console.log(a)
//- sign tho negative number ni represent chestam.

//typeof
let num = 250;
console.log(typeof num);
//Variable yokka data type ni return chestundi.

//NaN
let valu = "hello"/3;
console.log(valu)
//సరైన numeric result రాకపోతే NaN వస్తుంది.

//Infinity
let infinity = 25/0;
console.log(infinity);
//Zero తో positive number divide చేస్తే Infinity వస్తుంది.

//Number Method
//tostring()
let b = 110;
console.log(b.toString())
//Number ను String గా మార్చుతుంది.

//tofixed()
let C = 12.3454;
console.log(C.toFixed(2))
//Decimal places ను specified number వరకు చూపిస్తుంది.

//toExponential()
let d = 12345;
console.log(d.toExponential(2));
//Number ను exponential notation లో చూపిస్తుంది.

//toPrecision()
let E = 1.23456;
console.log(E.toPrecision(5));
//Number యొక్క total significant digits ను specify చేస్తుంది.

//valuOf()
let F = 100;
console.log(F.valueOf())
//Number object యొక్క primitive number value ను return చేస్తుంది.

// JS Number Properties

//Number.MAX_VALUE
let max = Number.MAX_VALUE;
console.log(max);
//JavaScript లో represent చేయగలిగే largest finite number.

// /Number.MIN_VALUE
let min = Number.MIN_VALUE;
console.log(min);
//Zero కి దగ్గరగా ఉన్న smallest positive number

//Number.MIN_SAFE_INTEGER
let min2 =Number.MIN_SAFE_INTEGER;
console.log(min2)
//JavaScript లో safely represent చేయగలిగే smallest integer.

//Number.MAX_SAFE_INTEGER
let max2 = Number.MAX_SAFE_INTEGER;
console.log(max2);
//JavaScript లో safely represent చేయగలిగే largest intege

//Number.POSITIVE_INFINITY 
let positiv = Number.POSITIVE_INFINITY;
console.log(positiv)

//Number.NEGATIVE_INFINITY
let negative = Number.NEGATIVE_INFINITY;
console.log(negative)

//NaN 
let h =Number("hello")
console.log(h)
//Valid number కాని value ను సూచిస్తుంది.

//Number.EPSILON
let g = 0.1 + 0.2;
let n = 0.1 + 0.2;
console.log(g === n)
console.log(Math.abs(g - n) < Number.EPSILON);
//1 మరియు దాని తరువాతి representable number మధ్య ఉన్న smallest difference.

// JS Number Reference
//Number
let value = "1038";
console.log(Number(value));
//String value "1038" ని Number 1038 గా convert చేస్తుంది.

//Number.isInteger
let number = -1038
console.log(Number.isInteger(number));

let numbe = 10.38
console.log(Number.isInteger(numbe))
//ఇచ్చిన value పూర్తి సంఖ్య (integer) అయితే true, లేకపోతే false ఇస్తుంది.

//Number.isfinite()
console.log(Number.isFinite(number))
console.log(Number.isFinite(value))
//value finite number అయితే true, Infinity, -Infinity, లేదా non-number అయితే false ఇస్తుంది

//Number isSafeInteger()
let R = 1234567891011121;
console.log(Number.isSafeInteger(R));
// JavaScript లో safe integer range లో ఉన్న integer అయితే true ఇస్తుంది. integer range 16

//Number.parseInt
let S = "35px";
console.log(Number.parseInt(S))
// String లోని ప్రారంభ integer value 25 ని తీసుకుంటుంది.

//Number.parseFloat
let RS = "345.987px"
console.log(Number.parseFloat(RS))
//String లోని ప్రారంభ decimal number  ని తీసుకుంటుంది.


//JS Bitwise
//&-AND
let ab = 9;  //1001 
let cd = 3;  //0011
console.log(ab & cd) // 0001
//రెండు numbers లో ఒకే position లో రెండు bits 1 ఉంటే మాత్రమే 1 వస్తుంది.

// |- OR 
console.log(ab | cd) //1011

//ఏదైనా ఒక bit 1 అయితే result bit 1 అవుతుంది.

//~-NOT
let Q = 3; //0011   ~n = -(n+1)
console.log (~Q)
// ప్రతి bit ని reverse చేస్తుంది: 1 → 0, 0 → 1.

//^-XOR
console.log(ab ^ cd)//1010
//రెండు bits different గా ఉంటే 1, same అయితే 0 వస్తుంది.

//<< — Left Shift
let abc = 5; //0101
console.log(abc << 1); //1010
//Bits ని left వైపు shift చేసి, సాధారణంగా ప్రతి 1 shift కి number ని 2 తో multiply చేసినట్లుగా అవుతుంది.

// >> - Right Shift
console.log(abc >> 1) 
//Bits ని right వైపు shift చేసి, సాధారణంగా ప్రతి 1 shift కి number ని 2 తో divide  చేసినట్లుగా అవుతుంది.

//>>> — Zero-fill Right Shift
let abcd = 10;
console.log(abcd >>> 1);
//Bits ని right వైపు shift చేసి, ఎడమ వైపు ఖాళీ స్థానాలను 0 తో fill చేస్తుంది.

//JS Biglnt
//Bigint Literal
let num1 = 123456789012348474748438378n;
console.log(num1)
//చాలా పెద్ద integer numbers కోసం BigInt ఉపయోగిస్తాం. చివర n పెట్టాలి.

//BigInt()
let num2 = BigInt("12345678901234567890");
console.log(num2);
//String లేదా integer value ను BigInt గా convert చేస్తుంది.

//BigInt Addition
let ba = 100n;
let dc = 200n;
console.log(ba + dc);
//రెండు BigInt values ను addition చేయవచ్చు.

//BigInt Subtraction
let ad = 500n;
let bc = 200n;
console.log(ad - bc )
//రెండు BigInt values ను subtraction చేయవచ్చు.

//BigInt Multiplication
console.log(ad * bc )
//రెండు BigInt values ను multiplication చేయవచ్చు.

//BigInt Division
console.log(ad / bc )
//BigInt division decimal value ఇవ్వకుండా integer result మాత్రమే ఇస్తుంది.

//BigInt Modulus
console.log(ad % bc )

//typeof BigInt
let num3 = 100n;
console.log(typeof num3);
//BigInt యొక్క type "bigint" గా వస్తుంది.

//Number + BigInt ❌
//let k = 10;
//let l = 20n;

//console.log(k + l);
//Number మరియు BigInt ను direct arithmetic operation లో కలపకూడదు; TypeError వస్తుంది.

//Convert Number → BigInt
let a1 = 10;
let b1 = 20n;

console.log(BigInt(a1) + b1);
// Number ను BigInt గా convert చేసి arithmetic చేయవచ్చు