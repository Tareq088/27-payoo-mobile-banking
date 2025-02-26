document.getElementById('with-draw-btn')
    .addEventListener('click',function(event){
        event.preventDefault();
        const enterAmountOut = document.getElementById('enterAmount-out').value;
        // console.log("Enter Amount:", enterAmount);
        const balance = document.getElementById('balance');
        const spliceIcon = document.getElementById('balance').innerText.slice(0,1);
        // console.log(spliceIcon)
        const balanceAmount = document.getElementById('balance').innerText.slice(1);
        // console.log("balance Amount:", balanceAmount);
        const pinOut = document.getElementById('pin-out').value;
        // console.log(typeof pin)
        const convertedPinOut = parseInt(pinOut);
        if(convertedPinOut === 1234){
            const newBalance = parseInt(balanceAmount) - parseInt(enterAmountOut);
            const newBalanceTotal = spliceIcon + newBalance;
            // console.log(newBalanceTotal)
            // console.log("newbalance is :", newBalanceTotal);
            balance.innerText = newBalanceTotal;
        }
        else{
            alert("password is wrong.")
        }
    })