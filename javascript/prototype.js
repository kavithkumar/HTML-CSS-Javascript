function person(name,age){
    this.name=name;
    this.age=age;
}
person.prototype.greet=function(){
    console.log(`welcome ${this.name}!!!`)
}
console.log(person.prototype);
let person1=new person('john',20);
let person2=new person('james',21);
person1.address='190A pallavan Nagar';
person1.greet();
console.log(person1.__proto__);
console.log(person2.__proto__);