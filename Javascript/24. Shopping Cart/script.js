function updateQuantity(isIncrease,quantityField){
    const previousQuantity = parseInt(quantityField.value);
    let newQuantity;
    if(isIncrease){
        newQuantity = previousQuantity + 1;
    }
    else{
        if(previousQuantity > 1){
            newQuantity = previousQuantity - 1;
        }
        else{
            newQuantity = previousQuantity;
        }
    }
    quantityField.value = newQuantity;
    return newQuantity;
}



const increaseBtns = document.getElementsByClassName('plus-btn');

for(const increaseBtn of increaseBtns){
    increaseBtn.addEventListener('click',function(){
        const quantityField = increaseBtn.parentNode.querySelector('.quantity-field');
        const newQuantity = updateQuantity(true,quantityField);
    })
    console.log(increaseBtn);
}

const decreaseBtns = document.getElementsByClassName('minus-btn');

for(const decreaseBtn of decreaseBtns){
    decreaseBtn.addEventListener('click',function(){
        const quantityField = decreaseBtn.parentNode.querySelector('.quantity-field');
        const newQuantity = updateQuantity(false,quantityField);
    })
    console.log(decreaseBtn);
}

