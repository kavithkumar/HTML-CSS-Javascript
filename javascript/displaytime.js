function getTime(){
    let time=new Date().toLocaleTimeString();
    console.log(time);
    document.getElementById('time').innerHTML=time
}
getTime();
//()=>getTime() - arrow function

//or

// setInterval(() => {
//     getTime()
// }, 1000);

//or

setInterval(function(){getTime()},1000)

//or

//setInterval(()=>getTime(),1000)