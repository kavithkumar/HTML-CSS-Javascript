document.getElementById('myform').addEventListener("submit", function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phonenumber = document.getElementById('phonenumber').value;
    if (name === "") {
        document.getElementById('nameErr').innerHTML = 'Name is required'
        event.preventDefault();   //to prevent default from submission
    }
    else {
        const namepattern =
            /^[a-z ]{4,20}$/;
        if (!namepattern.test(name)) {
            document.getElementById('nameErr').innerHTML = 'Name should be in lower cases'
            event.preventDefault();
        }
    }
    if (email === "") {
        document.getElementById('emailErr').innerHTML = 'Email is required'
        event.preventDefault();   //to prevent default from submission
    }
    else {
        const emailpattern =
            /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9-._]+\.[a-zA-Z]{2,4}$/;
        if (!emailpattern.test(email)) {
            document.getElementById('emailErr').innerHTML =
                'Email is not valid'
            event.preventDefault();
        }
    }
    if (password === "") {
        document.getElementById('passwordErr').innerHTML = 'Password is required'
        event.preventDefault();   //to prevent default from submission
    }
    else {
        const passwordpattern = /^[a-zA-Z0-9@#$%&*^]{8,15}$/;
        if (!passwordpattern.test(password)) {
            document.getElementById('passwordErr').innerHTML =
                'Password is not valid'
            event.preventDefault();
        }
    }
    if (phonenumber === "") {
        document.getElementById('phonenumberErr').innerHTML = 'Phonenumber is required'
        event.preventDefault();   //to prevent default from submission
    }
    else {
        const phnopattern = /^[0-9]{10}$/; //REGULAR EXPRESSION to check
        if (!phnopattern.test(phonenumber)) {
            document.getElementById('phonenumberErr').innerHTML =
                "Enter valid phonenumber"
            event.preventDefault();
        }
    }
})