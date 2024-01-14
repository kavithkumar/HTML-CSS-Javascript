const welcome = () => console.log('hello world');
welcome();


const add = (a, b) => a + b;
console.log(add(10, 20));


let arr = [10, 20, 30, 40, 50];
let arr1 = arr.map((n) => n * 2)  //call back function- passing a function as a parameter to another function
console.log(arr1);
console.log(arr);


function calculate(add, a, b) {
    console.log(add(a, b))
}
calculate((a, b) => a + b, 10, 20);


const calculate1 = (add, a, b) =>   //add is a cll back function a,b is a parameter
    console.log(add(a, b));
calculate1((a, b) => a + b, 20, 20);


function subtract(a = 20, b = 10) {
    return a - b;
}
console.log(subtract());
console.log(subtract(30, 15));


let multilines =
    `line1
line2
line3
line4
line5`
console.log(multilines);


//parameters without default values
//must be listed before those with default values
function subtract1(a = 10, b = 20) {
    return a - b;
}
console.log(subtract1(2));
console.log(subtract1(30, 15));
console.log(subtract1(10));



function findsum(a, b, ...values) {
    let sum = 0;
    sum = a + b;
    for (let i = 0; i < values.length; i++)
        sum = sum + values[i]
    console.log(sum);
}
findsum(1, 2, 3, 4, 5, 6, 7, 8, 9);
findsum(1, 2);
findsum(1, 2, 3);
findsum(1, 2, 5, 7, 8, 4);