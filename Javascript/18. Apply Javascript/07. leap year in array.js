function isLeapYear(years){
    var newArr = []
    for(var i = 0; i<years.length; i++){
        if((years[i]%4 == 0) && (years[i]%100 != 0) || (years[i]%400 == 0) ){
            newArr.push(years[i]);
        }
    }
    return newArr;
}


const years = [2023,2024,2025,2028,2030,1952,1900];
const leapYears = isLeapYear(years);
console.log(leapYears, 'are leap years.');