/* --- FAQ Accordion and Interactive Elements --- */

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const accordions = document.getElementsByClassName("accordion");

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            // Toggle active class on button
            this.classList.toggle("active");

            // Toggle active class on panel
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // Example of another custom detail: Ensure navigation links highlight correctly.
    // This script automatically highlights the active nav link based on the current page.
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === '') { // handle root domain (e.g., netlify.app/)
         document.querySelector('nav a[href="index.html"]').classList.add('active');
    } else {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                 link.classList.remove('active'); // ensure only one is active
            }
        });
    }
});
