
//function syntax
// named function

function nameOfFunction() {
    //code goes here

}

// to run function we call it or invoke it
nameOfFunction();

// function to say hello
function greeting(){
    console.log("hello");
}

greeting();

// difference between arguments and parameters
// arguments are sent to a function
// parameters accept the values from the arguments
function area (length = 5, width = 5){
    return length * width;
}

let result = area(2, 3);
console.log(result);

result = area();
console.log(result);

function makeMore(element){
    console.log(element + "'s");
}

let animals = ["Dog", "Cat", "Bird"];
animals.forEach(makeMore);

// fat arrows are the modern way to write functions
function greeting() {
    console.log("Hello");
}

let newGreeting = () => {
    console.log("Hellow from fat arrow function");
};

let newArea = (length = 5, width = 5) => {
    return length * width
};

result = newArea();
console.log("fat arrow result = " + result);

result = newArea(2, 3);
console.log("fat arrow result = " + result);

let newArea2 = (length = 5, width = 5) => length * width; //implicit return
result = newArea2(6, 6);
console.log("fat arrow2 result = " + result);

let greeting2 = arg => {
    return `Hello, ${arg}`;
}

console.log(greeting2("Luis"));

// Destructuring
let person = {
    fName: "Luis",
    lName: "Perez",
    age: 34,
    pets: ["Pekka", "Siggy"]
}
// let fName = person.fName;
// let lName = person.lName;
// let age = person.age;
// let pets = person.pets;

let {fName, lName, age, pets} = person;

console.log(`${fName} ${lName} is ${age} years old.`);

// Returning Arrays
//let animals = ["Dog", "Cat", "Bird"]; --> from above
let multiples = (animals) => {
    let newAnimals = [];
    animals.forEach(element => {
        newAnimals.push(element + "'s");
    });
    return newAnimals;
}
let manyAnimals = multiples(animals);
console.log(manyAnimals);