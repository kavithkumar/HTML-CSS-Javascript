//Adding and Removing prperties from an object
let person = {
    "name": "John",
    "age": 20,
    "contact_no": 8682066920
}
console.log(person);
//Adding a property "location" to person object
person.location = 'Chennai';
console.log(person)
console.log(`${person['name']} ${person['age']} ${person['location']}`)
//Removing aproperty
delete person.location;
console.log("after Deleting location" + JSON.stringify(person))
//console.log("after Deleting location" + person) = This reflects "after Deleting location Object Object" 
//inorder to change Object Object to string  we use JSON.stringify(person)

//---------------------------------------------------------------------------------------------------------------


//Cloning a object
let source = {
    'prop1': 'value1',
    'prop2': 'value2'
}
let target = {};
Object.assign(target, source);
console.log(target);
console.log(source);
target.prop3 = 'value3';
console.log(target);
console.log(source);
source.prop3 = 'value4';
console.log(target);
console.log(source);

//Cloning or Merging mor than one source Objects
let source1 = {
    "name": "john",
    "age": 20,
    "qualification": "BE"
}
let source2 = {
    "street": "10th street",
    "city": "chennai",
    "state": "TamilNadu"
}
let source3 = {
    "designation": "Manager",
    "salary": 30000
}
let employeeDetails = {};
Object.assign(employeeDetails, source1, source2, source3);
console.log(employeeDetails);
source3.employment = "temporary";
console.log(`${JSON.stringify(employeeDetails)} ${JSON.stringify(source1)} 
            ${JSON.stringify(source2)} ${JSON.stringify(source3)}`)
delete employeeDetails.salary;
console.log(employeeDetails);