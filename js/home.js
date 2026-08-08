const userPin = "1234"; // Hardcoded user PIN for demonstration purposes
const transActionData = [];

document.getElementById("addMoneyBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("ac-no").value;
    const amount = parseInt(document.getElementById("in-amount").value);
    const pin = document.getElementById("ac-pin").value;    
    const crntBalance = parseInt(document.getElementById("crnt-balance").innerText);

    if(accountNumber.length !== 11) {
        alert("Account number must be 11 digits long.");
        return;
    }

    if(pin !== userPin) {
        alert("Invalid PIN. Please try again.");
        return;
    }

    const newBalance = crntBalance + amount;
    document.getElementById("crnt-balance").innerText = newBalance;

    alert(`Successfully added $${amount} to your account. New balance is $${newBalance}.`);

    const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString()
}
transActionData.push(data)

})

// cash out section js

const userPinOut = "1234"; // Set the user's PIN here

document.getElementById("cashOutBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutBank = document.getElementById("cashout-bank").value;
    const cashOutAccountNumber = document.getElementById("cashout-ac-no").value;
    const cashOutAmount = parseInt(document.getElementById("cashout-amount").value);
    const cashOutPin = document.getElementById("cashout-pin").value;
    const crntBalance = parseInt(document.getElementById("crnt-balance").innerText);

    if(cashOutAccountNumber.length !== 11) {
        alert("Account number must be 11 digits long.");
        return;
    }

    if(cashOutPin !== userPinOut) {
        alert("Invalid PIN. Please try again.");
        return;
    }

    if(cashOutAmount > crntBalance) {
        alert("Insufficient balance for this cash out transaction.");
        return;
    }

    const newBalance = crntBalance - cashOutAmount;
    document.getElementById("crnt-balance").innerText = newBalance;

    alert(`Successfully cashed out $${cashOutAmount} to your account. New balance is $${newBalance}.`);

    const data = {
    name: "CashOut",
    date: new Date().toLocaleTimeString()
}
transActionData.push(data)
})

// TransferMoney js

document.getElementById("transferMoneyBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const recipientAccountNumber = document.getElementById("recipient-ac").value;
    const transferAmount = document.getElementById("transfer-amount").value;
    const transferPin = document.getElementById("transfer-pin").value;
    const crntBalance = parseInt(document.getElementById("crnt-balance").innerText);

    if (recipientAccountNumber.length !== 11) {
        alert("Recipient's account number must be 11 digits long.");
        return;
    }

    if (transferPin !== "1234") {
        alert("Invalid PIN. Please try again.");
        return;
    }

    if (!transferAmount || transferAmount <= 0) {
        alert("Please enter a valid transfer amount.");
        return;
    }

    if (isNaN(transferAmount)) {
        alert("Transfer amount must be a number.");
        return;
    }

    if (transferAmount > crntBalance) {
        alert("Insufficient balance for this transfer.");
        return;
    }

    if (transferAmount && transferPin) {
        const newBalance = crntBalance - transferAmount;
        document.getElementById("crnt-balance").innerText = newBalance;
        alert(`Successfully transferred ${transferAmount}. New balance is ${newBalance}.`);
    }
    const data = {
    name: "Transfer Money",
    date: new Date().toLocaleTimeString()
}
transActionData.push(data)
});

// get bonus js

document.getElementById("getBonusBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const bonusCode = document.getElementById("bonus-code").value;
    const crntBalance = parseInt(document.getElementById("crnt-balance").innerText);
    // Add your bonus code validation and processing logic here
    if (bonusCode === "BONUS100") {
        const bonusAmount = 100; // Example bonus amount
        const newBalance = crntBalance + bonusAmount;
        document.getElementById("crnt-balance").innerText = newBalance;
        alert(`Successfully added bonus of ${bonusAmount}. New balance is ${newBalance}.`);
    } else {
        alert("Invalid bonus code. Please try again.");
    }
    const data = {
    name: "Get Bonus",
    date: new Date().toLocaleTimeString()
}
transActionData.push(data)
});

// paybill js

document.getElementById("payBillBtn").addEventListener("click", function (event) {
    event.preventDefault();
    const billerAccountNumber = document.getElementById("bill-ac").value;
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const billPin = document.getElementById("bill-pin").value;
    const crntBalance = parseFloat(document.getElementById("crnt-balance").innerText);

    if (billAmount > crntBalance) {
        alert("Insufficient balance to pay the bill.");
    } else if (billPin !== "1234") {
        alert("Invalid pin. Please try again.");
    } else {
        const newBalance = crntBalance - billAmount;
        document.getElementById("crnt-balance").innerText = newBalance.toFixed(2);
        alert(`Bill of amount $${billAmount.toFixed(2)} paid successfully!`);
    }
    const data = {
    name: "Pay Bill",
    date: new Date().toLocaleTimeString()
}
transActionData.push(data)
})

// Transaction History
document.getElementById("togTransAction").addEventListener("click", function(event){
event.preventDefault();
const transactionDiv = document.getElementById('transData');
transactionDiv.innerText=""
for(const data of transActionData){
    const div = document.createElement('div');
    div.innerHTML=`<div>

                <div class="flex gap-4 mt-4 bg-slate-100 p-4 rounded-lg">
                    <img class="p-3 bg-slate-200 rounded-4xl" src="./assets/wallet1.png" alt="">

                    <div class="flex justify-between items-center w-full">
                        <div>
                            <h3 class="text-[16px] font-semibold">${data.name}</h3>
                            <p class="text-[12px]">${data.date}</p>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            </div>`
            transactionDiv.appendChild(div)
}
})