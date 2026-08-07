document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();
    const mobile = document.getElementById("mobile").value;
    const pin = document.getElementById("pin").value;
    const mobileConverted = parseInt(mobile);
    const pinConverted = parseInt(pin);
    const userMobile = 12345678900;
    const userPin = 1234;

    if (mobileConverted == userMobile && pinConverted == userPin) {
        window.location.href = "./home.html";
    } else {
        alert("Invalid mobile or pin. Please try again.");
    }
})