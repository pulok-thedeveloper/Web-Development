function findOdds(numbers){
    var oddNums = [];
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 != 0){
            oddNums.push(numbers[i]);
        }
    }
    return oddNums;
}

function getSum(numbers){
    let sum = 0;
    for(var i =0; i < numbers.length; i++){
        var element = numbers[i];
        sum += element;
    }
    return sum;
}

function sumOddNumbers(numbers){
    const oddNumbers = findOdds(numbers);
    const sumOfOddNumbers = getSum(oddNumbers);
    console.log(sumOfOddNumbers);
    return sumOfOddNumbers;
}

const arr = [45,26,70,19,16,84,50,79,40];
const Oddsum = sumOddNumbers(arr);