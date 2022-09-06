const getEvenLengthNames = arr =>{
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        let element = arr[i];
        if(element.length % 2 == 0){
            newArr.push(element);
        }
    }
    return newArr;
}

const friends = ['Evan', 'Tanim', 'Sayem', 'Said', 'Naeem', 'Anik'];
const evenLengthFriends = getEvenLengthNames(friends);
console.log(evenLengthFriends);