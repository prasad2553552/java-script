//OBJECT PROPERTIES
//CREATING PROPERTIES
const person ={
    name: "Ram",
    age: 25,
    city: "Bangalore"
}
//just Object create చేసేటప్పుడు properties define చేయవచ్చు.

//ACCESSING PROPERTIES
//Object property value ని access చేయడానికి mainly 2 methods ఉన్నాయి.
//DOT NOTATION
const student1 = {
    name: "lokesh",
    age: 29,
    course: "CSE"
}
console.log(student1.name);
console.log(student1.age);
console.log(student1.course);

//BRACKET NOTATION
console.log(student1["name"]);
console.log(student1["age"])

//ADDING PROPERTIES
const person1 = {
    name: "Ramprasad",
    course:"MCA"
};
person1.city = "banalore",
person1["job"]= "developer"
console.log(person1)

//changing properties
const stu = {
    name: "sri",
    age: 23
};
stu.name= "ramu"
console.log(stu)

//DELETING PROPERTIES
const stu1 = {
    name: "ravi",
    age: "25",
    city:"Banglore"
};
delete stu1.city 
delete stu1.age
console.log(stu1)

//NESTED PROPERIES
const user = {
    name: "revi",
    course: 'mca',
    address: {
        city:'bangalore',
        state: 'karnataka'
    }
};
console.log(user.course)
console.log(user.address.state)

//DYNAMIC PROPERTIES
const propertyName = "name";
const person2 = {
    name: "babu",
    age: 26
};
console.log(person2[propertyName]);

//properties shorthand
const name = "ram";
const age = 24;
const boy = {
    name,
    age
}
console.log(boy)


// complet 
let student = {
    name: "Ramprsad",
    age: 27,
    course: "MCA"
};

console.log(student);
console.log(student.name);
console.log(student["age"]);

student.city = "bangalore";
student.phone = 9876054321;

console.log(student);

student.age = 25;
student["course"] = "web development";

console.log(student);

delete student.phone;

console.log(student);

student.address = {
    city: "bangalore",
    state: "karnataka",
    pincode: 560076
};

console.log(student.address.city);
console.log(student.address.state);
console.log(student.address.pincode);

let emailkey = "email";
student[emailkey] = "ram@gmail.com";

console.log(student);

let company = "Ram Technologies";
let salary = 30000;

let employee = {
    name: "Ram",
    company,
    salary
};

console.log(employee);

let key1 = "department";
let key2 = "experience";

let employeeDetails = {
    name: "Ram",
    [key1]: "it",
    [key2]: "1 year"
};

console.log(employeeDetails);
console.log(employeeDetails.department);
console.log(employeeDetails.experience);