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
    }
    document.getElementById(id).classList.remove("border-gray-200");
    document.getElementById(id).classList.add("bg-[#0874f233]","border-2", "border-[#0874f2]", "text-[#0874f2]");
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
