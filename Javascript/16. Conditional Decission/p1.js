var fruits = ['Apple', 'Banana', 'Orange'];

var pos = fruits.indexOf('Banana');
console.log(pos);

console.log(fruits);

fruits[pos] = 'Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);