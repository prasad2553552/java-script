//OBJECT
let student = {
    name: "ramu",
    age: 36
}
console.log(student)

//cteating Object
//OBJECT LITERAL
let stu = {
    name: "ramulu",
    age: 22,
    course: "MCA",
    college: "dnr"
};
console.log(stu)

//NEW OBJECT()
let student1 = new Object();
student1.name= "ram",
student1.course= "MCA",
student1.filed= "compuer application" 
console.log(student1)

//OBJECT PROERTIES
let a = {
    name: "munna",
    age: 18,
    course: "cec"
};
console.log(a.name);
console.log(a.age);
console.log(a.course);
//Object లో data ని property అంటాం. Property value ఎలా access use Dot notation.

//OBJECT METHODS
let student2 = {
    name: "charan",
    age: 27,
    study: function() {
        console.log("Student is studying");
    },
    writeExam: function() {
        console.log("student is write exame")
    }
};
console.log(student2.name);
student2.study();
student2.writeExam();

//COMPLETE EXAMPLE
let company = {
    name: "ram Technologies",
    employess: {
        name: "charan",
        age: 27,
        role: "developer"
    },
    working: function() {
        console.log("hello, I am "  + this.name )
    }
}
console.log(company.employess.name);
console.log(company.employess.age);
console.log(company.employess.role);

company.working();
