const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

const partial = friends.splice(2,3);
console.log(partial);
console.log(friends);

const partial2 = friends.splice(3,0, 12, 10, 7);
console.log(partial2);
console.log(friends);