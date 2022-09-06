function isLeapYear(year){
    const remainder = year%4;
    if(remainder == 0){
        if(year%100 == 0){
            if(year%400 == 0){
                console.log('Your year is leap year', year);
            }
            else{
                console.log('Your year is not a leap year', year);
            }
        }
        else{
            console.log('Your year is leap year', year);
        }
        
    }
    else{
        console.log('Your year is not a leap year', year);
    }
}
isLeapYear(1952)