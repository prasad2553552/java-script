//creating a weakMap
let weakMap = new WeakMap();
let user = {
    name: "Ramprasad"
};
weakMap.set(user,"javaScript Student");
console.log(weakMap.get(user));

//Multiple objects
let weak = new WeakMap();
let user1 = {id: 101};
let user2 = {id: 102};
weak.set(user1,"Ram");
weak.set(user2,"krishna");
console.log(weak.get(user1));
console.log(weak.get(user2));

//Garbage Collection
let map = new WeakMap();
let user3 = {
    name: "Ramprasad"
};
weakMap.set(user,"Private Date");
user3 = null;

//Weak Reference
let week = new WeakMap();
let employee = {
    name: "Ramprasad"
};
week.set(employee,"developer");
console.log(week.get(employee))

//tracking Objects 
let userStatus = new WeakMap();
let use1 = {
    name: "ram"
}
let use2 = {
    name: "krishna"
}
userStatus.set(use1,"online");
userStatus.set(use2,"offline");
console.log(userStatus.get(use1));
console.log(userStatus.get(use2))

//Automatic Cleanup
let weakMap1 = new WeakMap();

let product = {
    id: 101
};

weakMap1.set(product, "Laptop");

console.log(weakMap1.get(product));

product = null;

// Not Iterable
let weak1  = new WeakMap();
let user4 = {
    name:"ram"
};
weak1.set(user4,"student");
// WeakMaps are not iterable; access values using their keys instead.
console.log(weak1.get(user4));
