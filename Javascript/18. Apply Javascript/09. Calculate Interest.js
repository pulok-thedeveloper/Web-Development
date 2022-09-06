function simpleInterest(p, r, t){
    const SI = (p * r * t)/100;
    return SI;
}

function compoundInterest(p, r, n){
    const CI =p*(Math.pow((1+r/100),n)-1);
    return CI;
}
let principal = 5000;
let rate = 10.5;
let n = 2;
let t =2;

const simInterest = simpleInterest(principal, rate, t);
const comInterest = compoundInterest(principal, rate, n);
console.log(simInterest.toFixed(3));
console.log(comInterest.toFixed(3));