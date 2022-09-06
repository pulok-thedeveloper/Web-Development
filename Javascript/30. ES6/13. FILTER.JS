const numbers = [12,5,23,45,11,18,9,55,61,98];
const bigNums = numbers.filter(number => number>20);
console.log(bigNums);

const divisibleByFive = numbers.filter(number => number % 5 ==0);
console.log(divisibleByFive);

const divisibleByFive2 = numbers.find(number => number % 5 ==0);
console.log(divisibleByFive2);