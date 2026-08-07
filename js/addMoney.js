const userPin = "1234"; // Hardcoded user PIN for demonstration purposes

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

})