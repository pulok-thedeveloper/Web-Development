document.getElementById('deposit-btn').addEventListener('click',function(){
    // Get the Deposit amount user have entered
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);

    if(isNaN(newDepositAmount)){
        alert('Please enter an amount');
        return;
    }

    // Get the amount of previous deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText) ;
    
    // Add previos and new deposit amount
    const currentDepositTotal = previousDepositTotal+ newDepositAmount;

    // Update Deposit Amount
    depositTotalElement.innerText = currentDepositTotal;

    // Get the amount of previous Balance total
    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // Add previos balance and new deposit amount
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // Update Balance Amount
    balanceTotalElement.innerText = currentBalanceTotal;

    // Clear deposit input field
    depositField.value = '';
})