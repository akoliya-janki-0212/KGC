/**
 * KGC Component Registry
 * This file replaces fetch() calls to allow the site to work on the file:// protocol.
 */

window.KGC_COMPONENTS = {
    header: `

<!-- Navigation Menu -->
<header class="header">
    <div class="container nav-container">
        <div class="logo">
            <a href="index.html">
                <img src="assets/logo.png" alt="KGC Logo" class="nav-logo-img" style="height: 60px; width: auto; display: block;">
            </a>
        </div>

        <nav class="main-nav">
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <!-- <li><a href="coaching.html">Coaching Academy</a></li> -->
                <li><a href="projects.html">Projects</a></li>
                <!-- <li><a href="media.html">Media Hub</a></li> -->
                <li><a href="contact.html" class="btn btn-secondary nav-cta cta-trigger">Consultation</a></li>
            </ul>
        </nav>

        <button class="mobile-menu-toggle" aria-label="Toggle menu">
            <i class="fa-solid fa-bars"></i>
        </button>
    </div>
</header>
`,
    footer: `
<footer class="footer">
    <div class="container footer-container">
        <div class="footer-brand">
            <p class="mt-1 text-light-dim">Moving your factory from daily messes to a business that grows on its own.
            </p>
            <div class="contact-details mt-3 text-light-dim" style="font-size: 0.9rem;">
                <p class="mb-1 text-light-dim"><i class="fa-solid fa-phone me-2"></i> +91 9023979663</p>
                <p class="mb-1 text-light-dim"><i class="fa-solid fa-envelope me-2"></i> keval.projectindia@gmail.com</p>
            </div>
            <div class="social-icons mt-3">
                <a href="https://www.facebook.com/profile.php?id=61577793967014&sk=about" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/company/keval-gandhi-consultant/?viewAsMember=true" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/@er.KevalGandhi" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.instagram.com/er.kevalgandhi/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
        <div class="footer-links">
            <h4>Main Services</h4>
            <ul>
                <li><a href="services.html#cost-control">Cost Control Audit</a></li>
                <li><a href="services.html#ppc">Production Planning (PPC)</a></li>
                <li><a href="services.html#quality-audit">Quality Audit</a></li>
                <li><a href="services.html#wastage-yield">Wastage & Yield</a></li>
                <li><a href="services.html#food-safety">Food Safety & Compliance</a></li>
                <li><a href="services.html#mis-dashboard">MIS & Dashboards</a></li>
            </ul>
        </div>
        <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">All Services</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Book Business Review</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2026 KGC Private Limited. Engineered for Exponential Industrial Growth.</p>
    </div>
</footer>

<!-- WhatsApp Floating Button -->
<a href="https://wa.me/919023979663" target="_blank" class="whatsapp-float" aria-label="Chat on WhatsApp">
    <i class="fa-brands fa-whatsapp"></i>
</a>
`,
    popup: ``
};
