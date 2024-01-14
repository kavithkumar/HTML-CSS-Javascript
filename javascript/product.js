function product(name, description, price) {
    return {
        name,
        description,
        price,
        calculateDiscount: function (percentage) {
            // this.price=this.price-(this.price*percentage/100) //this will change the price value every time 
            return this.price - (this.price * percentage / 100)

        },
        display: function () {
            return `${this.name} ${this.description} ${this.price}`
        }
    };
}
let product1 = new product('Boult', 'Bluetooth', 1000);
console.log(product1.display());

document.getElementById('name').innerHTML = product1.name;
document.getElementById('description').innerHTML = product1.description;
document.getElementById('price').innerHTML = product1.price;

function calculatediscount() {
    let percentage = document.getElementById('percentage').value;

    // product1.calculateDiscount(percentage);
    // document.getElementById('afterdiscount').innerHTML=product1.price; //this will change price at every onchange

    document.getElementById('afterDiscount').innerHTML = product1.calculateDiscount(percentage);
}