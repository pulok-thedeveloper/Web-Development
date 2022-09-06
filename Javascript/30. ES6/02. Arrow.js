// function declaration
function add(first, second){
    const total = first + second;
    return total;
}
let result = add(5,7);
console.log(result)

// function expression
const add1 = function add1(first,second){
    const total = first + second;
    return total;
}
result = add1(7,5);
console.log(result)

// function expression with anonymous function
const add2 = function (first,second) {
    const total = first + second;
    return total;
}
result = add2(7,5);
console.log(result)

const add3 = function(first,second){
    return first + second;
}
result = add3(7,5);
console.log(result)

// arrow function
const add4 = (first,second) => first + second;
result = add4(7,7);
console.log(result)