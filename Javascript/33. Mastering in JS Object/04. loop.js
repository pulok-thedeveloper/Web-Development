const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}

const keys = Object.keys(bottle);
console.log(keys);

/*
3 ways to read object properties
bottle.color
bottole['color']
bottle[key]
*/
// for(const key of keys){
//     console.log(key, bottle[key]);
// }

//for in loop
for(const key in bottle){
    console.log(key, bottle[key]);
}

//advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key,value);
} 