var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 2,
    mouse: 1,
    pen: 30,
    shoes: 2
}
console.log(shoppingCart);

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

console.log(keys.length);

// for(var i=0; i < keys.length; i++){
//     // console.log(keys[i],': ',values[i]);
//     var propertyName = keys[i]
//     var propertyValue = shoppingCart[propertyName];
//     console.log(propertyName, propertyValue);
// }


// for in loop

for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}