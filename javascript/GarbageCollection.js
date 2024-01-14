function Parent(dad, daughter) {
    dad.daughter = daughter;
    daughter.dad = dad;
    return {
        father: dad,
        child: daughter
    }
}
let parent = Parent({
    'name': 'BOB'
},
    {
        'name': 'ALICE'
    })
console.log(parent);
console.log(parent.father);
console.log(parent.child);
let keys = Object.keys(parent);
console.log(keys);
delete parent.father;
console.log(parent);
delete parent.child.father;
console.log(parent);
keys = Object.keys(parent);
console.log(keys);