// Page navigation
  function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Close mobile menu
      document.getElementById('navLinks').classList.remove('open');
      // Trigger reveal
      setTimeout(triggerReveal, 100);
    }
  }

  // Mobile menu
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // FAQ toggle
  function toggleFaq(el) {
    el.classList.toggle('open');
  }

  // Form submit
  function handleFormSubmit(e) {
    e.preventDefault();
    const btn = e.target;
    btn.textContent = '✅ Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
    setTimeout(() => {
      btn.textContent = '📩 Send Message';
      btn.style.background = '';
    }, 3000);
  }

  // Scroll reveal
  function triggerReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => { el.classList.remove('visible'); observer.observe(el); });
  }

  // Generate particles
  function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (5 + Math.random() * 10) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
      container.appendChild(p);
    }
  }

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
      document.getElementById('navLinks').classList.remove('open');
    }
  });

  // Init
  window.addEventListener('load', () => {
    createParticles();
    triggerReveal();
  });

  // Observe scroll for sticky nav effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 4px 30px rgba(13,76,122,0.15)';
    } else {
      nav.style.boxShadow = '0 2px 20px rgba(13,76,122,0.08)';
    }
  });
