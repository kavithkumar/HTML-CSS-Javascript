async function getToDoList() {
    let result = await fetch("http://jsonplaceholder.typicode.com/todos/1")
    //fetch is a simple promise
    console.log(result)
    result.json().then((r) => {
        document.getElementById('user').innerHTML = JSON.stringify(r)
        console.log(r)
    })
}
getToDoList();