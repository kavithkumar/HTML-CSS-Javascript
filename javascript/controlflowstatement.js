function Enter() {
    let inputmark;

    inputmark = document.getElementById("inputmark").value
    let result = ''
    // if(inputmark > 90)
    //     result='Your grade is A+'
    // else if(inputmark > 80)
    //     result='Your grade is A'
    // else if(inputmark > 70)
    //     result='Your grade is B+'
    // else if(inputmark > 60)
    //     result='Your grade is B'
    // else if(inputmark > 50)
    //     result='Your grade is C+'
    // else if(inputmark > 40)
    //     result='Your grade is C'
    // else    
    //     result='Fail'
    switch (true) {
        case inputmark > 90:
            result = 'Your grade is A+';
            break;
        case inputmark > 80:
            result = 'Your grade is A'
            break;
        case inputmark > 70:
            result = 'Your grade is B+'
            break;
        case inputmark > 60:
            result = 'Your grade is B'
            break;
        case inputmark > 50:
            result = 'Your grade is C+'
            break;
        case inputmark > 40:
            result = 'Your grade is C'
            break;
        case inputmark <= 40:
            result = 'Fail'
            break;
        default:
            result = 'Result is unknown'
            break;
    }
    document.getElementById("result").innerHTML = result;
}