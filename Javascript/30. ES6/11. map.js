const numbers = [2,4,8,6,3];
 const output = [];
 for(const number of numbers){
    const doubled= number * 2;
    output.push(doubled);
 }
 console.log(output);

 function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const doubled= number * 2;
        output.push(doubled);
    }
    return output;
 }

 const result = getDoubles(numbers);
 console.log(result);

//  Mapping
 const doubleIt = num => num *2;
 const makeDouble = numbers.map(doubleIt);
 const makeDoubleDirect = numbers.map(num => num *2);
 console.log(makeDoubleDirect);

 const half = numbers.map(num => num/2);
 console.log(half);

 const products = [
   {id: 1, name: 'laptop', price: 45000},
   {id: 2, name: 'mobile', price: 80000},
   {id: 3, name: 'watch', price: 5000},
   {id: 4, name: 'tablet', price: 23000},
 ]

 const items = products.map(product => product.name);
 console.log(items);
 
 const prices = products.map(product => product.price);
 console.log(prices);