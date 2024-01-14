let users = {
    getFullName: function (firstname, lastname, gender) {
        if (gender === 'f')
            return `Ms ${firstname} ${lastname}`
        else
            return `Mr ${firstname} ${lastname}`
    }
}

let student = {
    firstname: 'john',
    lastname: 'smith',
    age: 20,
    gender: 'M'
}

let tutor = {
    firstname: 'clara',
    lastname: 's',
    age: 21,
    gender: 'F'
}

student.__proto__ = users;
console.log(student.getFullName(student.firstname, student.lastname, student.gender));
console.log(student.__proto__);
let str = 'john';
let arr = [10, 20, 30];
//str.__proto__=String.prototype
//student.__proto__=Object.prototype
//arr.__proto__=Array.prototype
console.log(str.__proto__)
