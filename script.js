const button = document.querySelector("button");

button.addEventListener("click", function() {
    document.querySelector("h1").textContent = "Welcome, Kosiso! 🔥";
    document.querySelector("p").textContent =
        "You just made your first interactive website!";
});