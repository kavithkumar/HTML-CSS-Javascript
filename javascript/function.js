function add(a, b) {
    return a + b;
}
function calculate(operation, a, b) {
    return (operation(a, b))
}
console.log(calculate(add, 5, 10));