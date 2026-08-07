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
});