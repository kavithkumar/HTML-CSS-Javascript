let count = 0;
function Guess() {
    let number = document.getElementById('number').value;
    let val = Math.floor(Math.random() * 10)
    count++;
    let result = ''
    if (number > val)
        result = 'Your guess is greater than the random number generated value'
    else if (number < val)
        result = 'Your guess is less than the random generated value'
    else
        result = `You guessed it rightly , ${count} in turns`
    document.getElementById('result').innerHTML = result;
}