
let count=0;
document.getElementById("inc").onclick=function(){
    count++;
    document.getElementById("val").innerHTML=`count is ${count}`
}
document.getElementById("dec").onclick=function(){
    count--;
    document.getElementById("val").innerHTML=`count is ${count}`
}

