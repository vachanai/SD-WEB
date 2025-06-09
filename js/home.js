document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    // Load saved theme
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }
    // Toggle dark mode and save to local storage
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const theme = document.body.classList.contains("dark")
            ? "dark"
            : "light";
        themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
        localStorage.setItem("theme", theme);
    });
    // Toggle mobile navigation
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("show");
        document.body.classList.toggle("nav-open");
    });
});
