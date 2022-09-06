// JavaScript Object Notation (JSON)

const user = {
    id: 1,
    name: 'Galib Hasan',
    job: 'actor'
}
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
    owner: 'Alia',
    address:{
        street: '32/7, Kolabagan',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenye: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shobObj = JSON.parse(shopJSON);
console.log(shobObj);