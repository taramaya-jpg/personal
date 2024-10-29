document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = e.target.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });
});