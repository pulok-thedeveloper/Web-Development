const jim = 64;
const dela = 49;
const chinku = 77;

const max = Math.max(64,49,77);
console.log(max);

if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}

else if(dela > jim && dela > chinku){
    console.log('Dela will get the cake');
}

else{
    console.log('Chinku will get the cake');
}