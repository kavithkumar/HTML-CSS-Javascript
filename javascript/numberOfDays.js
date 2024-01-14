function numberOfDays() {
    let month = document.getElementById('month').value;
    let days = 0;
    switch (month) {
        case 'jan':
        case 'mar':
        case 'may':
        case 'jul':
        case 'aug':
        case 'oct':
        case 'dec':
            days = '31 days'
            break;
        case 'feb':
            days = '28 days'
            break;
        case 'apr':
        case 'jun':
        case 'sep':
        case 'nov':
            days = '30 days'
            break;
        default:
            days = 'Result is unknown'

    }
    document.getElementById('days').innerHTML = `It has ${days}`;
}