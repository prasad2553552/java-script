//this object
//this అనేది current object ని refer చేసే keyword.
const person1 ={
    name: "ram",
    age:27,
    greet: function() {
        console.log("my name is " + this.name);
    }
};
person1.greet()

const employee = {
    name: "kiran",
    salary: 30000,
    getSalary: function() {
        return this.salary;
    }
};
console.log(employee.getSalary());

//OBJECT DISPLAY
//CONSOLE.LOG()
const stu = {
    name: "ram",
    age: 26
};
console.log(stu)

//object key()
const a = {
    name: "ramu",
    age: 56,
    citi: "bangalore" 
};
console.log(Object.keys(a));      //keys
console.log(Object.values(a));   //values
console.log(Object.entries(a)); //enries
//Object ని JSON string గా convert చేస్తుంది.
console.log(JSON.stringify(a)); //stringify

//object Constuctors
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}
const student1 = new Student("ram", 27,"MCA");
const student2 = new Student("ravi",25,"BCA");
console.log(student1);
console.log(student2);


function person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("hello " + this.name);
    };
}
const person2 = new person("ram", 27);
const person3 = new person("ravi", 36);
person2.greet();
person3.greet();