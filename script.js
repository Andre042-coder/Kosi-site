// Smooth reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// Back-to-top button
const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topButton.style.opacity = "1";
    } else {
        topButton.style.opacity = "0.6";
    }
});


// Current year in footer
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent = `© ${new Date().getFullYear()} Kosi. All rights reserved.`;
}
