    // catch button using id
document.getElementById("Login-btn")
    .addEventListener('click', function(event){
        event.preventDefault();

        const accountNumber = document.getElementById('Account-number').value;
        // console.log("account number",accountNumber);
        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);
        // console.log("pin", pin)
        if( accountNumber.length == 5){
            // console.log(typeof pin)
            if(convertedPin === 1234){
                // console.log("pin thik ache");
                window.location.href = "addMoney.html"
            }
            else{
                alert("pin thik nai")
            }
        }
        else{
            alert("wrong account number")
        }

    })

