let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved')
    }, 5000);
})
async function asyncFunction() {
    let result = await promise;

    console.log(result);
    console.log('hello');
}
asyncFunction();