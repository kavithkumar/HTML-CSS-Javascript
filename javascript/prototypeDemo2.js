//constructor function
function createProduct(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
createProduct.prototype.calculatePrice = function () {
    return this.price * this.quantity;
}
createProduct.prototype.calculateDiscountPrice = function (discountRate) {
    let totalPrice = this.calculatePrice();
    return totalPrice - totalPrice * discountRate;
}

let product1 = new createProduct('nnkj', 12, 1000);
console.log(product1.calculatePrice());
console.log(product1.calculateDiscountPrice(10 / 100));
console.log(product1.__proto__.__proto__.__proto__);
console.log(product1.__proto__ === createProduct.prototype)
console.log(product1.__proto__ === Object.prototype)
console.log(product1.__proto__ = Object.prototype)
console.log(product1.calculatePrice());