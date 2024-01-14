function display() {
    let employee = { 'name': 'john', 'age': 25, 'salary': 12000 };
    console.log(employee);
    document.getElementById("val").innerHTML = `Name:${employee.name} Age:${employee.age} Salary:${employee.salary}`

}
function disk() {
    let studentDetails = { 'name': 'jack', 'age': 15, 'course': 'B.E', 'transport': 'bike' };
    console.log(studentDetails);
    // document.getElementById("val").innerHTML=`Name:${studentDetails.name} Age:${studentDetails.age}
    //  Course:${studentDetails.course} Transport:${studentDetails.transport}`
    document.getElementById("val").innerHTML = `<br>${JSON.stringify(studentDetails)}`;
    //JSON.stringify converts object to a string
}