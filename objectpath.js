//OBJECT PATH
//DOT NOTATION
const student = {
    name: "ram",
    age: 25
};
console.log(student.name);
console.log(student.age);

//bracket notations
const person = {
    name: "lokesh",
    age: 26
}
console.log(person["name"]);
console.log(person["age"])
//Property name ni [] lopala string ga rayali.

//Nested Object Path
const user = {
    name: "ram",
    address: {
        city: "eluru",
        state: "andhra pradesh"
    }
};
console.log(user.name);
console.log(user.address.city);
//Object lopala another object unte, multiple paths use chestham.

//ARRAY Object PatH
const stu = {
    name: "Ram",
    skills: ["python", "html", "CSS", "javascript"]
}
console.log(stu.skills[0]);
console.log(stu.skills[2])

//Object → Array → Object Path
const company = {
    employess:[
        {
            name: "ram",
            role: "developer"
        },
        {
            name: "krishna",
            role: "Tester"
        }
    ]     
} 
console.log(company.employess[0].name);
console.log(company.employess[1].role)



// JavaScript Object Path

const Offices = {

    name: "Ram Technologies",

    location: {
        city: "Bangalore",
        state: "Karnataka"
    },

    employees: [

        {
            name: "Ramprasad",
            age: 27,
            role: "Python Developer",

            skills: [
                "Python",
                "Django",
                "JavaScript"
            ],

            address: {
                city: "Bangalore",
                pincode: 560001
            }
        },

        {
            name: "Krishna",
            age: 25,
            role: "Frontend Developer",

            skills: [
                "HTML",
                "CSS",
                "JavaScript"
            ],

            address: {
                city: "Hyderabad",
                pincode: 500001
            }
        }
    ]
};
// 1. Dot Notation

console.log(Offices.name);
console.log(Offices.location.city);
console.log(Offices.location.state);

// 2. Bracket Notation
console.log(Offices["name"]);
console.log(Offices["location"]["city"]);

// 3. Dynamic Property
let property = "name";
console.log(Offices[property]);

// 4. Array + Object

console.log(Offices.employees[0].name);
console.log(Offices.employees[1].name);



// 5. Array + Object + Nested Object
console.log(Offices.employees[0].address.city);
console.log(Offices.employees[1].address.city);

// 6. Array inside Object
console.log(Offices.employees[0].skills[0]);
console.log(Offices.employees[0].skills[1]);
console.log(Offices.employees[0].skills[2]);

// 7. Bracket + Array + Object
console.log(Offices["employees"][0]["name"]);
console.log(Offices["employees"][1]["role"]);

// 8. Complete Nested Path
console.log(
    Offices.employees[0].address.pincode
);
console.log(
    Offices.employees[1].skills[2]
);