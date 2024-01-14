let arr1 = [10, 20, 30, 40, 50];
let arr2 = [...arr1]; //Clone or value type
let arr3 = arr1; //reference type
console.log(arr1);
console.log(arr2);
console.log(arr3);
arr2.push(100);
arr3.push(200);
arr1.push(300);
console.log(arr1);
console.log(arr2);
console.log(arr3);


let names = ["james", "john", "smith"];
let new_names = [...names, "joe", "clara", "jim"];
console.log(names);
console.log(new_names);


let obj1 = { "prop1": "value1", "prop2": "value2" };
let obj2 = { "prop3": "value3", "prop4": "value4" };
let obj3 = { ...obj1, ...obj2 };
console.log(obj1);
console.log(obj2);
console.log(obj3);


let str = "hello";
let str1 = [...str];
console.log(str1); //this method is used to convert a string into array of characters


//Removing properties
let product = {
    "name": "Boult",
    "price": 1000,
    "description": "Bluetooth",
    "category": "Electronics",
    "dom": "12-09-23",
    "doe": "15-09-23",
    "rating": 4.5
}
let { description, dategory, dom, doe, ...newObj } = product;
console.log(product);
console.log(newObj);
product.availability = "yes";
console.log(product);
console.log(newObj);