function toggleSections(sectionToShow) {
const moneySections = document.getElementsByClassName("option");
for(const moneySection of moneySections) {
    moneySection.style.display = "none";
}
document.getElementById(sectionToShow).style.display = "block";
}

function activeColor(id) {
    const menuBtns = document.getElementsByClassName("menuBtn");
    for(const menuBtn of menuBtns) {
        menuBtn.classList.remove("bg-[#0874f233]","border-2", "border-[#0874f2]", "text-[#0874f2]");
        menuBtn.classList.add("border-gray-200");
        // Reset the inner paragraph text color
        const pTag = menuBtn.querySelector("p");
        if (pTag) {
            pTag.classList.remove("text-[#0874f2]", "font-bold");
            pTag.classList.add("text-gray-500");
        }
    }
    document.getElementById(id).classList.remove("border-gray-200");
    document.getElementById(id).classList.add("bg-[#0874f233]","border-2", "border-[#0874f2]", "text-[#0874f2]");
    // Change the inner paragraph text color
    const pTag = document.getElementById(id).querySelector("p");
    if (pTag) {
        pTag.classList.remove("text-gray-500");
        pTag.classList.add("text-[#0874f2]", "font-bold");
    }
}



// implementing the toggle functionality for the Add Money and Cash Out sections
document.getElementById("togAddMoney").addEventListener("click", function () {
    toggleSections("addMoneySection");
    activeColor("togAddMoney");
});

document.getElementById("togCashOut").addEventListener("click", function () {
    toggleSections("cashOutSection");
    activeColor("togCashOut");
});

document.getElementById("togTransferMoney").addEventListener("click", function () {
    toggleSections("transferMoneySection");
    activeColor("togTransferMoney");
});

document.getElementById("togGetBonus").addEventListener("click", function () {
    toggleSections("getBonusSection");
    activeColor("togGetBonus");
});

document.getElementById("togPayBill").addEventListener("click", function () {
    toggleSections("payBillSection");
    activeColor("togPayBill");
});

document.getElementById("togTransAction").addEventListener("click", function(){
    toggleSections("transHistory");
    activeColor("togTransAction");
})