const findMax = (arr1, arr2) =>{
    const arr3 = [...arr1, ...arr2];
    const max = Math.max(...arr3);
    return max;
}
const arr1 = [45, 18, 63];
const arr2 = [82, 34, 57];
const result = findMax(arr1, arr2);
console.log(result);