document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".subscribe-section form");
    const subscribed = localStorage.getItem("subscribed");

    if (subscribed) {
        form.querySelector("button[type='submit']").textContent = "You have already subscribed!";
        form.querySelector("button[type='submit']").disabled = true;
        form.querySelector("input[type='email']").disabled = true;
    } else {
        form.addEventListener("submit", function() {
            localStorage.setItem("subscribed", "true");
        });
    }
});