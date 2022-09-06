// const inch =94;
// const feet = inch/12;
// console.log(feet.toFixed(2));

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

function milesToKilo(miles){
    var kilometer = miles*1.6;
    return kilometer;
}

var feet = inchToFeet(144);
console.log(feet);

var kilometer = milesToKilo(100);
console.log(kilometer);