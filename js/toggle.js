function toggleSections(sectionToShow) {
const moneySections = document.getElementsByClassName("option");
for(const moneySection of moneySections) {
    moneySection.style.display = "none";
}
document.getElementById(sectionToShow).style.display = "block";
}


document.getElementById("togAddMoney").addEventListener("click", function () {
    toggleSections("addMoneySection");
});

document.getElementById("togCashOut").addEventListener("click", function () {
    toggleSections("cashOutSection");
});
