let person = {
    'name': 'john',
    'age': 20,
    'address': {
        'street': 'hbcjs',
        'city': 'chennai',
        'state': 'TamilNadu'
    },
    'favouritesports': [
        'Badminton',
        'Cricket',
        'Football'
    ]

}
let personKeys = Object.keys(person);
console.log(personKeys);
console.log(person);
//Using for loop
for (const key in person) {
    console.log(key)
    console.log(typeof (person[key]))
    console.log(person[key])
}
//console.log(Object.entries)
const entries = Object.entries(person);
console.log(entries);
for (let [key, val] of entries) {
    console.log(typeof (val))
    if (typeof (val) === 'object') {
        console.log(Object.entries(val))

    }
    else { console.log(key + ' ' + val) }
}
