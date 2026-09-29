let marks = [75,87,95,92,80];
for (let i=0; i < marks.length; i++) {
    console.log("student" + (i + 1) + "marks" +marks[i]);
}

let a = 10
for (let i = 0; i <= a; i++) {
    console.log(i)
}

//one value fixed number of times use the for loops

let attempts = 4;
while (attempts <=6) {
    console.log("login Attempt:" + attempts);
    attempts++;
}
let j=3
while (j <= 5 ) {
    console.log(j)
    j++
}
//Condition true ఉన్నంత వరకు

let option = 1;

do {
    console.log("Welcome to Student Portal");
    console.log("1. View Profile");
    console.log("2. View Marks");
    console.log("3. Logout");

    option++;
} while (option <= 1);

let i = 10;
do {
    console.log(i);
    i++
} while (i <= 2);
// do..whileకనీసం ఒకసారి execute చేయాలి
//while      → Check → Execute,  do...while → Execute → Check

//for..of  Array లోని values తీసుకోవడానికి
let numbers = [12,23,34,54,555]
for (let number of numbers) {
    console.log(number);
}

let fruits = ["Apple", "Banana","Mongo"]
for (let fruit of fruits) {
    console.log(fruit)
} 

//for..in To get the keys from an object 
let student ={
    name: "ram",
    age: 26,
    city: "elur"
};
for (let key in student) {
    console.log(key);
}

//break Loop ని పూర్తిగా stop చేస్తుంది
for (let i = 1; i<=10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i)
}
let markes = [79,89,67,25,95,76];
for (let mark of markes) {
    console.log("markes", mark);
    if (mark < 35) {
        console.log("fail-loop Stopped");
            break;
    }
}

//continue..  Current iteration మాత్రమే skip చేస్తుంది.
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
let e = {
    name: "ram",
    age: 26,
    city: "hyderabad",
    salary: 35000
};
for (let key in e) {
    if (key == "age") {
        continue;
    }
    console.log(key, e[key]);
}
