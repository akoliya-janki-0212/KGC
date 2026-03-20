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
                <img src="assets/logo.png" alt="KGC Logo" style="height: 70px; width: auto; display: block;">
            </a>
        </div>

        <button class="mobile-menu-toggle" aria-label="Toggle menu">
            <i class="fa-solid fa-bars"></i>
        </button>

        <nav class="main-nav">
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <!-- <li><a href="coaching.html">Coaching Academy</a></li> -->
                <li><a href="case-studies.html">Case Studies</a></li>
                <!-- <li><a href="media.html">Media Hub</a></li> -->
                <li><a href="contact.html" class="btn btn-secondary nav-cta cta-trigger">Consultation</a></li>
            </ul>
        </nav>
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
                <p class="mb-1 text-light-dim"><i class="fa-solid fa-location-dot me-2"></i> 210, Arved Transcube Mall, Bandhu Nagar, Vijay Nagar, Ranip, Ahmedabad, Gujarat 382480</p>
                <p class="mb-1 text-light-dim"><i class="fa-solid fa-phone me-2"></i> +91 8320042384</p>
                <p class="mb-1 text-light-dim"><i class="fa-solid fa-envelope me-2"></i> connect@kgcpl.com</p>
            </div>
            <div class="social-icons mt-3">
                <a href="https://www.facebook.com/profile.php?id=61577793967014&sk=about" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/company/keval-gandhi-consultant/?viewAsMember=true" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/@er.KevalGandhi" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.instagram.com/er.kevalgandhi/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
        <div class="footer-links">
            <h4>Solutions</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Consultancy Solutions</a></li>

            </ul>
        </div>
        <div class="footer-links">
            <h4>Resources</h4>
            <ul>
                <li><a href="case-studies.html">Success Stories</a></li>
                <!-- <li><a href="media.html">Knowledge Hub</a></li> -->
                <li><a href="contact.html">Book Business Review</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2026 Keval Gandhi Consultant. Engineered for Exponential Growth.</p>
    </div>
</footer>

<!-- WhatsApp Floating Button -->
<a href="https://wa.me/918320042384" target="_blank" class="whatsapp-float" aria-label="Chat on WhatsApp">
    <i class="fa-brands fa-whatsapp"></i>
</a>
`,
    popup: `
<div id="bada-style-popup" class="modal-overlay" style="display: none;">
    <div class="modal-content glass-morphism">
        <button class="modal-close" id="closePopupBtn">&times;</button>
        <div class="modal-header">
            <h3>Secure Your Strategic Business Review</h3>
            <p>Direct advisory for factory owners & industrial leaders looking to eliminate operational chaos.</p>
        </div>

        <form id="popupForm" action="https://formspree.io/f/xojkqgyz" method="POST">
            <div class="form-group">
                <input type="text" name="name" required placeholder="Full Name" class="input-light">
            </div>
            <div class="form-group">
                <input type="email" name="email" required placeholder="Professional Email" class="input-light">
            </div>
            <div class="form-group">
                <input type="tel" name="whatsapp" required placeholder="WhatsApp Number (With Country Code)"
                    class="input-light">
            </div>

            <div class="form-group">
                <select name="role" required class="input-light">
                    <option value="" disabled selected>Current Professional Role</option>
                    <option value="Factory Owner">Factory Owner / CEO</option>
                    <option value="Manager">Operations / Plant Manager</option>
                    <option value="Student">Ambitious Student / Future Leader</option>
                    <option value="Other">External Consultant / Other</option>
                </select>
            </div>

            <div class="form-group">
                <select name="need" required class="input-light">
                    <option value="" disabled selected>Primary Strategic Need</option>
                    <option value="Growth Strategy">Systematic Growth Strategy</option>
                    <option value="Production Flow (OFM)">Production Flow Optimization (OFM)</option>
                    <option value="System Setup (OTM)">OTM System Setup</option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary btn-block mt-3">Request Immediate Consultation <i
                    class="fa-solid fa-paper-plane"></i></button>
            <p id="popupSuccessMessage" class="success-message"
                style="display: none; color: #28a745; margin-top: 10px; font-weight: 600; text-align:center;">Strategic
                insight requested. Check your WhatsApp shortly.</p>
    </div>
    </form>
</div>
`
};
