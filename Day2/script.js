
let testArray = ["Hello", "World", "This", "Is", "A", "Test"];

let value = testArray.unshift("New Element");

console.log(testArray);

let num = 0;

testArray.forEach(function(){
    console.log(num++);
});

let numberArray = [1, 5, 100, 3, 6, 200, 20, 1.1]

console.log(numberArray.sort());

console.log(numberArray.filter(function(number){
    return number < 10
}));


console.log(numberArray.filter(num => num < 5));