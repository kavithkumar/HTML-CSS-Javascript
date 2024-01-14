class book {
    #isbn;
    #title;
    #price;
    constructor(isbn, price, title) {
        this.#isbn = isbn;
        this.#price = price;
        this.#title = title;
    }
    get isbn() {
        return this.#isbn
    }
    get price() {
        return this.#price
    }
    get title() {
        return this.#title
    }
    set isbn(isbn) {
        this.#isbn = isbn;
    }
    set price(price) {
        this.#price = price;
    }
    set title(title) {
        this.#title = title;
    }
    display() {
        return `${this.#isbn} ${this.#price} ${this.#title}`
    }
}
let book1 = new book('12345', 500, 'javascript');
console.log(book1.display());
book1.price = 800;
console.log(book1.display());



const arr = [2, 3, 4, 5, 6];
const [a, b, c, ...myarr] = arr;
console.log(a);
console.log(myarr);