const fish = {
    name: 'Hilsha',
    address: 'Chandpur',
    color: 'Silver',
    phone: '01998827178',
    price: 400
}

// console.log(fish.phone);
// console.log(fish.color);

const phone = fish.phone;
const price = fish.price;

const {color} = fish;
console.log(color);

const {address} = fish;
console.log(address);

// Array destructuring
const [first] = [44, 99, 88];
console.log(first);
const division= num1, num2 => console.log(num1 /num2);