function celciusToFarenheit(celcius){
    let farenheit = (celcius*9/5)+32;
    return farenheit;
}

function farenheitToCelcius(farenheit){
    let celcius = (farenheit-32)*5/9;
    return celcius;
}

let cel1 = 10, far2 = 50;

let far1 = celciusToFarenheit(cel1);

let cel2 = farenheitToCelcius(far2);

console.log(far1);
console.log(cel2);