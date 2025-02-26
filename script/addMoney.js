document.getElementById('Add-btn')
    .addEventListener('click',function(event){
        event.preventDefault();
        const enterAmount = document.getElementById('enterAmount').value;
        // console.log("Enter Amount:", enterAmount);
        const balance = document.getElementById('balance');
        const spliceIcon = document.getElementById('balance').innerText.slice(0,1);
        // console.log(spliceIcon)
        const balanceAmount = document.getElementById('balance').innerText.slice(1);
        // console.log("balance Amount:", balanceAmount);
        const pin = document.getElementById('pin').value;
        // console.log(typeof pin)
        const convertedPin = parseInt(pin);
        if(convertedPin === 1234){
            const newBalance = parseInt(enterAmount) + parseInt(balanceAmount);
            const newBalanceTotal = spliceIcon + newBalance;
            // console.log(newBalanceTotal)
            // console.log("newbalance is :", newBalanceTotal);
            balance.innerText = newBalanceTotal;
        }
        else{
            alert("password is wrong.")
        }
    })