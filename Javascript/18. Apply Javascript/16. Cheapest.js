const phones = [
    {name: 'Samsung', camera: 32, storage: 64, price: 36000, color: 'silver'},
    {name: 'Symphony', camera: 12, storage: 16, price: 16000, color: 'silver'},
    {name: 'Xiaomi', camera: 20, storage: 128, price: 30000, color: 'silver'},
    {name: 'Google', camera: 64, storage: 128, price: 42000, color: 'silver'},
    {name: 'Oppo', camera: 64, storage: 32, price: 31000, color: 'silver'},
    {name: 'iphone', camera: 20, storage: 256, price: 80000, color: 'silver'},
    {name: 'Walton', camera: 8, storage: 16, price: 13000, color: 'silver'},
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i <phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);