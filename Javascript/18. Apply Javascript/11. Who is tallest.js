function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if(largest < numbers[i]){
            largest = numbers[i];
        }
    }
    return largest;
}

const height = [167, 190, 120, 165, 137];
const tallest = maxInArray(height);
console.log('Tallest person is: ', tallest);