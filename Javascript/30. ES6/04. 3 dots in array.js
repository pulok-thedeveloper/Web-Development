const max = Math.max(50, 19, 99, 34);
console.log(max);

const numbers = [59, 35, 20, 34];
const largest = Math.max(...numbers);
console.log(largest);

const numbers2 = numbers;
numbers.push(12);
numbers2.push(25);
console.log(numbers)
console.log(numbers2);

const numbers3 = [...numbers];
numbers.push(94);
numbers3.push(150);
console.log(numbers)
console.log(numbers2);
console.log(numbers3);