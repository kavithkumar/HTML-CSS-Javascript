class QuestionStatement {
    #Question;
    #Option1;
    #Option2;
    #Option3;
    #Option4;
    #CorrectAnswer;
    constructor(Question, Option1, Option2, Option3, Option4, CorrectAnswer) {
        this.#Question = Question;
        this.#Option1 = Option1;
        this.#Option2 = Option2;
        this.#Option3 = Option3;
        this.#Option4 = Option4;
        this.#CorrectAnswer = CorrectAnswer;
    }
    get Question() {
        return this.#Question
    }
    get Option1() {
        return this.#Option1
    }
    get Option2() {
        return this.#Option2
    }
    get Option3() {
        return this.#Option3
    }
    get Option4() {
        return this.#Option4
    }
    get CorrectAnswer() {
        return this.#CorrectAnswer
    }
    set Question(Question) {
        this.#Question = Question;
    }
    set Option1(Option1) {
        this.#Option1 = Option1;
    }
    set Option2(Option2) {
        this.#Option2 = Option2;
    }
    set Option3(Option3) {
        this.#Option3 = Option3;
    }
    set Option4(Option3) {
        this.#Option4 = Option4;
    }
    set CorrectAnswer(Option4) {
        this.#CorrectAnswer = CorrectAnswer;
    }
    display() {
        return `${this.#Question}
                ${this.#Option1}
                ${this.#Option2}
                ${this.#Option3}
                ${this.#Option4}
                ${this.#CorrectAnswer}`
    }
}
function checkAnswer(qno) {
    if (qno === 1) {
        if (document.getElementById('1Option1').checked) {
            console.log('Your answer is correct')
        }
        else {
            console.log('Wrong answer')
        }
    }
    if (qno === 2) {
        if (document.getElementById('2Option3').checked) {
            console.log('Your answer is correct')
        }
        else {
            console.log('Wrong Answer')
        }
    }
    if (qno === 3) {
        if (document.getElementById('3Option1').checked) {
            console.log('Your answer is correct')
        }
        else {
            console.log('Wrong Answer')
        }
    }
}
let q1 = new QuestionStatement('What is the current version of JavaScript', 'ES14', 'ES13', 'ES12', 'ES11', 'CorrectAnswer');
const q2 = new QuestionStatement('What is the capital of INDIA', 'haryana', 'punjab', 'new delhi', 'patna')
const q3 = new QuestionStatement('What is the capital of TamilNadu', 'chennai', 'tiruchy', 'madurai', 'pondicherry')
// console.log(QuestionStatement1.display());
let qno = 0;
let questions = [q1, q2, q3];
let content = " ";
// for(let q of q1){
//     content=content+"<br>"+q.Question+"<br>"+
//             "<input type='radio' name='Option1'>"+q.Option1+"<br>"+
//             "<input type='radio' name='Option2'>"+q.Option2+"<br>"+
//             "<input type='radio' name='Option3'>"+q.Option3+"<br>"+
//             "<input type='radio' name='Option4'>"+q.Option4+"<br>"

// }
for (let q of questions) {
    content = content + `<br>${++qno}) ${q.Question}<br>
            <input type='radio' name='option' id='${qno}Option1' onClick='checkAnswer(${qno})' value='${q.Option1}'>${q.Option1} <br>
            <input type='radio' name='option' id='${qno}Option2' onClick='checkAnswer(${qno})' value='${q.Option2}'>${q.Option2} <br>
            <input type='radio' name='option' id='${qno}Option3' onClick='checkAnswer(${qno})' value='${q.Option3}'>${q.Option3} <br>
            <input type='radio' name='option' id='${qno}Option4' onClick='checkAnswer(${qno})' value='${q.Option4}'>${q.Option4} <br>`

}
document.getElementById('Question').innerHTML = content;
