// Object property shorthand

const name = 'Juan';
const userAge = 41;

const user = {
    name,
    age: userAge,
    location: 'La Paz'
};

console.log(user);

// Object destructuring
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label:productLabel, stock, rating = 5} = product;
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, { label, stock = 0 }= {}) => {
    console.log(`Transaction type: ${type} ${label} ${stock}`);
}

// transaction('order', product);
transaction('order');