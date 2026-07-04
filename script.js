document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.getElementById("nav-drawer");
    const overlay = document.getElementById("drawer-overlay");
    const openButton = document.getElementById("menu-btn") || document.getElementById("menu-toggle");
    const closeButton = document.getElementById("close-drawer")
        || document.getElementById("close-menu-btn")
        || document.getElementById("menu-close");

    if (drawer && openButton && closeButton) {
        const contactDrawer = drawer.classList.contains("drawer-hidden");

        function setDrawerOpen(isOpen) {
            if (contactDrawer) {
                drawer.classList.toggle("drawer-hidden", !isOpen);
                drawer.classList.toggle("drawer-visible", isOpen);
            } else {
                drawer.classList.toggle("-translate-x-full", !isOpen);
            }

            if (!overlay) {
                return;
            }

            if (isOpen) {
                overlay.classList.remove("hidden");
                requestAnimationFrame(() => {
                    overlay.classList.remove("opacity-0");
                    overlay.classList.add("opacity-100");
                });
            } else {
                overlay.classList.remove("opacity-100");
                overlay.classList.add("opacity-0");
                window.setTimeout(() => overlay.classList.add("hidden"), 300);
            }
        }

        openButton.addEventListener("click", () => setDrawerOpen(true));
        closeButton.addEventListener("click", () => setDrawerOpen(false));
        overlay?.addEventListener("click", () => setDrawerOpen(false));
    }

    const enquiryForm = document.getElementById("enquiry-form");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(enquiryForm);
            const message = [
                "Hello Tat Meng, I would like a direct-factory estimate.",
                "",
                `Name: ${formData.get("name")}`,
                `Email: ${formData.get("email")}`,
                `Project Type: ${formData.get("projectType")}`,
                `Details: ${formData.get("details")}`
            ].join("\n");

            window.open(`https://wa.me/6590286373?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
        });
    }
});
