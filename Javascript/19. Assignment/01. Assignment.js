// Problem 1 start

function radianToDegree(rad){
    if(typeof(rad)=='number'){
        const pi = Math.PI;
        const deg = (rad * (180/pi)).toFixed(2);
        return deg;
    }
    else{
        const errorMessage ='Please input a number';
        return errorMessage;
    }
}

// Problem 1 end

// Problem 2 start

function isJavaScriptFile(fileName){
    if(typeof(fileName) == 'string'){
        if(fileName.endsWith('.js')){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        const errorMessage ='Please input a string';
        return errorMessage;
    }
}

// Problem 2 end

// Problem 3 start

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){

    if(typeof(dieselQuantity)=='number' && typeof(petrolQuantity)=='number' && typeof(octaneQuantity)=='number'){
        const dieselPerLitre = 114;
        const petrolPerLitre = 130;
        const octanePerLitre = 135;
        const dieselCost = dieselPerLitre * dieselQuantity;
        const petrolCost = petrolPerLitre * petrolQuantity;
        const octaneCost = octanePerLitre * octaneQuantity;
        const totalCost = dieselCost + petrolCost + octaneCost;
        return totalCost;
    }
    else{
        const errorMessage = 'Please input only numbers';
        return errorMessage;
    }
}

// Problem 3 end

// Problem 4 start

function publicBusFare(totalPublic){
    if(typeof(totalPublic)=='number'){
        const busCapacity = 50;
        const microbusCapacity = 11;
        const publicBusCost = 250;
        const busRemaining = totalPublic % busCapacity;
        const microbusRemaining = busRemaining % microbusCapacity;
        const publicBusTotalCost = microbusRemaining * publicBusCost;
        return publicBusTotalCost;
    }
    else{
        const errorMessage = 'Please input a number';
        return errorMessage;
    }
}

// Problem 4 end

// Problem 5 start

function isBestFriend(pair1, pair2){
    if(typeof(pair1)=='object' && typeof(pair2)=='object'){
        if(pair1.name == pair2.friend && pair2.name == pair1.friend){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        const errorMessage = 'Please input two objects';
        return errorMessage;
    }
}
// Problem 5 end