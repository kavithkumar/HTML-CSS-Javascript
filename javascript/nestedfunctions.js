// function outer() {
//     let outer_variable = 'This is outer variable'
//     function inner() {
//         console.log('Inner function accessing outer variable');
//         console.log(outer_variable);
//     }
//     return inner;
// }

// let funccall = outer();
// console.log(funccall);
// console.log(funccall.outer_variable)//outer_variable cannot be accessed
// funccall();



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
    //console.log(inner_var);
    return inner;
}
let funccall = outer();
// console.log(funccall);
// console.log(funccall.outer_variable)//outer_variable cannot be accessed
 funccall();