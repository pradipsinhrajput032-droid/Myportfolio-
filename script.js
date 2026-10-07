/* =========================================================
   PERSONAL PORTFOLIO — JAVASCRIPT
   Rajput Pradipsinh Hardasji
   Simple and beginner-friendly
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ==================== MOBILE NAVIGATION ==================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });

        const navigationLinks = navLinks.querySelectorAll("a");

        navigationLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            });
        });

        document.addEventListener("click", (event) => {
            const clickedInsideMenu = navLinks.contains(event.target);
            const clickedMenuButton = menuToggle.contains(event.target);

            if (
                navLinks.classList.contains("active") &&
                !clickedInsideMenu &&
                !clickedMenuButton
            ) {
                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            }
        });
    }


    /* ==================== ACTIVE NAVIGATION ==================== */

    const sections = document.querySelectorAll("main section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    if (sections.length && navItems.length) {

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const currentId = entry.target.getAttribute("id");

                        navItems.forEach((link) => {
                            const linkTarget = link.getAttribute("href");

                            link.classList.toggle(
                                "active",
                                linkTarget === `#${currentId}`
                            );
                        });
                    }
                });
            },
            {
                root: null,
                rootMargin: "-25% 0px -60% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }


    /* ==================== SCROLL REVEAL ==================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-card, " +
        ".education-main-card, " +
        ".detail-card, " +
        ".interest-card, " +
        ".strength-item, " +
        ".goal-card, " +
        ".contact-card"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach((element) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(18px)";
            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            revealObserver.observe(element);
        });
    }


    /* ==================== CURRENT YEAR ==================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});
