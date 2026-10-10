//object methods
//method create & call
const student1 = {
    name: "Ram", 
    age: 45,
    greet: function() {
        console.log("hello Ram");
    }
};
student1.greet()

//method use this
const stu = {
    name: "ram",
    age: 24,
    introduce: function() {
        console.log("my name is " + this.name)
        console.log("my age is " + this.age);
    }
};
stu.introduce();

//shorthand method syntax
const user = {
    greet: function() {
        console.log("hello")
    }
};
user.greet();

//multiple methods 
const calculator = {
    add(a,b){
        return a + b;
    },
    subtract(a,b) {
        return a - b;
    },
    multiply(a, b){
        return a * b;
    },
    divide(a, b) {
        return a / b
    }
};
console.log(calculator.add(10,5));
console.log(calculator.subtract(20,4));
console.log(calculator.multiply(6, 3));
console.log(calculator.divide(100,40));

//object method using this 
const employee = {
    name: "ram",
    salary: 30000,
    getSalary() {
        return this.salary;
    },
    display() {
        console.log("Employee:" + this.name);
        console.log("salary: " + this.salary);
    }
};
employee.display();
console.log(employee.getSalary());

//complete example
const student = {
    name:  "Ram",
    marks: 89,
    getName() {
        return this.name;
    },
    getmarks() {
        return this.marks;
    },
    checkresult() {
        if (this.marks >= 40) {
            return "pass";
        }else {
            return "fail";
        }
    }
};
console.log(student.getName());
console.log(student.getmarks());
console.log(student.checkresult())