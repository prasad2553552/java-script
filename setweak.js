//weakset 
let user = {name: "RAM"};
let myWeakSet = new WeakSet();
myWeakSet.add(user);
console.log(myWeakSet.has(user))
//A WeakSet is a collection of objects that holds weak references to those objects.

//WeakSet with an object
let student = {name: "Ravi"};
let ws = new WeakSet([student]);
console.log(ws.has(student));
//The WeakSet object provides methods to add, check, and remove object references.

//garbage collection
let use = {name: "ram"};
let ws1 = new WeakSet();
ws1.add(use);
use.name = "krishna";
console.log(use.name);

//weak referwnce
let car = {brand: "BMW"};
let ws2 = new WeakSet();
ws2.add(car);
console.log(ws2.has(car));