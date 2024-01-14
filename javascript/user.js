//In this class instance variables are public
// class user{
//     constructor(userid,password,email){
//         this.userid=userid;
//         this.password=password;
//         this.email=email;
//     }
//     display(){
//         return `${this.userid} ${this.password} ${this.email}`
//     }
// }


//In this class instance variables aare private
class user {
    //To make the instance variables private#
    #userid;
    #password;
    #email;
    constructor(userid, password, email) {
        this.#userid = userid;
        this.#password = password;
        this.#email = email;
    }
    get userid() {
        return this.#userid
    }
    get password() {
        return this.#password
    }
    get email() {
        return this.#email
    }
    set userid(userid) {
        this.#userid = userid;
    }
    set password(password) {
        this.#password = password;
    }
    set email(email) {
        this.#email = email;
    }
    display() {
        return `${this.#userid} ${this.#password} ${this.#email}`
    }
}
let user1 = new user('abc', '12345', 'kavi@gmail.com');
console.log(user1.display());
console.log(user1.userid); //it will call get userid()
console.log(user1.password); //it will call get password()
user1.password = '45678' //it is calling the set method password
user1.email = 'bro@gmail.com' //it is callind the st method email
console.log(user1.display());
