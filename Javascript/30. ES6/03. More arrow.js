const multiply = (num1, num2) => num1 * num2;
const result = multiply(5,8);
console.log(result);

// no parameter
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const tenTimes = num => num * 5;

// multiline arrow function
const avg = (x, y, z) => {
    const total = x + y + z;
    const avg = total / 3;
}