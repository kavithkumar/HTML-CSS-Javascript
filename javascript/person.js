function person(name, age) {
    return {
        name,
        age,
        display: function () {
            console.log(`${this.name} age is ${this.age}`)
        }
    }
}
let person1 = person('john', 22)
console.log(person1.name);
console.log(person1.age);
person1.display();
person1.name = 'james';
person1.display();



function ToDoList(title, time, completed = false) {
    return {
        title,
        time,
        completed,
        toggleCompleted: function () {
            this.completed = !this.completed;
        },
        display: function () {
            return `ToDo: ${title} Date of Completion:${time} IsCompleted:${this.completed}`
        }
    }
}
let todo1 = new ToDoList('project1', '2hours')
console.log(todo1.completed);
todo1.toggleCompleted();
console.log(todo1.completed);
console.log(todo1.display());
function submit() {
    todo1.toggleCompleted();
    console.log(todo1.display());
    let str = todo1.display();
    document.getElementById('display').textContent = str
}
