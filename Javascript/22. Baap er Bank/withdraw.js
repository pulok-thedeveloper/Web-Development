document.getElementById('withdraw-btn').addEventListener('click',function(){
    // Get the withdraw amount user have entered
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    if(isNaN(newWithdrawAmount)){
        alert('Please enter an amount');
        return;
    }

    // Get the amount of previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    // Get the amount of previous Balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // Clear withdraw input field
    withdrawField.value = '';

    if(newWithdrawAmount > previousBalanceTotal){
        alert('You not enough balance');
        return;
    }


    // Add previos and new withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // Update Withdraw Amount
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // Subtract previos balance and new withdraw amount
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // Update Balance Amount
    balanceTotalElement.innerText = currentBalanceTotal;


})