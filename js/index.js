document.addEventListener("DOMContentLoaded", () => {
    // โหลด header ก่อน แล้วค่อย bind event
    fetch("./components/header.html")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("header").innerHTML = data;
            initHeaderEvents(); // bind event หลังโหลด header เสร็จ
        });

    // โหลด footer
    fetch("./components/footer.html")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("footer").innerHTML = data;
        });

    // Theme toggle + nav toggle ต้องทำหลัง header โหลดเสร็จ
    function initHeaderEvents() {
        const themeToggle = document.getElementById("themeToggle");
        const themeIcon = themeToggle?.querySelector("i");
        const menuToggle = document.getElementById("menuToggle");
        const nav = document.getElementById("mainNav");

        // Set initial theme
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
            document.body.classList.add("dark");
            themeIcon?.classList.replace("bx-moon", "bx-sun");
        }

        // Toggle dark mode
        themeToggle?.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            const isDark = document.body.classList.contains("dark");
            themeIcon?.classList.replace(
                isDark ? "bx-moon" : "bx-sun",
                isDark ? "bx-sun" : "bx-moon"
            );
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });

        // Toggle mobile menu
        menuToggle?.addEventListener("click", () => {
            nav?.classList.toggle("show");
            document.body.classList.toggle("nav-open");
        });

        // Hide nav on load (for mobile)
        if (window.innerWidth < 768) {
            nav?.classList.remove("show");
            document.body.classList.remove("nav-open");
        }
    }
});
