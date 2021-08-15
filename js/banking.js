//Deposit money
document.getElementById('deposit-btn').addEventListener('click',function(){
    //get the deposit input
    let depositField = document.getElementById('deposit-input');
    let newDepoText = depositField.value;
    //convert sting to float
    let newDepoAmount = parseFloat(newDepoText);
    //deposit total
    let depositTotal = document.getElementById('deposit-total');
    let preDepoText = depositTotal.innerText;
    //convert sting to float
    let preDepoAmount = parseFloat(preDepoText);
    let newDepoTotal = preDepoAmount + newDepoAmount;
    depositTotal.innerText = newDepoTotal;

    //update acc balance
    const balanceField = document.getElementById('main-balance');
    let newBalanceText = balanceField.innerText;
    let newBalanceAmount = parseFloat(newBalanceText);

    let newBalanceTotal = newBalanceAmount + newDepoAmount;
    balanceField.innerText = newBalanceTotal;

    depositField.value = '';
});


//Withdraw money
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //get withdraw input
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawInputText = withdrawInput.value;
    let newWithdrawTotal = parseFloat(withdrawInputText);
    //get withdraw total
    let withdrawField = document.getElementById('withdraw-total');
    let newWithdrawText = withdrawField.innerText;
    let newWithdrawAmount = parseFloat(newWithdrawText);
    //set total in withdraw field
    let newWithTotalAmount = newWithdrawTotal + newWithdrawAmount;
    withdrawField.innerText = newWithTotalAmount;
    //get main balance
    const balanceField = document.getElementById('main-balance');
    let newBalanceText = balanceField.innerText;
    let newBalanceAmount = parseFloat(newBalanceText);
    //New balance total
    let balanceTotal = newBalanceAmount - newWithdrawTotal;
    balanceField.innerText = balanceTotal;
    
    withdrawInput.value = '';

})