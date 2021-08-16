//Get input parameter
function getInput(inputId){
        //get the deposit input
        let inputField = document.getElementById(inputId);
        let newInputText = inputField.value;
        inputField.value = '';
        //convert sting to float
        let newInputAmount = parseFloat(newInputText);
        return newInputAmount;
}
function getTotal(totalFieldId,newDepoAmount){
        let totalElement = document.getElementById(totalFieldId);
        let totalText = totalElement.innerText;
        //convert sting to float
        let previousAmount = parseFloat(totalText);
        let newInputTotal = previousAmount + newDepoAmount;
        totalElement.innerText = newInputTotal;
}
function getCurrentBalance(){
        const balanceField = document.getElementById('main-balance');
        let newBalanceText = balanceField.innerText;
        let newBalanceAmount = parseFloat(newBalanceText);
        return newBalanceAmount;
}
function updateBalance(amount, isAdd){
        const balanceField = document.getElementById('main-balance');
        const newBalanceAmount = getCurrentBalance();
        if(isAdd == true){
            let newBalanceTotal = newBalanceAmount + amount;
            balanceField.innerText = newBalanceTotal;
        }else{
            let newBalanceTotal = newBalanceAmount - amount;
            balanceField.innerText = newBalanceTotal;
        }
}

//Deposit money
document.getElementById('deposit-btn').addEventListener('click',function(){

    const newDepoAmount = getInput('deposit-input');
    if(newDepoAmount > 0){
        getTotal('deposit-total',newDepoAmount);
        updateBalance(newDepoAmount , true);
    }
});

//Withdraw money
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //get withdraw input
    const newWithdrawTotal = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawTotal > 0 && newWithdrawTotal < currentBalance ){
        getTotal('withdraw-total', newWithdrawTotal);
        updateBalance(newWithdrawTotal , false);
    }
    if(newWithdrawTotal > currentBalance){
        alert('Insufficient balance'); 
    }
});