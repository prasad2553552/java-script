//set (key,value)
let student = new Map
student.set("name","ram")
student.set("age",25);
console.log(student);

//value update
let stu = new Map();
stu.set("name","Ram");
stu.set("name","krishna");
console.log(stu.get("name"))

//get(key)
let map = new Map();
map.set("name","Ram");
map.set("marks",90);
console.log(map.get("name"))

//has(key)
let studen = new Map();
studen.set("name","ram");
console.log(studen.has("name"));

//delete(key)
let stud = new Map();
stud.set("name","Ram");
stud.set("age",35)
stud.delete("age");
console.log(stud)

//CLEAR()
let value = new Map()
value.set("name", "Ram")
value.set("marks",85);
student.clear();
console.log(student);

//size 
let stude = new Map();
stude.set("name","Ram")
stude.set("age",26)
stude.set("marks",90);
console.log(stude.size);

//keys()
let employee = new Map()
employee.set("id",101);
employee.set("name","ravi");
for(let key of employee.keys()) {
    console.log(key);
}

// VALUES()
let per = new Map();
per.set("name","Ram");
per.set("age",25);
per.set("marks",85);
console.log([...per.values()]);
// Example
let emp = new Map();
emp.set("name","Ravi");
emp.set("salary",30000);
for(let value of emp.values()) {
    console.log(value);
}

//ENTRIES()
let dnet = new Map();
dnet.set("name", "ram");
dnet.set("marks",90);
console.log([...dnet.entries()]);

//example
let employ = new Map();
employ.set("name","Ramprasad");
employ.set("salary",35000);
for (let[key,value]of employ.entries()) {
    console.log(key,value)
}

//forEach()
let sd = new Map();
sd.set("name", "Ram");
sd.set("marks", 85);
sd.forEach(function(value,key){
    console.log(key,value);
})

//example
let product = new Map();
product.set("Mobile",50000);
product.set("laptop",26000);
product.set("Tablet", 18000);
product.forEach(function(price,product){
    console.log(product + " : ₹" + price);
});