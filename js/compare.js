document.addEventListener("DOMContentLoaded", () => {
    const compareSection = document.getElementById("compareSection");
    const headerRow = document.getElementById("compareHeader");
    const tbody = compareSection.querySelector("tbody");
    const selected = new Map();

    document.querySelectorAll(".compare-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".card");
            const name = card.dataset.name;
            const type = card.dataset.type;
            const desc = card.dataset.desc;

            if (selected.has(name)) {
                selected.delete(name);
                btn.textContent = "เพิ่มเปรียบเทียบ";
            } else {
                selected.set(name, { type, desc });
                btn.textContent = "นำออกจากเปรียบเทียบ";
            }

            renderCompare();
        });
    });

    function renderCompare() {
        const body = document.getElementById("compareBody");
        const section = document.getElementById("compareSection");

        if (selected.size === 0) {
            section.style.display = "none";
            return;
        }

        section.style.display = "block";

        body.innerHTML = ""; // ล้างก่อน

        selected.forEach((data, name) => {
            const tr = document.createElement("tr");

            const tdName = document.createElement("td");
            tdName.textContent = name;

            const tdType = document.createElement("td");
            tdType.textContent = data.type;

            const tdDesc = document.createElement("td");
            tdDesc.textContent = data.desc;

            const tdEmpty = document.createElement("td"); // ช่องว่างไว้ลบ
            tr.appendChild(tdName);
            tr.appendChild(tdType);
            tr.appendChild(tdDesc);
            // tr.appendChild(tdEmpty);

            body.appendChild(tr);
        });

        // ปุ่มลบทั้งหมด
        const clearBtn = document.getElementById("clearCompare");
        if (clearBtn) {
            clearBtn.onclick = () => {
                selected.clear();
                document.querySelectorAll(".compare-btn").forEach((btn) => {
                    btn.textContent = "เพิ่มเปรียบเทียบ";
                });
                renderCompare();
            };
        }
    }
});
