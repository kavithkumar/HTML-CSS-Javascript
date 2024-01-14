class bankAccount {
    static min_balance;
    constructor(accountno, accounttype, balance) {
        if (accounttype === 'current')
            bankAccount.min_balance = 500;
        if (accounttype === 'savings')
            bankAccount.min_balance = 1000;
        this.accountno = accountno;
        this.accounttype = accounttype;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {

        if ((this.balance - amount) > bankAccount.min_balance) {
            this.balance = this.balance - amount;
        }
        else
            console.log('Insufficient balance')
    }
    display() {

        return `Account Details: ${this.accountno} ${this.accounttype} ${this.balance}`
    }
}
let bankAccount1 = new bankAccount(32529699997, 'savings', 50000);
console.log(bankAccount1.display());
bankAccount1.deposit(10000);
console.log('afterdeposit 10000');
console.log(bankAccount1.display());
console.log('withdraw 50000');
bankAccount1.withdraw(59600);
console.log(bankAccount1.display());

