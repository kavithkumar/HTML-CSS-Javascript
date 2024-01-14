//Example for reference type
let arr1 = [10, 20, 30, 40, 50];//Reference type
let arr2 = arr1;//reference type
arr2.push(60);
console.log(arr1)
console.log(arr2)
arr1.push(80);
console.log(arr1)
console.log(arr2)

//Object
let obj1 = { "name": "john", "age": 20 };
let obj2 = obj1;
obj2.name = "james";
console.log(obj1);
console.log(obj2);


//Example for Value type/Primitive type
let a = 10;
let b = a;
console.log(a);
console.log(b);
b = 20;
console.log(a);
console.log(b);

//String
let str1 = "Hello";
let str2 = str1;
str2 = str2.concat(" World");
str1 = "New Text";
console.log(str1);
console.log(str2);