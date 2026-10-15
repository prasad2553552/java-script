//ARRAY METHODS
//length PROPERTY
let len = ["apple", "banana", "mango", "orange"]
console.log(len.length);
//The length property returns the number of elements in an array.

//toString()METHOD
let str = ["apple", "mango", "orange", "banana"]
console.log(str.toString());
//The toString() method converts an array into a string, separating its elements with commas.

//at()method
let at = ["apple", "orange", "banana", "mango"]
console.log(at.at(1));
console.log(at.at(-2))
//at() returns the element at a specified index, including negative indexes.

//join() method
let join = ["ram", "ravi", "krishna"]
console.log(join.join("-"))
//join() combines array elements into a string using a specified separator.

//push() method
let push = ["car", "bike", "moter"];
push.push("cycle", "ram")
console.log(push)
//push() adds one or more elements to the end of an array.

//pop()method
let pop = ["mango", "banana", "apple", "orange"];
pop.pop();
console.log(pop);
//pop() removes and returns the last element of an array.

//concat() method
let con1 = ["ram", "sethara"];
let con2 = ["vihaan", "navya"];
let result = con1.concat(con2);
console.log(result);
//concat() combines arrays and returns a new array.

//slice() method
let slice = ["apple", "Banana", "mango", "orange", "oconet"];
console.log(slice.slice(1, 3))
//slice() returns a shallow copy of selected elements without modifying the original array.

//splice() method
let splice = ["apple", "banana", "orange"]
splice.splice(2,3, "car")
console.log(splice)
// splice() adds, removes, or replaces elements in the original array.

//toSplied() method
let sp = ["apple", "banana", "mango"];
let valu = sp.toSpliced(1,1, "orange");
console.log(valu)
console.log(sp)
//toSpliced() returns a modified copy without changing the original array.

//includes() method
let clude = ["car", "apple", "Ram"];
console.log(clude.includes("Ram"))
//includes() checks whether an array contains a specified value.

//indexof() method
let index = ["home", "ram", "banana", "car"]
console.log(index.indexOf("car"))
//indexOf() returns the first matching element's index or -1 if not found.

//shift() method
let shift = ["apple", "banana", "mango"];
shift.shift();
console.log(shift)
//shift() removes and returns the first element of an array.

//unshift() method
let un = ["apply", 'mango', 'banana']
un.unshift('orange');
console.log(un)
//unshift() adds one or more elements to the beginning of an array.

//find()
let number = [10,15,20,25,30,35,60];
let value = number.find(num => num > 35)
console.log(value);
//find() returns the first element that satisfies a condition.

//findindex() method
let num = [10,20,30,40,50];
let valued = num.findIndex(num => num > 30);
console.log(valued);
//findIndex() returns the index of the first element that satisfies a condition.

//forEach() method
let each = ["apple","banana", "mango"];
each.forEach(each => {
    console.log(each);
});
//forEach() executes a callback function for each array element and returns undefined.

//map() method
let map = [1,2,3,4,5,6];
let results = map.map(num => num * 3);
console.log(results)
//map() transforms each element and returns a new array containing the results.

//filter() method
let filter = [10,15,20,25,30,35,40,45,50];
let show = filter.filter(num => num > 30)
console.log(show);
//filter() returns a new array containing elements that satisfy a condition.

//reduce() method
let numbers = [10,20,30,40,50];
let values = numbers.reduce((total, num) => total + num, 0)
console.log(values)
//reduce() processes array elements to produce a single accumulated result.

//some() method
let som =[10,15,20,25,30,35];
let secret = som.some(num => num > 77);
console.log(secret)
//some() returns true if at least one element satisfies the condition

//every() method
let abc = [10, 20, 30, 40];
let resul = abc.every(num => num > 9)
console.log(resul)