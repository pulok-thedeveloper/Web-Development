var num1 = 13;
var num2 = 34;
var num3 = 45;


if (num1>num2 && num1>num3) {
    console.log('Largest number is '+ num1);
} 
else if(num2>num1 && num2>num3){
    console.log('Largest number is '+ num2);
}
else{
    console.log('Largest number is '+ num3);
}


var side1 = 9;
var side2 = 8;
var side3 = 10;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('The triangle is Isosceles');
}
else{
    console.log('The triangle is not Isosceles');
}