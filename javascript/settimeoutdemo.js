function dataProvider(consumer) {
    let message = 'This is the message from data provider';
    setTimeout(() =>
        consumer(message)
        , 5000);
    // setTimeout(()=>consumer(message),5000)
}
//asynchronous function
function consumer(data) {
    //alert(data)
    console.log(data)
}

dataProvider(consumer);
console.log("hello");
console.log('welcome');
console.log('today is ' + new Date())