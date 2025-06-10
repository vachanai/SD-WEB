document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = themeToggle.querySelector("i");
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    // Load saved theme from localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark");
        themeIcon.classList.replace("bx-moon", "bx-sun");
    }

    // Toggle dark mode and update icon/localStorage
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        themeIcon.classList.replace(
            isDark ? "bx-moon" : "bx-sun",
            isDark ? "bx-sun" : "bx-moon"
        );
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // Toggle mobile navigation
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("show");
        document.body.classList.toggle("nav-open");
    });

    // Hide nav on load for mobile
    if (window.innerWidth < 768) {
        nav.classList.remove("show");
        document.body.classList.remove("nav-open");
    }
});
