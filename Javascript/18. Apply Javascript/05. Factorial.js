function factorial(num){
    let factorial = 1;
    for(let i = 1; i<=num; i++){
        factorial *= i;
    }
    return factorial;
}

const fac = factorial(5);
console.log(fac);