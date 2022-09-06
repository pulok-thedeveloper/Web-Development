const squareAvg = arr =>{
    const newArr = [];
    let sum = 0;
    let avg = 0;
    for(let element of arr){
        element = Math.pow(element, 2);
        newArr.push(element);
    }
    for(let element of newArr){
        sum += element;
    }
    avg = sum / newArr.length;
    return avg;
}

const numbers = [5, 10 ,15, 20, 25];
const result =  squareAvg(numbers);
console.log(result);