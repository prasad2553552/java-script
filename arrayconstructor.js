//Array constructor
let fruits = new Array("apple", "Banana",  "mango")
console.log(fruits);
//An Array Constructor is a way to create an array using the new Array() keyword.

//CREATING AN ARRAY USING new Array()
let colors = new Array("red", "green", "blue", "blue")
console.log(colors);
console.log(colors.length);

//new Array(5) vs new Array(5, 10)
//singel number Array
let arr = new Array(2)
console.log(arr);
console.log(arr.length)
//new Array(5) అని రాస్తే, ఐదు elements ఉన్నా వాటిలో values assign చేయబడని Array సృష్టించబడుతుంది.

//two number Array
let arr1 = new Array(5, 10)
console.log(arr1);
console.log(arr1.length)
//ఇక్కడ 5, 10 అనే రెండు values ఉన్న Array సృష్టించబడుతుంది