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
})