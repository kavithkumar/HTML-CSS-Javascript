function Counter() {
    let count = 0;
    increment: function increment() {
        return ++count;
    }
    decrement: function decrement() {
        return --count;
    }
    getcount: function getcount() {
        return count;
    }
    return { increment, decrement, getcount }
}

let countfunc = Counter();
let countfunc2 = Counter();
console.log(countfunc.increment());
console.log(countfunc.increment());
console.log(countfunc.increment());
console.log(countfunc.increment());
console.log(countfunc.decrement());
console.log(countfunc.getcount());
console.log(countfunc2.increment());
console.log(countfunc2.increment());
console.log(countfunc2.getcount());


function outer(){
    let outer_var='this is outer variable';
    console.log(this.outer_var);
    console.log(outer_var);
    function inner(){
        console.log(this.outer_var);
        console.log(outer_var);
        let inner_var='This is inner variable'
        console.log(this.inner_var);
        console.log(inner_var);
    }
    console.log(inner_var);
    return inner;
}