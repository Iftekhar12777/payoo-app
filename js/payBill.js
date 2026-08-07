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
})