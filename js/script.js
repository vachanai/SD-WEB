//เพิ่มความปลอดภัย: ตรวจ element มีจริงก่อนใช้
document.addEventListener("DOMContentLoaded", () => {
    // --- DOM Elements ---
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const langToggle = document.getElementById("lang-toggle");
    const darkToggle = document.getElementById("dark-toggle");
    const menuLinks = document.querySelectorAll("#menu a");

    // --- Mobile Dropdown Menu Toggle ---
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation(); // กันไม่ให้ trigger document click
            menu.classList.toggle("show");
        });

        // ปิดเมื่อคลิกที่ลิงก์เมนู
        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                menu.classList.remove("show");
            });
        });

        // ปิดเมื่อคลิกนอกเมนู
        document.addEventListener("click", (e) => {
            if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
                menu.classList.remove("show");
            }
        });
    }

    // --- Dark Mode Toggle ---
    if (darkToggle) {
        darkToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }

    // แปลข้อความพื้นฐาน
    let currentLang = "th";
    const translations = {
        en: {
            services: "Our Services",
            products: "Products",
            recommended: "Recommended Products",
            aboutUs: "About Us",
            ourServices: "Our Services",
            ourProducts: "Our Products",
            ourTeam: "Our Team",
            contactUs: "Contact Us",
            learnMore: "Learn More",
            quote: "Request a Quote",
            contact: "Contact Us",
            requestQuote: "Send Request",
            filterByCategory: "Filter by Category",
            home: "Home",
            service: "Service",
            product: "Product",
            team: "Team",
        },
        th: {
            services: "บริการของเรา",
            products: "สินค้า",
            recommended: "สินค้าแนะนำ",
            aboutUs: "เกี่ยวกับเรา",
            ourServices: "บริการของเรา",
            ourProducts: "สินค้าของเรา",
            ourTeam: "ทีมงานของเรา",
            contactUs: "ติดต่อเรา",
            learnMore: "อ่านเพิ่มเติม",
            quote: "ขอใบเสนอราคา",
            contact: "ติดต่อเรา",
            requestQuote: "ส่งคำขอ",
            filterByCategory: "เลือกหมวดหมู่สินค้า",
            home: "หน้าหลัก",
            service: "บริการ",
            product: "สินค้า",
            team: "ทีมงาน",
        },
    };

    function setLang(lang) {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            el.textContent = translations[lang][key] || key;
        });
        if (langToggle) {
            langToggle.textContent = lang === "th" ? "EN" : "TH";
        }
        currentLang = lang;
    }

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const nextLang = currentLang === "th" ? "en" : "th";
            setLang(nextLang);
        });
        setLang(currentLang);
    }

    // --- Optional: Category Filter ---
    const categoryFilter = document.getElementById("categoryFilter");
    const productCards = document.querySelectorAll("#productGrid .card");

    if (categoryFilter && productCards.length > 0) {
        categoryFilter.addEventListener("change", () => {
            const category = categoryFilter.value;
            productCards.forEach((card) => {
                const match =
                    category === "all" || card.dataset.category === category;
                card.style.display = match ? "block" : "none";
            });
        });
    }

    // เรียกตอนโหลด
    setLang(currentLang);
});
