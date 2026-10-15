//set
const number = new Set([10,20,30,40])
console.log(number)
// remove duplicate value
const set = new Set([10,20,40,30,20,10,50])
console.log(set)
// A Set is a collection of unique values. It does not allow duplicate values.

//SET METHOD
//new set()
const setNumbers = new Set([10, 20, 30, 40, 50, 20, 40, 2, 3]);
console.log(setNumbers);
//Creates a new Set object that stores unique values.

//add()
let fruits = new Set(["apple", "banana",])
fruits.add("mango")
console.log(fruits)
//add a new value in set

//delet
fruits.delete("apple")
console.log(fruits)
//delete the specific value from the set

//celer
fruits.clear()
console.log(fruits)
//remov all values from the set

//entries()
let ent = new Set([10,20,30,40])
console.log([...ent.entries()]);
//returns an iterator containing[value,value] pairs for each set element

//for each()
let fru = new Set (["apple", "banana","mango"])
fru.forEach(function(value) {
    console.log(value);
})
// Executes a callback function once for each value in the Set.

//has()
let each = new Set (["apple","banana","mango","orange"])
console.log(each.has("banana"));
console.log(each.has("ram"));
//Checks whether a value exists in the Set

//key()
let val = new Set([10,20,30,40,50])
console.log([...val.keys()]); // keys
console.log([...val.values()])  //values
console.log([val.size]) // how many values in set in size
//no deffretion in key() and value() Returns an iterator containing the values of the Set.

