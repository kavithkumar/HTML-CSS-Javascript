export default class person {
    #firstname
    #lastname
    #gender
    static count = 0;
    constructor(firstname, lastname, gender) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#gender = gender;
        person.count++
    }
    get firstname() {
        return this.#firstname;
    }
    get lastname() {
        return this.#lastname;
    }
    get gender() {
        return this.#gender;
    }
}

let person1 = new person('john', 'smith', 'm');
let person2 = new person('john', 'blake', 'm');
let person3 = new person('clara', 'j', 'f');

console.log(person.count);
console.log(`${person1.firstname} ${person1.lastname} ${person1.gender}`);
console.log(`${person2.firstname} ${person2.lastname} ${person2.gender}`);
console.log(person1)