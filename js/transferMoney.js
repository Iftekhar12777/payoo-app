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
});