function factorial(number){
    let fact = 1;
    let i = number;
    // for(let i =number; i >= 1; i--){
    //     fact *= i;
    // }

    while(i >= 1){
        fact *= i;
        i--;
    }
    return fact;
}

const fac = factorial(9);
console.log('factorial of 9 is', fac);