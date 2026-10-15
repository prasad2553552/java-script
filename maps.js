//THE MAP OBJECT
let student = new Map();
student.set("name","Ramprasad");
student.set("age",27);
student.set("course","javaScript");
console.log(student);

//MAP CHARACTERISTICS
//keys
let map = new Map();
map.set("name","Ram");
map.set(101,"Student")
console.log(map.get("name"));
console.log(map.get(101));

//Duplicate keys
let maps = new Map()
maps.set("name", "Ram");
maps.set("name","krishna");
console.log(maps.get("name"))

//insertion order
let order = new Map
order.set("a",10);
order.set("b",20);
order.set("c",30);
console.log([...order.keys()])

//HOW TO CREATE A MAP
let myMap = new Map();
console.log(myMap);
console.log(myMap.size);

//MAP WITH INITIAL VALUES
let stu = new Map([
    ["name","Ram"],
    ["age",25],
    ["marks",85]
])
console.log(stu);
console.log(stu.size);

//ADDING MAP VALUE 
let stud = new Map();
stud.set("name","Ram");
stud.set("age",25);
stud.set("city","Hyderaabad");
console.log(stud);

//changing Map value
let pro = new Map();
pro.set("name","laptop");
pro.set("price",25000);
console.log("old price:",pro.get("price"));
pro.set("price",27000);
console.log("New price:",pro.get("price"));
