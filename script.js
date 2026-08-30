/* =============================================
   Shuaib Ahamad — Portfolio JavaScript
   ============================================= */

// ===== DYNAMIC TEXT TYPING (Hero Subtitle) =====
const roles = [
  'Aspiring Cybersecurity Professional',
  'Hardware Maker & Developer',
];

const dynamicEl = document.getElementById('dynamicText');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 80;

function typeEffect() {
  if (!dynamicEl) return;
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    dynamicEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 40;
  } else {
    dynamicEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 80;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typeSpeed = 1500; // pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 400; // pause before typing next
  }

  setTimeout(typeEffect, typeSpeed);
}

// Start typing effect
if (dynamicEl) {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
  });
}

// ===== MOBILE HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let current = '';
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollPos >= top && scrollPos < top + height) {
      current = section.getAttribute('id');
    }
  });

  navLinkEls.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// ===== SCROLL-BASED NAVBAR SHADOW =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== SCROLL REVEAL ANIMATIONS (Intersection Observer) =====
const revealElements = document.querySelectorAll(
  '.section-title, .divider, .about-content, .skills-category, ' +
  '.project-card, .contact-content, .contact-intro, .hero-content > *'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(el => {
  // Skip hero children — they have their own animation
  if (!el.closest('.hero')) {
    el.classList.add('fade-in');
    observer.observe(el);
  }
});

// ===== CONTACT FORM HANDLING (Formspree) =====
const contactForm = document.getElementById('contactForm');
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkjwadza';

if (contactForm) contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const message = document.getElementById('formMessage').value.trim();

  // Clear any previous status message
  const existingStatus = contactForm.querySelector('.form-status');
  if (existingStatus) existingStatus.remove();

  if (!name || !email || !message) {
    showFormStatus('Please fill in all fields.', false);
    return;
  }

  // Simple email validation
  if (!email.includes('@') || !email.includes('.')) {
    showFormStatus('Please enter a valid email address.', false);
    return;
  }

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalHTML = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending...';

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        message,
        // Formspree special fields: reply-to goes to the submitter, subject customizes the email subject
        _replyto: email,
        _subject: `Portfolio message from ${name}`
      })
    });

    if (response.ok) {
      // Show success message (replaces the form)
      contactForm.innerHTML = `
        <div class="form-success form-status">
          <svg class="icon"><use href="#i-check-circle"/></svg>
          <p>Thank you, <strong>${name}</strong>! Your message has been sent.</p>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 8px;">
            I'll get back to you soon.
          </p>
        </div>
      `;
    } else {
      const data = await response.json().catch(() => null);
      const errMsg = data && data.errors && data.errors[0] ? data.errors[0].message : 'Something went wrong. Please try again.';
      showFormStatus(errMsg, false);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHTML;
    }
  } catch (error) {
    showFormStatus('Network error. Please check your connection and try again.', false);
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHTML;
  }
});

// Helper to show an inline status message (error or info)
function showFormStatus(msg, isSuccess) {
  const status = document.createElement('div');
  status.className = 'form-status' + (isSuccess ? ' success' : ' error');
  status.textContent = msg;
  contactForm.insertBefore(status, contactForm.querySelector('button[type="submit"]'));
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS (fallback) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
