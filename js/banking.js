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
})