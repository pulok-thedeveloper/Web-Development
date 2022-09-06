// Get property Values
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 2,
    mouse: 1,
    pen: 30
}
console.log(shoppingCart);

var penCount = shoppingCart.pen;
console.log(penCount);

var booksCount = shoppingCart['books'];
console.log(booksCount);

var properties = Object.keys(shoppingCart);
console.log(properties);

var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];

console.log(propertyName, propertyValue);

// Set property Values
console.log(shoppingCart);
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse']=35;
console.log(shoppingCart);
shoppingCart[propertyName] = 20;
console.log(shoppingCart);
