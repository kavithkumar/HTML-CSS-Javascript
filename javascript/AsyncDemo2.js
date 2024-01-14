let myPromise = new Promise((resolve, reject) => {
    let randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber < 0.5) {
            resolve(randomNumber)
        }
        else {
            reject(new Error('rejected'))
        }
    }, 5000);
})
myPromise
    .then((result) => { console.log(result) })// success/resolve
    .catch((error) => { console.log(error) })// error/reject

//resolve-then
//reject-catch