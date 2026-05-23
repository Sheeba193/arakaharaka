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

  

 


/* ============================================================
   PARTNERS PRODUCT CATALOG — APPEND TO main.js
   ============================================================
 
   ALSO: Add the keys below into your existing `translations`
   object for every language. Sample objects are provided at
   the bottom of this file.
 
   ============================================================ */
 
// ── Product Data ─────────────────────────────────────────────
const partnersProducts = [
  // =========================
  // IMPORT PRODUCTS
  // =========================
  {
    id: 1,
    name: "Toyota Hilux",
    type: "import",
    category: "Automotive",
    image: "assets/images/import/hilux.jpg",
    description:
      "Reliable 4WD pickup truck built for tough terrain. Popular across East Africa for both commercial and personal use.",
    shipsFrom: "Japan / UAE",
    shipsTo: "Kenya, Uganda, Tanzania, Rwanda, DRC",
    deliveryTime: "4–8 weeks (sea freight)"
  },
  {
    id: 2,
    name: "BMW Vehicles",
    type: "import",
    category: "Automotive",
    image: "assets/images/import/bmw.jpg",
    description:
      "Luxury BMW sedans, SUVs, and performance vehicles sourced from Germany, Japan, and the UAE.",
    shipsFrom: "Germany / Japan / UAE",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "5–10 weeks"
  },
  {
    id: 3,
    name: "Mercedes-Benz Vehicles",
    type: "import",
    category: "Automotive",
    image: "assets/images/import/mercedes.jpg",
    description:
      "Premium Mercedes-Benz cars including sedans, SUVs, and executive models with full inspection reports.",
    shipsFrom: "Germany / UK / UAE",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "5–10 weeks"
  },
  {
    id: 4,
    name: "Audi Vehicles",
    type: "import",
    category: "Automotive",
    image: "assets/images/import/audi.jpg",
    description:
      "High-performance Audi vehicles combining advanced engineering, comfort, and luxury.",
    shipsFrom: "Germany / Japan / UAE",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "5–10 weeks"
  },
  {
    id: 5,
    name: "Volkswagen Vehicles",
    type: "import",
    category: "Automotive",
    image: "assets/images/import/volkswagen.jpg",
    description:
      "Reliable Volkswagen passenger cars and SUVs sourced from Europe and Japan.",
    shipsFrom: "Germany / Japan",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "4–8 weeks"
  },
  {
    id: 6,
    name: "Heavy Duty Trucks & Trailers",
    type: "import",
    category: "Industrial & Manufacturing",
    image: "assets/images/import/trailers.jpg",
    description:
      "Commercial trailers, tipper trucks, semi-trailers, and heavy-duty transport equipment.",
    shipsFrom: "China / Germany / Turkey",
    shipsTo: "Kenya, Uganda, Tanzania, Ethiopia",
    deliveryTime: "30–60 days"
  },
  {
    id: 7,
    name: "Excavators & Construction Machinery",
    type: "import",
    category: "Industrial & Manufacturing",
    image: "assets/images/import/construction.jpg",
    description:
      "Excavators, loaders, bulldozers, and road construction equipment from leading Chinese manufacturers.",
    shipsFrom: "China",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "30–50 days"
  },
  {
    id: 8,
    name: "Auto Spare Parts",
    type: "import",
    category: "Automotive",
    image: "assets/images/import/autospareparts.jpg",
    description:
      "Genuine and aftermarket spare parts for Toyota, Nissan, BMW, Mercedes-Benz, Honda, and Mitsubishi.",
    shipsFrom: "Japan / China / UAE",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "14–30 days"
  },
  {
    id: 9,
    name: "Building Materials",
    type: "import",
    category: "Construction Materials",
    image: "assets/images/import/building-materials.jpg",
    description:
      "Steel, tiles, sanitary ware, roofing sheets, electrical fittings, and other construction materials.",
    shipsFrom: "China / Europe / Turkey",
    shipsTo: "Kenya, Uganda, Tanzania",
    deliveryTime: "30–50 days"
  },
  {
    id: 10,
    name: "Printers",
    type: "import",
    category: "Electronics & Technology",
    image: "assets/images/import/printers.jpg",
    description:
      "Office printers, multifunction devices, and commercial printing equipment from top manufacturers.",
    shipsFrom: "China / Germany / Sweden",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "30–60 days"
  },
  {
    id: 11,
    name: "Apple Products",
    type: "import",
    category: "Electronics & Technology",
    image: "assets/images/import/apple.jpg",
    description:
      "iPhones, MacBooks, iPads, Apple Watches, and accessories sourced from authorised distributors.",
    shipsFrom: "USA / UAE / Singapore",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "7–14 days"
  },
  {
    id: 12,
    name: "Samsung Electronics",
    type: "import",
    category: "Electronics & Technology",
    image: "assets/images/import/samsung.jpg",
    description:
      "Smartphones, TVs, tablets, refrigerators, and home appliances from Samsung.",
    shipsFrom: "South Korea / UAE",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "7–20 days"
  },
  {
    id: 13,
    name: "Tech Accessories",
    type: "import",
    category: "Electronics & Technology",
    image: "assets/images/import/tech.jpg",
    description:
      "Chargers, cables, earbuds, smart watches, power banks, and computer accessories.",
    shipsFrom: "China / Singapore",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "10–25 days"
  },
  {
    id: 14,
    name: "Premium Basmati Rice",
    type: "import",
    category: "Food & Agricultural Products",
    image: "assets/images/import/rice.jpg",
    description:
      "Long-grain aromatic basmati rice from India and Pakistan in both retail and wholesale packaging.",
    shipsFrom: "India / Pakistan",
    shipsTo: "Kenya, Uganda, Tanzania, Rwanda",
    deliveryTime: "25–40 days"
  },
  {
    id: 15,
    name: "Designer Luxury Brands",
    type: "import",
    category: "Luxury & Consumer Goods",
    image: "assets/images/import/luxury.jpg",
    description:
      "Authentic Gucci, Prada, Versace, and other premium designer clothing, handbags, shoes, and accessories.",
    shipsFrom: "Italy / France / UAE",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "7–21 days"
  },
  {
    id: 16,
    name: "Luxury Watches",
    type: "import",
    category: "Luxury & Consumer Goods",
    image: "assets/images/import/watcheshome.png",
    description:
      "Premium watches from Swiss, Japanese, and Italian manufacturers for retail and wholesale.",
    shipsFrom: "Switzerland / Japan / Italy",
    shipsTo: "Kenya and East Africa",
    deliveryTime: "7–21 days"
  },

  // =========================
  // EXPORT PRODUCTS
  // =========================
  {
    id: 17,
    name: "Kenyan Coffee",
    type: "export",
    category: "Kenyan Export Products",
    image: "assets/images/export/kenyancoffee.png",
    description:
      "World-renowned Kenyan AA coffee sourced from Kirinyaga, Nyeri, and Murang'a.",
    shipsFrom: "Nairobi, Kenya",
    shipsTo: "Europe, USA, Middle East, Asia",
    deliveryTime: "10–20 days"
  },
  {
    id: 18,
    name: "Kenyan Tea",
    type: "export",
    category: "Kenyan Export Products",
    image: "assets/images/export/kenyan-tea.png",
    description:
      "Premium CTC and orthodox tea from Kericho and the Rift Valley.",
    shipsFrom: "Kericho / Mombasa Port, Kenya",
    shipsTo: "UK, Middle East, Pakistan, Asia",
    deliveryTime: "15–30 days"
  },
  {
    id: 19,
    name: "Kenyan Spices & Foods",
    type: "export",
    category: "Kenyan Export Products",
    image: "assets/images/export/kenyan-spice.png",
    description:
      "Tropical Heat spices, dried fruits, dehydrated vegetables, and packaged Kenyan foods.",
    shipsFrom: "Nairobi / Mombasa, Kenya",
    shipsTo: "UK, USA, Europe, Middle East",
    deliveryTime: "10–21 days"
  },
  {
    id: 20,
    name: "Natural Honey Products",
    type: "export",
    category: "Food & Agricultural Products",
    image: "assets/images/export/honey.jpg",
    description:
      "Pure organic honey from Kenyan forests and wildflower apiaries.",
    shipsFrom: "Kenya (various counties)",
    shipsTo: "Europe, USA, Middle East",
    deliveryTime: "7–14 days"
  },
  {
    id: 21,
    name: "African Handicrafts & Décor",
    type: "export",
    category: "African Culture",
    image: "assets/images/export/handcrafts.jpg",
    description:
      "Maasai beadwork, soapstone carvings, sisal baskets, and handmade sculptures.",
    shipsFrom: "Nairobi / Mombasa, Kenya",
    shipsTo: "Worldwide",
    deliveryTime: "7–21 days"
  },
  {
    id: 22,
    name: "African Home Décor",
    type: "export",
    category: "African Culture",
    image: "assets/images/export/decor.jpg",
    description:
      "Handcrafted furniture, wall art, woven baskets, and interior décor inspired by African heritage.",
    shipsFrom: "Kenya",
    shipsTo: "Worldwide",
    deliveryTime: "10–30 days"
  },
  {
    id: 23,
    name: "African Attire",
    type: "export",
    category: "African Culture",
    image: "assets/images/export/attire.jpg",
    description:
      "Authentic African clothing including Ankara dresses, kitenge outfits, and Maasai garments.",
    shipsFrom: "Nairobi, Kenya",
    shipsTo: "USA, Europe, Middle East, Africa",
    deliveryTime: "7–14 days"
  },
  {
    id: 24,
    name: "African Beaded Jewelry",
    type: "export",
    category: "African Culture",
    image: "assets/images/export/jewellery.jpg",
    description:
      "Handmade necklaces, bracelets, earrings, and accessories crafted by Kenyan artisans.",
    shipsFrom: "Kenya",
    shipsTo: "Worldwide",
    deliveryTime: "7–14 days"
  },
  
];
 
// ── State ─────────────────────────────────────────────────────
let ppState = {
  search: '',
  tab: 'all',
  category: 'all'
};
 
// ── Render Cards ──────────────────────────────────────────────
function ppRenderCards() {
  const grid = document.getElementById('pp-grid');
  const emptyEl = document.getElementById('pp-empty');
  if (!grid) return;
 
  const q = ppState.search.trim().toLowerCase();
  const filtered = partnersProducts.filter(p => {
    const matchTab = ppState.tab === 'all' || p.type === ppState.tab;
    const matchCat = ppState.category === 'all' || p.category === ppState.category;
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shipsFrom.toLowerCase().includes(q) ||
      p.shipsTo.toLowerCase().includes(q);
    return matchTab && matchCat && matchSearch;
  });
 
  grid.innerHTML = '';
 
  if (filtered.length === 0) {
    emptyEl.removeAttribute('hidden');
    return;
  }
 
  emptyEl.setAttribute('hidden', '');
 
  const lang = document.getElementById('languageSelect')
    ? document.getElementById('languageSelect').value
    : 'en';
  const t = translations[lang] || translations['en'];
 
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'pp-card';
    card.style.animationDelay = (i * 50) + 'ms';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View details for ' + p.name);
 
    const typeLabel = p.type.charAt(0).toUpperCase() + p.type.slice(1);
 
    card.innerHTML = `
      <div class="pp-card-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
        <span class="pp-card-type-badge ${p.type}">${typeLabel}</span>
      </div>
      <div class="pp-card-body">
        <div class="pp-card-category">${p.category}</div>
        <h3 class="pp-card-name">${p.name}</h3>
        <p class="pp-card-desc">${p.description}</p>
        <div class="pp-card-meta">
          <div class="pp-card-meta-item">🌍 <strong>${t.partners_ships_from || 'Ships From'}:</strong>&nbsp;${p.shipsFrom}
          </div>
          <div class="pp-card-meta-item">⏱️ <strong>${t.partners_delivery_time || 'Delivery'}:</strong>&nbsp;${p.deliveryTime}
          </div>
        </div>
        <button class="pp-card-btn" data-id="${p.id}">${t.partners_view_details || 'View Details'}</button>
      </div>
    `;
 
    // Click anywhere on card or the button
    card.addEventListener('click', (e) => {
      ppOpenModal(p.id);
    });
 
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        ppOpenModal(p.id);
      }
    });
 
    grid.appendChild(card);
  });
}
 
// ── Open Modal ────────────────────────────────────────────────
function ppOpenModal(id) {
  const p = partnersProducts.find(x => x.id === id);
  if (!p) return;
 
  const lang = document.getElementById('languageSelect')
    ? document.getElementById('languageSelect').value
    : 'en';
  const t = translations[lang] || translations['en'];
 
  document.getElementById('modal-image').src = p.image;
  document.getElementById('modal-image').alt = p.name;
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-description').textContent = p.description;
  document.getElementById('modal-origin').textContent = p.shipsFrom;
  document.getElementById('modal-destination').textContent = p.shipsTo;
  document.getElementById('modal-delivery').textContent = p.deliveryTime;
  document.getElementById('modal-category').textContent = p.category;
 
  const badge = document.getElementById('modal-type-badge');
  badge.textContent = p.type.charAt(0).toUpperCase() + p.type.slice(1);
  badge.className = 'partners-modal-badge ' + p.type;
 
  // Update static text in modal that uses data-i18n
  document.querySelectorAll('#partners-modal [data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
 
  const msg = encodeURIComponent(
    `Hello Arakaharaka Enterprises, I am interested in ${p.name}. Please share pricing and shipping details.`
  );
  document.getElementById('modal-whatsapp').href = `https://wa.me/254723214344?text=${msg}`;
 
  const modal = document.getElementById('partners-modal');
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
 
  // Focus close button for accessibility
  setTimeout(() => {
    document.getElementById('partners-modal-close').focus();
  }, 100);
}
 
// ── Close Modal ───────────────────────────────────────────────
function ppCloseModal() {
  const modal = document.getElementById('partners-modal');
  if (!modal) return;
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}
 
// ── Init Controls ─────────────────────────────────────────────
function ppInitControls() {
  // Search input
  const searchEl = document.getElementById('pp-search');
  const clearBtn = document.getElementById('pp-search-clear');
 
  if (searchEl) {
    searchEl.addEventListener('input', () => {
      ppState.search = searchEl.value;
      clearBtn.hidden = !searchEl.value;
      ppRenderCards();
    });
  }
 
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchEl.value = '';
      ppState.search = '';
      clearBtn.hidden = true;
      searchEl.focus();
      ppRenderCards();
    });
  }
 
  // Tabs
  document.querySelectorAll('.pp-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.pp-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      ppState.tab = tab.getAttribute('data-tab');
      ppRenderCards();
    });
  });
 
  // Category dropdown
  const catEl = document.getElementById('pp-category');
  if (catEl) {
    catEl.addEventListener('change', () => {
      ppState.category = catEl.value;
      ppRenderCards();
    });
  }
 
  // Modal close
  const closeBtn = document.getElementById('partners-modal-close');
  const overlay = document.getElementById('partners-modal-overlay');
  if (closeBtn) closeBtn.addEventListener('click', ppCloseModal);
  if (overlay) overlay.addEventListener('click', ppCloseModal);
 
  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('partners-modal');
      if (modal && !modal.hidden) ppCloseModal();
    }
  });
}
 
// ── Re-render on language change (patch changeLanguage) ───────
const _origChangeLanguage = typeof changeLanguage === 'function' ? changeLanguage : null;
function changeLanguage(lang) {
  if (_origChangeLanguage) _origChangeLanguage(lang);
  // Re-render cards so translated strings update
  if (document.getElementById('pp-grid')) ppRenderCards();
  // Update placeholder
  const searchEl = document.getElementById('pp-search');
  if (searchEl) {
    const t = translations[lang] || translations['en'];
    searchEl.placeholder = t.partners_search_placeholder || 'Search products...';
  }
}
 
// ── Boot ──────────────────────────────────────────────────────
window.addEventListener('load', () => {
  ppInitControls();
  ppRenderCards();
});
 
// Also re-render when navigating to partners page
const _origShowPage = typeof showPage === 'function' ? showPage : null;
// (We patch via a MutationObserver on the partners page becoming active)
const ppPageObserver = new MutationObserver(() => {
  const page = document.getElementById('page-partners');
  if (page && page.classList.contains('active')) {
    ppRenderCards();
  }
});
 
document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('page-partners');
  if (page) {
    ppPageObserver.observe(page, { attributes: true, attributeFilter: ['class'] });
  }
});


 // Translation system
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_services: 'Services',
      nav_tourism: 'Tourism',
      nav_partners: 'Partners',
      nav_testimonials: 'Testimonials',
      nav_contact: 'Contact Us',
      hero_title: 'Your Trusted Import & Export Partner',
      hero_subtitle: 'Arakaharaka connects East and Central African countries to the world — sourcing quality products, vehicles, and goods from global markets with reliability and care.',
      hero_cta1: 'Contact Us',
      hero_cta2: 'Request a Quote',
      stats_clients: 'Happy Clients',
      stats_partners: 'Partner Brands',
      stats_countries: 'Countries Served',
      stats_satisfaction: 'Client Satisfaction',
      services_title: 'Our Core Services',
      services_subtitle: 'From product sourcing to logistics coordination, we handle the complexity so you can focus on your business.',
      service_import: 'Import Services',
      service_import_desc: 'We import a wide range of goods from Asia, Europe, and beyond directly to Kenya — electronics, household goods, machinery, and more.',
      service_export: 'Export Services',
      service_export_desc: 'We help Kenyan businesses export quality products to international markets, handling documentation, logistics, and compliance.',
      service_sourcing: 'Product Sourcing',
      service_sourcing_desc: 'Can\'t find a product locally? We source it for you. Tell us what you need and we\'ll find the best quality at the best price worldwide.',
      service_vehicle: 'Vehicle Importation',
      service_vehicle_desc: 'Import vehicles from Japan, UK, UAE and more. We handle inspection, shipping, customs clearance, and delivery to your door.',
      service_bulk: 'Bulk Shipping',
      service_bulk_desc: 'Cost-effective bulk shipping solutions for businesses importing large quantities. We negotiate the best freight rates on your behalf.',
      service_logistics: 'Logistics Coordination',
      service_logistics_desc: 'End-to-end logistics management — warehousing, customs clearance, last-mile delivery, and real-time shipment tracking.',
      testimonials_title: 'Trusted by Many',
      cta_title: 'Ready to Import or Export?',
      cta_subtitle: 'Let\'s help you import with ease. We handle the hard part for you.',
      cta_btn: 'Get in Touch',
      testimonials_label: "What Clients Say",
      testimonial_1_name: "Christian M. Mayani",
      testimonial_1_role: "Import Client – DRC",
      testimonial_1_text:
        "Arakaharaka helped us import heavy-duty machinery from China smoothly and professionally. Their communication and logistics support were outstanding.",

      testimonial_2_name: "George Solo",
      testimonial_2_role: "Tourism Client – Tanzania",
      testimonial_2_text:
        "Our Maasai Mara safari was perfectly organised from start to finish. The team was professional, responsive, and made our Kenyan experience unforgettable.",

      testimonial_3_name: "Hedy",
      testimonial_3_role: "Sales Manager – Hengwang Group, China",
      testimonial_3_text:
        "We sourced premium Kenyan coffee and handicrafts through Arakaharaka. The quality, packaging, and delivery exceeded our expectations.",
      about_title: 'About Arakaharaka Enterprises',
      about_subtitle: 'Born in Nairobi, built for the world. We are passionate about connecting East and Central African countries to global markets.',
      about_feature: 'Connecting East and Central African Countries to the World',
      about_feature_desc: 'Based in Ruaraka, Nairobi, we\'ve been bridging the gap between East and Central African buyers and global suppliers since our founding — with trust, speed, and personal attention at every step.',
      mission: 'Our Mission',
      mission_desc: 'To make global trade accessible and effortless for every Kenyan — from the solo entrepreneur to the large corporation.',
      vision: 'Our Vision',
      vision_desc: 'To be East Africa\'s most trusted import/export partner, known for reliability, transparency, and outstanding service.',
      values: 'Our Values',
      values_desc: 'Integrity in every transaction. Speed in every delivery. A personal touch that big companies can\'t offer.',
      tourism_label: 'Travel & Experiences',
      tourism_title: 'Hotel Bookings, Safaris & Tourism Services',
      tourism_subtitle: 'Arakaharaka helps you plan unforgettable travel experiences across Kenya and East Africa — from luxury hotel stays and beach holidays to safari adventures, group trips, airport transfers, and custom tourism packages.',
      tourism_plan: 'Plan My Trip',
      tourism_whatsapp: 'Book on WhatsApp',
      tourism_services_title: 'Explore East Africa With Ease',
      tourism_services_subtitle: 'Whether you need a romantic getaway, business accommodation, a family safari, or a coastal holiday, we coordinate the details so your journey is smooth from start to finish.',
      tourism_hotel: 'Hotel Bookings',
      tourism_hotel_desc: 'We help arrange hotel stays, lodges, resorts, apartments, and executive accommodation based on your budget, location, and travel needs.',
      tourism_safari: 'Safari Lodges & Camps',
      tourism_safari_desc: 'Book comfortable safari lodges, tented camps, and nature stays near Kenya and East Africa\'s most beautiful parks and reserves.',
      tourism_adventure: 'Safari Trips & Adventures',
      tourism_adventure_desc: 'We arrange wildlife safaris, game drives, hot air balloon experiences, guided tours, and custom adventure itineraries.',
      tourism_beach: 'Beach Holidays',
      tourism_beach_desc: 'Enjoy relaxing coastal escapes, island-style holidays, honeymoon packages, family beach trips, and ocean activities.',
      tourism_resort: 'Resorts, Retreats & Getaways',
      tourism_resort_desc: 'We connect clients with leisure resorts, retreat destinations, weekend getaways, group stays, and premium relaxation experiences.',
      view_all_services: "View All Services →",
      testimonials_label: "What Clients Say",
      whatsapp_us_now: "WhatsApp Us Now",
      our_story: "Our Story",

      tourism_services_label: "Tourism Services",
      tourism_hiking: "Hiking Mountains",
      tourism_hiking_desc:
        "Explore breathtaking mountain landscapes, scenic trails, and unforgettable hiking adventures across East Africa.",
      tourism_cta_title: 'Ready for Your Next Trip?',
      tourism_cta_subtitle: 'Tell us your destination, travel dates, number of guests, and budget — we will help you plan the right tourism package.',
      tourism_cta_btn: 'Request Booking Help',
      contact_title: 'Let\'s Talk Business',
      contact_subtitle: 'Ready to import, export, or just have questions? Reach out via the form, email, or WhatsApp — we typically respond within a few hours.',
      contact_form_title: 'Send Us a Message',
      contact_name: 'Full Name *',
      contact_email: 'Email Address *',
      contact_phone: 'Phone Number',
      contact_service: 'Service Interested In',
      contact_message: 'Your Message *',
      contact_btn: 'Send Message',
      contact_email_label: 'Email Us',
      contact_phone_label: 'Call / WhatsApp',
      contact_location: 'Location',
      contact_website: 'Website',
      why_label: 'Why Choose Us',
      why_title: 'The Arakaharaka Difference',
      why_reliability: 'Reliability You Can Count On',
      why_reliability_desc: 'We follow through on every order. Your goods arrive as promised, and we keep you updated every step of the way.',
      why_global: 'Truly Global Reach',
      why_global_desc: 'From Japan to Germany, China to the UAE — our supplier network spans every major trading region in the world.',
      why_personal: 'Personalized Service',
      why_personal_desc: 'You deal directly with our team — no call centres, no delays. WhatsApp us and get a real person who knows your order.',
      why_pricing: 'Competitive Pricing',
      why_pricing_desc: 'We leverage our supplier relationships to get you the best prices on quality goods — saving you money without compromising quality.',
      why_customs: 'Customs & Compliance',
      why_customs_desc: 'We handle all customs paperwork, duties, and compliance requirements — so you never have to worry about bureaucratic hurdles.',
      why_fast: 'Fast Turnaround',
      why_fast_desc: 'We prioritize speed at every step — from quote to delivery. Arakaharaka means "hurry" — and we live up to the name.',
      services_page_label: 'What We Offer',
      services_page_title: 'Our Services',
      services_page_subtitle: 'Comprehensive import and export solutions tailored for businesses and individuals in Kenya and beyond.',
      service_page_import: 'Import Services',
      service_page_import_desc: 'We handle every aspect of importing goods into Kenya — from finding suppliers, negotiating prices, arranging shipping, customs clearance, and delivery. Electronics, textiles, industrial goods, and more.',
      service_page_export: 'Export Services',
      service_page_export_desc: 'Helping Kenyan producers and businesses reach international buyers. We manage packaging, documentation, freight booking, and regulatory compliance for smooth exports.',
      service_page_sourcing: 'Product Sourcing',
      service_page_sourcing_desc: 'Send us a product description and we\'ll source it from verified global suppliers. We compare quality, pricing, and delivery timelines so you get the best deal every time.',
      service_page_vehicle: 'Vehicle Importation',
      service_page_vehicle_desc: 'Import cars, motorcycles, trucks, and heavy machinery from Japan, UK, Dubai, and other markets. Includes auction sourcing, inspection, shipping, KEBS compliance, and registration support.',
      service_page_bulk: 'Bulk & Commercial Shipping',
      service_page_bulk_desc: 'Negotiate best-rate FCL/LCL container shipping for businesses importing large volumes. We consolidate cargo and optimize freight routes to cut your costs significantly.',
      service_page_logistics: 'Logistics Coordination',
      service_page_logistics_desc: 'Full end-to-end logistics — warehousing at origin, freight forwarding, port clearance, inland transportation, and last-mile delivery to your premises anywhere in Kenya.',
      service_page_customs: 'Customs Clearance',
      service_page_customs_desc: 'Our experienced team handles all customs documentation, duty payment, KRA compliance, KEBS inspections, and port procedures — so your goods clear without delays.',
      service_page_consulting: 'Trade Consulting',
      service_page_consulting_desc: 'New to importing or exporting? We guide you through the regulations, costs, timelines, and best practices so you make informed decisions every time.',
      service_page_industrial: 'Industrial & Machinery',
      service_page_industrial_desc: 'Source industrial equipment, factory machinery, tools, and spare parts from top manufacturers in China, Germany, and other manufacturing hubs worldwide.',
      partners_label: 'Our Network',
      partners_title: 'Import & Export Partners',
      partners_subtitle: 'We connect clients to trusted import suppliers worldwide and help East and Central African companies export quality products locally, regionally, and abroad.',
      partners_auto_title: '📥 Import Partners: Automotive',
      partners_auto: 'Automotive Importation',
      partners_auto_desc: 'We connect clients with trusted automotive importers and exporters, facilitating the smooth importation of vehicles and parts from around the world.',
      partners_industrial_title: '📥 Import Partners: Industrial & Manufacturing Suppliers',
      partners_luxury_title: '📥 Import Partners: Luxury & Consumer Brands',
      partners_asian_title: '📥 Import Partners: Asian Manufacturers & Suppliers',
      partners_export_title: '📤 Export from Kenya: Kenyan Brands & Products',
      partners_category_all: "All Categories",
      category_automotive: "Automotive",
      category_industrial_manufacturing: "Industrial & Manufacturing",
      category_luxury_consumer_goods: "Luxury & Consumer Goods",
      category_asian_manufacturers: "Asian Manufacturers",
      category_construction_materials: "Construction Materials",
      category_electronics_technology: "Electronics & Technology",
      category_food_agricultural_products: "Food & Agricultural Products",
      category_african_culture: "African Culture",
      category_kenyan_export_products: "Kenyan Export Products",
      partners_label: 'Our Network',
      partners_title: 'Import & Export Products',
      partners_subtitle: 'Search our catalog of import and export products, view shipping details, and contact us via WhatsApp for pricing and availability.',
      partners_search_placeholder: 'Search products...',
      partners_tab_all: 'All Products',
      partners_tab_import: 'Import Products',
      partners_tab_export: 'Export Products',
      partners_category_all: 'All Categories',
      partners_ships_from: 'Ships From',
      partners_ships_to: 'Ships To',
      partners_delivery_time: 'Estimated Delivery',
      partners_view_details: 'View Details',
      partners_request_quote: '💬 Request Quote on WhatsApp',
      partners_no_results: 'No products found matching your search.',
      partners_cta_text: 'Can\'t find what you\'re looking for? Ask us about any product, brand, or special requirement and we\'ll source it for you.',
      partners_cta_button: '💬 Ask About a Specific Product',
      
      footer_desc: 'Your trusted import & export partner based in Ruaraka, Nairobi. Connecting East and Central African countries to the world — one shipment at a time.',
      footer_quick: 'Quick Links',
      footer_contact: 'Contact',
      footer_faq: 'FAQ',
      faq_q1: 'How long does shipping take?',
      faq_a1: 'Sea freight from Asia takes 25–45 days. Air freight takes 5–10 days. Vehicles from Japan take 4–8 weeks.',
      faq_q2: 'How do I place an order?',
      faq_a2: 'Simply WhatsApp or email us with your order details. We\'ll confirm availability, provide a quote, and take it from there.',
      faq_q3: 'Which countries do you ship from?',
      faq_a3: 'We source from China, Japan, UAE, UK, Germany, USA, India, Singapore, and many more countries worldwide.',
      faq_q4: 'Do you handle customs?',
      faq_a4: 'Yes! We handle all customs clearance, KRA compliance, KEBS inspections, and port procedures on your behalf.',
      footer_copyright: '© 2026 Arakaharaka Enterprises. All rights reserved. | Terms & Conditions',
      footer_made: 'Made with ❤️ in Nairobi, Kenya 🇰🇪',
      testimonials_page_label: 'Client Reviews',
      testimonials_page_title: 'What Our Clients Say',
      testimonials_page_subtitle: 'Don\'t take our word for it — here\'s what real clients across Kenya say about their experience with Arakaharaka Enterprises.',
      testi_1: 'Arakaharaka made importing my vehicle from Japan completely seamless. From auction to my gate in Nairobi — they handled everything professionally. Absolutely 5 stars!',
      testi_2: 'Super responsive team via WhatsApp. I placed an order for electronics from China and they kept me updated at every stage. Received everything in perfect condition!',
      testi_3: 'We needed industrial machinery urgently and Arakaharaka sourced it from Germany within our budget. Customs was handled without any issues. Will use again!',
      testi_4: 'As a first-time importer, I was nervous. The team walked me through every step patiently. My goods arrived before the estimated date! Great people to work with.',
      testi_5: 'We\'ve worked with Arakaharaka for bulk shipments from China for 2 years now. Consistent, reliable, and always the best freight rates. They\'re our go-to partner.',
      testi_6: 'I wanted luxury items from Dubai and didn\'t know where to start. Arakaharaka sourced everything I needed with authenticity guaranteed. Top-tier service!',
      testimonials_cta: 'Had a great experience with us? We\'d love to hear from you!',
      testimonials_share_btn: '💬 Share Your Experience',
      hero_badge_1: '🚀 Fast Shipping',
      hero_badge_2: '🌍 Global Sourcing',
      hero_badge_3: '🤝 Trusted Partners',
      custom_solution_title: 'Need a Custom Solution?',
      custom_solution_desc: 'Every business is different. Tell us your needs and we\'ll craft the perfect import/export plan for you.',
      custom_solution_btn: '📩 Get a Custom Quote',
      nav_dropdown_import: 'Import Partners',
      nav_dropdown_export: 'Export from Kenya',
      legal_label: "Legal",
      terms_title: "Terms & Conditions",
      terms_subtitle:
        "Please read these terms carefully before placing an order with Arakaharaka Enterprises.",

      terms_orders_payments_title: "📦 1. Orders & Payments",
      terms_orders_payments_1:
        "All orders must be confirmed in writing via email or WhatsApp before processing begins.",
      terms_orders_payments_2:
        "A deposit of 50% is required before sourcing commences, with the balance due before shipment.",
      terms_orders_payments_3:
        "Payment can be made via M-Pesa, bank transfer, or other agreed methods.",
      terms_orders_payments_4:
        "Prices quoted are valid for 48 hours and are subject to exchange rate fluctuations for international orders.",
      terms_orders_payments_5:
        "Arakaharaka Enterprises reserves the right to decline any order at its discretion.",

      terms_shipping_title: "🚢 2. Shipping Timelines",
      terms_shipping_1:
        "Estimated delivery timelines are provided as a guide and are not guaranteed.",
      terms_shipping_2:
        "Sea freight from Asia typically takes 25–45 days. Air freight takes 5–10 business days.",
      terms_shipping_3:
        "Vehicle shipments from Japan typically take 4–8 weeks from auction purchase to Mombasa port.",
      terms_shipping_4:
        "Delays due to port congestion, customs, weather, or other factors beyond our control are not the liability of Arakaharaka.",
      terms_shipping_5:
        "Clients will be notified of any significant delays promptly.",

      terms_liability_title: "⚖️ 3. Liability",
      terms_liability_1:
        "Arakaharaka Enterprises acts as an agent and facilitator and is not the manufacturer or direct seller of goods.",
      terms_liability_2:
        "We are not liable for goods damaged during transit if covered by shipping insurance.",
      terms_liability_3:
        "It is the client's responsibility to ensure compliance with all Kenyan import regulations for their specific goods.",
      terms_liability_4:
        "We are not responsible for goods seized by customs due to false declarations made by the client.",

      terms_refund_title: "🔄 4. Refund Policy",
      terms_refund_1:
        "Deposits are non-refundable once sourcing or procurement has commenced.",
      terms_refund_2:
        "If goods are materially different from what was ordered, a replacement or partial refund may be arranged at our discretion.",
      terms_refund_3:
        "Vehicle-related purchases follow the terms of the respective auction house and are generally non-refundable once purchased.",
      terms_refund_4:
        "Refund requests must be submitted in writing within 7 days of delivery.",

      terms_communication_title: "📬 5. Communication & Disputes",
      terms_communication_1:
        "All official communications should be directed to harakaint@gmail.com.",
      terms_communication_2:
        "Any disputes shall first be resolved through good-faith negotiations between both parties.",
      terms_communication_3:
        "These terms are governed by the laws of Kenya.",
      terms_communication_4:
        "By placing an order with Arakaharaka Enterprises, you agree to these terms and conditions in full.",

      terms_last_updated:
        "Last updated: 2025. For queries about these terms, email harakaint@gmail.com.",
    },
    zh: {
      nav_home: '首页',
      nav_about: '关于我们',
      nav_services: '服务',
      nav_tourism: '旅游',
      nav_partners: '合作伙伴',
      nav_testimonials: '客户评价',
      nav_contact: '联系我们',
      hero_title: '您值得信赖的进出口合作伙伴',
      hero_subtitle: 'Arakaharaka 将东非和中非国家与世界连接起来——以可靠和关怀的方式从全球市场采购优质产品、车辆和商品。',
      hero_cta1: '联系我们',
      hero_cta2: '获取报价',
      stats_clients: '满意客户',
      stats_partners: '合作品牌',
      stats_countries: '服务国家',
      stats_satisfaction: '客户满意度',
      services_title: '我们的核心服务',
      services_subtitle: '从产品采购到物流协调，我们处理复杂性，让您专注于业务。',
      service_import: '进口服务',
      service_import_desc: '我们从亚洲、欧洲及其他地区直接向肯尼亚进口各种商品——电子产品、家居用品、机械等。',
      service_export: '出口服务',
      service_export_desc: '我们帮助肯尼亚企业将优质产品出口到国际市场，处理文件、物流和合规事宜。',
      service_sourcing: '产品采购',
      service_sourcing_desc: '在当地找不到产品？我们为您采购。告诉我们您的需求，我们将以最佳价格在全球范围内为您找到最佳质量的产品。',
      service_vehicle: '车辆进口',
      service_vehicle_desc: '从日本、英国、阿联酋等地进口车辆。我们处理检验、运输、清关和送货上门服务。',
      service_bulk: '批量运输',
      service_bulk_desc: '为大批量进口的企业提供具有成本效益的批量运输解决方案。我们代表您协商最佳运费率。',
      service_logistics: '物流协调',
      service_logistics_desc: '端到端物流管理——仓储、清关、最后一公里配送和实时货物跟踪。',
      testimonials_title: '值得信赖',
      cta_title: '准备进口或出口？',
      cta_subtitle: '让我们帮助您轻松进口。我们为您处理困难的部分。',
      cta_btn: '联系我们',
      testimonials_label: "客户评价",
      testimonial_1_name: "Christian M. Mayani",
      testimonial_1_role: "进口客户 – 肯尼亚内罗毕",
      testimonial_1_text:
        "Arakaharaka 帮助我们顺利且专业地从中国进口重型机械。他们的沟通和物流支持非常出色。",

      testimonial_2_name: "George Solo",
      testimonial_2_role: "旅游客户 – 坦桑尼亚",
      testimonial_2_text:
        "我们的马赛马拉之旅从开始到结束都安排得非常完美。团队专业高效，让我们的肯尼亚之旅难以忘怀。",

      testimonial_3_name: "Hedy",
      testimonial_3_role: "销售经理 – 恒旺集团，中国",
      testimonial_3_text:
        "我们通过 Arakaharaka 采购了优质肯尼亚咖啡和手工艺品。产品质量、包装和交付都超出了我们的预期。",
      about_title: '关于 Arakaharaka Enterprises',
      about_subtitle: '诞生于内罗毕，为世界而建。我们热衷于将东非和中非国家与全球市场连接起来。',
      about_feature: '将东非和中非国家与世界连接',
      about_feature_desc: '我们位于内罗毕的鲁阿拉卡，自成立以来一直连接东非和中非买家与全球供应商——每一步都充满信任、速度和个人关怀。',
      mission: '我们的使命',
      mission_desc: '让全球贸易对每个肯尼亚人都易于访问和轻松——从独资企业家到大型企业。',
      vision: '我们的愿景',
      vision_desc: '成为东非最值得信赖的进出口合作伙伴，以可靠性、透明度和卓越服务而闻名。',
      values: '我们的价值观',
      values_desc: '每笔交易的诚信。每次交付的速度。大公司无法提供的个人关怀。',
      tourism_label: '旅行与体验',
      tourism_title: '酒店预订、野生动物园和旅游服务',
      tourism_subtitle: 'Arakaharaka 帮助您规划肯尼亚和东非难忘的旅行体验——从豪华酒店住宿和海滩假期到野生动物园探险、团体旅行、机场接送和定制旅游套餐。',
      tourism_plan: '规划我的旅行',
      tourism_whatsapp: '通过 WhatsApp 预订',
      tourism_services_title: '轻松探索东非',
      tourism_services_subtitle: '无论您需要浪漫度假、商务住宿、家庭野生动物园还是沿海假期，我们都会协调细节，让您的旅程从头到尾顺畅无阻。',
      tourism_hotel: '酒店预订',
      tourism_hotel_desc: '我们帮助安排酒店住宿、旅馆、度假村、公寓和行政住宿，根据您的预算、地点和旅行需求。',
      tourism_safari: '野生动物园旅馆和营地',
      tourism_safari_desc: '预订舒适的野生动物园旅馆、帐篷营地和自然住宿，靠近肯尼亚和东非最美丽的公园和保护区。',
      tourism_adventure: '野生动物园旅行和探险',
      tourism_adventure_desc: '我们安排野生动物园、狩猎旅行、热气球体验、导游游览和定制探险行程。',
      tourism_beach: '海滩假期',
      tourism_beach_desc: '享受轻松的海岸度假、岛屿式假期、蜜月套餐、家庭海滩旅行和海洋活动。',
      tourism_resort: '度假村、静修地和度假',
      tourism_resort_desc: '我们将客户与休闲度假村、静修目的地、周末度假、团体住宿和优质放松体验连接起来。',
      view_all_services: "查看所有服务 →",
      testimonials_label: "客户评价",
      whatsapp_us_now: "立即通过 WhatsApp 联系我们",
      our_story: "我们的故事",

      tourism_services_label: "旅游服务",
      tourism_hiking: "山地徒步",
      tourism_hiking_desc:
        "探索东非壮丽的山地风光、优美的徒步路线和难忘的登山探险。",
      tourism_cta_title: '准备好您的下一次旅行了吗？',
      tourism_cta_subtitle: '告诉我们您的目的地、旅行日期、客人数量和预算——我们将帮助您规划合适的旅游套餐。',
      tourism_cta_btn: '请求预订帮助',
      contact_title: '让我们谈谈生意',
      contact_subtitle: '准备进口、出口或有疑问？通过表格、电子邮件或 WhatsApp 联系我们——我们通常在几小时内回复。',
      contact_form_title: '给我们留言',
      contact_name: '全名 *',
      contact_email: '电子邮件地址 *',
      contact_phone: '电话号码',
      contact_service: '感兴趣的服务',
      contact_message: '您的留言 *',
      contact_btn: '发送留言',
      contact_email_label: '给我们发电子邮件',
      contact_phone_label: '打电话 / WhatsApp',
      contact_location: '位置',
      contact_website: '网站',
      why_label: '为什么选择我们',
      why_title: 'Arakaharaka 的不同之处',
      why_reliability: '您可以信赖的可靠性',
      why_reliability_desc: '我们跟进每一个订单。您的货物会按承诺送达，我们会在每一步向您更新。',
      why_global: '真正的全球覆盖',
      why_global_desc: '从日本到德国，从中国到阿联酋——我们的供应商网络覆盖世界每个主要贸易地区。',
      why_personal: '个性化服务',
      why_personal_desc: '您直接与我们的团队打交道——没有呼叫中心，没有延误。WhatsApp 我们，您会得到一个真正了解您订单的人。',
      why_pricing: '有竞争力的价格',
      why_pricing_desc: '我们利用供应商关系为您获得优质商品的最佳价格——在不牺牲质量的情况下为您省钱。',
      why_customs: '海关与合规',
      why_customs_desc: '我们处理所有海关文件、关税和合规要求——您无需担心官僚障碍。',
      why_fast: '快速周转',
      why_fast_desc: '我们在每一步都优先考虑速度——从报价到交付。Arakaharaka 意味着"匆忙"——我们名副其实。',
      services_page_label: '我们提供什么',
      services_page_title: '我们的服务',
      services_page_subtitle: '为肯尼亚及以外地区的企业和个人量身定制的综合进出口解决方案。',
      service_page_import: '进口服务',
      service_page_import_desc: '我们处理将商品进口到肯尼亚的各个方面——从寻找供应商、谈判价格、安排运输、清关和交付。电子产品、纺织品、工业商品等。',
      service_page_export: '出口服务',
      service_page_export_desc: '帮助肯尼亚生产商和企业接触国际买家。我们管理包装、文件、货运预订和监管合规，以实现顺畅出口。',
      service_page_sourcing: '产品采购',
      service_page_sourcing_desc: '向我们发送产品描述，我们将从经过验证的全球供应商处采购。我们比较质量、价格和交付时间，以便每次都获得最佳交易。',
      service_page_vehicle: '车辆进口',
      service_page_vehicle_desc: '从日本、英国、迪拜和其他市场进口汽车、摩托车、卡车和重型机械。包括拍卖采购、检验、运输、KEBS 合规和注册支持。',
      service_page_bulk: '批量与商业运输',
      service_page_bulk_desc: '为进口大批量的企业协商最佳费率的 FCL/LCL 集装箱运输。我们整合货物并优化货运路线，以显著降低您的成本。',
      service_page_logistics: '物流协调',
      service_page_logistics_desc: '完整的端到端物流——原产地仓储、货运代理、港口清关、内陆运输以及肯尼亚任何地方的最后一公里配送。',
      service_page_customs: '海关清关',
      service_page_customs_desc: '我们经验丰富的团队处理所有海关文件、关税支付、KRA 合规、KEBS 检验和港口程序——您的货物可以无延误地通过。',
      service_page_consulting: '贸易咨询',
      service_page_consulting_desc: '进出口新手？我们引导您了解法规、成本、时间表和最佳实践，以便每次都能做出明智的决定。',
      service_page_industrial: '工业与机械',
      service_page_industrial_desc: '从中国、德国和其他全球制造中心的一流制造商处采购工业设备、工厂机械、工具和备件。',
      partners_label: '我们的网络',
      partners_title: '进出口合作伙伴',
      partners_subtitle: '我们将客户与世界各地值得信赖的进口供应商联系起来，并帮助东非和中非公司本地、区域和国际出口优质产品。',
      partners_auto_title: '📥 进口合作伙伴：汽车',
      partners_auto: '汽车进口',
      partners_auto_desc: '我们将客户与值得信赖的汽车进口商和出口商联系起来，促进来自世界各地的车辆和零件的顺畅进口。',
      partners_industrial_title: '📥 进口合作伙伴：工业与制造供应商',
      partners_luxury_title: '📥 进口合作伙伴：奢侈与消费品牌',
      partners_asian_title: '📥 进口合作伙伴：亚洲制造商与供应商',
      partners_export_title: '📤 从肯尼亚出口：肯尼亚品牌与产品',
      partners_category_all: "所有类别",
      category_automotive: "汽车",
      category_industrial_manufacturing: "工业与制造",
      category_luxury_consumer_goods: "奢侈品与消费品",
      category_asian_manufacturers: "亚洲制造商",
      category_construction_materials: "建筑材料",
      category_electronics_technology: "电子与科技",
      category_food_agricultural_products: "食品与农产品",
      category_african_culture: "非洲文化",
      category_kenyan_export_products: "肯尼亚出口产品",
      partners_label: '我们的网络',
      partners_title: '进出口产品',
      partners_subtitle: '搜索我们的进出口产品目录，查看运输详情，并通过WhatsApp联系我们了解价格和供货情况。',
      partners_search_placeholder: '搜索产品...',
      partners_tab_all: '所有产品',
      partners_tab_import: '进口产品',
      partners_tab_export: '出口产品',
      partners_category_all: '所有类别',
      partners_ships_from: '发货地',
      partners_ships_to: '发货目的地',
      partners_delivery_time: '预计交货时间',
      partners_view_details: '查看详情',
      partners_request_quote: '💬 通过WhatsApp请求报价',
      partners_no_results: '未找到符合您搜索条件的产品。',
      partners_cta_text: '找不到您要找的产品？请询问我们任何产品或特殊需求，我们将为您采购。',
      partners_cta_button: '💬 询问特定产品',
      footer_desc: '您值得信赖的进出口合作伙伴，位于内罗毕鲁阿拉卡。将东非和中非国家与世界连接起来——一次运输一次。',
      footer_quick: '快速链接',
      footer_contact: '联系',
      footer_faq: '常见问题',
      faq_q1: '运输需要多长时间？',
      faq_a1: '从亚洲的海运需要 25–45 天。空运需要 5–10 天。从日本的车辆需要 4–8 周。',
      faq_q2: '我如何下订单？',
      faq_a2: '只需通过 WhatsApp 或电子邮件向我们发送您的订单详情。我们将确认可用性，提供报价，然后处理。',
      faq_q3: '您从哪些国家运输？',
      faq_a3: '我们从中国、日本、阿联酋、英国、德国、美国、印度、新加坡以及世界各地的许多其他国家采购。',
      faq_q4: '您处理海关吗？',
      faq_a4: '是的！我们代表您处理所有海关清关、KRA 合规、KEBS 检验和港口程序。',
      footer_copyright: '© 2026 Arakaharaka Enterprises. 保留所有权利。 | 条款与条件',
      footer_made: '在肯尼亚内罗毕用 ❤️ 制作 🇰🇪',
      testimonials_page_label: '客户评价',
      testimonials_page_title: '客户怎么说',
      testimonials_page_subtitle: '不要只听我们说——这里是肯尼亚各地的真实客户对他们在 Arakaharaka Enterprises 的体验的评价。',
      testi_1: 'Arakaharaka 让我从日本进口车辆变得完全无缝。从拍卖到内罗毕我家门口——他们专业地处理了一切。绝对是 5 星！',
      testi_2: '通过 WhatsApp 响应非常迅速的团队。我从中国订购了电子产品，他们在每个阶段都让我了解情况。收到的一切都处于完美状态！',
      testi_3: '我们急需工业机械，Arakaharaka 在我们的预算内从德国采购。海关处理没有任何问题。会再次使用！',
      testi_4: '作为首次进口商，我很紧张。团队耐心地引导我完成每一步。我的货物在预计日期之前到达！很棒的人合作。',
      testi_5: '我们与 Arakaharaka 合作从中国进行批量运输已经 2 年了。始终如一、可靠，并且总是最好的运费率。他们是我们的首选合作伙伴。',
      testi_6: '我想要迪拜的奢侈品，不知道从哪里开始。Arakaharaka 采购了我需要的一切，保证真实性。顶级服务！',
      testimonials_cta: '您有很好的体验吗？我们很想听到您的声音！',
      testimonials_share_btn: '💬 分享您的体验',
      hero_badge_1: '🚀 快速运输',
      hero_badge_2: '🌍 全球采购',
      hero_badge_3: '🤝 可信赖的合作伙伴',
      custom_solution_title: '需要定制解决方案？',
      custom_solution_desc: '每个企业都不同。告诉我们您的需求，我们将为您制定完美的进出口计划。',
      custom_solution_btn: '📩 获取定制报价',
      nav_dropdown_import: '进口合作伙伴',
      nav_dropdown_export: '从肯尼亚出口',
      legal_label: "法律声明",
      terms_title: "条款和条件",
      terms_subtitle:
        "在向 Arakaharaka Enterprises 下订单之前，请仔细阅读这些条款和条件。",

      terms_orders_payments_title: "📦 1. 订单与付款",
      terms_orders_payments_1:
        "所有订单在开始处理之前必须通过电子邮件或 WhatsApp 以书面形式确认。",
      terms_orders_payments_2:
        "在开始采购之前需要支付 50% 的定金，剩余款项需在发货前支付。",
      terms_orders_payments_3:
        "付款可通过 M-Pesa、银行转账或其他双方约定的方式进行。",
      terms_orders_payments_4:
        "报价在 48 小时内有效，国际订单价格可能因汇率波动而调整。",
      terms_orders_payments_5:
        "Arakaharaka Enterprises 保留自行决定拒绝任何订单的权利。",

      terms_shipping_title: "🚢 2. 运输时间",
      terms_shipping_1:
        "预计交货时间仅供参考，不作保证。",
      terms_shipping_2:
        "从亚洲海运通常需要 25–45 天。空运通常需要 5–10 个工作日。",
      terms_shipping_3:
        "从日本发运车辆通常需要 4–8 周，从拍卖购买到抵达蒙巴萨港。",
      terms_shipping_4:
        "因港口拥堵、海关、天气或其他超出我们控制范围的因素造成的延误，Arakaharaka 不承担责任。",
      terms_shipping_5:
        "如出现重大延误，我们将及时通知客户。",

      terms_liability_title: "⚖️ 3. 责任",
      terms_liability_1:
        "Arakaharaka Enterprises 作为代理和协调方，并非商品制造商或直接销售商。",
      terms_liability_2:
        "如果货物已投保运输保险，我们对运输过程中发生的损坏不承担责任。",
      terms_liability_3:
        "客户有责任确保其货物符合肯尼亚所有进口法规。",
      terms_liability_4:
        "因客户提供虚假申报而导致海关扣押货物，我们不承担责任。",

      terms_refund_title: "🔄 4. 退款政策",
      terms_refund_1:
        "一旦采购或购买流程开始，定金将不予退还。",
      terms_refund_2:
        "如果货物与订购内容存在重大差异，我们可酌情安排更换或部分退款。",
      terms_refund_3:
        "车辆购买受相关拍卖行条款约束，通常在购买后不予退款。",
      terms_refund_4:
        "退款申请必须在交货后 7 天内以书面形式提交。",

      terms_communication_title: "📬 5. 沟通与争议",
      terms_communication_1:
        "所有正式沟通应发送至 harakaint@gmail.com。",
      terms_communication_2:
        "任何争议应首先通过双方诚信协商解决。",
      terms_communication_3:
        "本条款和条件受肯尼亚法律管辖。",
      terms_communication_4:
        "一旦向 Arakaharaka Enterprises 下订单，即表示您完全同意本条款和条件。",

      terms_last_updated:
        "最后更新：2025 年。如对本条款有任何疑问，请发送电子邮件至 harakaint@gmail.com。",
    },
    ja: {
      nav_home: 'ホーム',
      nav_about: '私たちについて',
      nav_services: 'サービス',
      nav_tourism: '観光',
      nav_partners: 'パートナー',
      nav_testimonials: 'お客様の声',
      nav_contact: 'お問い合わせ',
      hero_title: '信頼できる輸出入パートナー',
      hero_subtitle: 'Arakaharakaは東アフリカ・中央アフリカ諸国と世界を繋ぎます—信頼と配慮を持って、グローバル市場から高品質な製品、車両、商品を調達します。',
      hero_cta1: 'お問い合わせ',
      hero_cta2: '見積もりを依頼',
      stats_clients: '満足した顧客',
      stats_partners: 'パートナーブランド',
      stats_countries: '対応国',
      stats_satisfaction: '顧客満足度',
      services_title: '主要サービス',
      services_subtitle: '製品調達から物流調整まで、複雑さを私たちが処理し、ビジネスに集中できます。',
      service_import: '輸入サービス',
      service_import_desc: 'アジア、欧州、その他からケニアへ直接各種商品を輸入します—電子機器、家庭用品、機械など。',
      service_export: '輸出サービス',
      service_export_desc: 'ケニア企業が高品質製品を国際市場に輸出するのを支援し、書類、物流、コンプライアンスを処理します。',
      service_sourcing: '製品調達',
      service_sourcing_desc: '地元で製品が見つかりませんか？私たちが調達します。ニーズを教えていただければ、世界中で最高品質を最高価格で見つけます。',
      service_vehicle: '車両輸入',
      service_vehicle_desc: '日本、英国、UAEなどから車両を輸入。検査、出荷、通関、配達まで処理します。',
      service_bulk: '大量輸送',
      service_bulk_desc: '大量輸入企業向けのコスト効率の良い大量輸送ソリューション。お客様に代わって最適な運賃を交渉します。',
      service_logistics: '物流調整',
      service_logistics_desc: 'エンドツーエンドの物流管理—倉庫、通関、ラストマイル配送、リアルタイム貨物追跡。',
      testimonials_title: '多くの人に信頼されています',
      cta_title: '輸入または輸出の準備はできましたか？',
      cta_subtitle: '輸入を簡単にしましょう。難しい部分は私たちが処理します。',
      cta_btn: 'お問い合わせ',
      testimonials_label: "お客様の声",
      testimonial_1_name: "Christian M. Mayani",
      testimonial_1_role: "輸入顧客 – ケニア・ナイロビ",
      testimonial_1_text:
        "Arakaharaka は、中国からの重機輸入をスムーズかつプロフェッショナルにサポートしてくれました。コミュニケーションと物流支援は素晴らしかったです。",

      testimonial_2_name: "George Solo",
      testimonial_2_role: "観光顧客 – タンザニア",
      testimonial_2_text:
        "私たちのマサイマラ・サファリは最初から最後まで完璧に手配されていました。チームは非常にプロフェッショナルで、ケニアでの体験を忘れられないものにしてくれました。",

      testimonial_3_name: "Hedy",
      testimonial_3_role: "销售经理 – 恒旺集团，中国",
      testimonial_3_text:
        "Arakaharaka を通じて高品質なケニア産コーヒーと工芸品を調達しました。品質、梱包、配送のすべてが期待を上回りました。",
      about_title: 'Arakaharaka Enterprisesについて',
      about_subtitle: 'ナイロビで生まれ、世界のために構築。東アフリカ・中央アフリカ諸国とグローバル市場を繋ぐことに情熱を持っています。',
      about_feature: '東アフリカ・中央アフリカ諸国と世界を繋ぐ',
      about_feature_desc: 'ナイロビのルアラカに拠点を置き、設立以来、信頼、スピード、個人的な配慮で東アフリカ・中央アフリカのバイヤーとグローバルサプライヤーの架け橋となっています。',
      mission: '私たちの使命',
      mission_desc: 'ソロ起業家から大企業まで、すべてのケニア人にとってグローバル貿易をアクセス可能で簡単にすること。',
      vision: '私たちのビジョン',
      vision_desc: '信頼性、透明性、卓越したサービスで知られる、東アフリカで最も信頼される輸出入パートナーになること。',
      values: '私たちの価値観',
      values_desc: 'すべての取引における誠実。すべての配送におけるスピード。大企業が提供できない個人的なタッチ。',
      tourism_label: '旅行と体験',
      tourism_title: 'ホテル予約、サファリ、観光サービス',
      tourism_subtitle: 'Arakaharakaはケニアと東アフリカで忘れられない旅行体験を計画するのを支援します—ラグジュアリーホテル滞在やビーチ休暇からサファリアドベンチャー、グループ旅行、空港送迎、カスタム観光ツアーまで。',
      tourism_plan: '旅行を計画',
      tourism_whatsapp: 'WhatsAppで予約',
      tourism_services_title: '東アフリカを簡単に探索',
      tourism_services_subtitle: 'ロマンチックな休暇、ビジネス宿泊、家族サファリ、沿岸休暇などが必要な場合、詳細を調整し、旅程を最初から最後までスムーズにします。',
      tourism_hotel: 'ホテル予約',
      tourism_hotel_desc: '予算、場所、旅行ニーズに基づいて、ホテル滞在、ロッジ、リゾート、アパート、エグゼクティブ宿泊の手配を支援します。',
      tourism_safari: 'サファリロッジとキャンプ',
      tourism_safari_desc: 'ケニアと東アフリカの最も美しい公園と保護区の近くで、快適なサファリロッジ、テントキャンプ、自然宿泊を予約します。',
      tourism_adventure: 'サファリ旅行とアドベンチャー',
      tourism_adventure_desc: '野生動物サファリ、ゲームドライブ、熱気球体験、ガイドツアー、カスタムアドベンチャー行程を手配します。',
      tourism_beach: 'ビーチ休暇',
      tourism_beach_desc: 'リラックスできる沿岸の逃避、島風休暇、ハネムーンパッケージ、家族ビーチ旅行、海洋活動をお楽しみください。',
      tourism_resort: 'リゾート、リトリート、休暇',
      tourism_resort_desc: '顧客をレジャーリゾート、リトリート先、週末の逃避、グループ宿泊、プレミアムリラックス体験と繋げます。',
      view_all_services: "すべてのサービスを見る →",
      testimonials_label: "お客様の声",
      whatsapp_us_now: "WhatsAppで今すぐお問い合わせ",
      our_story: "私たちの物語",

      tourism_services_label: "観光サービス",
      tourism_hiking: "山岳ハイキング",
      tourism_hiking_desc:
        "東アフリカの壮大な山岳風景、美しいトレイル、忘れられないハイキング体験をお楽しみください。",
      tourism_cta_title: '次の旅行の準備はできましたか？',
      tourism_cta_subtitle: '目的地、旅行日、ゲスト数、予算を教えてください—適切な観光ツアーを計画するのを支援します。',
      tourism_cta_btn: '予約支援を依頼',
      contact_title: 'ビジネスを話しましょう',
      contact_subtitle: '輸入、輸出の準備、または質問がありますか？フォーム、メール、WhatsAppで連絡してください—通常数時間以内に返信します。',
      contact_form_title: 'メッセージを送信',
      contact_name: '氏名 *',
      contact_email: 'メールアドレス *',
      contact_phone: '電話番号',
      contact_service: '興味のあるサービス',
      contact_message: 'メッセージ *',
      contact_btn: 'メッセージを送信',
      contact_email_label: 'メールを送る',
      contact_phone_label: '電話 / WhatsApp',
      contact_location: '場所',
      contact_website: 'ウェブサイト',
      why_label: 'なぜ私たちを選ぶのか',
      why_title: 'Arakaharakaの違い',
      why_reliability: '信頼できる確実性',
      why_reliability_desc: '私たちはすべての注文に従います。商品は約束通り届き、各ステップで更新をお知らせします。',
      why_global: '真のグローバルカバレッジ',
      why_global_desc: '日本からドイツへ、中国からUAEへ—当社のサプライヤーネットワークは世界のすべての主要な貿易地域をカバーしています。',
      why_personal: 'パーソナライズされたサービス',
      why_personal_desc: '私たちのチームと直接やり取りします—コールセンターも遅延もありません。WhatsAppで連絡すれば、注文を知っている実際の人に対応します。',
      why_pricing: '競争力のある価格',
      why_pricing_desc: 'サプライヤー関係を活用して、高品質商品の最高価格を取得します—品質を犠牲にすることなく費用を節約します。',
      why_customs: '税関とコンプライアンス',
      why_customs_desc: 'すべての税関書類、関税、コンプライアンス要件を処理します—官僚的な障害を心配する必要はありません。',
      why_fast: '迅速な対応',
      why_fast_desc: '見積もりから配送まで、すべてのステップでスピードを優先します。Arakaharakaは「急ぐ」を意味し—その名にふさわしい行動をとります。',
      services_page_label: '私たちが提供するもの',
      services_page_title: '私たちのサービス',
      services_page_subtitle: 'ケニアおよびそれ以降の企業および個人向けに調整された包括的な輸出入ソリューション。',
      service_page_import: '輸入サービス',
      service_page_import_desc: '商品のケニアへの輸入のあらゆる側面を処理します—サプライヤーの検索、価格交渉、輸送手配、通関、配送。電子機器、繊維、工業品など。',
      service_page_export: '輸出サービス',
      service_page_export_desc: 'ケニアの生産者および企業が国際的な買い手に到達するのを支援します。梱包、文書化、貨物予約、規制コンプライアンスを管理してスムーズな輸出を実現します。',
      service_page_sourcing: '製品調達',
      service_page_sourcing_desc: '製品説明を送信してください。検証済みのグローバルサプライヤーから調達します。品質、価格、納期を比較して、毎回最高の取引を取得します。',
      service_page_vehicle: '車両輸入',
      service_page_vehicle_desc: '日本、英国、ドバイ、その他の市場から車、バイク、トラック、重機を輸入。オークション調達、検査、輸送、KEBSコンプライアンス、登録サポートが含まれます。',
      service_page_bulk: '大量および商業輸送',
      service_page_bulk_desc: '大量輸入企業向けに最適なレートでFCL/LCLコンテナ輸送を交渉。貨物を統合し、輸送ルートを最適化してコストを大幅に削減します。',
      service_page_logistics: '物流調整',
      service_page_logistics_desc: '完全なエンドツーエンド物流—原産地での倉庫、貨物フォワーディング、港での通関、国内輸送、ケニアのどこでも最後の1マイル配送。',
      service_page_customs: '通関',
      service_page_customs_desc: '経験豊富なチームがすべての通関書類、関税支払い、KRAコンプライアンス、KEBS検査、港の手続きを処理します—商品は遅延なしに通過します。',
      service_page_consulting: '貿易コンサルティング',
      service_page_consulting_desc: '輸出入が初めてですか？規制、コスト、タイムライン、ベストプラクティスをガイドして、毎回情報に基づいた意思決定を行えるようにします。',
      service_page_industrial: '産業と機械',
      service_page_industrial_desc: '中国、ドイツ、その他のグローバル製造ハブのトップメーカーから産業機器、工場機械、ツール、スペアパーツを調達します。',
      partners_label: '私たちのネットワーク',
      partners_title: '輸出入パートナー',
      partners_subtitle: '世界中の信頼できる輸入サプライヤーと顧客を繋ぎ、東アフリカ・中央アフリカ企業がローカル、地域、国際的に高品質製品を輸出するのを支援します。',
      partners_auto_title: '📥 輸入パートナー：自動車',
      partners_auto: '自動車輸入',
      partners_auto_desc: '信頼できる自動車輸入業者および輸出業者と顧客を繋ぎ、世界中からの車両および部品のスムーズな輸入を促進します。',
      partners_industrial_title: '📥 輸入パートナー：産業・製造サプライヤー',
      partners_luxury_title: '📥 輸入パートナー：ラグジュアリー・消費財ブランド',
      partners_asian_title: '📥 輸入パートナー：アジア製造業者・サプライヤー',
      partners_export_title: '📤 ケニアから輸出：ケニアブランド・製品',
      partners_category_all: "すべてのカテゴリ",
      category_automotive: "自動車",
      category_industrial_manufacturing: "工業・製造",
      category_luxury_consumer_goods: "高級品・消費財",
      category_asian_manufacturers: "アジアの製造業者",
      category_construction_materials: "建設資材",
      category_electronics_technology: "電子機器・技術",
      category_food_agricultural_products: "食品・農産物",
      category_african_culture: "アフリカ文化",
      category_kenyan_export_products: "ケニア輸出製品",
      partners_label: '私たちのネットワーク',
      partners_title: '輸出入製品',
      partners_subtitle: '輸入・輸出製品のカタログを検索し、配送詳細を確認し、価格と在庫についてWhatsAppでお問い合わせください。',
      partners_search_placeholder: '製品を検索...',
      partners_tab_all: '全製品',
      partners_tab_import: '輸入品',
      partners_tab_export: '輸出品',
      partners_category_all: '全カテゴリ',
      partners_ships_from: '発送元',
      partners_ships_to: '発送先',
      partners_delivery_time: '配達予定',
      partners_view_details: '詳細を見る',
      partners_request_quote: '💬 WhatsAppで見積もり依頼',
      partners_no_results: '検索条件に一致する製品が見つかりませんでした。',
      partners_cta_text: 'お探しの商品が見つかりませんか？製品やブランドについてお気軽にお問い合わせください。',
      partners_cta_button: '💬 特定の製品について問い合わせ',
      footer_desc: 'ナイロビのルアラカに拠点を置く信頼できる輸出入パートナー。東アフリカ・中央アフリカ諸国と世界を繋ぐ—1回の輸送ずつ。',
      footer_quick: 'クイックリンク',
      footer_contact: '連絡先',
      footer_faq: 'FAQ',
      faq_q1: '輸送にはどれくらい時間がかかりますか？',
      faq_a1: 'アジアからの海上輸送は25–45日かかります。航空輸送は5–10日かかります。日本からの車両は4–8週間かかります。',
      faq_q2: '注文するにはどうすればよいですか？',
      faq_a2: '注文詳細をWhatsAppまたはメールで送信してください。利用可能性を確認し、見積もりを提供し、その後処理します。',
      faq_q3: 'どの国から輸送していますか？',
      faq_a3: '中国、日本、UAE、英国、ドイツ、米国、インド、シンガポール、その他世界中の多くの国から調達しています。',
      faq_q4: '通関を処理しますか？',
      faq_a4: 'はい！すべての通関、KRAコンプライアンス、KEBS検査、港の手続きを代理で処理します。',
      footer_copyright: '© 2026 Arakaharaka Enterprises. 全著作権所有。 | 利用規約',
      footer_made: 'ケニアナイロビで❤️と共に作成🇰🇪',
      testimonials_page_label: '顧客レビュー',
      testimonials_page_title: '顧客の声',
      testimonials_page_subtitle: '私たちの言葉を信じないでください—ケニア各地の実際の顧客がArakaharaka Enterprisesとの体験について語っています。',
      testi_1: 'Arakaharakaのおかげで、日本からの車両輸入が完全にシームレスになりました。オークションからナイロビの自宅まで—すべてをプロフェッショナルに処理してくれました。間違いなく5星！',
      testi_2: 'WhatsAppを通じて非常に迅速なチーム。中国から電子機器を注文し、各段階で更新してくれました。すべて完璧な状態で受け取りました！',
      testi_3: '産業用機械を緊急に必要としていましたが、Arakaharakaは予算内でドイツから調達してくれました。通関は問題なく処理されました。また利用します！',
      testi_4: '初めての輸入者として緊張していました。チームが各ステップを忍耐強く案内してくれました。商品は予定日より前に到着しました！一緒に働く素晴らしい人々です。',
      testi_5: '中国からの大量輸送でArakaharakaと協力して2年になります。一貫性があり、信頼でき、常に最高の運賃です。私たちの頼れるパートナーです。',
      testi_6: 'ドバイから高級品が欲しかったが、どこから始めればよいか分かりませんでした。Arakaharakaは本物が保証された必要なものすべてを調達してくれました。トップクラスのサービス！',
      testimonials_cta: '素晴らしい体験をされましたか？ぜひお聞かせください！',
      testimonials_share_btn: '💬 体験を共有',
      hero_badge_1: '🚀 迅速な配送',
      hero_badge_2: '🌍 グローバル調達',
      hero_badge_3: '🤝 信頼できるパートナー',
      custom_solution_title: 'カスタムソリューションが必要ですか？',
      custom_solution_desc: 'すべてのビジネスは異なります。ニーズをお知らせいただければ、あなたに最適な輸出入計画を作成します。',
      custom_solution_btn: '📩 カスタム見積もりを取得',
      nav_dropdown_import: '輸入パートナー',
      nav_dropdown_export: 'ケニアから輸出',
      legal_label: "法的情報",
      terms_title: "利用規約",
      terms_subtitle:
        "Arakaharaka Enterprises にご注文いただく前に、以下の利用規約をよくお読みください。",

      terms_orders_payments_title: "📦 1. 注文と支払い",
      terms_orders_payments_1:
        "すべての注文は、処理開始前に電子メールまたは WhatsApp を通じて書面で確認される必要があります。",
      terms_orders_payments_2:
        "調達開始前に 50% の前金が必要であり、残額は出荷前にお支払いいただきます。",
      terms_orders_payments_3:
        "お支払いは M-Pesa、銀行振込、または双方で合意したその他の方法で行うことができます。",
      terms_orders_payments_4:
        "提示された価格は 48 時間有効であり、国際注文については為替レートの変動により変更される場合があります。",
      terms_orders_payments_5:
        "Arakaharaka Enterprises は、その裁量によりいかなる注文もお断りする権利を留保します。",

      terms_shipping_title: "🚢 2. 配送期間",
      terms_shipping_1:
        "配送予定期間は目安として提供されるものであり、保証されるものではありません。",
      terms_shipping_2:
        "アジアからの海上輸送には通常 25〜45 日かかります。航空輸送には 5〜10 営業日かかります。",
      terms_shipping_3:
        "日本からの車両輸送は、オークション購入からモンバサ港到着まで通常 4〜8 週間かかります。",
      terms_shipping_4:
        "港の混雑、税関、天候、その他当社の管理を超える要因による遅延について、Arakaharaka は責任を負いません。",
      terms_shipping_5:
        "重大な遅延が発生した場合、速やかにお客様へ通知いたします。",

      terms_liability_title: "⚖️ 3. 責任",
      terms_liability_1:
        "Arakaharaka Enterprises は代理人および仲介者として機能し、商品の製造業者または直接販売者ではありません。",
      terms_liability_2:
        "商品が輸送保険の対象である場合、輸送中の損傷について当社は責任を負いません。",
      terms_liability_3:
        "お客様は、ご自身の商品がケニアのすべての輸入規制に適合していることを確認する責任があります。",
      terms_liability_4:
        "お客様による虚偽申告により税関で押収された商品について、当社は責任を負いません。",

      terms_refund_title: "🔄 4. 返金ポリシー",
      terms_refund_1:
        "調達または購入手続きが開始された後は、前金は返金されません。",
      terms_refund_2:
        "商品が注文内容と著しく異なる場合、当社の裁量により交換または一部返金を行う場合があります。",
      terms_refund_3:
        "車両購入は各オークション会社の規約に従い、通常購入後の返金はできません。",
      terms_refund_4:
        "返金の申請は、納品後 7 日以内に書面で提出する必要があります。",

      terms_communication_title: "📬 5. 連絡および紛争",
      terms_communication_1:
        "すべての正式な連絡は harakaint@gmail.com 宛にお送りください。",
      terms_communication_2:
        "いかなる紛争も、まず双方の誠意ある協議によって解決されるものとします。",
      terms_communication_3:
        "本規約はケニアの法律に準拠します。",
      terms_communication_4:
        "Arakaharaka Enterprises に注文することにより、お客様は本規約に全面的に同意したものとみなされます。",

      terms_last_updated:
        "最終更新：2025年。本規約に関するお問い合わせは、harakaint@gmail.com までメールでご連絡ください。",
    },
    sw: {
      nav_home: 'Nyumbani',
      nav_about: 'Kuhusu',
      nav_services: 'Huduma',
      nav_tourism: 'Utalii',
      nav_partners: 'Washirika',
      nav_testimonials: 'Ushuhuda',
      nav_contact: 'Wasiliana Nasi',
      hero_title: 'Mshirika Wako wa Kuaminika wa Uagizaji na Uuzaji',
      hero_subtitle: 'Arakaharaka inaunganisha nchi za Afrika ya Mashariki na Kati na dunia — kununua bidhaa bora, magari, na bidhaa kutoka masoko ya kimataifa kwa uaminifu na uangalizi.',
      hero_cta1: 'Wasiliana Nasi',
      hero_cta2: 'Omba Bei',
      stats_clients: 'Wateja Waliofurahi',
      stats_partners: 'Vitengo vya Washirika',
      stats_countries: 'Nchi Zinazohudumiwa',
      stats_satisfaction: 'Ridhaa ya Wateja',
      services_title: 'Huduma Zetu Kuu',
      services_subtitle: 'Kutoka upatikaji wa bidhaa hadi uratibu wa usafiri, tunashughulikia changamoto ili uweze kuzingatia biashara yako.',
      service_import: 'Huduma za Uagizaji',
      service_import_desc: 'Tunagiza bidhaa mbalimbali kutoka Asia, Ulaya, na maeneo mengine moja kwa moja Kenya — elektroniki, bidhaa za nyumbani, mashine, na zingine.',
      service_export: 'Huduma za Uuzaji',
      service_export_desc: 'Tunasaidia biashara za Kenya kuuza bidhaa bora kwenye masoko ya kimataifa, tunashughulikia hati, usafiri, na sheria.',
      service_sourcing: 'Upatikaji wa Bidhaa',
      service_sourcing_desc: 'Haupati bidhaa karibu? Tunakupatia kwa ajili yako. Tuambie unachohitaji na tutakupata ubora bora kwa bei nzuri duniani.',
      service_vehicle: 'Uagizaji wa Magari',
      service_vehicle_desc: 'Agiza magari kutoka Japan, UK, UAE na zingine. Tunashughulikia ukaguzi, usafiri, forodha, na kufikisha mlangoni.',
      service_bulk: 'Usafiri wa Wingi',
      service_bulk_desc: 'Suluhisho za usafiri wa gharama nafuu kwa biashara zinazagiza wingi. Tunapangia bei bora za usafiri kwa ajili yako.',
      service_logistics: 'Uratibu wa Usafiri',
      service_logistics_desc: 'Usimamizi wa usafiri wa mwisho hadi mwisho — ghala, forodha, usafiri wa mwisho, na ufuatiliaji wa mizigo.',
      testimonials_title: 'Aminika na Wengi',
      cta_title: 'Uko Tayari Kuagiza au Kuuzaji?',
      cta_subtitle: 'Tusaidie kuagiza kwa urahisi. Tunashughulikia sehemu ngumu kwa ajili yako.',
      cta_btn: 'Wasiliana Nasi',
      testimonials_label: "Wateja Wanasema Nini",
      testimonial_1_name: "Christian M. Mayani",
      testimonial_1_role: "Mteja wa Uagizaji – DRC",
      testimonial_1_text:
        "Arakaharaka ilitusaidia kuagiza mashine nzito kutoka China kwa urahisi na weledi mkubwa. Mawasiliano na usaidizi wa usafirishaji ulikuwa bora sana.",

      testimonial_2_name: "George Solo",
      testimonial_2_role: "Mteja wa Utalii – Tanzania",
      testimonial_2_text:
        "Safari yetu ya Maasai Mara ilipangwa kikamilifu kutoka mwanzo hadi mwisho. Timu ilikuwa ya kitaalamu, yenye mwitikio mzuri, na ilifanya uzoefu wetu nchini Kenya usisahaulike.",

      testimonial_3_name: "Hedy",
      testimonial_3_role: "Meneja wa Mauzo – Hengwang Group, China",
      testimonial_3_text:
        "Tulipata kahawa bora ya Kenya na kazi za mikono kupitia Arakaharaka. Ubora, ufungashaji, na usafirishaji vilizidi matarajio yetu.",

      about_title: 'Kuhusu Arakaharaka Enterprises',
      about_subtitle: 'Zaliwa Nairobi, jengwa kwa dunia. Tuna shauku ya kuunganisha nchi za Afrika ya Mashariki na Kati na masoko ya kimataifa.',
      about_feature: 'Kuunganisha Nchi za Afrika ya Mashariki na Kati na Dunia',
      about_feature_desc: 'Tunakaa Ruaraka, Nairobi, tumeunganisha wateja wa Afrika ya Mashariki na Kati na wasambazaji wa kimataifa tangu kuanzishwa kwetu — kwa uaminifu, kasi, na utunzaji wa kibinafsi kila hatua.',
      mission: 'Dhamira Yetu',
      mission_desc: 'Kufanya biashara ya kimataifa iwe rahisi kwa kila Mkenya — kutoka mjasiriamali pekee hadi kampuni kubwa.',
      vision: 'Dira Yetu',
      vision_desc: 'Kuwa mshirika wa kuaminika zaidi wa uagizaji/uuuzaji Afrika Mashariki, anayejulikana kwa uaminifu, uwazi, na huduma bora.',
      values: 'Thamani Zetu',
      values_desc: 'Uaminifu katika kila muamala. Kasi katika kila utoaji. Guso la kibinafsi ambalo makampuni makubwa hawawezi kutoa.',
      tourism_label: 'Safari na Matukio',
      tourism_title: 'Uwekaji Nafasi Hoteli, Safari na Huduma za Utalii',
      tourism_subtitle: 'Arakaharaka inakusaidia kupanga matukio ya kusisimka ya kusafiri Kenya na Afrika Mashariki — kutoka hoteli za anasa na likizo pwani hadi safari ya wanyama, safari za kundi, uhamisho wa uwanja wa ndege, na vifungo vya utalii maalum.',
      tourism_plan: 'Panga Safari Yangu',
      tourism_whatsapp: 'Weka Nafasi kwenye WhatsApp',
      tourism_services_title: 'Gundua Afrika Mashariki kwa Urahisi',
      tourism_services_subtitle: 'Basi unahitaji likizo ya kimapenzi, malazi ya biashara, safari ya familia, au likizo pwani, tunaratibu maelezo ili safari yako iwe laini kutoka mwanzo hadi mwisho.',
      tourism_hotel: 'Uwekaji Nafasi Hoteli',
      tourism_hotel_desc: 'Tunasaidia kupanga hoteli, vibanda, vistawi, apartimenti, na malazi ya kifahari kulingana na bajeti yako, eneo, na mahitaji yako ya safari.',
      tourism_safari: 'Vibanda vya Safari na Kambi',
      tourism_safari_desc: 'Weka nafasi kwa vibanda vya safari, kambi za hema, na makao ya asili karibu na mbuga na hifadhi nzuri za Kenya na Afrika Mashariki.',
      tourism_adventure: 'Safari za Wanyama na Matukio',
      tourism_adventure_desc: 'Tunapanga safari za wanyama, drives ya mchezo, matukio ya baloni ya hewa, ziara za mwongozo, na ratiba za kusisimka za kibinafsi.',
      tourism_beach: 'Likizo za Pwani',
      tourism_beach_desc: 'Furahia likizo rahisi za pwani, likizo za kisiwa, vifungo vya honeymoon, safari za familia pwani, na shughuli za bahari.',
      tourism_resort: 'Vistawi, Makao ya Kujificha na Likizo',
      tourism_resort_desc: 'Tunawawasilisha wateja na vistawi vya burudani, makao ya kujificha, likizo za wikendi, makao ya kundi, na matukio ya kusisimka ya kifahari.',
      view_all_services: "Tazama Huduma Zote →",
      testimonials_label: "Wateja Wanasema Nini",
      whatsapp_us_now: "Tuandikie WhatsApp Sasa",
      our_story: "Hadithi Yetu",

      tourism_services_label: "Huduma za Utalii",
      tourism_hiking: "Kupanda Milima",
      tourism_hiking_desc:
        "Tembelea mandhari ya kuvutia ya milima, njia za kupendeza, na safari za kipekee za matembezi kote Afrika Mashariki.",
      tourism_cta_title: 'Uko Tayari kwa Safari Yako Ijayo?',
      tourism_cta_subtitle: 'Tuambie lengo lako, tarehe za safari, idadi ya wageni, na bajeti — tutakusaidia kupanga kifungo sahihi cha utalii.',
      tourism_cta_btn: 'Omba Msaada wa Kuweka Nafasi',
      contact_title: 'Tuongee Biashara',
      contact_subtitle: 'Uko tayari kuagiza, kuuzaji, au una maswali? Wasiliana kwa fomu, barua pepe, au WhatsApp — tunajibu kwa masaa machache.',
      contact_form_title: 'Tutumie Ujumbe',
      contact_name: 'Jina Kamili *',
      contact_email: 'Anwani ya Barua Pepe *',
      contact_phone: 'Namba ya Simu',
      contact_service: 'Huduma Unayohitaji',
      contact_message: 'Ujumbe Wako *',
      contact_btn: 'Tuma Ujumbe',
      contact_email_label: 'Tutumie Barua Pepe',
      contact_phone_label: 'Piga / WhatsApp',
      contact_location: 'Eneo',
      contact_website: 'Tovuti',
      why_label: 'Mbona Chagua Sisi',
      why_title: 'Tofauti ya Arakaharaka',
      why_reliability: 'Uaminifu Unaweza Kuhesabika',
      why_reliability_desc: 'Tunafuata kila agizo. Bidhaa zako zinakuja kama ilivyoahidiwa, na tunakuwezesha kila hatua.',
      why_global: 'Kisasa cha Kweli cha Duniani',
      why_global_desc: 'Kutoka Japan hadi Ujerumani, China hadi UAE — mtandao wetu wa wasambazaji unafunika kila mkoa muhimu wa biashara duniani.',
      why_personal: 'Huduma ya Kibinafsi',
      why_personal_desc: 'Unashughulikia moja kwa moja na timu yetu — hakuna vituo vya simu, hakika usizui. WhatsApp utu na pata mtu halisi anayejua agizo lako.',
      why_pricing: 'Bei ya Ushindani',
      why_pricing_desc: 'Tunatumia uhusiano wetu na wasambazaji ili kupata bei bora kwa bidhaa bora — kuokoa pesa zako bila kubora ubora.',
      why_customs: 'Forodha na Uzingatiaji',
      why_customs_desc: 'Tunashughulikia karatasi zote za forodha, kodi, na mahitaji ya uzingatiaji — hivyo hutahitaji kujali vikwazo vya kiutawala.',
      why_fast: 'Udhibiti wa Haraka',
      why_fast_desc: 'Tunazingatia kasi kila hatua — kutoka nukuu hadi utoaji. Arakaharaka inamaanisha "haraka" — na tunatimiza jina.',
      services_page_label: 'Tunachotoa',
      services_page_title: 'Huduma Zetu',
      services_page_subtitle: 'Suluhisho kamili za uagizaji na uuzaji zilizoundwa kwa biashara na watu binafsi Kenya na zaidi.',
      service_page_import: 'Huduma za Uagizaji',
      service_page_import_desc: 'Tunashughulikia kila kipande cha kuagiza bidhaa Kenya — kutoka kupata wasambazaji, kupangia bei, kuandaa usafiri, forodha, na utoaji. Elektroniki, nguo, bidhaa za viwanda, na zingine.',
      service_page_export: 'Huduma za Uuzaji',
      service_page_export_desc: 'Kusaidia wazalishi na biashara za Kenya kufikia wanunuzi wa kimataifa. Tunashughulikia ufungaji, hati, kuweka nafasi ya mizigo, na uzingatiaji wa sheria kwa uuzaji rahisi.',
      service_page_sourcing: 'Upatikaji wa Bidhaa',
      service_page_sourcing_desc: 'Tutumie maelezo ya bidhaa na tutakipata kutoka kwa wasambazaji waliothibitishwa duniani. Tunalinganisha ubora, bei, na muda wa utoaji ili upate mpango bora kila wakati.',
      service_page_vehicle: 'Uagizaji wa Magari',
      service_page_vehicle_desc: 'Agiza magari, pikipiki, malori, na mashine nzito kutoka Japan, UK, Dubai, na masoko mengine. Inajumuisha chanzo la mnada, ukaguzi, usafiri, uthibitisho wa KEBS, na msaada wa usajili.',
      service_page_bulk: 'Usafiri wa Wingi wa Biashara',
      service_page_bulk_desc: 'Pangia usafiri wa kontena FCL/LCL wa kiwango cha juu kwa biashara zinazoagiza wingi. Tunakusanya mizigo na kuboresha njia za mizigo ili kupunguza gharama zako kwa kiasi kikubwa.',
      service_page_logistics: 'Uratibu wa Usafiri',
      service_page_logistics_desc: 'Usafiri kamili wa mwisho hadi mwisho — ghala katika chanzo, usafiri wa mizigo, forodha ya bandari, usafiri wa ndani, na utoaji wa mwisho hadi makao yako popote Kenya.',
      service_page_customs: 'Forodha ya Kuondoa',
      service_page_customs_desc: 'Timu yetu yenye uzoefu inashughulikia karatasi zote za forodha, malipo ya kodi, uthibitisho wa KRA, ukaguzi wa KEBS, na taratibu za bandari — hivyo bidhaa zako hupita bila usizui.',
      service_page_consulting: 'Ushauri wa Biashara',
      service_page_consulting_desc: 'Mpya kwa uagizaji au uuzaji? Tunakuongoza kupitia sheria, gharama, muda, na mazoea bora ili ufanya maamuzi yenye maarifa kila wakati.',
      service_page_industrial: 'Viwanda na Mashine',
      service_page_industrial_desc: 'Pata vifaa viwanda, mashine kiwanda, vyombo, na sehemu za akiba kutoka wazalishaji wakuu China, Ujerumani, na vituo vingine vya utengenezaji duniani.',
      partners_label: 'Mtandao Wetu',
      partners_title: 'Washirika wa Uagizaji na Uuzaji',
      partners_subtitle: 'Tunawawasilisha wateja na wasambazaji wa uagizaji wa kuaminika duniani na kusaidia kampuni za Afrika Mashariki na Kati kuuza bidhaa bora ndani, kikanda, na nje ya nchi.',
      partners_auto_title: '📥 Washirika wa Uagizaji: Magari',
      partners_auto: 'Uagizaji wa Magari',
      partners_auto_desc: 'Tunawawasilisha wateja na waagizaji na wauzaji wa magari wa kuaminika, kurahisisha uagizaji wa magari na sehemu kutoka sehemu zote za dunia.',
      partners_industrial_title: '📥 Washirika wa Uagizaji: Wasambazaji wa Viwanda na Utengenezaji',
      partners_luxury_title: '📥 Washirika wa Uagizaji: Chapa za Lux na Bidhaa za Watumiaji',
      partners_asian_title: '📥 Washirika wa Uagizaji: Wazalishaji na Wasambazaji wa Asia',
      partners_export_title: '📤 Uuzaji kutoka Kenya: Chapa na Bidhaa za Kenya',
      partners_category_all: "Makundi Yote",
      category_automotive: "Magari",
      category_industrial_manufacturing: "Viwanda na Uzalishaji",
      category_luxury_consumer_goods: "Bidhaa za Kifahari na Matumizi",
      category_asian_manufacturers: "Watengenezaji wa Asia",
      category_construction_materials: "Vifaa vya Ujenzi",
      category_electronics_technology: "Elektroniki na Teknolojia",
      category_food_agricultural_products: "Bidhaa za Chakula na Kilimo",
      category_african_culture: "Utamaduni wa Afrika",
      category_kenyan_export_products: "Bidhaa za Uuzaji wa Kenya",
      partners_label: 'Mtandao Wetu',
      partners_title: 'Bidhaa za Kuagiza na Kuuza',
      partners_subtitle: 'Tafuta orodha yetu ya bidhaa za kuagiza na kuuza, angalia maelezo ya usafirishaji, na wasiliana nasi kupitia WhatsApp kwa bei na upatikanaji.',
      partners_search_placeholder: 'Tafuta bidhaa...',
      partners_tab_all: 'Bidhaa Zote',
      partners_tab_import: 'Bidhaa za Kuagiza',
      partners_tab_export: 'Bidhaa za Kuuza',
      partners_category_all: 'Kategoria Zote',
      partners_ships_from: 'Inatumwa Kutoka',
      partners_ships_to: 'Inatumwa Kwenda',
      partners_delivery_time: 'Muda wa Uwasilishaji',
      partners_view_details: 'Angalia Maelezo',
      partners_request_quote: '💬 Omba Bei WhatsApp',
      partners_no_results: 'Hakuna bidhaa zilizopatikana zinazolingana na utafutaji wako.',
      partners_cta_text: 'Hupati unachotafuta? Tuulize kuhusu bidhaa yoyote, chapa, au mahitaji maalum na tutakupata.',
      partners_cta_button: '💬 Uliza Kuhusu Bidhaa Maalum',
      footer_desc: 'Mshirika wako wa kuaminika wa uagizaji na uuzaji unaotengwa Ruaraka, Nairobi. Kuunganisha nchi za Afrika Mashariki na Kati na dunia — kwa kila kume.',
      footer_quick: 'Viungo vya Haraka',
      footer_contact: 'Wasiliana',
      footer_faq: 'FAQ',
      faq_q1: 'Usafiri huwa muda gani?',
      faq_a1: 'Usafiri wa bahari kutoka Asia huchukua siku 25–45. Usafiri wa anga huchukua siku 5–10. Magari kutoka Japan huchukua wiki 4–8.',
      faq_q2: 'Ninawezaje kuweka agizo?',
      faq_a2: 'WhatsApp au barua pepe tu na maelezo ya agizo lako. Tutathibitisha upatikanaji, kupeana nukuu, na kuchukua kutoka hapo.',
      faq_q3: 'Nchi zipi mnatoa usafiri?',
      faq_a3: 'Tunapatoka China, Japan, UAE, UK, Ujerumani, USA, India, Singapore, na nchi nyingine zaidi duniani.',
      faq_q4: 'Mnashughulikia forodha?',
      faq_a4: 'Ndiyo! Tunashughulikia forodha yote ya kuondoa, uthibitisho wa KRA, ukaguzi wa KEBS, na taratibu za bandari kwa niaba yako.',
      footer_copyright: '© 2026 Arakaharaka Enterprises. Haki zote zimehifadhiwa. | Masharti na Sharti',
      footer_made: 'Imetengenezwa kwa ❤️ Nairobi, Kenya 🇰🇪',
      testimonials_page_label: 'Ushuhuda wa Wateja',
      testimonials_page_title: 'Wach Wateja Wanasema',
      testimonials_page_subtitle: 'Usiamini maneno yetu — huu ni wateja halisi Kenya wanachosema kuhusu uzoefu wao na Arakaharaka Enterprises.',
      testi_1: 'Arakaharaka ilifanya uagizaji wa gari langu kutoka Japan kuwa rahisi kabisa. Kutoka mnada hadi mlango wangu Nairobi — walishughulikia kila kitu kitaalamu. Nyota 5 kwa hakika!',
      testi_2: 'Timu inayojibu haraka kupitia WhatsApp. Nilikuweka agizo la elektroniki kutoka China na waliniwezesha kila hatua. Nilipata kila kitu katika hali nzuri!',
      testi_3: 'Tulihitaji mashine za viwandani kwa haraka na Arakaharaka ilipata kutoka Ujerumani ndani ya bajeti yetu. Forodha ilishughulikikiwa bila shida yoyote. Tutatumia tena!',
      testi_4: 'Kama mpelelezi wa kwanza, nilikuwa na wasiwasi. Timu iliniongoza kila hatua kwa subira. Bidhaa zangu zilifika kabla ya tarehe iliyotarajiwa! Watu wazuri wa kufanya nao kazi.',
      testi_5: 'Tumefanya kazi na Arakaharaka kwa usafiri wa wingi kutoka China kwa miaka 2 sasa. Iliendelea, ilikuwa ya kuaminika, na daima bei bora za usafiri. Washirika wetu wa kwanza.',
      testi_6: 'Nilitaka bidhaa za anasa kutoka Dubai na sikujua wapi kuanza. Arakaharaka ilipata kila kitu nilichohitaji kwa uhakika wa kweli. Huduma ya daraja la juu!',
      testimonials_cta: 'Ulikuwa na uzoefu mzuri nasi? Tusingependa kusikia kutoka kwako!',
      testimonials_share_btn: '💬 Shiriki Uzoefu Wako',
      hero_badge_1: '🚀 Usafiri wa Haraka',
      hero_badge_2: '🌍 Uchimbaji wa Kimataifa',
      hero_badge_3: '🤝 Washirika wa Kuaminika',
      custom_solution_title: 'Unahitaji Suluhisho Maalum?',
      custom_solution_desc: 'Kila biashara ni tofauti. Tuambie mahitaji yako na tutafanya mpango wa uagizaji/uuaji bora kwa ajili yako.',
      custom_solution_btn: '📩 Pata Nukuu Maalum',
      nav_dropdown_import: 'Washirika wa Uagizaji',
      nav_dropdown_export: 'Uuaji kutoka Kenya',
      legal_label: "Kisheria",
      terms_title: "Sheria na Masharti",
      terms_subtitle:
        "Tafadhali soma masharti haya kwa makini kabla ya kuagiza kutoka Arakaharaka Enterprises.",

      terms_orders_payments_title: "📦 1. Maagizo na Malipo",
      terms_orders_payments_1:
        "Maagizo yote lazima yathibitishwe kwa maandishi kupitia barua pepe au WhatsApp kabla ya usindikaji kuanza.",
      terms_orders_payments_2:
        "Amana ya 50% inahitajika kabla ya utafutaji wa bidhaa kuanza, na salio hulipwa kabla ya usafirishaji.",
      terms_orders_payments_3:
        "Malipo yanaweza kufanywa kupitia M-Pesa, uhamisho wa benki, au njia nyingine zilizokubaliwa.",
      terms_orders_payments_4:
        "Bei zilizotolewa ni halali kwa saa 48 na zinaweza kubadilika kutokana na mabadiliko ya viwango vya ubadilishaji kwa maagizo ya kimataifa.",
      terms_orders_payments_5:
        "Arakaharaka Enterprises ina haki ya kukataa agizo lolote kwa hiari yake.",

      terms_shipping_title: "🚢 2. Ratiba za Usafirishaji",
      terms_shipping_1:
        "Makadirio ya muda wa uwasilishaji hutolewa kama mwongozo tu na hayajahakikishwa.",
      terms_shipping_2:
        "Usafirishaji wa baharini kutoka Asia kwa kawaida huchukua siku 25–45. Usafirishaji wa anga huchukua siku 5–10 za kazi.",
      terms_shipping_3:
        "Usafirishaji wa magari kutoka Japani kwa kawaida huchukua wiki 4–8 kutoka ununuzi wa mnada hadi bandari ya Mombasa.",
      terms_shipping_4:
        "Kuchelewa kutokana na msongamano bandarini, forodha, hali ya hewa, au sababu nyingine zisizo ndani ya uwezo wetu si jukumu la Arakaharaka.",
      terms_shipping_5:
        "Wateja watajulishwa haraka kuhusu ucheleweshaji wowote mkubwa.",

      terms_liability_title: "⚖️ 3. Dhima",
      terms_liability_1:
        "Arakaharaka Enterprises hufanya kazi kama wakala na mwezeshaji na si mtengenezaji au muuzaji wa moja kwa moja wa bidhaa.",
      terms_liability_2:
        "Hatuwajibiki kwa bidhaa zilizoharibika wakati wa usafirishaji ikiwa zimefunikwa na bima ya usafirishaji.",
      terms_liability_3:
        "Ni wajibu wa mteja kuhakikisha kuwa bidhaa zake zinazingatia sheria zote za uagizaji za Kenya.",
      terms_liability_4:
        "Hatuwajibiki kwa bidhaa zilizokamatwa na forodha kutokana na taarifa zisizo sahihi zilizotolewa na mteja.",

      terms_refund_title: "🔄 4. Sera ya Marejesho",
      terms_refund_1:
        "Amana hazirejeshwi mara tu utafutaji au ununuzi wa bidhaa unapoanza.",
      terms_refund_2:
        "Ikiwa bidhaa zinatofautiana kwa kiasi kikubwa na zilizoagizwa, bidhaa mbadala au marejesho ya sehemu yanaweza kupangwa kwa hiari yetu.",
      terms_refund_3:
        "Ununuzi wa magari unafuata masharti ya kampuni ya mnada husika na kwa kawaida haurudishwi baada ya ununuzi.",
      terms_refund_4:
        "Maombi ya marejesho lazima yawasilishwe kwa maandishi ndani ya siku 7 baada ya kupokea bidhaa.",

      terms_communication_title: "📬 5. Mawasiliano na Migogoro",
      terms_communication_1:
        "Mawasiliano yote rasmi yanapaswa kutumwa kwa harakaint@gmail.com.",
      terms_communication_2:
        "Migogoro yoyote itashughulikiwa kwanza kupitia mazungumzo ya nia njema kati ya pande zote mbili.",
      terms_communication_3:
        "Masharti haya yanatawaliwa na sheria za Kenya.",
      terms_communication_4:
        "Kwa kuagiza kutoka Arakaharaka Enterprises, unakubali sheria na masharti haya kikamilifu.",

      terms_last_updated:
        "Ilisasishwa mwisho: 2025. Kwa maswali kuhusu masharti haya, tuma barua pepe kwa harakaint@gmail.com.",
    },
    fr: {
      nav_home: 'Accueil',
      nav_about: 'À propos',
      nav_services: 'Services',
      nav_tourism: 'Tourisme',
      nav_partners: 'Partenaires',
      nav_testimonials: 'Témoignages',
      nav_contact: 'Contactez-nous',
      hero_title: 'Votre Partenaire de Confiance pour l\'Import et l\'Export',
      hero_subtitle: 'Arakaharaka relie les pays d\'Afrique de l\'Est et Centrale au monde — sourçant des produits de qualité, des véhicules et des biens des marchés mondiaux avec fiabilité et soin.',
      hero_cta1: 'Contactez-nous',
      hero_cta2: 'Demander un Devis',
      stats_clients: 'Clients Satisfaits',
      stats_partners: 'Marques Partenaires',
      stats_countries: 'Pays Desservis',
      stats_satisfaction: 'Satisfaction Client',
      services_title: 'Nos Services Principaux',
      services_subtitle: 'Du sourçage de produits à la coordination logistique, nous gérons la complexité pour que vous puissiez vous concentrer sur votre entreprise.',
      service_import: 'Services d\'Importation',
      service_import_desc: 'Nous importons une large gamme de marchandises d\'Asie, d\'Europe et d\'ailleurs directement vers le Kenya — électronique, articles ménagers, machines, et plus.',
      service_export: 'Services d\'Exportation',
      service_export_desc: 'Nous aidons les entreprises kenyanes à exporter des produits de qualité vers les marchés internationaux, gérant la documentation, la logistique et la conformité.',
      service_sourcing: 'Sourçage de Produits',
      service_sourcing_desc: 'Vous ne trouvez pas un produit localement? Nous le sourçons pour vous. Dites-nous ce dont vous avez besoin et nous trouverons la meilleure qualité au meilleur prix dans le monde.',
      service_vehicle: 'Importation de Véhicules',
      service_vehicle_desc: 'Importez des véhicules du Japon, du Royaume-Uni, des EAU et plus. Nous gérons l\'inspection, l\'expédition, le dédouanement et la livraison à votre porte.',
      service_bulk: 'Expédition en Vrac',
      service_bulk_desc: 'Solutions d\'expédition en vrac rentables pour les entreprises important de grandes quantités. Nous négocions les meilleurs tarifs de fret en votre nom.',
      service_logistics: 'Coordination Logistique',
      service_logistics_desc: 'Gestion logistique de bout en bout — entreposage, dédouanement, livraison de dernier kilomètre et suivi des expéditions en temps réel.',
      testimonials_title: 'Approuvé par Beaucoup',
      cta_title: 'Prêt à Importer ou Exporter?',
      cta_subtitle: 'Laissez-nous vous aider à importer facilement. Nous gérons la partie difficile pour vous.',
      cta_btn: 'Contactez-nous',
      testimonials_label: "Ce Que Disent Nos Clients",
      testimonial_1_name: "Christian M. Mayani",
      testimonial_1_role: "Client Importation – RDC",
      testimonial_1_text:
        "Arakaharaka nous a aidés à importer des machines lourdes depuis la Chine de manière fluide et professionnelle. Leur communication et leur soutien logistique étaient exceptionnels.",

      testimonial_2_name: "George Solo",
      testimonial_2_role: "Client Tourisme – Tanzanie",
      testimonial_2_text:
        "Notre safari au Maasai Mara a été parfaitement organisé du début à la fin. L'équipe était professionnelle, réactive et a rendu notre expérience au Kenya inoubliable.",

      testimonial_3_name: "Hedy",
      testimonial_3_role: "Manager de Ventes – Hengwang Group, Chine",
      testimonial_3_text:
        "Nous avons acheté du café kenyan haut de gamme et de l'artisanat via Arakaharaka. La qualité, l'emballage et la livraison ont dépassé nos attentes.",
      about_title: 'À propos d\'Arakaharaka Enterprises',
      about_subtitle: 'Né à Nairobi, construit pour le monde. Nous sommes passionnés par la connexion des pays d\'Afrique de l\'Est et Centrale aux marchés mondiaux.',
      about_feature: 'Connecter les Pays d\'Afrique de l\'Est et Centrale au Monde',
      about_feature_desc: 'Basé à Ruaraka, Nairobi, nous comblons le fossé entre les acheteurs d\'Afrique de l\'Est et Centrale et les fournisseurs mondiaux depuis notre fondation — avec confiance, rapidité et attention personnelle à chaque étape.',
      mission: 'Notre Mission',
      mission_desc: 'Rendre le commerce mondial accessible et facile pour chaque Kenyan — de l\'entrepreneur solo à la grande entreprise.',
      vision: 'Notre Vision',
      vision_desc: 'Être le partenaire d\'import/export le plus fiable en Afrique de l\'Est, connu pour sa fiabilité, sa transparence et son service exceptionnel.',
      values: 'Nos Valeurs',
      values_desc: 'Intégrité dans chaque transaction. Rapidité dans chaque livraison. Une touche personnelle que les grandes entreprises ne peuvent pas offrir.',
      tourism_label: 'Voyage et Expériences',
      tourism_title: 'Réservations Hôtel, Safari et Services Touristiques',
      tourism_subtitle: 'Arakaharaka vous aide à planifier des expériences de voyage inoubliables à travers le Kenya et l\'Afrique de l\'Est — des séjours hôteliers de luxe et vacances à la plage aux safaris d\'aventure, voyages de groupe, transferts aéroport, et forfaits touristiques personnalisés.',
      tourism_plan: 'Planifier Mon Voyage',
      tourism_whatsapp: 'Réserver sur WhatsApp',
      tourism_services_title: 'Explorez l\'Afrique de l\'Est Facilement',
      tourism_services_subtitle: 'Que vous ayez besoin d\'une escapade romantique, d\'un hébergement d\'affaires, d\'un safari en famille ou de vacances à la plage, nous coordonnons les détails pour que votre voyage soit fluide du début à la fin.',
      tourism_hotel: 'Réservations Hôtel',
      tourism_hotel_desc: 'Nous aidons à organiser des séjours hôteliers, lodges, stations, appartements et hébergements exécutifs en fonction de votre budget, de votre emplacement et de vos besoins de voyage.',
      tourism_safari: 'Lodges et Camps Safari',
      tourism_safari_desc: 'Réservez des lodges safari confortables, des camps sous tente et des séjours nature près des plus beaux parcs et réserves du Kenya et de l\'Afrique de l\'Est.',
      tourism_adventure: 'Safaris et Aventures',
      tourism_adventure_desc: 'Nous organisons des safaris faune, drives de jeu, expériences en montgolfière, visites guidées et itinéraires d\'aventure personnalisés.',
      tourism_beach: 'Vacances à la Plage',
      tourism_beach_desc: 'Profitez d\'escapes côtières relaxantes, vacances insulaires, forfaits lune de miel, voyages familiaux à la plage et activités océaniques.',
      tourism_resort: 'Stations, Retraites et Escapades',
      tourism_resort_desc: 'Nous connectons les clients avec des stations de loisirs, des destinations de retraite, escapades de week-end, séjours de groupe et expériences de détente premium.',
      view_all_services: "Voir Tous Les Services →",
      testimonials_label: "Ce Que Disent Nos Clients",
      whatsapp_us_now: "Contactez-Nous sur WhatsApp",
      our_story: "Notre Histoire",

      tourism_services_label: "Services Touristiques",
      tourism_hiking: "Randonnée en Montagne",
      tourism_hiking_desc:
        "Découvrez des paysages montagneux spectaculaires, des sentiers pittoresques et des aventures de randonnée inoubliables à travers l'Afrique de l'Est.",
      tourism_cta_title: 'Prêt pour Votre Prochain Voyage?',
      tourism_cta_subtitle: 'Dites-nous votre destination, vos dates de voyage, le nombre d\'invités et votre budget — nous vous aiderons à planifier le bon forfait touristique.',
      tourism_cta_btn: 'Demander de l\'Aide de Réservation',
      contact_title: 'Parlons Affaires',
      contact_subtitle: 'Prêt à importer, exporter ou avez-vous des questions? Contactez-nous via le formulaire, l\'email ou WhatsApp — nous répondons généralement en quelques heures.',
      contact_form_title: 'Envoyez-nous un Message',
      contact_name: 'Nom Complet *',
      contact_email: 'Adresse Email *',
      contact_phone: 'Numéro de Téléphone',
      contact_service: 'Service Intéressé',
      contact_message: 'Votre Message *',
      contact_btn: 'Envoyer le Message',
      contact_email_label: 'Email-nous',
      contact_phone_label: 'Appeler / WhatsApp',
      contact_location: 'Emplacement',
      contact_website: 'Site Web',
      why_label: 'Pourquoi Nous Choisir',
      why_title: 'La Différence Arakaharaka',
      why_reliability: 'Fiabilité Sur Laquelle Compter',
      why_reliability_desc: 'Nous suivons chaque commande. Vos marchandises arrivent comme promis, et nous vous tenons informé à chaque étape.',
      why_global: 'Vraie Portée Mondiale',
      why_global_desc: 'Du Japon à l\'Allemagne, de la Chine aux EAU — notre réseau de fournisseurs couvre chaque région commerciale majeure du monde.',
      why_personal: 'Service Personnalisé',
      why_personal_desc: 'Vous traitez directement avec notre équipe — pas de centres d\'appel, pas de délais. WhatsApp-nous et obtenez une personne réelle qui connaît votre commande.',
      why_pricing: 'Prix Compétitifs',
      why_pricing_desc: 'Nous exploitons nos relations fournisseurs pour obtenir les meilleurs prix sur les marchandises de qualité — économisant votre argent sans compromettre la qualité.',
      why_customs: 'Douanes & Conformité',
      why_customs_desc: 'Nous gérons toute la paperasse douanière, les droits et les exigences de conformité — vous n\'avez jamais à vous soucier des obstacles bureaucratiques.',
      why_fast: 'Rotation Rapide',
      why_fast_desc: 'Nous priorisons la vitesse à chaque étape — du devis à la livraison. Arakaharaka signifie "se presser" — et nous vivons selon le nom.',
      services_page_label: 'Ce Que Nous Offrons',
      services_page_title: 'Nos Services',
      services_page_subtitle: 'Solutions complètes d\'importation et d\'exportation adaptées aux entreprises et particuliers au Kenya et au-delà.',
      service_page_import: 'Services d\'Importation',
      service_page_import_desc: 'Nous gérons chaque aspect de l\'importation de marchandises au Kenya — de la recherche de fournisseurs, négociation des prix, organisation de l\'expédition, dédouanement et livraison. Électronique, textiles, marchandises industrielles, et plus.',
      service_page_export: 'Services d\'Exportation',
      service_page_export_desc: 'Aider les producteurs et entreprises kenyans à atteindre les acheteurs internationaux. Nous gérons l\'emballage, la documentation, la réservation de fret et la conformité réglementaire pour des exportations fluides.',
      service_page_sourcing: 'Sourçage de Produits',
      service_page_sourcing_desc: 'Envoyez-nous une description de produit et nous le sourcerons auprès de fournisseurs mondiaux vérifiés. Nous comparons la qualité, les prix et les délais de livraison pour obtenir la meilleure offre à chaque fois.',
      service_page_vehicle: 'Importation de Véhicules',
      service_page_vehicle_desc: 'Importez des voitures, motos, camions et machinerie lourde du Japon, Royaume-Uni, Dubaï et autres marchés. Inclut le sourçage aux enchères, inspection, expédition, conformité KEBS et support d\'enregistrement.',
      service_page_bulk: 'Expédition Commerciale & en Vrac',
      service_page_bulk_desc: 'Négociez l\'expédition de conteneurs FCL/LCL au meilleur taux pour les entreprises important de gros volumes. Nous consolidons le fret et optimisons les routes pour réduire considérablement vos coûts.',
      service_page_logistics: 'Coordination Logistique',
      service_page_logistics_desc: 'Logistique complète de bout en bout — entreposage à l\'origine, fret, dédouanement portuaire, transport intérieur et livraison de dernier kilometer à vos locaux partout au Kenya.',
      service_page_customs: 'Dédouanement',
      service_page_customs_desc: 'Notre équipe expérimentée gère toute la documentation douanière, le paiement des droits, la conformité KRA, les inspections KEBS et les procédures portuaires — vos marchandises passent sans délais.',
      service_page_consulting: 'Consultation Commerciale',
      service_page_consulting_desc: 'Nouveau à l\'importation ou l\'exportation? Nous vous guidons à travers les réglementations, coûts, délais et meilleures pratiques pour prendre des décisions éclairées à chaque fois.',
      service_page_industrial: 'Industriel & Machinerie',
      service_page_industrial_desc: 'Sourcez des équipements industriels, machines d\'usine, outils et pièces de rechange auprès des meilleurs fabricants en Chine, Allemagne et autres hubs manufacturiers mondiaux.',
      partners_label: 'Notre Réseau',
      partners_title: 'Partenaires d\'Import & Export',
      partners_subtitle: 'Nous connectons les clients aux fournisseurs d\'importation de confiance dans le monde entier et aidons les entreprises d\'Afrique de l\'Est et Centrale à exporter des produits de qualité localement, régionalement et à l\'étranger.',
      partners_auto_title: '📥 Partenaires d\'Import: Automobile',
      partners_auto: 'Importation Automobile',
      partners_auto_desc: 'Nous connectons les clients aux importateurs et exportateurs automobiles de confiance, facilitant l\'importation fluide de véhicules et pièces du monde entier.',
      partners_industrial_title: '📥 Partenaires d\'Import: Fournisseurs Industriels & Manufacturiers',
      partners_luxury_title: '📥 Partenaires d\'Import: Marques de Luxe & Consommation',
      partners_asian_title: '📥 Partenaires d\'Import: Fabricants & Fournisseurs Asiatiques',
      partners_export_title: '📤 Export du Kenya: Marques & Produits Kényans',
      partners_category_all: "Toutes les Catégories",
      category_automotive: "Automobile",
      category_industrial_manufacturing: "Industrie et Fabrication",
      category_luxury_consumer_goods: "Produits de Luxe et de Consommation",
      category_asian_manufacturers: "Fabricants Asiatiques",
      category_construction_materials: "Matériaux de Construction",
      category_electronics_technology: "Électronique et Technologie",
      category_food_agricultural_products: "Produits Alimentaires et Agricoles",
      category_african_culture: "Culture Africaine",
      category_kenyan_export_products: "Produits d'Exportation du Kenya",
      partners_label: 'Notre Réseau',
      partners_title: 'Produits d\'Import & Export',
      partners_subtitle: 'Recherchez notre catalogue de produits d\'importation et d\'exportation, consultez les détails d\'expédition, et contactez-nous via WhatsApp pour les prix et la disponibilité.',
      partners_search_placeholder: 'Rechercher des produits...',
      partners_tab_all: 'Tous les Produits',
      partners_tab_import: 'Produits d\'Importation',
      partners_tab_export: 'Produits d\'Exportation',
      partners_category_all: 'Toutes les Catégories',
      partners_ships_from: 'Expédié De',
      partners_ships_to: 'Expédié À',
      partners_delivery_time: 'Livraison Estimée',
      partners_view_details: 'Voir Détails',
      partners_request_quote: '💬 Demander un Devis WhatsApp',
      partners_no_results: 'Aucun produit trouvé correspondant à votre recherche.',
      partners_cta_text: 'Vous ne trouvez pas ce que vous cherchez? Demandez-nous à propos de tout produit ou exigence spéciale.',
      partners_cta_button: '💬 Renseignez-vous sur un Produit', 
      footer_desc: 'Votre partenaire d\'import & export de confiance basé à Ruaraka, Nairobi. Connectant les pays d\'Afrique de l\'Est et Centrale au monde — un envoi à la fois.',
      footer_quick: 'Liens Rapides',
      footer_contact: 'Contact',
      footer_faq: 'FAQ',
      faq_q1: 'Combien de temps prend l\'expédition?',
      faq_a1: 'Le fret maritime d\'Asie prend 25–45 jours. Le fret aérien prend 5–10 jours. Les véhicules du Japon prennent 4–8 semaines.',
      faq_q2: 'Comment passer une commande?',
      faq_a2: 'WhatsApp ou email-nous avec les détails de votre commande. Nous confirmerons la disponibilité, fournirons un devis et prendrons le relais.',
      faq_q3: 'De quels pays expédiez-vous?',
      faq_a3: 'Nous sourçons de Chine, Japon, EAU, Royaume-Uni, Allemagne, USA, Inde, Singapour et bien d\'autres pays dans le monde.',
      faq_q4: 'Gérez-vous les douanes?',
      faq_a4: 'Oui! Nous gérons tout le dédouanement, la conformité KRA, les inspections KEBS et les procédures portuaires en votre nom.',
      footer_copyright: '© 2026 Arakaharaka Enterprises. Tous droits réservés. | Conditions Générales',
      footer_made: 'Fait avec ❤️ à Nairobi, Kenya 🇰🇪',
      testimonials_page_label: 'Avis Clients',
      testimonials_page_title: 'Ce Que Disent Nos Clients',
      testimonials_page_subtitle: 'Ne nous croyez pas sur parole — voici ce que de vrais clients à travers le Kenya disent de leur expérience avec Arakaharaka Enterprises.',
      testi_1: 'Arakaharaka a rendu l\'importation de mon véhicule du Japon totalement fluide. De l\'enchère à ma porte à Nairobi — ils ont tout géré professionnellement. Absolument 5 étoiles!',
      testi_2: 'Équipe super réactive via WhatsApp. J\'ai passé une commande d\'électronique de Chine et ils m\'ont tenu informé à chaque étape. Tout reçu en parfait état!',
      testi_3: 'Nous avions besoin urgent de machines industrielles et Arakaharaka les a trouvées en Allemagne dans notre budget. Les douanes ont été gérées sans problème. À utiliser à nouveau!',
      testi_4: 'En tant qu\'importateur débutant, j\'étais nerveux. L\'équipe m\'a guidé patiemment à chaque étape. Mes marchandises sont arrivées avant la date estimée! Excellentes personnes avec qui travailler.',
      testi_5: 'Nous travaillons avec Arakaharaka pour les expéditions en vrac de Chine depuis 2 ans maintenant. Cohérent, fiable, et toujours les meilleurs tarifs de fret. Ils sont notre partenaire de référence.',
      testi_6: 'Je voulais des articles de luxe de Dubaï et je ne savais pas par où commencer. Arakaharaka a tout trouvé dont j\'avais besoin avec authenticité garantie. Service de premier niveau!',
      testimonials_cta: 'Avez-vous eu une excellente expérience avec nous? Nous aimerions avoir de vos nouvelles!',
      testimonials_share_btn: '💬 Partagez Votre Expérience',
      hero_badge_1: '🚀 Expédition Rapide',
      hero_badge_2: '🌍 Approvisionnement Mondial',
      hero_badge_3: '🤝 Partenaires de Confiance',
      custom_solution_title: 'Besoin d\'une Solution Personnalisée?',
      custom_solution_desc: 'Chaque entreprise est différente. Dites-nous vos besoins et nous créerons le plan d\'import/export parfait pour vous.',
      custom_solution_btn: '📩 Obtenir un Devis Personnalisé',
      nav_dropdown_import: 'Partenaires d\'Import',
      nav_dropdown_export: 'Exporter du Kenya',
      legal_label: "Mentions Légales",
      terms_title: "Conditions Générales",
      terms_subtitle:
        "Veuillez lire attentivement ces conditions avant de passer une commande auprès d'Arakaharaka Enterprises.",

      terms_orders_payments_title: "📦 1. Commandes et Paiements",
      terms_orders_payments_1:
        "Toutes les commandes doivent être confirmées par écrit par e-mail ou WhatsApp avant le début du traitement.",
      terms_orders_payments_2:
        "Un acompte de 50 % est requis avant le début de l'approvisionnement, le solde étant dû avant l'expédition.",
      terms_orders_payments_3:
        "Le paiement peut être effectué via M-Pesa, virement bancaire ou tout autre mode convenu.",
      terms_orders_payments_4:
        "Les prix indiqués sont valables pendant 48 heures et peuvent varier en fonction des fluctuations des taux de change pour les commandes internationales.",
      terms_orders_payments_5:
        "Arakaharaka Enterprises se réserve le droit de refuser toute commande à sa discrétion.",

      terms_shipping_title: "🚢 2. Délais d'Expédition",
      terms_shipping_1:
        "Les délais de livraison estimés sont fournis à titre indicatif uniquement et ne sont pas garantis.",
      terms_shipping_2:
        "Le fret maritime depuis l'Asie prend généralement 25 à 45 jours. Le fret aérien prend 5 à 10 jours ouvrables.",
      terms_shipping_3:
        "Les expéditions de véhicules depuis le Japon prennent généralement 4 à 8 semaines entre l'achat aux enchères et l'arrivée au port de Mombasa.",
      terms_shipping_4:
        "Les retards dus à la congestion portuaire, aux douanes, aux conditions météorologiques ou à d'autres facteurs indépendants de notre volonté ne relèvent pas de la responsabilité d'Arakaharaka.",
      terms_shipping_5:
        "Les clients seront rapidement informés de tout retard important.",

      terms_liability_title: "⚖️ 3. Responsabilité",
      terms_liability_1:
        "Arakaharaka Enterprises agit en tant qu'agent et facilitateur et n'est ni le fabricant ni le vendeur direct des marchandises.",
      terms_liability_2:
        "Nous ne sommes pas responsables des marchandises endommagées pendant le transport si elles sont couvertes par une assurance maritime.",
      terms_liability_3:
        "Il incombe au client de veiller au respect de toutes les réglementations kenyanes en matière d'importation pour ses marchandises.",
      terms_liability_4:
        "Nous ne sommes pas responsables des marchandises saisies par les douanes en raison de fausses déclarations faites par le client.",

      terms_refund_title: "🔄 4. Politique de Remboursement",
      terms_refund_1:
        "Les acomptes ne sont pas remboursables une fois que l'approvisionnement ou l'achat a commencé.",
      terms_refund_2:
        "Si les marchandises diffèrent sensiblement de celles commandées, un remplacement ou un remboursement partiel peut être organisé à notre discrétion.",
      terms_refund_3:
        "Les achats de véhicules sont soumis aux conditions de la maison de vente aux enchères concernée et ne sont généralement pas remboursables après l'achat.",
      terms_refund_4:
        "Les demandes de remboursement doivent être soumises par écrit dans les 7 jours suivant la livraison.",

      terms_communication_title: "📬 5. Communication et Litiges",
      terms_communication_1:
        "Toutes les communications officielles doivent être adressées à harakaint@gmail.com.",
      terms_communication_2:
        "Tout litige sera d'abord résolu par des négociations de bonne foi entre les deux parties.",
      terms_communication_3:
        "Les présentes conditions sont régies par les lois du Kenya.",
      terms_communication_4:
        "En passant une commande auprès d'Arakaharaka Enterprises, vous acceptez pleinement les présentes conditions générales.",

      terms_last_updated:
        "Dernière mise à jour : 2025. Pour toute question concernant ces conditions, envoyez un e-mail à harakaint@gmail.com.",
    },
    de: {
      nav_home: 'Startseite',
      nav_about: 'Über uns',
      nav_services: 'Dienstleistungen',
      nav_tourism: 'Tourismus',
      nav_partners: 'Partner',
      nav_testimonials: 'Kundenbewertungen',
      nav_contact: 'Kontakt',
      hero_title: 'Ihr vertrauenswürdiger Import- und Exportpartner',
      hero_subtitle: 'Arakaharaka verbindet ost- und zentralafrikanische Länder mit der Welt — Beschaffung von qualitativ hochwertigen Produkten, Fahrzeugen und Waren von globalen Märkten mit Zuverlässigkeit und Sorgfalt.',
      hero_cta1: 'Kontaktieren Sie uns',
      hero_cta2: 'Angebot anfordern',
      stats_clients: 'Zufriedene Kunden',
      stats_partners: 'Partnermarken',
      stats_countries: 'Bediente Länder',
      stats_satisfaction: 'Kundenzufriedenheit',
      services_title: 'Unsere Kerndienstleistungen',
      services_subtitle: 'Von der Produktbeschaffung bis zur Logistikkordination übernehmen wir die Komplexität, damit Sie sich auf Ihr Geschäft konzentrieren können.',
      service_import: 'Importdienstleistungen',
      service_import_desc: 'Wir importieren eine breite Palette von Waren aus Asien, Europa und darüber hinaus direkt nach Kenia — Elektronik, Haushaltswaren, Maschinen und mehr.',
      service_export: 'Exportdienstleistungen',
      service_export_desc: 'Wir helfen kenianischen Unternehmen, qualitativ hochwertige Produkte auf internationale Märkte zu exportieren, und übernehmen Dokumentation, Logistik und Compliance.',
      service_sourcing: 'Produktbeschaffung',
      service_sourcing_desc: 'Ein Produkt lokal nicht gefunden? Wir beschaffen es für Sie. Sagen Sie uns, was Sie brauchen, und wir finden die beste Qualität zum besten Preis weltweit.',
      service_vehicle: 'Fahrzeugimport',
      service_vehicle_desc: 'Importieren Sie Fahrzeuge aus Japan, Großbritannien, VAE und mehr. Wir übernehmen Inspektion, Versand, Zollabfertigung und Lieferung bis zur Haustür.',
      service_bulk: 'Massenversand',
      service_bulk_desc: 'Kosteneffiziente Massenversandlösungen für Unternehmen, die große Mengen importieren. Wir verhandeln die besten Frachtraten in Ihrem Namen.',
      service_logistics: 'Logistikkordination',
      service_logistics_desc: 'End-to-End-Logistikmanagement — Lagerung, Zollabfertigung, Letzte-Meile-Lieferung und Echtzeit-Lieferungsverfolgung.',
      testimonials_title: 'Von vielen vertraut',
      cta_title: 'Bereit zu importieren oder exportieren?',
      cta_subtitle: 'Lassen Sie uns Ihnen helfen, einfach zu importieren. Wir übernehmen den schwierigen Teil für Sie.',
      cta_btn: 'Kontaktieren Sie uns',
      testimonials_label: "Was Unsere Kunden Sagen",
      testimonial_1_name: "Christian M. Mayani",
      testimonial_1_role: "Importkunde – DR Kongo",
      testimonial_1_text:
        "Arakaharaka half uns dabei, schwere Maschinen aus China reibungslos und professionell zu importieren. Kommunikation und Logistikunterstützung waren hervorragend.",

      testimonial_2_name: "George Solo",
      testimonial_2_role: "Tourismuskunde – Tansania",
      testimonial_2_text:
        "Unsere Maasai-Mara-Safari war von Anfang bis Ende perfekt organisiert. Das Team war professionell, reaktionsschnell und machte unsere Kenia-Reise unvergesslich.",

      testimonial_3_name: "Hedy",
      testimonial_3_role: "Manager de Ventes – Hengwang Group, Chine",
      testimonial_3_text:
        "Wir bezogen hochwertigen kenianischen Kaffee und Kunsthandwerk über Arakaharaka. Qualität, Verpackung und Lieferung übertrafen unsere Erwartungen.",
      about_title: 'Über Arakaharaka Enterprises',
      about_subtitle: 'In Nairobi geboren, für die Welt gebaut. Wir sind leidenschaftlich daran, ost- und zentralafrikanische Länder mit globalen Märkten zu verbinden.',
      about_feature: 'Verbindung von ost- und zentralafrikanischen Ländern mit der Welt',
      about_feature_desc: 'Mit Sitz in Ruaraka, Nairobi, überbrücken wir seit unserer Gründung die Lücke zwischen ost- und zentralafrikanischen Käufern und globalen Lieferanten — mit Vertrauen, Geschwindigkeit und persönlicher Aufmerksamkeit in jedem Schritt.',
      mission: 'Unsere Mission',
      mission_desc: 'Globalen Handel für jeden Kenianer zugänglich und mühelos zu machen — vom Solo-Unternehmer bis zum großen Unternehmen.',
      vision: 'Unsere Vision',
      vision_desc: 'Der vertrauenswürdigste Import-/Exportpartner Ostafrikas zu sein, bekannt für Zuverlässigkeit, Transparenz und hervorragenden Service.',
      values: 'Unsere Werte',
      values_desc: 'Integrität in jeder Transaktion. Geschwindigkeit bei jeder Lieferung. Eine persönliche Note, die große Unternehmen nicht bieten können.',
      tourism_label: 'Reisen & Erlebnisse',
      tourism_title: 'Hotelbuchungen, Safaris und Tourismusdienste',
      tourism_subtitle: 'Arakaharaka hilft Ihnen, unvergessliche Reiseerlebnisse in Kenia und Ostafrika zu planen — von luxuriösen Hotelaufenthalten und Strandurlauben bis zu Safariabenteuern, Gruppenreisen, Flughafentransfers und maßgeschneiderten Tourismpaketen.',
      tourism_plan: 'Meine Reise planen',
      tourism_whatsapp: 'Über WhatsApp buchen',
      tourism_services_title: 'Ostafrika einfach erkunden',
      tourism_services_subtitle: 'Ob Sie einen romantischen Ausflug, Business-Unterkunft, einen Familiensafari oder einen Strandurlaub benötigen, wir koordinieren die Details, damit Ihre Reise von Anfang bis Ende reibungslos verläuft.',
      tourism_hotel: 'Hotelbuchungen',
      tourism_hotel_desc: 'Wir helfen bei der Organisation von Hotelaufenthalten, Lodges, Resorts, Apartments und Executive-Unterkünften basierend auf Ihrem Budget, Ihrem Standort und Ihren Reisebedürfnissen.',
      tourism_safari: 'Safari-Lodges und Camps',
      tourism_safari_desc: 'Buchen Sie komfortable Safari-Lodges, Zeltcamps und Naturunterkünfte in der Nähe der schönsten Parks und Reservate Kenias und Ostafrikas.',
      tourism_adventure: 'Safari-Reisen und Abenteuer',
      tourism_adventure_desc: 'Wir organisieren Wildsafaris, Game-Drives, Heißluftballonerlebnisse, geführte Touren und maßgeschneiderte Abenteuerreisen.',
      tourism_beach: 'Strandurlaub',
      tourism_beach_desc: 'Genießen Sie entspannte Küstenausflüge, inselartige Urlaube, Hochzeitspakete, Familienstrandreisen und Ozeanaktivitäten.',
      tourism_resort: 'Resorts, Retreats und Ausflüge',
      tourism_resort_desc: 'Wir verbinden Kunden mit Freizeitresorts, Retreat-Zielen, Wochenendausflügen, Gruppenunterkünften und Premium-Entspannungserlebnissen.',
      view_all_services: "Alle Dienstleistungen Anzeigen →",
      testimonials_label: "Was Unsere Kunden Sagen",
      whatsapp_us_now: "Schreiben Sie Uns Auf WhatsApp",
      our_story: "Unsere Geschichte",

      tourism_services_label: "Tourismusdienstleistungen",
      tourism_hiking: "Bergwandern",
      tourism_hiking_desc:
        "Entdecken Sie atemberaubende Berglandschaften, malerische Wanderwege und unvergessliche Trekking-Abenteuer in Ostafrika.",
      tourism_cta_title: 'Bereit für Ihre nächste Reise?',
      tourism_cta_subtitle: 'Sagen Sie uns Ihr Reiseziel, Ihre Reisedaten, die Anzahl der Gäste und Ihr Budget — wir helfen Ihnen, das richtige Tourismpaket zu planen.',
      tourism_cta_btn: 'Buchungshilfe anfordern',
      contact_title: 'Lassen Sie uns über Geschäft sprechen',
      contact_subtitle: 'Bereit zu importieren, exportieren oder haben Sie Fragen? Kontaktieren Sie uns über das Formular, E-Mail oder WhatsApp — wir antworten normalerweise innerhalb weniger Stunden.',
      contact_form_title: 'Senden Sie uns eine Nachricht',
      contact_name: 'Vollständiger Name *',
      contact_email: 'E-Mail-Adresse *',
      contact_phone: 'Telefonnummer',
      contact_service: 'Interessierte Dienstleistung',
      contact_message: 'Ihre Nachricht *',
      contact_btn: 'Nachricht senden',
      contact_email_label: 'E-Mail senden',
      contact_phone_label: 'Anrufen / WhatsApp',
      contact_location: 'Standort',
      contact_website: 'Website',
      why_label: 'Warum uns wählen',
      why_title: 'Der Arakaharaka Unterschied',
      why_reliability: 'Zuverlässigkeit, auf die Sie zählen können',
      why_reliability_desc: 'Wir folgen jeder Bestellung nach. Ihre Waren kommen wie versprochen an, und wir halten Sie bei jedem Schritt auf dem Laufenden.',
      why_global: 'Wahrhaft globale Reichweite',
      why_global_desc: 'Von Japan bis Deutschland, von China bis zu den VAE — unser Lieferantennetzwerk erstreckt sich über jede wichtige Handelsregion der Welt.',
      why_personal: 'Personalisierter Service',
      why_personal_desc: 'Sie arbeiten direkt mit unserem Team — keine Callcenter, keine Verzögerungen. WhatsApp uns und erhalten Sie eine echte Person, die Ihre Bestellung kennt.',
      why_pricing: 'Wettbewerbsfähige Preise',
      why_pricing_desc: 'Wir nutzen unsere Lieferantenbeziehungen, um Ihnen die besten Preise für Qualitätswaren zu erhalten — sparen Sie Geld, ohne die Qualität zu beeinträchtigen.',
      why_customs: 'Zoll & Compliance',
      why_customs_desc: 'Wir übernehmen alle Zollpapiere, Zölle und Compliance-Anforderungen — Sie müssen sich nie um bürokratische Hürden sorgen.',
      why_fast: 'Schnelle Bearbeitung',
      why_fast_desc: 'Wir priorisieren Geschwindigkeit bei jedem Schritt — vom Angebot bis zur Lieferung. Arakaharaka bedeutet "eilig" — und wir leben dem Namen gerecht.',
      services_page_label: 'Was wir anbieten',
      services_page_title: 'Unsere Dienste',
      services_page_subtitle: 'Umfassende Import- und Exportlösungen maßgeschneidert für Unternehmen und Einzelpersonen in Kenia und darüber hinaus.',
      service_page_import: 'Importdienstleistungen',
      service_page_import_desc: 'Wir übernehmen jeden Aspekt des Imports von Waren nach Kenia — von der Suche nach Lieferanten, Preisverhandlungen, Versandorganisation, Zollabfertigung und Lieferung. Elektronik, Textilien, Industriegüter und mehr.',
      service_page_export: 'Exportdienstleistungen',
      service_page_export_desc: 'Hilfe für kenianische Produzenten und Unternehmen, internationale Käufer zu erreichen. Wir verwalten Verpackung, Dokumentation, Frachtbuchung und regulatorische Compliance für reibungslose Exporte.',
      service_page_sourcing: 'Produktbeschaffung',
      service_page_sourcing_desc: 'Senden Sie uns eine Produktbeschreibung und wir beschaffen sie bei verifizierten globalen Lieferanten. Wir vergleichen Qualität, Preise und Lieferzeiten, damit Sie jedes Mal das beste Angebot erhalten.',
      service_page_vehicle: 'Fahrzeugimport',
      service_page_vehicle_desc: 'Importieren Sie Autos, Motorräder, Lastwagen und schwere Maschinen aus Japan, Großbritannien, Dubai und anderen Märkten. Umfasst Auktionsbeschaffung, Inspektion, Versand, KEBS-Compliance und Registrierungsunterstützung.',
      service_page_bulk: 'Bulk- und gewerblicher Versand',
      service_page_bulk_desc: 'Verhandeln Sie FCL/LCL-Container-Versand zum besten Tarif für Unternehmen, die große Mengen importieren. Wir konsolidieren Fracht und optimieren Frachtrouten, um Ihre Kosten erheblich zu senken.',
      service_page_logistics: 'Logistikkordination',
      service_page_logistics_desc: 'Vollständige End-to-End-Logistik — Lagerung am Ursprung, Frachtweiterleitung, Hafenabfertigung, Binnentransport und Letzte-Meile-Lieferung zu Ihren Räumlichkeiten überall in Kenia.',
      service_page_customs: 'Zollabfertigung',
      service_page_customs_desc: 'Unser erfahrenes Team übernimmt alle Zollunterlagen, Zollzahlungen, KRA-Compliance, KEBS-Inspektionen und Hafenverfahren — Ihre Waren passieren ohne Verzögerungen.',
      service_page_consulting: 'Handelsberatung',
      service_page_consulting_desc: 'Neu beim Import oder Export? Wir führen Sie durch Vorschriften, Kosten, Zeitpläne und Best Practices, damit Sie jedes Mal fundierte Entscheidungen treffen.',
      service_page_industrial: 'Industrie & Maschinen',
      service_page_industrial_desc: 'Beschaffen Sie Industrieanlagen, Fabrikmaschinen, Werkzeuge und Ersatzteile von führenden Herstellern in China, Deutschland und anderen globalen Fertigungszentren.',
      partners_label: 'Unser Netzwerk',
      partners_title: 'Import- und Exportpartner',
      partners_subtitle: 'Wir verbinden Kunden mit vertrauenswürdigen Importlieferanten weltweit und helfen ost- und zentralafrikanischen Unternehmen, Qualitätsprodukte lokal, regional und im Ausland zu exportieren.',
      partners_auto_title: '📥 Importpartner: Automobil',
      partners_auto: 'Automobilimport',
      partners_auto_desc: 'Wir verbinden Kunden mit vertrauenswürdigen Automobil-Importeuren und -Exporteuren und erleichtern den reibungslosen Import von Fahrzeugen und Teilen aus der ganzen Welt.',
      partners_industrial_title: '📥 Importpartner: Industrie- und Fertigungslieferanten',
      partners_luxury_title: '📥 Importpartner: Luxus- und Konsummarken',
      partners_asian_title: '📥 Importpartner: Asiatische Hersteller & Lieferanten',
      partners_export_title: '📤 Export aus Kenia: Kenianische Marken & Produkte',
      partners_category_all: "Alle Kategorien",
      category_automotive: "Fahrzeuge",
      category_industrial_manufacturing: "Industrie und Fertigung",
      category_luxury_consumer_goods: "Luxus- und Konsumgüter",
      category_asian_manufacturers: "Asiatische Hersteller",
      category_construction_materials: "Baumaterialien",
      category_electronics_technology: "Elektronik und Technologie",
      category_food_agricultural_products: "Lebensmittel und Agrarprodukte",
      category_african_culture: "Afrikanische Kultur",
      category_kenyan_export_products: "Kenianische Exportprodukte",
      partners_label: 'Unser Netzwerk',
      partners_title: 'Import- & Exportprodukte',
      partners_subtitle: 'Durchsuchen Sie unseren Katalog von Import- und Exportprodukten, sehen Sie Versanddetails und kontaktieren Sie uns über WhatsApp für Preise und Verfügbarkeit.',
      partners_search_placeholder: 'Produkte suchen...',
      partners_tab_all: 'Alle Produkte',
      partners_tab_import: 'Importprodukte',
      partners_tab_export: 'Exportprodukte',
      partners_category_all: 'Alle Kategorien',
      partners_ships_from: 'Versand Von',
      partners_ships_to: 'Versand Nach',
      partners_delivery_time: 'Geschätzte Lieferung',
      partners_view_details: 'Details Ansehen',
      partners_request_quote: '💬 Angebot per WhatsApp',
      partners_no_results: 'Keine Produkte gefunden, die Ihrer Suche entsprechen.',
      partners_cta_text: 'Können Sie nicht finden, was Sie suchen? Fragen Sie uns nach jedem Produkt oder speziellen Anforderungen.',
      partners_cta_button: '💬 Nach einem Produkt Fragen',
      footer_desc: 'Ihr vertrauenswürdiger Import- und Exportpartner mit Sitz in Ruaraka, Nairobi. Verbindet ost- und zentralafrikanische Länder mit der Welt — eine Lieferung nach der anderen.',
      footer_quick: 'Schnelllinks',
      footer_contact: 'Kontakt',
      footer_faq: 'FAQ',
      faq_q1: 'Wie lange dauert der Versand?',
      faq_a1: 'Seefracht aus Asien dauert 25–45 Tage. Luftfracht dauert 5–10 Tage. Fahrzeuge aus Japan dauern 4–8 Wochen.',
      faq_q2: 'Wie bestelle ich?',
      faq_a2: 'WhatsApp oder E-Mail uns einfach mit Ihren Bestelldetails. Wir bestätigen die Verfügbarkeit, bieten ein Angebot und übernehmen den Rest.',
      faq_q3: 'Aus welchen Ländern versenden Sie?',
      faq_a3: 'Wir beziehen aus China, Japan, VAE, Großbritannien, Deutschland, USA, Indien, Singapur und vielen weiteren Ländern weltweit.',
      faq_q4: 'Übernehmen Sie den Zoll?',
      faq_a4: 'Ja! Wir übernehmen die gesamte Zollabfertigung, KRA-Compliance, KEBS-Inspektionen und Hafenverfahren in Ihrem Namen.',
      footer_copyright: '© 2026 Arakaharaka Enterprises. Alle Rechte vorbehalten. | Geschäftsbedingungen',
      footer_made: 'Mit ❤️ in Nairobi, Kenia 🇰🇪 gemacht',
      testimonials_page_label: 'Kundenbewertungen',
      testimonials_page_title: 'Was Unsere Kunden Sagen',
      testimonials_page_subtitle: 'Glauben Sie uns nicht einfach — hier ist, was echte Kunden in Kenia über ihre Erfahrung mit Arakaharaka Enterprises sagen.',
      testi_1: 'Arakaharaka hat den Import meines Fahrzeugs aus Japan völlig nahtlos gemacht. Von der Auktion bis zu meinem Tor in Nairobi — sie haben alles professionell gehandhabt. Absolut 5 Sterne!',
      testi_2: 'Super reaktionsschnelles Team über WhatsApp. Ich habe eine Bestellung für Elektronik aus China aufgegeben und sie haben mich bei jeder Stufe auf dem Laufenden gehalten. Alles in perfektem Zustand erhalten!',
      testi_3: 'Wir benötigten dringend Industriemaschinen und Arakaharaka hat sie innerhalb unseres Budgets aus Deutschland beschafft. Der Zoll wurde ohne Probleme abgewickelt. Werden wieder verwendet!',
      testi_4: 'Als Erstimportierer war ich nervös. Das Team hat mich geduldig durch jeden Schritt geführt. Meine Waren sind vor dem geschätzten Datum angekommen! Toll mit ihnen zu arbeiten.',
      testi_5: 'Wir arbeiten seit 2 Jahren mit Arakaharaka für Massenversand aus China zusammen. Konsistent, zuverlässig und immer die besten Frachtraten. Sie sind unser bevorzugter Partner.',
      testi_6: 'Ich wollte Luxusartikel aus Dubai und wusste nicht, wo ich anfangen sollte. Arakaharaka hat alles beschafft, was ich brauchte, mit garantierter Echtheit. Service der Spitzenklasse!',
      testimonials_cta: 'Hatten Sie eine großartige Erfahrung mit uns? Wir würden gerne von Ihnen hören!',
      testimonials_share_btn: '💬 Teilen Sie Ihre Erfahrung',
      hero_badge_1: '🚀 Schneller Versand',
      hero_badge_2: '🌍 Globale Beschaffung',
      hero_badge_3: '🤝 Vertrauenswürdige Partner',
      custom_solution_title: 'Benötigen Sie eine Maßgeschneiderte Lösung?',
      custom_solution_desc: 'Jedes Unternehmen ist anders. Sagen Sie uns Ihre Bedürfnisse und wir erstellen den perfekten Import-/Exportplan für Sie.',
      custom_solution_btn: '📩 Maßgeschneidertes Angebot Anfordern',
      nav_dropdown_import: 'Importpartner',
      nav_dropdown_export: 'Aus Kenia Exportieren',
      legal_label: "Rechtliches",
      terms_title: "Allgemeine Geschäftsbedingungen",
      terms_subtitle:
        "Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie eine Bestellung bei Arakaharaka Enterprises aufgeben.",

      terms_orders_payments_title: "📦 1. Bestellungen und Zahlungen",
      terms_orders_payments_1:
        "Alle Bestellungen müssen vor Beginn der Bearbeitung schriftlich per E-Mail oder WhatsApp bestätigt werden.",
      terms_orders_payments_2:
        "Vor Beginn der Beschaffung ist eine Anzahlung von 50 % erforderlich; der Restbetrag ist vor dem Versand fällig.",
      terms_orders_payments_3:
        "Die Zahlung kann per M-Pesa, Banküberweisung oder anderen vereinbarten Methoden erfolgen.",
      terms_orders_payments_4:
        "Angebotene Preise sind 48 Stunden gültig und können bei internationalen Bestellungen aufgrund von Wechselkursschwankungen variieren.",
      terms_orders_payments_5:
        "Arakaharaka Enterprises behält sich das Recht vor, jede Bestellung nach eigenem Ermessen abzulehnen.",

      terms_shipping_title: "🚢 2. Versandzeiten",
      terms_shipping_1:
        "Die angegebenen Lieferzeiten dienen nur als Orientierung und sind nicht garantiert.",
      terms_shipping_2:
        "Seefracht aus Asien dauert in der Regel 25–45 Tage. Luftfracht dauert 5–10 Werktage.",
      terms_shipping_3:
        "Fahrzeugtransporte aus Japan dauern normalerweise 4–8 Wochen vom Auktionskauf bis zum Hafen von Mombasa.",
      terms_shipping_4:
        "Verzögerungen aufgrund von Hafenüberlastung, Zoll, Wetter oder anderen Faktoren außerhalb unserer Kontrolle liegen nicht in der Verantwortung von Arakaharaka.",
      terms_shipping_5:
        "Kunden werden umgehend über erhebliche Verzögerungen informiert.",

      terms_liability_title: "⚖️ 3. Haftung",
      terms_liability_1:
        "Arakaharaka Enterprises handelt als Vermittler und Koordinator und ist weder Hersteller noch direkter Verkäufer der Waren.",
      terms_liability_2:
        "Wir haften nicht für während des Transports beschädigte Waren, sofern diese durch eine Transportversicherung abgedeckt sind.",
      terms_liability_3:
        "Es liegt in der Verantwortung des Kunden, sicherzustellen, dass seine Waren allen kenianischen Importvorschriften entsprechen.",
      terms_liability_4:
        "Wir sind nicht verantwortlich für Waren, die aufgrund falscher Angaben des Kunden vom Zoll beschlagnahmt werden.",

      terms_refund_title: "🔄 4. Rückerstattungsrichtlinie",
      terms_refund_1:
        "Anzahlungen sind nicht erstattungsfähig, sobald die Beschaffung oder der Einkauf begonnen hat.",
      terms_refund_2:
        "Wenn die Waren wesentlich von der Bestellung abweichen, kann nach unserem Ermessen ein Ersatz oder eine teilweise Rückerstattung erfolgen.",
      terms_refund_3:
        "Fahrzeugkäufe unterliegen den Bedingungen des jeweiligen Auktionshauses und sind nach dem Kauf in der Regel nicht erstattungsfähig.",
      terms_refund_4:
        "Rückerstattungsanträge müssen innerhalb von 7 Tagen nach Lieferung schriftlich eingereicht werden.",

      terms_communication_title: "📬 5. Kommunikation und Streitigkeiten",
      terms_communication_1:
        "Alle offiziellen Mitteilungen sollten an harakaint@gmail.com gerichtet werden.",
      terms_communication_2:
        "Streitigkeiten werden zunächst durch Verhandlungen in gutem Glauben zwischen beiden Parteien gelöst.",
      terms_communication_3:
        "Diese Bedingungen unterliegen den Gesetzen Kenias.",
      terms_communication_4:
        "Mit der Aufgabe einer Bestellung bei Arakaharaka Enterprises akzeptieren Sie diese Allgemeinen Geschäftsbedingungen vollständig.",

      terms_last_updated:
        "Zuletzt aktualisiert: 2025. Bei Fragen zu diesen Bedingungen senden Sie bitte eine E-Mail an harakaint@gmail.com.",
    },
    hi: {
      nav_home: 'होम',
      nav_about: 'हमारे बारे में',
      nav_services: 'सेवाएं',
      nav_tourism: 'पर्यटन',
      nav_partners: 'पार्टनर',
      nav_testimonials: 'ग्राहक समीक्षा',
      nav_contact: 'संपर्क करें',
      hero_title: 'आपका विश्वसनीय आयात और निर्यात पार्टनर',
      hero_subtitle: 'Arakaharaka पूर्वी और मध्य अफ्रीकी देशों को दुनिया से जोड़ता है — विश्वसनीयता और परवाह के साथ वैश्विक बाजारों से गुणवत्तापूर्ण उत्पाद, वाहन और सामान की खरीद।',
      hero_cta1: 'संपर्क करें',
      hero_cta2: 'उद्धरण मांगें',
      stats_clients: 'संतुष्ट ग्राहक',
      stats_partners: 'पार्टनर ब्रांड',
      stats_countries: 'सेवा देश',
      stats_satisfaction: 'ग्राहक संतुष्टि',
      services_title: 'हमारी मुख्य सेवाएं',
      services_subtitle: 'उत्पाद सोर्सिंग से लेकर लॉजिस्टिक्स समन्वय तक, हम जटिलता का संभाल करते हैं ताकि आप अपने व्यवसाय पर ध्यान केंद्रित कर सकें।',
      service_import: 'आयात सेवाएं',
      service_import_desc: 'हम एशिया, यूरोप और उससे आगे से सीधे केन्या में विभिन्न सामान आयात करते हैं — इलेक्ट्रॉनिक्स, घरेलू सामान, मशीनरी, और अधिक।',
      service_export: 'निर्यात सेवाएं',
      service_export_desc: 'हम केन्याई व्यवसायों को अंतरराष्ट्रीय बाजारों में गुणवत्तापूर्ण उत्पादों को निर्यात करने में मदद करते हैं, दस्तावेजीकरण, लॉजिस्टिक्स और अनुपालन का संभाल करते हैं।',
      service_sourcing: 'उत्पाद सोर्सिंग',
      service_sourcing_desc: 'स्थानीय रूप से उत्पाद नहीं मिल रहा है? हम आपके लिए सोर्स करते हैं। हमें बताएं कि आपको क्या चाहिए और हम दुनिया भर में सर्वोत्तम गुणवत्ता को सर्वोत्तम मूल्य पर खोजेंगे।',
      service_vehicle: 'वाहन आयात',
      service_vehicle_desc: 'जापान, ब्रिटेन, UAE और अन्य से वाहन आयात करें। हम निरीक्षण, शिपिंग, कस्टम्स क्लीयरेंस और आपके दरवाजे तक डिलीवरी का संभाल करते हैं।',
      service_bulk: 'बल्क शिपिंग',
      service_bulk_desc: 'बड़ी मात्रा में आयात करने वाले व्यवसायों के लिए लागत प्रभावी बल्क शिपिंग समाधान। हम आपकी ओर से सर्वोत्तम माल भाड़े की दरों की बातचीत करते हैं।',
      service_logistics: 'लॉजिस्टिक्स समन्वय',
      service_logistics_desc: 'एंड-टू-एंड लॉजिस्टिक्स प्रबंधन — गोदामन, कस्टम्स क्लीयरेंस, लास्ट-माइल डिलीवरी, और रीयल-टाइम शिपमेंट ट्रैकिंग।',
      testimonials_title: 'कई लोगों द्वारा विश्वसनीय',
      cta_title: 'आयात या निर्यात के लिए तैयार?',
      cta_subtitle: 'आइए आपको आसानी से आयात करने में मदद करें। हम आपके लिए कठिन हिस्से का संभाल करते हैं।',
      cta_btn: 'संपर्क करें',
      testimonials_label: "ग्राहक क्या कहते हैं",
      testimonial_1_name: "Christian M. Mayani",
      testimonial_1_role: "आयात ग्राहक – डीआर कांगो",
      testimonial_1_text:
        "Arakaharaka ने हमें चीन से भारी मशीनरी आसानी और पेशेवर तरीके से आयात करने में मदद की। उनका संचार और लॉजिस्टिक्स समर्थन उत्कृष्ट था।",

      testimonial_2_name: "George Solo",
      testimonial_2_role: "पर्यटन ग्राहक – तंजानिया",
      testimonial_2_text:
        "हमारा मासाई मारा सफारी शुरू से अंत तक बेहतरीन ढंग से आयोजित किया गया था। टीम पेशेवर, तत्पर और हमारी केन्या यात्रा को अविस्मरणीय बनाने वाली थी।",

      testimonial_3_name: "Hedy",
      testimonial_3_role: "मीटर ऑफ वेंट्स – हेंगवांग ग्रुप, चीन",
      testimonial_3_text:
        "हमने Arakaharaka के माध्यम से प्रीमियम केन्याई कॉफी और हस्तशिल्प प्राप्त किए। गुणवत्ता, पैकेजिंग और डिलीवरी हमारी अपेक्षाओं से बढ़कर थीं。",
      about_title: 'Arakaharaka Enterprises के बारे में',
      about_subtitle: 'नैरोबी में पैदा हुआ, दुनिया के लिए बनाया गया। हम पूर्वी और मध्य अफ्रीकी देशों को वैश्विक बाजारों से जोड़ने के लिए उत्साहित हैं।',
      about_feature: 'पूर्वी और मध्य अफ्रीकी देशों को दुनिया से जोड़ना',
      about_feature_desc: 'नैरोबी के रुआराका में स्थित, हम अपनी स्थापना के बाद से पूर्वी और मध्य अफ्रीकी खरीदारों और वैश्विक आपूर्तिकर्ताओं के बीच की खाई को पाट रहे हैं — हर कदम पर विश्वास, गति और व्यक्तिगत ध्यान के साथ।',
      mission: 'हमारा मिशन',
      mission_desc: 'हर केन्याई के लिए वैश्विक व्यापार को सुलभ और आसान बनाना — सोलो उद्यमी से लेकर बड़ी कंपनी तक।',
      vision: 'हमारी दृष्टि',
      vision_desc: 'पूर्वी अफ्रीका का सबसे विश्वसनीय आयात/निर्यात पार्टनर बनना, जो विश्वसनीयता, पारदर्शिता और उत्कृष्ट सेवा के लिए जाना जाता है।',
      values: 'हमारे मूल्य',
      values_desc: 'हर लेनदेन में ईमानदारी। हर डिलीवरी में गति। एक व्यक्तिगत स्पर्श जो बड़ी कंपनियां प्रदान नहीं कर सकतीं।',
      tourism_label: 'यात्रा और अनुभव',
      tourism_title: 'होटल बुकिंग, सफारी और पर्यटन सेवाएं',
      tourism_subtitle: 'Arakaharaka आपको केन्या और पूर्वी अफ्रीका में अविस्मरणीय यात्रा अनुभवों की योजना बनाने में मदद करता है — शानदार होटल ठहराव और बीच छुट्टियों से लेकर सफारी साहस, समूह यात्राएं, हवाई अड्डे स्थानांतरण और कस्टम पर्यटन पैकेज तक।',
      tourism_plan: 'मेरी यात्रा की योजना बनाएं',
      tourism_whatsapp: 'WhatsApp पर बुक करें',
      tourism_services_title: 'पूर्वी अफ्रीका को आसानी से खोजें',
      tourism_services_subtitle: 'चाहे आपको रोमांटिक गेटअवे, बिजनेस आवास, पारिवारिक सफारी या तटीय छुट्टी की आवश्यकता हो, हम विवरणों का समन्वय करते हैं ताकि आपकी यात्रा शुरू से अंत तक सुचारू रहे।',
      tourism_hotel: 'होटल बुकिंग',
      tourism_hotel_desc: 'हम आपके बजट, स्थान और यात्रा की आवश्यकताओं के आधार पर होटल ठहराव, लॉज, रिसॉर्ट, अपार्टमेंट और कार्यकारी आवास की व्यवस्था में मदद करते हैं।',
      tourism_safari: 'सफारी लॉज और कैंप',
      tourism_safari_desc: 'केन्या और पूर्वी अफ्रीका के सबसे सुंदर पार्कों और रिजर्व के पास आरामदायक सफारी लॉज, टेंटेड कैंप और प्राकृतिक ठहराव बुक करें।',
      tourism_adventure: 'सफारी यात्राएं और साहस',
      tourism_adventure_desc: 'हम वन्यजीव सफारी, गेम ड्राइव, हॉट एयर बैलून अनुभव, मार्गदर्शित दौरे और कस्टम साहस यात्रा योजना की व्यवस्था करते हैं।',
      tourism_beach: 'बीच छुट्टियां',
      tourism_beach_desc: 'आरामदायक तटीय एस्केप, द्वीप शैली की छुट्टियां, हनीमून पैकेज, पारिवारिक बीच यात्राएं और महासागर गतिविधियों का आनंद लें।',
      tourism_resort: 'रिसॉर्ट, रिट्रीट और गेटअवे',
      tourism_resort_desc: 'हम ग्राहकों को लेजर रिसॉर्ट, रिट्रीट गंतव्य, सप्ताहांत गेटअवे, समूह ठहराव और प्रीमियम आराम अनुभवों से जोड़ते हैं।',
      view_all_services: "सभी सेवाएँ देखें →",
      testimonials_label: "ग्राहक क्या कहते हैं",
      whatsapp_us_now: "अभी व्हाट्सऐप करें",
      our_story: "हमारी कहानी",

      tourism_services_label: "पर्यटन सेवाएँ",
      tourism_hiking: "पर्वतारोहण",
      tourism_hiking_desc:
        "पूर्वी अफ्रीका में शानदार पर्वतीय दृश्यों, सुंदर ट्रेल्स और अविस्मरणीय ट्रेकिंग रोमांच का अनुभव करें।",
      tourism_cta_title: 'अपनी अगली यात्रा के लिए तैयार हैं?',
      tourism_cta_subtitle: 'हमें अपना गंतव्य, यात्रा तिथियां, मेहमानों की संख्या और बजट बताएं — हम आपको सही पर्यटन पैकेज की योजना बनाने में मदद करेंगे।',
      tourism_cta_btn: 'बुकिंग सहायता का अनुरोध करें',
      contact_title: 'आइए व्यापार की बात करें',
      contact_subtitle: 'आयात, निर्यात के लिए तैयार, या आपके पास प्रश्न हैं? फॉर्म, ईमेल या WhatsApp के माध्यम से संपर्क करें — हम आमतौर पर कुछ घंटों के भीतर जवाब देते हैं।',
      contact_form_title: 'हमें संदेश भेजें',
      contact_name: 'पूरा नाम *',
      contact_email: 'ईमेल पता *',
      contact_phone: 'फोन नंबर',
      contact_service: 'रुचि वाली सेवा',
      contact_message: 'आपका संदेश *',
      contact_btn: 'संदेश भेजें',
      contact_email_label: 'हमें ईमेल करें',
      contact_phone_label: 'कॉल / WhatsApp',
      contact_location: 'स्थान',
      contact_website: 'वेबसाइट',
      why_label: 'हमें क्यों चुनें',
      why_title: 'Arakaharaka अंतर',
      why_reliability: 'भरोसेमंदी जिस पर आप भरोसा कर सकते हैं',
      why_reliability_desc: 'हम हर ऑर्डर का पालन करते हैं। आपकी वस्तुएं वादे के अनुसार आती हैं, और हम आपको हर कदम पर अपडेट रखते हैं।',
      why_global: 'वास्तव में वैश्विक पहुंच',
      why_global_desc: 'जापान से जर्मनी, चीन से UAE तक — हमारा आपूर्तिकर्ता नेटवर्क दुनिया के हर प्रमुख व्यापार क्षेत्र में फैला हुआ है।',
      why_personal: 'व्यक्तिगत सेवा',
      why_personal_desc: 'आप सीधे हमारी टीम से निपटते हैं — कोई कॉल सेंटर, कोई देरी नहीं। हमें WhatsApp करें और एक वास्तविक व्यक्ति प्राप्त करें जो आपके ऑर्डर को जानता है।',
      why_pricing: 'प्रतिस्पर्धात्मक मूल्य निर्धारण',
      why_pricing_desc: 'हम गुणवत्ता वाली वस्तुओं पर सर्वोत्तम मूल्य प्राप्त करने के लिए अपने आपूर्तिकर्ता संबंधों का लाभ उठाते हैं — गुणवत्ता से समझौता किए बिना आपका पैसा बचाते हैं।',
      why_customs: 'कस्टम्स और अनुपालन',
      why_customs_desc: 'हम सभी कस्टम्स पेपरवर्क, शुल्क और अनुपालन आवश्यकताओं का संभाल करते हैं — ताकि आपको कभी भी ब्यूरोक्रेटिक बाधाओं के बारे में चिंता करने की आवश्यकता न हो।',
      why_fast: 'तेज टर्नअराउंड',
      why_fast_desc: 'हम हर कदम पर गति को प्राथमिकता देते हैं — उद्धरण से डिलीवरी तक। Arakaharaka का अर्थ है "जल्दी" — और हम नाम के योग्य हैं।',
      services_page_label: 'हम क्या प्रदान करते हैं',
      services_page_title: 'हमारी सेवाएं',
      services_page_subtitle: 'केन्या और उससे आगे व्यवसायों और व्यक्तियों के लिए व्यापक आयात और निर्यात समाधान।',
      service_page_import: 'आयात सेवाएं',
      service_page_import_desc: 'हम केन्या में वस्तुओं के आयात के हर पहलू का संभाल करते हैं — आपूर्तिकर्ताओं को खोजने, मूल्य वार्ता, शिपिंग व्यवस्था, कस्टम्स क्लीयरेंस और डिलीवरी से। इलेक्ट्रॉनिक्स, कपड़े, औद्योगिक वस्तुएं, और अधिक।',
      service_page_export: 'निर्यात सेवाएं',
      service_page_export_desc: 'केन्याई निर्माताओं और व्यवसायों को अंतरराष्ट्रीय खरीदारों तक पहुंचने में मदद करना। हम पैकेजिंग, दस्तावेजीकरण, फ्राइट बुकिंग और नियामक अनुपालन का प्रबंधन करते हैं।',
      service_page_sourcing: 'उत्पाद सोर्सिंग',
      service_page_sourcing_desc: 'हमें उत्पाद विवरण भेजें और हम इसे सत्यापित वैश्विक आपूर्तिकर्ताओं से सोर्स करेंगे। हम गुणवत्ता, मूल्य और डिलीवरी समय की तुलना करते हैं ताकि आप हर बार सर्वोत्तम सौदा प्राप्त करें।',
      service_page_vehicle: 'वाहन आयात',
      service_page_vehicle_desc: 'जापान, ब्रिटेन, दुबई और अन्य बाजारों से कार, मोटरसाइकिल, ट्रक और भारी मशीनरी आयात करें। ऑक्शन सोर्सिंग, निरीक्षण, शिपिंग, KEBS अनुपालन और पंजीकरण समर्थन शामिल है।',
      service_page_bulk: 'बल्क और वाणिज्यिक शिपिंग',
      service_page_bulk_desc: 'बड़ी मात्रा में आयात करने वाले व्यवसायों के लिए सर्वोत्तम दर FCL/LCL कंटेनर शिपिंग की बातचीत करें। हम कार्गो को समेकित करते हैं और फ्राइट मार्गों को अनुकूलित करते हैं।',
      service_page_logistics: 'लॉजिस्टिक्स समन्वय',
      service_page_logistics_desc: 'पूर्ण एंड-टू-एंड लॉजिस्टिक्स — मूल पर गोदामन, फ्राइट फॉरवर्डिंग, पोर्ट क्लीयरेंस, आंतरिक परिवहन और केन्या में कहीं भी आपके परिसरों तक अंतिम-मील डिलीवरी।',
      service_page_customs: 'कस्टम्स क्लीयरेंस',
      service_page_customs_desc: 'हमारी अनुभवी टीम सभी कस्टम्स दस्तावेजीकरण, शुल्क भुगतान, KRA अनुपालन, KEBS निरीक्षण और पोर्ट प्रक्रियाओं का संभाल करती है — आपकी वस्तुएं बिना देरी के साफ हो जाती हैं।',
      service_page_consulting: 'व्यापार परामर्श',
      service_page_consulting_desc: 'आयात या निर्यात में नए? हम आपको नियमों, लागत, समयरेखा और सर्वोत्तम अभ्यासों के माध्यम से मार्गदर्शन करते हैं।',
      service_page_industrial: 'औद्योगिक और मशीनरी',
      service_page_industrial_desc: 'चीन, जर्मनी और अन्य वैश्विक निर्माण केंद्रों के शीर्ष निर्माताओं से औद्योगिक उपकरण, फैक्ट्री मशीनरी, उपकरण और स्पेयर पार्ट्स सोर्स करें।',
      partners_label: 'हमारा नेटवर्क',
      partners_title: 'आयात और निर्यात पार्टनर',
      partners_subtitle: 'हम ग्राहकों को दुनिया भर में विश्वसनीय आयात आपूर्तिकर्ताओं से जोड़ते हैं और पूर्वी और मध्य अफ्रीकी कंपनियों को स्थानीय, क्षेत्रीय और विदेशी गुणवत्ता वाले उत्पादों को निर्यात करने में मदद करते हैं।',
      partners_auto_title: '📥 आयात पार्टनर: ऑटोमोटिव',
      partners_auto: 'ऑटोमोटिव आयात',
      partners_auto_desc: 'हम ग्राहकों को विश्वसनीय ऑटोमोटिव आयातकों और निर्यातकों से जोड़ते हैं, दुनिया भर से वाहनों और हिस्सों के सुचारू आयात को सुविधाजनक बनाते हैं।',
      partners_industrial_title: '📥 आयात पार्टनर: औद्योगिक और निर्माण आपूर्तिकर्ता',
      partners_luxury_title: '📥 आयात पार्टनर: लक्जरी और उपभोक्ता ब्रांड',
      partners_asian_title: '📥 आयात पार्टनर: एशियाई निर्माता और आपूर्तिकर्ता',
      partners_export_title: '📤 केन्या से निर्यात: केन्याई ब्रांड और उत्पाद',
      partners_category_all: "सभी श्रेणियाँ",
      category_automotive: "ऑटोमोबाइल",
      category_industrial_manufacturing: "औद्योगिक और विनिर्माण",
      category_luxury_consumer_goods: "लक्ज़री और उपभोक्ता वस्तुएँ",
      category_asian_manufacturers: "एशियाई निर्माता",
      category_construction_materials: "निर्माण सामग्री",
      category_electronics_technology: "इलेक्ट्रॉनिक्स और प्रौद्योगिकी",
      category_food_agricultural_products: "खाद्य और कृषि उत्पाद",
      category_african_culture: "अफ्रीकी संस्कृति",
      category_kenyan_export_products: "केन्याई निर्यात उत्पाद",
      partners_label: 'हमारा नेटवर्क',
      partners_title: 'आयात और निर्यात उत्पाद',
      partners_subtitle: 'हमारे आयात और निर्यात उत्पादों की सूची खोजें, शिपिंग विवरण देखें, और WhatsApp के माध्यम से हमसे मूल्य और उपलब्धता के लिए संपर्क करें।',
      partners_search_placeholder: 'उत्पाद खोजें...',
      partners_tab_all: 'सभी उत्पाद',
      partners_tab_import: 'आयात उत्पाद',
      partners_tab_export: 'निर्यात उत्पाद',
      partners_category_all: 'सभी श्रेणियां',
      partners_ships_from: 'यहाँ से शिप होता है',
      partners_ships_to: 'यहाँ शिप होता है',
      partners_delivery_time: 'अनुमानित डिलीवरी',
      partners_view_details: 'विवरण देखें',
      partners_request_quote: '💬 WhatsApp पर उद्धरण मांगें',
      partners_no_results: 'आपकी खोज से मेल खाने वाले कोई उत्पाद नहीं मिले।',
      partners_cta_text: 'जो खोज रहे हैं वह नहीं मिल रहा? किसी भी उत्पाद या विशेष आवश्यकता के बारे में हमसे पूछें।',
      partners_cta_button: '💬 किसी विशिष्ट उत्पाद के बारे में पूछें',
      footer_desc: 'रुआराका, नैरोबी में आधारित आपका विश्वसनीय आयात और निर्यात पार्टनर। पूर्वी और मध्य अफ्रीकी देशों को दुनिया से जोड़ना — एक शिपमेंट एक समय में।',
      footer_quick: 'त्वरित लिंक',
      footer_contact: 'संपर्क',
      footer_faq: 'सामान्य प्रश्न',
      faq_q1: 'शिपिंग कितना समय लेता है?',
      faq_a1: 'एशिया से समुद्री माल 25–45 दिन लेता है। हवाई माल 5–10 दिन लेता है। जापान से वाहन 4–8 सप्ताह लेते हैं।',
      faq_q2: 'मैं ऑर्डर कैसे रखूं?',
      faq_a2: 'अपने ऑर्डर विवरण के साथ हमें WhatsApp या ईमेल करें। हम उपलब्धता की पुष्टि करेंगे, एक उद्धरण प्रदान करेंगे और वहां से आगे बढ़ेंगे।',
      faq_q3: 'आप किन देशों से शिप करते हैं?',
      faq_a3: 'हम चीन, जापान, UAE, ब्रिटेन, जर्मनी, USA, भारत, सिंगापुर और दुनिया भर के कई अन्य देशों से सोर्स करते हैं।',
      faq_q4: 'क्या आप कस्टम्स का संभाल करते हैं?',
      faq_a4: 'हाँ! हम आपकी ओर से सभी कस्टम्स क्लीयरेंस, KRA अनुपालन, KEBS निरीक्षण और पोर्ट प्रक्रियाओं का संभाल करते हैं।',
      footer_copyright: '© 2026 Arakaharaka Enterprises. सर्वाधिकार सुरक्षित। | नियम और शर्तें',
      footer_made: 'नैरोबी, केन्या 🇰🇪 में ❤️ से बनाया गया',
      testimonials_page_label: 'ग्राहक समीक्षा',
      testimonials_page_title: 'हमारे ग्राहक क्या कहते हैं',
      testimonials_page_subtitle: 'हमारे शब्दों पर भरोसा न करें — यहाँ केन्या के वास्तविक ग्राहक क्या कहते हैं जो Arakaharaka Enterprises के साथ अपने अनुभव के बारे में।',
      testi_1: 'Arakaharaka ने जापान से मेरे वाहन के आयात को पूरी तरह से सहज बना दिया। नीलामी से लेकर नैरोबी में मेरे द्वार तक — उन्होंने सब कुछ पेशेवर रूप से संभाला। बिल्कुल 5 सितारे!',
      testi_2: 'WhatsApp के माध्यम से बहुत तेजी से प्रतिक्रिया देने वाली टीम। मैंने चीन से इलेक्ट्रॉनिक्स का ऑर्डर किया और उन्होंने हर चरण पर मुझे अपडेट किया। सब कुछ पूर्ण स्थिति में प्राप्त हुआ!',
      testi_3: 'हमें तत्काल औद्योगिक मशीनरी की आवश्यकता थी और Arakaharaka ने हमारे बजट के भीतर जर्मनी से इसे सोर्स किया। कस्टम्स किसी भी समस्या के बिना संभाला गया। फिर से उपयोग करेंगे!',
      testi_4: 'पहली बार आयातकर्ता के रूप में, मैं घबराया हुआ था। टीम ने धीरज से हर कदम पर मेरा मार्गदर्शन किया। मेरी वस्तुएं अनुमानित तिथि से पहले आ गईं! उनके साथ काम करने के लिए बेहतरीन लोग।',
      testi_5: 'हम 2 साल से चीन से बल्क शिपमेंट के लिए Arakaharaka के साथ काम कर रहे हैं। लगातार, विश्वसनीय, और हमेशा सर्वोत्तम माल भाड़े की दरें। वे हमारे पसंदीदा पार्टनर हैं।',
      testi_6: 'मुझे दुबई से लक्जरी आइटम चाहिए थे और मुझे नहीं पता था कि कहां से शुरू करना है। Arakaharaka ने प्रामाणिकता की गारंटी के साथ मुझे जो भी चाहिए था वह सब सोर्स किया। शीर्ष स्तर की सेवा!',
      testimonials_cta: 'क्या आपके साथ एक बेहतरीन अनुभव रहा? हम आपसे सुनना पसंद करेंगे!',
      testimonials_share_btn: '💬 अपना अनुभव साझा करें',
      hero_badge_1: '🚀 तेज शिपिंग',
      hero_badge_2: '🌍 वैश्विक सोर्सिंग',
      hero_badge_3: '🤝 विश्वसनीय पार्टनर',
      custom_solution_title: 'क्या आपको एक कस्टम समाधान चाहिए?',
      custom_solution_desc: 'हर व्यवसाय अलग है। हमें अपनी आवश्यकताएं बताएं और हम आपके लिए सही आयात/निर्यात योजना बनाएंगे।',
      custom_solution_btn: '📩 कस्टम उद्धरण प्राप्त करें',
      nav_dropdown_import: 'आयात पार्टनर',
      nav_dropdown_export: 'केन्या से निर्यात',
      legal_label: "कानूनी जानकारी",
      terms_title: "नियम और शर्तें",
      terms_subtitle:
        "कृपया Arakaharaka Enterprises के साथ ऑर्डर देने से पहले इन नियमों और शर्तों को ध्यानपूर्वक पढ़ें।",

      terms_orders_payments_title: "📦 1. ऑर्डर और भुगतान",
      terms_orders_payments_1:
        "सभी ऑर्डरों की पुष्टि प्रक्रिया शुरू होने से पहले ईमेल या व्हाट्सऐप के माध्यम से लिखित रूप में की जानी चाहिए।",
      terms_orders_payments_2:
        "स्रोत प्रक्रिया शुरू होने से पहले 50% अग्रिम जमा आवश्यक है, और शेष राशि शिपमेंट से पहले देय होगी।",
      terms_orders_payments_3:
        "भुगतान M-Pesa, बैंक ट्रांसफर या अन्य सहमत तरीकों से किया जा सकता है।",
      terms_orders_payments_4:
        "दिए गए मूल्य 48 घंटे तक मान्य रहते हैं और अंतरराष्ट्रीय ऑर्डरों के लिए विनिमय दर में उतार-चढ़ाव के अधीन हैं।",
      terms_orders_payments_5:
        "Arakaharaka Enterprises अपने विवेकानुसार किसी भी ऑर्डर को अस्वीकार करने का अधिकार सुरक्षित रखता है।",

      terms_shipping_title: "🚢 2. शिपिंग समयसीमा",
      terms_shipping_1:
        "अनुमानित डिलीवरी समय केवल मार्गदर्शन के लिए दिए जाते हैं और इसकी गारंटी नहीं है।",
      terms_shipping_2:
        "एशिया से समुद्री माल ढुलाई में सामान्यतः 25–45 दिन लगते हैं। हवाई माल ढुलाई में 5–10 कार्य दिवस लगते हैं।",
      terms_shipping_3:
        "जापान से वाहन शिपमेंट में नीलामी खरीद से मोंबासा बंदरगाह तक सामान्यतः 4–8 सप्ताह लगते हैं।",
      terms_shipping_4:
        "बंदरगाह भीड़, सीमा शुल्क, मौसम या अन्य हमारे नियंत्रण से बाहर के कारण होने वाली देरी के लिए Arakaharaka जिम्मेदार नहीं होगा।",
      terms_shipping_5:
        "किसी भी महत्वपूर्ण देरी की सूचना ग्राहकों को तुरंत दी जाएगी।",

      terms_liability_title: "⚖️ 3. दायित्व",
      terms_liability_1:
        "Arakaharaka Enterprises एक एजेंट और सुविधा प्रदाता के रूप में कार्य करता है और वस्तुओं का निर्माता या प्रत्यक्ष विक्रेता नहीं है।",
      terms_liability_2:
        "यदि वस्तुएँ शिपिंग बीमा के अंतर्गत आती हैं, तो परिवहन के दौरान हुई क्षति के लिए हम जिम्मेदार नहीं हैं।",
      terms_liability_3:
        "ग्राहक की जिम्मेदारी है कि वह अपने सामान के लिए सभी केन्याई आयात नियमों का पालन सुनिश्चित करे।",
      terms_liability_4:
        "ग्राहक द्वारा दी गई गलत घोषणाओं के कारण सीमा शुल्क द्वारा जब्त किए गए सामान के लिए हम जिम्मेदार नहीं हैं।",

      terms_refund_title: "🔄 4. धनवापसी नीति",
      terms_refund_1:
        "एक बार स्रोत या खरीद प्रक्रिया शुरू होने के बाद जमा राशि वापस नहीं की जाएगी।",
      terms_refund_2:
        "यदि वस्तुएँ ऑर्डर की गई वस्तुओं से काफी भिन्न हों, तो हमारे विवेकानुसार प्रतिस्थापन या आंशिक धनवापसी की व्यवस्था की जा सकती है।",
      terms_refund_3:
        "वाहन खरीद संबंधित नीलामी गृह की शर्तों के अधीन होती है और सामान्यतः खरीद के बाद धनवापसी योग्य नहीं होती।",
      terms_refund_4:
        "धनवापसी के अनुरोध डिलीवरी के 7 दिनों के भीतर लिखित रूप में प्रस्तुत किए जाने चाहिए।",

      terms_communication_title: "📬 5. संचार और विवाद",
      terms_communication_1:
        "सभी आधिकारिक संचार harakaint@gmail.com पर भेजे जाने चाहिए।",
      terms_communication_2:
        "किसी भी विवाद का समाधान पहले दोनों पक्षों के बीच सद्भावनापूर्ण वार्ता के माध्यम से किया जाएगा।",
      terms_communication_3:
        "ये नियम और शर्तें केन्या के कानूनों द्वारा शासित हैं।",
      terms_communication_4:
        "Arakaharaka Enterprises के साथ ऑर्डर देकर, आप इन नियमों और शर्तों को पूर्ण रूप से स्वीकार करते हैं।",

      terms_last_updated:
        "अंतिम अपडेट: 2025। इन नियमों के संबंध में प्रश्नों के लिए harakaint@gmail.com पर ईमेल करें。",
    },
    es: {
      nav_home: 'Inicio',
      nav_about: 'Acerca de',
      nav_services: 'Servicios',
      nav_tourism: 'Turismo',
      nav_partners: 'Socios',
      nav_testimonials: 'Testimonios',
      nav_contact: 'Contáctenos',
      hero_title: 'Su Socio de Confianza para Importación y Exportación',
      hero_subtitle: 'Arakaharaka conecta los países de África Oriental y Central con el mundo — abasteciendo productos de calidad, vehículos y bienes de mercados globales con confiabilidad y cuidado.',
      hero_cta1: 'Contáctenos',
      hero_cta2: 'Solicitar Cotización',
      stats_clients: 'Clientes Satisfechos',
      stats_partners: 'Marcas de Socios',
      stats_countries: 'Países Atendidos',
      stats_satisfaction: 'Satisfacción del Cliente',
      services_title: 'Nuestros Servicios Principales',
      services_subtitle: 'Desde la obtención de productos hasta la coordinación logística, manejamos la complejidad para que pueda concentrarse en su negocio.',
      service_import: 'Servicios de Importación',
      service_import_desc: 'Importamos una amplia gama de bienes de Asia, Europa y más allá directamente a Kenia — electrónica, artículos para el hogar, maquinaria y más.',
      service_export: 'Servicios de Exportación',
      service_export_desc: 'Ayudamos a las empresas kenianas a exportar productos de calidad a mercados internacionales, manejando documentación, logística y cumplimiento.',
      service_sourcing: 'Obtención de Productos',
      service_sourcing_desc: '¿No encuentra un producto localmente? Lo obtenemos para usted. Díganos lo que necesita y encontraremos la mejor calidad al mejor precio en todo el mundo.',
      service_vehicle: 'Importación de Vehículos',
      service_vehicle_desc: 'Importe vehículos de Japón, Reino Unido, EAU y más. Manejamos inspección, envío, aduanas y entrega a su puerta.',
      service_bulk: 'Envío Masivo',
      service_bulk_desc: 'Soluciones de envío masivo rentables para empresas que importan grandes cantidades. Negociamos las mejores tarifas de flete en su nombre.',
      service_logistics: 'Coordinación Logística',
      service_logistics_desc: 'Gestión logística de extremo a extremo — almacenamiento, aduanas, entrega de última milla y seguimiento de envíos en tiempo real.',
      testimonials_title: 'Confiable por Muchos',
      cta_title: '¿Listo para Importar o Exportar?',
      cta_subtitle: 'Déjenos ayudarle a importar con facilidad. Manejamos la parte difícil para usted.',
      cta_btn: 'Contáctenos',
      testimonials_label: "Lo Que Dicen Nuestros Clientes",
      testimonial_1_name: "Christian M. Mayani",
      testimonial_1_role: "Cliente de Importación – RDC",
      testimonial_1_text:
        "Arakaharaka nos ayudó a importar maquinaria pesada desde China de manera fluida y profesional. Su comunicación y apoyo logístico fueron excelentes.",

      testimonial_2_name: "George Solo",
      testimonial_2_role: "Cliente de Turismo – Tansania",
      testimonial_2_text:
        "Nuestro safari al Maasai Mara fue organizado perfectamente de principio a fin. El equipo fue profesional, atento e hizo que nuestra experiencia en Kenia fuera inolvidable.",

      testimonial_3_name: "Hedy",
      testimonial_3_role: "Meter of Vents – Hengwang Group, China",
      testimonial_3_text:
        "Obtuvimos café keniano premium y artesanías a través de Arakaharaka. La calidad, el embalaje y la entrega superaron nuestras expectativas.",
      about_title: 'Acerca de Arakaharaka Enterprises',
      about_subtitle: 'Nacido en Nairobi, construido para el mundo. Nos apasiona conectar los países de África Oriental y Central con mercados globales.',
      about_feature: 'Conectando Países de África Oriental y Central con el Mundo',
      about_feature_desc: 'Con sede en Ruaraka, Nairobi, hemos estado cerrando la brecha entre compradores de África Oriental y Central y proveedores globales desde nuestra fundación — con confianza, velocidad y atención personal en cada paso.',
      mission: 'Nuestra Misión',
      mission_desc: 'Hacer que el comercio global sea accesible y fácil para cada keniano — desde el empresario solitario hasta la gran corporación.',
      vision: 'Nuestra Visión',
      vision_desc: 'Ser el socio de importación/exportación más confiable en África Oriental, conocido por confiabilidad, transparencia y servicio excepcional.',
      values: 'Nuestros Valores',
      values_desc: 'Integridad en cada transacción. Velocidad en cada entrega. Un toque personal que las grandes empresas no pueden ofrecer.',
      tourism_label: 'Viajes y Experiencias',
      tourism_title: 'Reservas de Hotel, Safaris y Servicios Turísticos',
      tourism_subtitle: 'Arakaharaka le ayuda a planificar experiencias de viaje inolvidables en Kenia y África Oriental — desde estancias de hotel de lujo y vacaciones en la playa hasta aventuras de safari, viajes grupales, traslados al aeropuerto y paquetes turísticos personalizados.',
      tourism_plan: 'Planificar Mi Viaje',
      tourism_whatsapp: 'Reservar en WhatsApp',
      tourism_services_title: 'Explore África Oriental con Facilidad',
      tourism_services_subtitle: 'Ya sea que necesite una escapada romántica, alojamiento de negocios, un safari familiar o unas vacaciones costeras, coordinamos los detalles para que su viaje sea fluido de principio a fin.',
      tourism_hotel: 'Reservas de Hotel',
      tourism_hotel_desc: 'Ayudamos a organizar estancias de hotel, lodges, resorts, apartamentos y alojamiento ejecutivo según su presupuesto, ubicación y necesidades de viaje.',
      tourism_safari: 'Lodges y Campamentos de Safari',
      tourism_safari_desc: 'Reserve lodges de safari cómodos, campamentos con tiendas y estancias de naturaleza cerca de los parques y reservas más hermosos de Kenia y África Oriental.',
      tourism_adventure: 'Safaris y Aventuras',
      tourism_adventure_desc: 'Organizamos safaris de vida silvestre, recorridos de juego, experiencias en globo aerostático, visitas guiadas e itinerarios de aventura personalizados.',
      tourism_beach: 'Vacaciones en la Playa',
      tourism_beach_desc: 'Disfrute de escapadas costeras relajantes, vacaciones estilo isla, paquetes de luna de miel, viajes familiares a la playa y actividades oceánicas.',
      tourism_resort: 'Resorts, Retiros y Escapadas',
      tourism_resort_desc: 'Conectamos a los clientes con resorts de ocio, destinos de retiro, escapadas de fin de semana, estancias grupales y experiencias premium de relajación.',
      view_all_services: "Ver Todos Los Servicios →",
      testimonials_label: "Lo Que Dicen Nuestros Clientes",
      whatsapp_us_now: "Escríbenos por WhatsApp",
      our_story: "Nuestra Historia",

      tourism_services_label: "Servicios Turísticos",
      tourism_hiking: "Senderismo en Montañas",
      tourism_hiking_desc:
        "Explore impresionantes paisajes montañosos, senderos escénicos y aventuras inolvidables de senderismo por África Oriental.",
      tourism_cta_title: '¿Listo para Su Próximo Viaje?',
      tourism_cta_subtitle: 'Díganos su destino, fechas de viaje, número de invitados y presupuesto — le ayudaremos a planificar el paquete turístico adecuado.',
      tourism_cta_btn: 'Solicitar Ayuda de Reserva',
      contact_title: 'Hablemos de Negocios',
      contact_subtitle: '¿Listo para importar, exportar o tiene preguntas? Contáctenos a través del formulario, correo electrónico o WhatsApp — generalmente respondemos dentro de unas pocas horas.',
      contact_form_title: 'Envíenos un Mensaje',
      contact_name: 'Nombre Completo *',
      contact_email: 'Dirección de Correo *',
      contact_phone: 'Número de Teléfono',
      contact_service: 'Servicio de Interés',
      contact_message: 'Su Mensaje *',
      contact_btn: 'Enviar Mensaje',
      contact_email_label: 'Envíenos Correo',
      contact_phone_label: 'Llamar / WhatsApp',
      contact_location: 'Ubicación',
      contact_website: 'Sitio Web',
      why_label: 'Por Qué Elegirnos',
      why_title: 'La Diferencia Arakaharaka',
      why_reliability: 'Confiabilidad en la Que Puede Contar',
      why_reliability_desc: 'Seguimos cada pedido. Sus bienes llegan como se prometió, y lo mantenemos informado en cada paso.',
      why_global: 'Alcance Verdaderamente Global',
      why_global_desc: 'De Japón a Alemania, de China a los EAU — nuestra red de proveedores abarca cada región comercial importante del mundo.',
      why_personal: 'Servicio Personalizado',
      why_personal_desc: 'Trata directamente con nuestro equipo — sin centros de llamadas, sin demoras. WhatsApp nos y obtenga una persona real que conoce su pedido.',
      why_pricing: 'Precios Competitivos',
      why_pricing_desc: 'Aprovechamos nuestras relaciones con proveedores para obtenerle los mejores precios en bienes de calidad — ahorrándole dinero sin comprometer la calidad.',
      why_customs: 'Aduanas y Cumplimiento',
      why_customs_desc: 'Manejamos toda la documentación aduanera, derechos y requisitos de cumplimiento — nunca tiene que preocuparse por obstáculos burocráticos.',
      why_fast: 'Rotación Rápida',
      why_fast_desc: 'Priorizamos la velocidad en cada paso — desde la cotización hasta la entrega. Arakaharaka significa "apresurarse" — y vivimos según el nombre.',
      services_page_label: 'Lo Que Ofrecemos',
      services_page_title: 'Nuestros Servicios',
      services_page_subtitle: 'Soluciones integrales de importación y exportación adaptadas para empresas e individuos en Kenia y más allá.',
      service_page_import: 'Servicios de Importación',
      service_page_import_desc: 'Manejamos cada aspecto de la importación de bienes a Kenia — desde encontrar proveedores, negociar precios, organizar envío, aduanas y entrega. Electrónica, textiles, bienes industriales y más.',
      service_page_export: 'Servicios de Exportación',
      service_page_export_desc: 'Ayudar a productores y empresas kenianas a alcanzar compradores internacionales. Gestionamos embalaje, documentación, reserva de flete y cumplimiento regulatorio para exportaciones fluidas.',
      service_page_sourcing: 'Obtención de Productos',
      service_page_sourcing_desc: 'Envíenos una descripción de producto y la obtendremos de proveedores globales verificados. Comparamos calidad, precios y plazos de entrega para obtener la mejor oferta cada vez.',
      service_page_vehicle: 'Importación de Vehículos',
      service_page_vehicle_desc: 'Importe coches, motocicletas, camiones y maquinaria pesada de Japón, Reino Unido, Dubái y otros mercados. Incluye obtención de subastas, inspección, envío, cumplimiento KEBS y soporte de registro.',
      service_page_bulk: 'Envío Comercial y Masivo',
      service_page_bulk_desc: 'Negocie envío de contenedores FCL/LCL al mejor tarifa para empresas que importan grandes volúmenes. Consolidamos carga y optimizamos rutas de flete para reducir significativamente sus costos.',
      service_page_logistics: 'Coordinación Logística',
      service_page_logistics_desc: 'Logística completa de extremo a extremo — almacenamiento en origen, reenvío de flete, despacho aduanero, transporte interior y entrega de última milla a sus instalaciones en cualquier lugar de Kenia.',
      service_page_customs: 'Despacho Aduanero',
      service_page_customs_desc: 'Nuestro equipo experimentado maneja toda la documentación aduanera, pago de derechos, cumplimiento KRA, inspecciones KEBS y procedimientos portuarios — sus bienes pasan sin demoras.',
      service_page_consulting: 'Consultoría Comercial',
      service_page_consulting_desc: '¿Nuevo en la importación o exportación? Lo guiamos a través de regulaciones, costos, cronogramas y mejores prácticas para tomar decisiones informadas cada vez.',
      service_page_industrial: 'Industrial y Maquinaria',
      service_page_industrial_desc: 'Obtenga equipos industriales, maquinaria de fábrica, herramientas y piezas de repuesto de los principales fabricantes en China, Alemania y otros centros de fabricación globales.',
      partners_label: 'Nuestra Red',
      partners_title: 'Socios de Importación y Exportación',
      partners_subtitle: 'Conectamos a clientes con proveedores de importación de confianza en todo el mundo y ayudamos a empresas de África Oriental y Central a exportar productos de calidad local, regionalmente y en el extranjero.',
      partners_auto_title: '📥 Socios de Importación: Automotriz',
      partners_auto: 'Importación Automotriz',
      partners_auto_desc: 'Conectamos a clientes con importadores y exportadores automotrices de confianza, facilitando la importación fluida de vehículos y partes de todo el mundo.',
      partners_industrial_title: '📥 Socios de Importación: Proveedores Industriales y de Fabricación',
      partners_luxury_title: '📥 Socios de Importación: Marcas de Lujo y Consumo',
      partners_asian_title: '📥 Socios de Importación: Fabricantes y Proveedores Asiáticos',
      partners_export_title: '📤 Exportación de Kenia: Marcas y Productos Kenianos',
      partners_category_all: "Todas las Categorías",
      category_automotive: "Automotriz",
      category_industrial_manufacturing: "Industria y Manufactura",
      category_luxury_consumer_goods: "Productos de Lujo y Consumo",
      category_asian_manufacturers: "Fabricantes Asiáticos",
      category_construction_materials: "Materiales de Construcción",
      category_electronics_technology: "Electrónica y Tecnología",
      category_food_agricultural_products: "Productos Alimentarios y Agrícolas",
      category_african_culture: "Cultura Africana",
      category_kenyan_export_products: "Productos de Exportación de Kenia",
      partners_label: 'Nuestra Red',
      partners_title: 'Productos de Importación y Exportación',
      partners_subtitle: 'Busque nuestro catálogo de productos de importación y exportación, vea detalles de envío y contáctenos por WhatsApp para precios y disponibilidad.',
      partners_search_placeholder: 'Buscar productos...',
      partners_tab_all: 'Todos los Productos',
      partners_tab_import: 'Productos de Importación',
      partners_tab_export: 'Productos de Exportación',
      partners_category_all: 'Todas las Categorías',
      partners_ships_from: 'Envío Desde',
      partners_ships_to: 'Envío A',
      partners_delivery_time: 'Entrega Estimada',
      partners_view_details: 'Ver Detalles',
      partners_request_quote: '💬 Cotización por WhatsApp',
      partners_no_results: 'No se encontraron productos que coincidan con su búsqueda.',
      partners_cta_text: '¿No encuentra lo que busca? Pregúntenos sobre cualquier producto o requisito especial.',
      partners_cta_button: '💬 Preguntar por un Producto',
      footer_desc: 'Su socio de importación y exportación de confianza con sede en Ruaraka, Nairobi. Conectando países de África Oriental y Central con el mundo — un envío a la vez.',
      footer_quick: 'Enlaces Rápidos',
      footer_contact: 'Contacto',
      footer_faq: 'FAQ',
      faq_q1: '¿Cuánto tiempo tarda el envío?',
      faq_a1: 'El flete marítimo de Asia toma 25–45 días. El flete aéreo toma 5–10 días. Los vehículos de Japón toman 4–8 semanas.',
      faq_q2: '¿Cómo hago un pedido?',
      faq_a2: 'WhatsApp o correo electrónico con los detalles de su pedido. Confirmaremos disponibilidad, proporcionaremos una cotización y nos encargaremos del resto.',
      faq_q3: '¿De qué países envían?',
      faq_a3: 'Obtenemos de China, Japón, EAU, Reino Unido, Alemania, USA, India, Singapur y muchos más países en todo el mundo.',
      faq_q4: '¿Manejan aduanas?',
      faq_a4: '¡Sí! Manejamos todo el despacho aduanero, cumplimiento KRA, inspecciones KEBS y procedimientos portuarios en su nombre.',
      footer_copyright: '© 2026 Arakaharaka Enterprises. Todos los derechos reservados. | Términos y Condiciones',
      footer_made: 'Hecho con ❤️ en Nairobi, Kenia 🇰🇪',
      testimonials_page_label: 'Reseñas de Clientes',
      testimonials_page_title: 'Lo Que Dicen Nuestros Clientes',
      testimonials_page_subtitle: 'No nos crean solo por nuestra palabra — aquí está lo que dicen los clientes reales en todo Kenia sobre su experiencia con Arakaharaka Enterprises.',
      testi_1: 'Arakaharaka hizo que la importación de mi vehículo desde Japón fuera completamente fluida. Desde la subasta hasta mi puerta en Nairobi — manejaron todo profesionalmente. ¡Absolutamente 5 estrellas!',
      testi_2: 'Equipo súper receptivo a través de WhatsApp. Hice un pedido de electrónica desde China y me mantuvieron actualizado en cada etapa. ¡Recibí todo en perfecto estado!',
      testi_3: 'Necesitábamos maquinaria industrial urgentemente y Arakaharaka la obtuvo de Alemania dentro de nuestro presupuesto. La aduana se manejó sin ningún problema. ¡Volveré a usar!',
      testi_4: 'Como importador por primera vez, estaba nervioso. El equipo me guió pacientemente a través de cada paso. ¡Mis bienes llegaron antes de la fecha estimada! Excelentes personas con las que trabajar.',
      testi_5: 'Hemos trabajado con Arakaharaka para envíos masivos desde China durante 2 años. Constante, confiable y siempre las mejores tarifas de flete. Son nuestro socio de referencia.',
      testi_6: 'Quería artículos de lujo de Dubái y no sabía por dónde empezar. Arakaharaka obtuvo todo lo que necesitaba con autenticidad garantizada. ¡Servicio de primer nivel!',
      testimonials_cta: '¿Tuvo una excelente experiencia con nosotros? ¡Nos encantaría saber de usted!',
      testimonials_share_btn: '💬 Comparta Su Experiencia',
      hero_badge_1: '🚀 Envío Rápido',
      hero_badge_2: '🌍 Abastecimiento Global',
      hero_badge_3: '🤝 Socios de Confianza',
      custom_solution_title: '¿Necesita una Solución Personalizada?',
      custom_solution_desc: 'Cada negocio es diferente. Dinos tus necesidades y crearemos el plan de importación/exportación perfecto para ti.',
      custom_solution_btn: '📩 Obtener Cotización Personalizada',
      nav_dropdown_import: 'Socios de Importación',
      nav_dropdown_export: 'Exportar desde Kenia',
      legal_label: "Aviso Legal",
      terms_title: "Términos y Condiciones",
      terms_subtitle:
        "Lea atentamente estos términos antes de realizar un pedido con Arakaharaka Enterprises.",

      terms_orders_payments_title: "📦 1. Pedidos y Pagos",
      terms_orders_payments_1:
        "Todos los pedidos deben confirmarse por escrito mediante correo electrónico o WhatsApp antes de iniciar el procesamiento.",
      terms_orders_payments_2:
        "Se requiere un depósito del 50 % antes de comenzar el abastecimiento, y el saldo debe pagarse antes del envío.",
      terms_orders_payments_3:
        "El pago puede realizarse mediante M-Pesa, transferencia bancaria u otros métodos acordados.",
      terms_orders_payments_4:
        "Los precios cotizados son válidos durante 48 horas y están sujetos a fluctuaciones del tipo de cambio para pedidos internacionales.",
      terms_orders_payments_5:
        "Arakaharaka Enterprises se reserva el derecho de rechazar cualquier pedido a su discreción.",

      terms_shipping_title: "🚢 2. Plazos de Envío",
      terms_shipping_1:
        "Los plazos estimados de entrega se proporcionan solo como guía y no están garantizados.",
      terms_shipping_2:
        "El transporte marítimo desde Asia suele tardar entre 25 y 45 días. El transporte aéreo tarda entre 5 y 10 días hábiles.",
      terms_shipping_3:
        "Los envíos de vehículos desde Japón suelen tardar entre 4 y 8 semanas desde la compra en subasta hasta el puerto de Mombasa.",
      terms_shipping_4:
        "Los retrasos debidos a congestión portuaria, aduanas, clima u otros factores fuera de nuestro control no son responsabilidad de Arakaharaka.",
      terms_shipping_5:
        "Los clientes serán informados rápidamente sobre cualquier retraso significativo.",

      terms_liability_title: "⚖️ 3. Responsabilidad",
      terms_liability_1:
        "Arakaharaka Enterprises actúa como agente y facilitador y no es el fabricante ni el vendedor directo de los productos.",
      terms_liability_2:
        "No somos responsables de los productos dañados durante el tránsito si están cubiertos por un seguro de transporte.",
      terms_liability_3:
        "Es responsabilidad del cliente garantizar el cumplimiento de todas las regulaciones de importación de Kenia para sus productos.",
      terms_liability_4:
        "No somos responsables de los productos confiscados por la aduana debido a declaraciones falsas realizadas por el cliente.",

      terms_refund_title: "🔄 4. Política de Reembolsos",
      terms_refund_1:
        "Los depósitos no son reembolsables una vez que haya comenzado el abastecimiento o la adquisición.",
      terms_refund_2:
        "Si los productos son sustancialmente diferentes de los solicitados, podrá organizarse un reemplazo o un reembolso parcial a nuestra discreción.",
      terms_refund_3:
        "Las compras de vehículos están sujetas a las condiciones de la casa de subastas correspondiente y, por lo general, no son reembolsables una vez realizadas.",
      terms_refund_4:
        "Las solicitudes de reembolso deben presentarse por escrito dentro de los 7 días posteriores a la entrega.",

      terms_communication_title: "📬 5. Comunicación y Disputas",
      terms_communication_1:
        "Todas las comunicaciones oficiales deben dirigirse a harakaint@gmail.com.",
      terms_communication_2:
        "Cualquier disputa se resolverá primero mediante negociaciones de buena fe entre ambas partes.",
      terms_communication_3:
        "Estos términos se rigen por las leyes de Kenia.",
      terms_communication_4:
        "Al realizar un pedido con Arakaharaka Enterprises, usted acepta plenamente estos términos y condiciones.",

      terms_last_updated:
        "Última actualización: 2025. Para consultas sobre estos términos, envíe un correo electrónico a harakaint@gmail.com.",

    },
    ar: {
      nav_home: 'الرئيسية',
      nav_about: 'من نحن',
      nav_services: 'الخدمات',
      nav_tourism: 'السياحة',
      nav_partners: 'الشركاء',
      nav_testimonials: 'آراء العملاء',
      nav_contact: 'اتصل بنا',
      hero_title: 'شريكك الموثوق للاستيراد والتصدير',
      hero_subtitle: 'تربط Arakaharaka دول شرق ووسط أفريقيا بالعالم — توفير منتجات عالية الجودة ومركبات وبضائع من الأسواق العالمية بموثوقية وعناية.',
      hero_cta1: 'اتصل بنا',
      hero_cta2: 'طلب عرض سعر',
      stats_clients: 'عملاء راضون',
      stats_partners: 'علامات الشركاء',
      stats_countries: 'الدول المخدمة',
      stats_satisfaction: 'رضا العملاء',
      services_title: 'خدماتنا الأساسية',
      services_subtitle: 'من توفير المنتجات إلى تنسيق الخدمات اللوجستية، نحن نتعامل مع التعقيدات حتى تتمكن من التركيز على عملك.',
      service_import: 'خدمات الاستيراد',
      service_import_desc: 'نستورد مجموعة واسعة من البضائع من آسيا وأوروبا وما بعدها مباشرة إلى كينيا — الإلكترونيات، البضائع المنزلية، الآلات والمزيد.',
      service_export: 'خدمات التصدير',
      service_export_desc: 'نساعد الشركات الكينية على تصدير منتجات عالية الجودة إلى الأسواق الدولية، معالجة الوثائق، الخدمات اللوجستية والامتثال.',
      service_sourcing: 'توفير المنتجات',
      service_sourcing_desc: 'لا تجد المنتج محلياً؟ نحن نحصل عليه لك. أخبرنا بما تحتاجه وسنجد أفضل جودة بأفضل سعر في جميع أنحاء العالم.',
      service_vehicle: 'استيراد المركبات',
      service_vehicle_desc: 'استورد المركبات من اليابان والمملكة المتحدة والإمارات والمزيد. نحن نتعامل مع الفحص والشحن والتخليص الجمركي والتسليم إلى باب منزلك.',
      service_bulk: 'الشحن بالجملة',
      service_bulk_desc: 'حلول شحن بالجملة فعالة من حيث التكلفة للشركات التي تستورد كميات كبيرة. نحن نتفاوض على أفضل أسعار الشحن نيابة عنك.',
      service_logistics: 'تنسيق الخدمات اللوجستية',
      service_logistics_desc: 'إدارة الخدمات اللوجستية من البداية إلى النهاية — التخزين، التخليص الجمركي، التوصيل في الميل الأخير وتتبع الشحنات في الوقت الفعلي.',
      testimonials_title: 'موثوق من قبل الكثيرين',
      cta_title: 'جاهز للاستيراد أو التصدير؟',
      cta_subtitle: 'دعنا نساعدك في الاستيراد بسهولة. نحن نتعامل مع الجزء الصعب نيابة عنك.',
      cta_btn: 'اتصل بنا',
      testimonials_label: "ماذا يقول عملاؤنا",
      testimonial_1_name: "Christian M. Mayani",
      testimonial_1_role: "عميل استيراد – جمهورية الكونغو الديمقراطية",
      testimonial_1_text:
        "ساعدتنا Arakaharaka في استيراد المعدات الثقيلة من الصين بسلاسة واحترافية. كان التواصل والدعم اللوجستي ممتازين.",

      testimonial_2_name: "George Solo",
      testimonial_2_role: "عميلة سياحة – تانزانيا",
      testimonial_2_text:
        "تم تنظيم رحلة ماساي مارا الخاصة بنا بشكل مثالي من البداية إلى النهاية. كان الفريق محترفًا وسريع الاستجابة وجعل تجربتنا في كينيا لا تُنسى.",

      testimonial_3_name: "Hedy",
      testimonial_3_role: "عميل تصدير – مجموعة Hengwang، الصين",
      testimonial_3_text:
        "قمنا بشراء قهوة كينية فاخرة ومنتجات حرفية عبر Arakaharaka. تجاوزت الجودة والتغليف والتسليم جميع توقعاتنا.",
      about_title: 'حول Arakaharaka Enterprises',
      about_subtitle: 'مولود في نيروبي، مبني للعالم. نحن شغوفون بربط دول شرق ووسط أفريقيا بالأسواق العالمية.',
      about_feature: 'ربط دول شرق ووسط أفريقيا بالعالم',
      about_feature_desc: 'مقرنا في رواراكا، نيروبي، كنا نسد الفجوة بين المشترين في شرق ووسط أفريقيا والموردين العالميين منذ تأسيسنا — بثقة وسرعة واهتمام شخصي في كل خطوة.',
      mission: 'مهمتنا',
      mission_desc: 'جعل التجارة العالمية في متناول الجميع وسهلة لكل كيني — من رائد الأعمال الفردي إلى الشركة الكبيرة.',
      vision: 'رؤيتنا',
      vision_desc: 'أن نكون شريك الاستيراد/التصدير الأكثر موثوقية في شرق أفريقيا، المعروف بالموثوقية والشفافية والخدمة المتميزة.',
      values: 'قيمنا',
      values_desc: 'النزاهة في كل معاملة. السرعة في كل تسليم. لمسة شخصية لا تستطيع الشركات الكبيرة تقديمها.',
      tourism_label: 'السفر والتجارب',
      tourism_title: 'حجوزات الفنادق، السفاري والخدمات السياحية',
      tourism_subtitle: 'يساعدك Arakaharaka في تخطيط تجارب سفر لا تُنسى في كينيا وشرق أفريقيا — من إقامات فندقية فاخرة وإجازات شاطئية إلى مغامرات السفاري ورحلات المجموعات ونقل المطار والباقات السياحية المخصصة.',
      tourism_plan: 'تخطيط رحلتي',
      tourism_whatsapp: 'الحجز عبر واتساب',
      tourism_services_title: 'استكشف شرق أفريقيا بسهولة',
      tourism_services_subtitle: 'سواء كنت بحاجة إلى هروب رومانسي أو إقامة عمل أو سفاري عائلي أو إجازة ساحلية، ننسق التفاصيل لجعل رحلتك سلسة من البداية إلى النهاية.',
      tourism_hotel: 'حجوزات الفنادق',
      tourism_hotel_desc: 'نساعد في تنظيم إقامات الفنادق والنزل والمنتججات والشقق والإقامة التنفيذية بناءً على ميزانيتك وموقعك واحتياجات سفرك.',
      tourism_safari: 'نزل السفاري والمخيمات',
      tourism_safari_desc: 'احجز نزل السفاري المريحة والمخيمات الخيامية والإقامات الطبيعية بالقرب من أجمل الحدائق والمحميات في كينيا وشرق أفريقيا.',
      tourism_adventure: 'رحلات السفاري والمغامرات',
      tourism_adventure_desc: 'ننظم سفاري الحياة البرية ورحلات الصيد وتجارب المنطاد والجولات الموجهة وجداول المغامرات المخصصة.',
      tourism_beach: 'إجازات الشاطئ',
      tourism_beach_desc: 'استمتع بالهروب الساحلي المريح والإجازات بأسلوب الجزيرة وباقات شهر العسل ورحلات العائلة إلى الشاطئ والأنشطة البحرية.',
      tourism_resort: 'المنتجعات، الملاذات والهروب',
      tourism_resort_desc: 'نربط العملاء بمنتجعات الترفيه ووجهات الملاذ وهروب عطلة نهاية الأسبوع والإقامات الجماعية وتجارب الاسترخاء المتميزة.',
      view_all_services: "عرض جميع الخدمات →",
      testimonials_label: "ماذا يقول عملاؤنا",
      whatsapp_us_now: "راسلنا عبر واتساب الآن",
      our_story: "قصتنا",

      tourism_services_label: "خدمات السياحة",
      tourism_hiking: "تسلق الجبال",
      tourism_hiking_desc:
        "استكشف المناظر الجبلية الخلابة والمسارات الطبيعية الرائعة ومغامرات المشي الجبلي التي لا تُنسى في شرق أفريقيا.",
      tourism_cta_title: 'جاهز لرحلتك القادمة؟',
      tourism_cta_subtitle: 'أخبرنا بوجهتك وتواريخ سفرك وعدد الضيوف وميزانيتك — سن帮助你 تخطيط الباقة السياحية المناسبة.',
      tourism_cta_btn: 'طلب مساعدة الحجز',
      contact_title: 'دعنا نتحدث عن الأعمال',
      contact_subtitle: 'جاهز للاستيراد أو التصدير أو لديك أسئلة؟ تواصل معنا عبر النموذج أو البريد الإلكتروني أو واتساب — نرد عادة في غضون بضع ساعات.',
      contact_form_title: 'أرسل لنا رسالة',
      contact_name: 'الاسم الكامل *',
      contact_email: 'عنوان البريد الإلكتروني *',
      contact_phone: 'رقم الهاتف',
      contact_service: 'الخدمة المهتم بها',
      contact_message: 'رسالتك *',
      contact_btn: 'إرسال الرسالة',
      contact_email_label: 'أرسل لنا بريد إلكتروني',
      contact_phone_label: 'اتصل / واتساب',
      contact_location: 'الموقع',
      contact_website: 'الموقع الإلكتروني',
      why_label: 'لماذا تختارنا',
      why_title: 'الفرق Arakaharaka',
      why_reliability: 'الموثوقية التي يمكنك الاعتماد عليها',
      why_reliability_desc: 'نحن نتبع كل طلب. تصل بضائعك كما وعدنا، ونحافظ على تحديثك في كل خطوة.',
      why_global: 'وصول عالمي حقيقي',
      why_global_desc: 'من اليابان إلى ألمانيا، من الصين إلى الإمارات — شبكة الموردين لدينا تغطي كل منطقة تجارية رئيسية في العالم.',
      why_personal: 'خدمة شخصية',
      why_personal_desc: 'تتعامل مباشرة مع فريقنا — لا توجد مراكز اتصال، لا تأخير. واتسابنا واحصل على شخص حقيقي يعرف طلبك.',
      why_pricing: 'تسعير تنافسي',
      why_pricing_desc: 'نستفيد من علاقاتنا مع الموردين للحصول على أفضل الأسعار للبضائع عالية الجودة — توفير المال دون المساومة على الجودة.',
      why_customs: 'الجمارك والامتثال',
      why_customs_desc: 'نحن نتعامل مع جميع الأوراق الجمركية والرسوم ومتطلبات الامتثال — لست مضطراً للقلق بشأن العقبات البيروقراطية.',
      why_fast: 'دوران سريع',
      why_fast_desc: 'نحن نعطي الأولوية للسرعة في كل خطوة — من العرض إلى التسليم. Arakaharaka تعني "عجلة" — ونحن نعيش بالاسم.',
      services_page_label: 'ما نقدمه',
      services_page_title: 'خدماتنا',
      services_page_subtitle: 'حلول استيراد وتصدير شاملة مصممة للشركات والأفراد في كينيا وما وراءها.',
      service_page_import: 'خدمات الاستيراد',
      service_page_import_desc: 'نحن نتعامل مع كل جانب من جوانب استيراد البضائع إلى كينيا — من العثور على الموردين، التفاوض على الأسعار، ترتيب الشحن، التخليص الجمركي والتسليم. الإلكترونيات، المنسوجات، البضائع الصناعية، والمزيد.',
      service_page_export: 'خدمات التصدير',
      service_page_export_desc: 'مساعدة المنتجين والشركات الكينية على الوصول إلى المشترين الدوليين. نحن ندير التغليف، التوثيق، حجز البضائع والامتثال التنظيمي للتصديرات السلسة.',
      service_page_sourcing: 'توفير المنتجات',
      service_page_sourcing_desc: 'أرسل لنا وصف المنتج وسنحصل عليه من الموردين العالميين الموثوقين. نقارن الجودة والأسعار وآلات التسليم للحصول على أفضل صفقة في كل مرة.',
      service_page_vehicle: 'استيراد المركبات',
      service_page_vehicle_desc: 'استورد السيارات والدراجات النارية والشاحنات والآلات الثقيلة من اليابان والمملكة المتحدة ودبي والأسواق الأخرى. يشمل توفير المزاد، الفحص، الشحن، الامتثال KEBS ودعم التسجيل.',
      service_page_bulk: 'الشحن التجاري والجملة',
      service_page_bulk_desc: 'تفاوض على شحن حاويات FCL/LCL بأفضل سعر للشركات التي تستورد أحجاماً كبيرة. نحن ندمج البضائع ونحسن طرق الشحن لتقليل تكاليفك بشكل كبير.',
      service_page_logistics: 'تنسيق الخدمات اللوجستية',
      service_page_logistics_desc: 'الخدمات اللوجستية الكاملة من البداية إلى النهاية — التخزين في الأصل، إعادة توجيه البضائع، التخليص الجمركي، النقل الداخلي والتسليم في الميل الأخير إلى منشآتك في أي مكان في كينيا.',
      service_page_customs: 'التخليص الجمركي',
      service_page_customs_desc: 'فريقنا ذو الخبرة يتعامل مع جميع الوثائق الجمركية ودفع الرسوم والامتثال لـ KRA وفحوصات KEBS والإجراءات الجمركية — تمر بضائعك دون تأخير.',
      service_page_consulting: 'استشارات التجارة',
      service_page_consulting_desc: 'جديد في الاستيراد أو التصدير؟ نحن نرشدك عبر اللوائح والتكاليف والجداول الزمنية وأفضل الممارسات لاتخاذ قرارات مستنيرة في كل مرة.',
      service_page_industrial: 'الصناعي والآلات',
      service_page_industrial_desc: 'احصل على المعدات الصناعية وآلات المصانع والأدوات وقطع الغيار من كبار المصنعين في الصين وألمانيا ومراكز التصنيع العالمية الأخرى.',
      partners_label: 'شبكتنا',
      partners_title: 'شركاء الاستيراد والتصدير',
      partners_subtitle: 'نحن نربط العملاء بموردي الاستيراد الموثوقين في جميع أنحاء العالم ونساعد الشركات في شرق ووسط أفريقيا على تصدير المنتجات عالية الجودة محلياً وإقليمياً ودولياً.',
      partners_auto_title: '📥 شركاء الاستيراد: السيارات',
      partners_auto: 'استيراد السيارات',
      partners_auto_desc: 'نحن نربط العملاء بموردي ومصدر السيارات الموثوقين، مما يسهل الاستيراد السلس للمركبات والقطع من جميع أنحاء العالم.',
      partners_industrial_title: '📥 شركاء الاستيراد: موردي الصناعة والتصنيع',
      partners_luxury_title: '📥 شركاء الاستيراد: العلامات الفاخرة والاستهلاكية',
      partners_asian_title: '📥 شركاء الاستيراد: المصنعون والموردون الآسيويون',
      partners_export_title: '📤 التصدير من كينيا: العلامات والمنتجات الكينية',
      partners_category_all: "جميع الفئات",
      category_automotive: "السيارات",
      category_industrial_manufacturing: "الصناعة والتصنيع",
      category_luxury_consumer_goods: "السلع الفاخرة والاستهلاكية",
      category_asian_manufacturers: "المصنّعون الآسيويون",
      category_construction_materials: "مواد البناء",
      category_electronics_technology: "الإلكترونيات والتكنولوجيا",
      category_food_agricultural_products: "المنتجات الغذائية والزراعية",
      category_african_culture: "الثقافة الأفريقية",
      category_kenyan_export_products: "منتجات التصدير الكينية",
      partners_label: 'شبكتنا',
      partners_title: 'منتجات الاستيراد والتصدير',
      partners_subtitle: 'ابحث في كتالوج منتجات الاستيراد والتصدير لدينا، اطلع على تفاصيل الشحن، وتواصل معنا عبر واتساب للأسعار والتوفر.',
      partners_search_placeholder: 'البحث عن المنتجات...',
      partners_tab_all: 'جميع المنتجات',
      partners_tab_import: 'منتجات الاستيراد',
      partners_tab_export: 'منتجات التصدير',
      partners_category_all: 'جميع الفئات',
      partners_ships_from: 'يشحن من',
      partners_ships_to: 'يشحن إلى',
      partners_delivery_time: 'التسليم المتوقع',
      partners_view_details: 'عرض التفاصيل',
      partners_request_quote: '💬 طلب عرض سعر عبر واتساب',
      partners_no_results: 'لم يتم العثور على منتجات تطابق بحثك.',
      partners_cta_text: 'لا تجد ما تبحث عنه؟ اسألنا عن أي منتج أو متطلب خاص وسنقوم بتوفيره لك.',
      partners_cta_button: '💬 اسأل عن منتج محدد',
      footer_desc: 'شريك الاستيراد والتصدير الموثوق الخاص بك مقره في رواراكا، نيروبي. ربط دول شرق ووسط أفريقيا بالعالم — شحنة واحدة في كل مرة.',
      footer_quick: 'روابط سريعة',
      footer_contact: 'اتصل',
      footer_faq: 'الأسئلة الشائعة',
      faq_q1: 'كم يستغرق الشحن؟',
      faq_a1: 'الشحن البحري من آسيا يستغرق 25–45 يوماً. الشحن الجوي يستغرق 5–10 أيام. المركبات من اليابان تستغرق 4–8 أسابيع.',
      faq_q2: 'كيف أضع طلباً؟',
      faq_a2: 'واتساب أو بريد إلكتروني مع تفاصيل طلبك. سنؤكد التوفر، ونوفر عرضاً وسنتولى الباقي.',
      faq_q3: 'من أي دول تشحنون؟',
      faq_a3: 'نحن نحصل من الصين واليابان والإمارات والمملكة المتحدة وألمانيا والولايات المتحدة والهند وسنغافورة والعديد من الدول الأخرى حول العالم.',
      faq_q4: 'هل تتعاملون مع الجمارك؟',
      faq_a4: 'نعم! نحن نتعامل مع جميع التخليص الجمركي والامتثال لـ KRA وفحوصات KEBS والإجراءات الجمركية نيابة عنك.',
      footer_copyright: '© 2026 Arakaharaka Enterprises. جميع الحقوق محفوظة. | الشروط والأحكام',
      footer_made: 'صنع بـ ❤️ في نيروبي، كينيا 🇰🇪',
      testimonials_page_label: 'آراء العملاء',
      testimonials_page_title: 'ماذا يقول عملاؤنا',
      testimonials_page_subtitle: 'لا تصدقنا على كلمتنا — هذا ما يقوله العملاء الحقيقيون في جميع أنحاء كينيا عن تجربتهم مع Arakaharaka Enterprises.',
      testi_1: 'جعل Arakaharaka استيراد سيارتي من اليابان سلساً تماماً. من المزاد إلى باب منزلي في نيروبي — تعاملوا مع كل شيء باحترافية. 5 نجوم بالتأكيد!',
      testi_2: 'فريق متجاوب جداً عبر واتساب. وضعت طلباً للإلكترونيات من الصين وأبقوني على اطلاع في كل مرحلة. استلمت كل شيء في حالة مثالية!',
      testi_3: 'كنا نحتاج إلى معدات صناعية بشكل عاجل و Arakaharaka حصل عليها من ألمانيا في حدود ميزانيتنا. تم التعامل مع الجمارك دون أي مشاكل. سأستخدم مرة أخرى!',
      testi_4: 'كمستورد لأول مرة، كنت متوتراً. قادني الفريق بصبر عبر كل خطوة. وصلت بضائعي قبل التاريخ المقدر! أشخاص رائعون للعمل معهم.',
      testi_5: 'نعمل مع Arakaharaka للشحنات الجماعية من الصين منذ عامين. ثابت، موثوق، ودائماً أفضل أسعار الشحن. هم شريكنا المفضل.',
      testi_6: 'أردت سلعاً فاخرة من دبي ولم أكن أعرف من أين أبدأ. حصل Arakaharaka على كل ما أحتاجه مع ضمان الأصالة. خدمة من الدرجة الأولى!',
      testimonials_cta: 'هل كان لديك تجربة رائعة معنا؟ نود أن نسمع منك!',
      testimonials_share_btn: '💬 شارك تجربتك',
      hero_badge_1: '🚀 شحن سريع',
      hero_badge_2: '🌍 توريد عالمي',
      hero_badge_3: '🤝 شركاء موثوقون',
      custom_solution_title: 'هل تحتاج إلى حل مخصص؟',
      custom_solution_desc: 'كل عمل مختلف. أخبرنا باحتياجاتك وسنقوم بإنشاء خطة استيراد/تصدير مثالية لك.',
      custom_solution_btn: '📩 الحصول على عرض سعر مخصص',
      nav_dropdown_import: 'شركاء الاستيراد',
      nav_dropdown_export: 'التصدير من كينيا',
      legal_label: "الشؤون القانونية",
      terms_title: "الشروط والأحكام",
      terms_subtitle:
        "يرجى قراءة هذه الشروط والأحكام بعناية قبل تقديم طلب إلى شركة Arakaharaka Enterprises.",

      terms_orders_payments_title: "📦 1. الطلبات والمدفوعات",
      terms_orders_payments_1:
        "يجب تأكيد جميع الطلبات كتابيًا عبر البريد الإلكتروني أو واتساب قبل بدء المعالجة.",
      terms_orders_payments_2:
        "يلزم دفع عربون بنسبة 50٪ قبل بدء عملية التوريد، ويجب سداد الرصيد المتبقي قبل الشحن.",
      terms_orders_payments_3:
        "يمكن الدفع عبر M-Pesa أو التحويل البنكي أو أي طرق أخرى يتم الاتفاق عليها.",
      terms_orders_payments_4:
        "الأسعار المعروضة صالحة لمدة 48 ساعة وتخضع لتقلبات أسعار الصرف بالنسبة للطلبات الدولية.",
      terms_orders_payments_5:
        "تحتفظ شركة Arakaharaka Enterprises بالحق في رفض أي طلب وفقًا لتقديرها الخاص.",

      terms_shipping_title: "🚢 2. الجداول الزمنية للشحن",
      terms_shipping_1:
        "مواعيد التسليم التقديرية مقدمة كدليل إرشادي فقط وليست مضمونة.",
      terms_shipping_2:
        "يستغرق الشحن البحري من آسيا عادةً من 25 إلى 45 يومًا، بينما يستغرق الشحن الجوي من 5 إلى 10 أيام عمل.",
      terms_shipping_3:
        "تستغرق شحنات المركبات من اليابان عادةً من 4 إلى 8 أسابيع من تاريخ الشراء في المزاد حتى الوصول إلى ميناء مومباسا.",
      terms_shipping_4:
        "لا تتحمل Arakaharaka مسؤولية التأخيرات الناتجة عن ازدحام الموانئ أو الجمارك أو الأحوال الجوية أو أي عوامل أخرى خارجة عن سيطرتنا.",
      terms_shipping_5:
        "سيتم إخطار العملاء فورًا بأي تأخير كبير.",

      terms_liability_title: "⚖️ 3. المسؤولية",
      terms_liability_1:
        "تعمل شركة Arakaharaka Enterprises كوكيل وميسر وليست الشركة المصنعة أو البائع المباشر للبضائع.",
      terms_liability_2:
        "لسنا مسؤولين عن البضائع المتضررة أثناء النقل إذا كانت مشمولة بتأمين الشحن.",
      terms_liability_3:
        "يتحمل العميل مسؤولية التأكد من امتثال بضائعه لجميع لوائح الاستيراد الكينية.",
      terms_liability_4:
        "لسنا مسؤولين عن البضائع التي تصادرها الجمارك بسبب تصريحات غير صحيحة قدمها العميل.",

      terms_refund_title: "🔄 4. سياسة الاسترداد",
      terms_refund_1:
        "العربون غير قابل للاسترداد بمجرد بدء عملية التوريد أو الشراء.",
      terms_refund_2:
        "إذا كانت البضائع مختلفة بشكل جوهري عن المطلوب، فقد يتم ترتيب استبدال أو استرداد جزئي وفقًا لتقديرنا.",
      terms_refund_3:
        "تخضع عمليات شراء المركبات لشروط دار المزادات المعنية وعادةً لا تكون قابلة للاسترداد بعد الشراء.",
      terms_refund_4:
        "يجب تقديم طلبات الاسترداد كتابيًا خلال 7 أيام من تاريخ التسليم.",

      terms_communication_title: "📬 5. التواصل والنزاعات",
      terms_communication_1:
        "يجب توجيه جميع المراسلات الرسمية إلى harakaint@gmail.com.",
      terms_communication_2:
        "يتم حل أي نزاع أولاً من خلال مفاوضات بحسن نية بين الطرفين.",
      terms_communication_3:
        "تخضع هذه الشروط والأحكام لقوانين كينيا.",
      terms_communication_4:
        "من خلال تقديم طلب إلى Arakaharaka Enterprises، فإنك توافق بالكامل على هذه الشروط والأحكام.",

      terms_last_updated:
        "آخر تحديث: 2025. للاستفسارات المتعلقة بهذه الشروط، يرجى إرسال بريد إلكتروني إلى harakaint@gmail.com.",

    },
    //portuguese
    pt: {
  nav_home: 'Início',
  nav_about: 'Sobre',
  nav_services: 'Serviços',
  nav_tourism: 'Turismo',
  nav_partners: 'Parceiros',
  nav_testimonials: 'Depoimentos',
  nav_contact: 'Fale Conosco',
  hero_title: 'Seu Parceiro Confiável de Importação e Exportação',
  hero_subtitle: 'A Arakaharaka conecta países da África Oriental e Central ao mundo — fornecendo produtos, veículos e mercadorias de qualidade dos mercados globais com confiabilidade e cuidado.',
  hero_cta1: 'Fale Conosco',
  hero_cta2: 'Solicitar Orçamento',
  stats_clients: 'Clientes Satisfeitos',
  stats_partners: 'Marcas Parceiras',
  stats_countries: 'Países Atendidos',
  stats_satisfaction: 'Satisfação dos Clientes',
  services_title: 'Nossos Principais Serviços',
  services_subtitle: 'Do fornecimento de produtos à coordenação logística, lidamos com a complexidade para que você possa focar no seu negócio.',
  service_import: 'Serviços de Importação',
  service_import_desc: 'Importamos uma ampla variedade de produtos da Ásia, Europa e além diretamente para o Quênia — eletrônicos, utensílios domésticos, máquinas e muito mais.',
  service_export: 'Serviços de Exportação',
  service_export_desc: 'Ajudamos empresas quenianas a exportar produtos de qualidade para mercados internacionais, cuidando da documentação, logística e conformidade.',
  service_sourcing: 'Fornecimento de Produtos',
  service_sourcing_desc: 'Não consegue encontrar um produto localmente? Nós o encontramos para você. Diga-nos o que precisa e encontraremos a melhor qualidade pelo melhor preço mundialmente.',
  service_vehicle: 'Importação de Veículos',
  service_vehicle_desc: 'Importe veículos do Japão, Reino Unido, Emirados Árabes Unidos e mais. Cuidamos da inspeção, envio, desembaraço aduaneiro e entrega até sua porta.',
  service_bulk: 'Envio em Massa',
  service_bulk_desc: 'Soluções econômicas de envio em massa para empresas que importam grandes quantidades. Negociamos as melhores tarifas de frete em seu nome.',
  service_logistics: 'Coordenação Logística',
  service_logistics_desc: 'Gestão logística completa — armazenagem, desembaraço aduaneiro, entrega final e rastreamento em tempo real.',
  testimonials_title: 'Confiado por Muitos',
  cta_title: 'Pronto para Importar ou Exportar?',
  cta_subtitle: 'Vamos ajudá-lo a importar com facilidade. Nós cuidamos da parte difícil para você.',
  cta_btn: 'Entre em Contato',
  testimonials_label: 'O Que os Clientes Dizem',
  testimonial_1_name: 'Christian M. Mayani',
  testimonial_1_role: 'Cliente de Importação – RDC',
  testimonial_1_text: 'A Arakaharaka nos ajudou a importar máquinas pesadas da China de forma tranquila e profissional. A comunicação e o suporte logístico foram excepcionais.',

  testimonial_2_name: 'George Solo',
  testimonial_2_role: 'Cliente de Turismo – Tanzânia',
  testimonial_2_text: 'Nosso safári em Maasai Mara foi perfeitamente organizado do início ao fim. A equipe foi profissional, receptiva e tornou nossa experiência no Quênia inesquecível.',

  testimonial_3_name: 'Hedy',
  testimonial_3_role: 'Gerente de Vendas – Hengwang Group, China',
  testimonial_3_text: 'Obtivemos café queniano premium e artesanato através da Arakaharaka. A qualidade, embalagem e entrega superaram nossas expectativas.',

  about_title: 'Sobre a Arakaharaka Enterprises',
  about_subtitle: 'Nascida em Nairobi, construída para o mundo. Somos apaixonados por conectar países da África Oriental e Central aos mercados globais.',
  about_feature: 'Conectando Países da África Oriental e Central ao Mundo',
  about_feature_desc: 'Com sede em Ruaraka, Nairobi, temos conectado compradores da África Oriental e Central a fornecedores globais desde nossa fundação — com confiança, rapidez e atenção personalizada em cada etapa.',
  mission: 'Nossa Missão',
  mission_desc: 'Tornar o comércio global acessível e simples para todos os quenianos — do empreendedor individual às grandes corporações.',
  vision: 'Nossa Visão',
  vision_desc: 'Ser o parceiro de importação/exportação mais confiável da África Oriental, conhecido pela confiabilidade, transparência e excelente serviço.',
  values: 'Nossos Valores',
  values_desc: 'Integridade em cada transação. Rapidez em cada entrega. Um toque pessoal que grandes empresas não conseguem oferecer.',

  tourism_label: 'Viagens e Experiências',
  tourism_title: 'Reservas de Hotéis, Safáris e Serviços de Turismo',
  tourism_subtitle: 'A Arakaharaka ajuda você a planejar experiências de viagem inesquecíveis no Quênia e na África Oriental — desde estadias em hotéis de luxo e férias na praia até aventuras em safáris, viagens em grupo, traslados de aeroporto e pacotes turísticos personalizados.',
  tourism_plan: 'Planejar Minha Viagem',
  tourism_whatsapp: 'Reservar no WhatsApp',

  tourism_services_title: 'Explore a África Oriental com Facilidade',
  tourism_services_subtitle: 'Se você precisa de uma escapada romântica, hospedagem de negócios, safári em família ou férias costeiras, coordenamos os detalhes para que sua viagem seja tranquila do início ao fim.',

  tourism_hotel: 'Reservas de Hotéis',
  tourism_hotel_desc: 'Ajudamos a organizar estadias em hotéis, lodges, resorts, apartamentos e acomodações executivas com base no seu orçamento, localização e necessidades de viagem.',

  tourism_safari: 'Lodges e Acampamentos de Safári',
  tourism_safari_desc: 'Reserve lodges confortáveis, acampamentos de luxo e estadias na natureza perto dos mais belos parques e reservas do Quênia e da África Oriental.',

  tourism_adventure: 'Viagens e Aventuras de Safári',
  tourism_adventure_desc: 'Organizamos safáris de vida selvagem, passeios de observação, experiências de balão de ar quente, visitas guiadas e roteiros personalizados de aventura.',

  tourism_beach: 'Férias na Praia',
  tourism_beach_desc: 'Desfrute de escapadas relaxantes na costa, férias em estilo ilha, pacotes de lua de mel, viagens familiares à praia e atividades oceânicas.',

  tourism_resort: 'Resorts, Retiros e Escapadas',
  tourism_resort_desc: 'Conectamos clientes a resorts de lazer, destinos de retiro, escapadas de fim de semana, estadias em grupo e experiências premium de relaxamento.',

  view_all_services: 'Ver Todos os Serviços →',
  whatsapp_us_now: 'Fale Conosco no WhatsApp Agora',
  our_story: 'Nossa História',

  tourism_services_label: 'Serviços de Turismo',
  tourism_hiking: 'Caminhadas em Montanhas',
  tourism_hiking_desc: 'Explore paisagens montanhosas deslumbrantes, trilhas cênicas e aventuras inesquecíveis de caminhada pela África Oriental.',

  tourism_cta_title: 'Pronto para Sua Próxima Viagem?',
  tourism_cta_subtitle: 'Diga-nos seu destino, datas de viagem, número de hóspedes e orçamento — ajudaremos você a planejar o pacote turístico ideal.',
  tourism_cta_btn: 'Solicitar Ajuda para Reserva',

  contact_title: 'Vamos Falar de Negócios',
  contact_subtitle: 'Pronto para importar, exportar ou apenas tem dúvidas? Entre em contato pelo formulário, email ou WhatsApp — geralmente respondemos em poucas horas.',
  contact_form_title: 'Envie-nos uma Mensagem',
  contact_name: 'Nome Completo *',
  contact_email: 'Endereço de Email *',
  contact_phone: 'Número de Telefone',
  contact_service: 'Serviço de Interesse',
  contact_message: 'Sua Mensagem *',
  contact_btn: 'Enviar Mensagem',
  contact_email_label: 'Envie-nos um Email',
  contact_phone_label: 'Ligue / WhatsApp',
  contact_location: 'Localização',
  contact_website: 'Site',  
  why_label: 'Por Que Nos Escolher',
  why_title: 'O Diferencial da Arakaharaka',

  why_reliability: 'Confiabilidade em Que Você Pode Confiar',
  why_reliability_desc:
    'Cumprimos cada pedido. Seus produtos chegam conforme prometido e mantemos você atualizado em cada etapa.',

  why_global: 'Alcance Verdadeiramente Global',
  why_global_desc:
    'Do Japão à Alemanha, da China aos Emirados Árabes Unidos — nossa rede de fornecedores cobre todas as principais regiões comerciais do mundo.',

  why_personal: 'Atendimento Personalizado',
  why_personal_desc:
    'Você fala diretamente com nossa equipe — sem centrais de atendimento, sem atrasos. Envie uma mensagem no WhatsApp e fale com uma pessoa real que conhece seu pedido.',

  why_pricing: 'Preços Competitivos',
  why_pricing_desc:
    'Utilizamos nossos relacionamentos com fornecedores para conseguir os melhores preços em produtos de qualidade — economizando seu dinheiro sem comprometer a qualidade.',

  why_customs: 'Alfândega e Conformidade',
  why_customs_desc:
    'Cuidamos de toda a documentação alfandegária, impostos e requisitos de conformidade — para que você nunca precise se preocupar com burocracia.',

  why_fast: 'Resposta Rápida',
  why_fast_desc:
    'Priorizamos rapidez em todas as etapas — da cotação à entrega. Arakaharaka significa “rápido” — e fazemos jus ao nome.',

  services_page_label: 'O Que Oferecemos',
  services_page_title: 'Nossos Serviços',
  services_page_subtitle:
    'Soluções completas de importação e exportação adaptadas para empresas e indivíduos no Quênia e além.',

  service_page_import: 'Serviços de Importação',
  service_page_import_desc:
    'Cuidamos de todos os aspectos da importação de produtos para o Quênia — desde encontrar fornecedores, negociar preços, organizar o envio, desembaraço aduaneiro e entrega. Eletrônicos, têxteis, produtos industriais e muito mais.',

  service_page_export: 'Serviços de Exportação',
  service_page_export_desc:
    'Ajudando produtores e empresas quenianas a alcançar compradores internacionais. Gerenciamos embalagem, documentação, reserva de frete e conformidade regulatória.',

  service_page_sourcing: 'Sourcing de Produtos',
  service_page_sourcing_desc:
    'Envie-nos a descrição do produto e iremos encontrá-lo junto a fornecedores globais verificados. Comparamos qualidade, preços e prazos de entrega para garantir o melhor negócio.',

  service_page_vehicle: 'Importação de Veículos',
  service_page_vehicle_desc:
    'Importe carros, motocicletas, caminhões e máquinas pesadas do Japão, Reino Unido, Dubai e outros mercados. Inclui sourcing em leilões, inspeção, envio, conformidade KEBS e suporte de registro.',

  service_page_bulk: 'Envio Comercial e em Massa',
  service_page_bulk_desc:
    'Negociamos os melhores preços para envio FCL/LCL para empresas que importam grandes volumes. Consolidamos cargas e otimizamos rotas para reduzir significativamente os custos.',

  service_page_logistics: 'Coordenação Logística',
  service_page_logistics_desc:
    'Logística completa ponta a ponta — armazenagem na origem, despacho de frete, liberação portuária, transporte interno e entrega final em qualquer lugar do Quênia.',

  service_page_customs: 'Desembaraço Aduaneiro',
  service_page_customs_desc:
    'Nossa equipe experiente cuida de toda a documentação alfandegária, pagamento de impostos, conformidade KRA, inspeções KEBS e procedimentos portuários.',

  service_page_consulting: 'Consultoria Comercial',
  service_page_consulting_desc:
    'Novo em importação ou exportação? Orientamos você sobre regulamentos, custos, prazos e melhores práticas para decisões mais seguras.',

  service_page_industrial: 'Indústria e Maquinário',
  service_page_industrial_desc:
    'Fornecimento de equipamentos industriais, máquinas de fábrica, ferramentas e peças de reposição dos principais fabricantes da China, Alemanha e outros polos industriais.',

  partners_label: 'Nossa Rede',
  partners_title: 'Produtos de Importação e Exportação',
  partners_subtitle:
    'Pesquise nosso catálogo de produtos de importação e exportação, veja detalhes de envio e entre em contato via WhatsApp para preços e disponibilidade.',

  partners_auto_title: '📥 Parceiros de Importação: Automotivo',
  partners_auto: 'Importação Automotiva',
  partners_auto_desc:
    'Conectamos clientes a importadores e exportadores automotivos confiáveis, facilitando a importação de veículos e peças de todo o mundo.',

  partners_industrial_title:
    '📥 Parceiros de Importação: Fornecedores Industriais e de Manufatura',

  partners_luxury_title:
    '📥 Parceiros de Importação: Marcas de Luxo e Consumo',

  partners_asian_title:
    '📥 Parceiros de Importação: Fabricantes e Fornecedores Asiáticos',

  partners_export_title:
    '📤 Exportação do Quênia: Marcas e Produtos Quenianos',

  partners_category_all: 'Todas as Categorias',

  category_automotive: 'Automotivo',
  category_industrial_manufacturing: 'Industrial e Manufatura',
  category_luxury_consumer_goods: 'Luxo e Bens de Consumo',
  category_asian_manufacturers: 'Fabricantes Asiáticos',
  category_construction_materials: 'Materiais de Construção',
  category_electronics_technology: 'Eletrônicos e Tecnologia',
  category_food_agricultural_products: 'Alimentos e Produtos Agrícolas',
  category_african_culture: 'Cultura Africana',
  category_kenyan_export_products: 'Produtos de Exportação Quenianos',

  partners_search_placeholder: 'Pesquisar produtos...',
  partners_tab_all: 'Todos os Produtos',
  partners_tab_import: 'Produtos de Importação',
  partners_tab_export: 'Produtos de Exportação',

  partners_ships_from: 'Enviado De',
  partners_ships_to: 'Enviado Para',
  partners_delivery_time: 'Prazo Estimado de Entrega',

  partners_view_details: 'Ver Detalhes',
  partners_request_quote: '💬 Solicitar Orçamento no WhatsApp',

  partners_no_results:
    'Nenhum produto encontrado correspondente à sua pesquisa.',

  partners_cta_text:
    'Não encontrou o que procura? Pergunte-nos sobre qualquer produto, marca ou necessidade especial e encontraremos para você.',

  partners_cta_button:
    '💬 Perguntar Sobre um Produto Específico',

  testimonials_page_label: 'Avaliações dos Clientes',
  testimonials_page_title: 'O Que Nossos Clientes Dizem',
  testimonials_page_subtitle:
    'Não acredite apenas em nossa palavra — veja o que clientes reais em todo o Quênia dizem sobre sua experiência com a Arakaharaka Enterprises.',

  testi_1:
    'A Arakaharaka tornou a importação do meu veículo do Japão completamente simples. Do leilão até minha casa em Nairobi — cuidaram de tudo profissionalmente. Absolutamente 5 estrelas!',

  testi_2:
    'Equipe extremamente responsiva no WhatsApp. Fiz um pedido de eletrônicos da China e me mantiveram atualizado em cada etapa. Recebi tudo em perfeitas condições!',

  testi_3:
    'Precisávamos urgentemente de maquinário industrial e a Arakaharaka conseguiu da Alemanha dentro do nosso orçamento. A alfândega foi resolvida sem problemas.',

  testi_4:
    'Como importador iniciante, eu estava nervoso. A equipe explicou cada etapa com paciência. Meus produtos chegaram antes da data prevista!',

  testi_5:
    'Trabalhamos com a Arakaharaka em envios em massa da China há 2 anos. Consistentes, confiáveis e sempre com os melhores preços de frete.',

  testi_6:
    'Eu queria itens de luxo de Dubai e não sabia por onde começar. A Arakaharaka encontrou tudo o que eu precisava com autenticidade garantida.',

  testimonials_cta:
    'Teve uma ótima experiência conosco? Adoraríamos ouvir você!',

  testimonials_share_btn: '💬 Compartilhe Sua Experiência',

  hero_badge_1: '🚀 Envio Rápido',
  hero_badge_2: '🌍 Sourcing Global',
  hero_badge_3: '🤝 Parceiros Confiáveis',

  custom_solution_title: 'Precisa de uma Solução Personalizada?',
  custom_solution_desc:
    'Cada negócio é diferente. Conte-nos suas necessidades e criaremos o plano perfeito de importação/exportação para você.',

  custom_solution_btn: '📩 Solicitar Orçamento Personalizado',

  nav_dropdown_import: 'Parceiros de Importação',
  nav_dropdown_export: 'Exportação do Quênia',

  legal_label: 'Legal',

  terms_title: 'Termos e Condições',
  terms_subtitle:
    'Leia atentamente estes termos antes de fazer um pedido com a Arakaharaka Enterprises.',

  terms_orders_payments_title: '📦 1. Pedidos e Pagamentos',

  terms_orders_payments_1:
    'Todos os pedidos devem ser confirmados por escrito via email ou WhatsApp antes do início do processamento.',

  terms_orders_payments_2:
    'É necessário um depósito de 50% antes do início do sourcing, com o saldo restante devido antes do envio.',

  terms_orders_payments_3:
    'O pagamento pode ser feito via M-Pesa, transferência bancária ou outros métodos acordados.',

  terms_orders_payments_4:
    'Os preços cotados são válidos por 48 horas e estão sujeitos a flutuações cambiais para pedidos internacionais.',

  terms_orders_payments_5:
    'A Arakaharaka Enterprises reserva-se o direito de recusar qualquer pedido a seu critério.',

  terms_shipping_title: '🚢 2. Prazos de Envio',

  terms_shipping_1:
    'Os prazos estimados de entrega são fornecidos apenas como referência e não são garantidos.',

  terms_shipping_2:
    'O frete marítimo da Ásia normalmente leva de 25–45 dias. O frete aéreo leva de 5–10 dias úteis.',

  terms_shipping_3:
    'Envios de veículos do Japão normalmente levam de 4–8 semanas da compra em leilão até o porto de Mombasa.',

  terms_shipping_4:
    'Atrasos devido a congestionamento portuário, alfândega, clima ou outros fatores fora do nosso controle não são responsabilidade da Arakaharaka.',

  terms_shipping_5:
    'Os clientes serão informados prontamente sobre atrasos significativos.',

  terms_liability_title: '⚖️ 3. Responsabilidade',

  terms_liability_1:
    'A Arakaharaka Enterprises atua como agente e facilitador e não é fabricante ou vendedor direto dos produtos.',

  terms_liability_2:
    'Não somos responsáveis por produtos danificados durante o transporte se cobertos por seguro.',

  terms_liability_3:
    'É responsabilidade do cliente garantir conformidade com os regulamentos de importação quenianos.',

  terms_liability_4:
    'Não somos responsáveis por produtos apreendidos pela alfândega devido a declarações falsas feitas pelo cliente.',

  terms_refund_title: '🔄 4. Política de Reembolso',

  terms_refund_1:
    'Os depósitos não são reembolsáveis após o início do sourcing ou aquisição.',

  terms_refund_2:
    'Se os produtos forem materialmente diferentes do solicitado, uma substituição ou reembolso parcial poderá ser oferecido.',

  terms_refund_3:
    'Compras relacionadas a veículos seguem os termos da respectiva casa de leilão e geralmente não são reembolsáveis.',

  terms_refund_4:
    'Pedidos de reembolso devem ser enviados por escrito dentro de 7 dias após a entrega.',

  terms_communication_title: '📬 5. Comunicação e Disputas',

  terms_communication_1:
    'Todas as comunicações oficiais devem ser enviadas para harakaint@gmail.com.',

  terms_communication_2:
    'Quaisquer disputas deverão primeiro ser resolvidas por negociações de boa-fé entre ambas as partes.',

  terms_communication_3:
    'Estes termos são regidos pelas leis do Quênia.',

  terms_communication_4:
    'Ao fazer um pedido com a Arakaharaka Enterprises, você concorda integralmente com estes termos e condições.',

  terms_last_updated:
    'Última atualização: 2025. Para dúvidas sobre estes termos, envie email para harakaint@gmail.com.',

  footer_desc:
    'Seu parceiro confiável de importação e exportação com sede em Ruaraka, Nairobi. Conectando a África Oriental e Central ao mundo — um envio de cada vez.',



  
  footer_desc: 'Seu parceiro confiável de importação e exportação com sede em Ruaraka, Nairobi. Conectando países da África Oriental e Central ao mundo — uma remessa de cada vez.',
  footer_quick: 'Links Rápidos',
  footer_contact: 'Contato',
  footer_faq: 'Perguntas Frequentes',

  faq_q1: 'Quanto tempo leva o envio?',
  faq_a1: 'O frete marítimo da Ásia leva de 25 a 45 dias. O frete aéreo leva de 5 a 10 dias. Veículos do Japão levam de 4 a 8 semanas.',

  faq_q2: 'Como faço um pedido?',
  faq_a2: 'Basta enviar uma mensagem pelo WhatsApp ou email com os detalhes do pedido. Confirmaremos a disponibilidade, forneceremos um orçamento e cuidaremos do restante.',

  faq_q3: 'De quais países vocês enviam?',
  faq_a3: 'Fornecemos produtos da China, Japão, Emirados Árabes Unidos, Reino Unido, Alemanha, EUA, Índia, Singapura e muitos outros países.',

  faq_q4: 'Vocês cuidam da alfândega?',
  faq_a4: 'Sim! Cuidamos de todo o desembaraço aduaneiro, conformidade com a KRA, inspeções KEBS e procedimentos portuários.',

  footer_copyright: '© 2026 Arakaharaka Enterprises. Todos os direitos reservados. | Termos e Condições',
  footer_made: 'Feito com ❤️ em Nairobi, Quênia 🇰🇪'
    },
    //bengali
    bn: {
  nav_home: 'হোম',
  nav_about: 'আমাদের সম্পর্কে',
  nav_services: 'সেবাসমূহ',
  nav_tourism: 'পর্যটন',
  nav_partners: 'অংশীদার',
  nav_testimonials: 'মতামত',
  nav_contact: 'যোগাযোগ করুন',

  hero_title: 'আপনার বিশ্বস্ত আমদানি ও রপ্তানি অংশীদার',
  hero_subtitle: 'Arakaharaka পূর্ব ও মধ্য আফ্রিকার দেশগুলোকে বিশ্বের সাথে সংযুক্ত করে — বিশ্ববাজার থেকে নির্ভরযোগ্যতা ও যত্নের সাথে মানসম্পন্ন পণ্য, যানবাহন এবং অন্যান্য সামগ্রী সরবরাহ করে।',
  hero_cta1: 'যোগাযোগ করুন',
  hero_cta2: 'মূল্য প্রস্তাবনা অনুরোধ করুন',

  stats_clients: 'সন্তুষ্ট গ্রাহক',
  stats_partners: 'অংশীদার ব্র্যান্ড',
  stats_countries: 'সেবা প্রদানকৃত দেশ',
  stats_satisfaction: 'গ্রাহক সন্তুষ্টি',

  services_title: 'আমাদের প্রধান সেবাসমূহ',
  services_subtitle: 'পণ্য সংগ্রহ থেকে লজিস্টিক সমন্বয় পর্যন্ত — আমরা জটিল কাজগুলো পরিচালনা করি যাতে আপনি আপনার ব্যবসায় মনোযোগ দিতে পারেন।',

  service_import: 'আমদানি সেবা',
  service_import_desc: 'আমরা এশিয়া, ইউরোপ এবং বিশ্বের অন্যান্য স্থান থেকে সরাসরি কেনিয়ায় বিভিন্ন ধরনের পণ্য আমদানি করি — ইলেকট্রনিক্স, গৃহস্থালি পণ্য, যন্ত্রপাতি এবং আরও অনেক কিছু।',

  service_export: 'রপ্তানি সেবা',
  service_export_desc: 'আমরা কেনিয়ার ব্যবসাগুলোকে আন্তর্জাতিক বাজারে মানসম্পন্ন পণ্য রপ্তানিতে সহায়তা করি, ডকুমেন্টেশন, লজিস্টিক এবং নিয়ম মেনে চলার বিষয়গুলো পরিচালনা করি।',

  service_sourcing: 'পণ্য সংগ্রহ',
  service_sourcing_desc: 'স্থানীয়ভাবে পণ্য খুঁজে পাচ্ছেন না? আমরা আপনার জন্য সংগ্রহ করব। আপনি কী চান আমাদের জানান, আমরা বিশ্বব্যাপী সর্বোত্তম দামে সেরা মানের পণ্য খুঁজে দেব।',

  service_vehicle: 'যানবাহন আমদানি',
  service_vehicle_desc: 'জাপান, যুক্তরাজ্য, সংযুক্ত আরব আমিরাত এবং অন্যান্য দেশ থেকে যানবাহন আমদানি করুন। আমরা পরিদর্শন, শিপিং, কাস্টমস ক্লিয়ারেন্স এবং আপনার দরজায় ডেলিভারি পর্যন্ত সবকিছু পরিচালনা করি।',

  service_bulk: 'বাল্ক শিপিং',
  service_bulk_desc: 'বড় পরিমাণে পণ্য আমদানি করা ব্যবসার জন্য সাশ্রয়ী বাল্ক শিপিং সমাধান। আমরা আপনার পক্ষ থেকে সর্বোত্তম ফ্রেইট রেট নিয়ে আলোচনা করি।',

  service_logistics: 'লজিস্টিক সমন্বয়',
  service_logistics_desc: 'সম্পূর্ণ লজিস্টিক ব্যবস্থাপনা — গুদামজাতকরণ, কাস্টমস ক্লিয়ারেন্স, শেষ মাইল ডেলিভারি এবং রিয়েল-টাইম শিপমেন্ট ট্র্যাকিং।',

  testimonials_title: 'অনেকের বিশ্বস্ত পছন্দ',
  cta_title: 'আমদানি বা রপ্তানি করতে প্রস্তুত?',
  cta_subtitle: 'সহজে আমদানিতে আমরা আপনাকে সহায়তা করি। কঠিন অংশ আমরা সামলে নেব।',
  cta_btn: 'যোগাযোগ করুন',

  testimonials_label: 'গ্রাহকদের মতামত',

  testimonial_1_name: 'Christian M. Mayani',
  testimonial_1_role: 'আমদানি গ্রাহক – DRC',
  testimonial_1_text:
    'Arakaharaka আমাদের জন্য চীন থেকে ভারী যন্ত্রপাতি সহজ ও পেশাদারভাবে আমদানি করতে সহায়তা করেছে। তাদের যোগাযোগ ও লজিস্টিক সহায়তা ছিল অসাধারণ।',

  testimonial_2_name: 'George Solo',
  testimonial_2_role: 'পর্যটন গ্রাহক – তানজানিয়া',
  testimonial_2_text:
    'আমাদের Maasai Mara সাফারি শুরু থেকে শেষ পর্যন্ত চমৎকারভাবে আয়োজন করা হয়েছিল। দলটি ছিল পেশাদার, দ্রুত সাড়া প্রদানকারী এবং কেনিয়ার অভিজ্ঞতাকে স্মরণীয় করে তুলেছে।',

  testimonial_3_name: 'Hedy',
  testimonial_3_role: 'সেলস ম্যানেজার – Hengwang Group, China',
  testimonial_3_text:
    'আমরা Arakaharaka-এর মাধ্যমে প্রিমিয়াম কেনিয়ান কফি এবং হস্তশিল্প সংগ্রহ করেছি। গুণমান, প্যাকেজিং এবং ডেলিভারি আমাদের প্রত্যাশার চেয়েও বেশি ছিল।',

  about_title: 'Arakaharaka Enterprises সম্পর্কে',
  about_subtitle: 'নাইরোবিতে জন্ম, বিশ্বের জন্য নির্মিত। আমরা পূর্ব ও মধ্য আফ্রিকার দেশগুলোকে বৈশ্বিক বাজারের সাথে সংযুক্ত করতে উৎসাহী।',

  about_feature: 'পূর্ব ও মধ্য আফ্রিকার দেশগুলোকে বিশ্বের সাথে সংযুক্ত করা',
  about_feature_desc:
    'রুয়ারাকা, নাইরোবি-ভিত্তিক আমরা প্রতিষ্ঠার পর থেকেই পূর্ব ও মধ্য আফ্রিকার ক্রেতাদের বৈশ্বিক সরবরাহকারীদের সাথে সংযুক্ত করে আসছি — প্রতিটি ধাপে আস্থা, গতি এবং ব্যক্তিগত যত্নের সাথে।',

  mission: 'আমাদের লক্ষ্য',
  mission_desc:
    'প্রত্যেক কেনিয়ানের জন্য বৈশ্বিক বাণিজ্যকে সহজ ও সবার নাগালে নিয়ে আসা — একক উদ্যোক্তা থেকে বড় কর্পোরেশন পর্যন্ত।',

  vision: 'আমাদের দৃষ্টি',
  vision_desc:
    'বিশ্বস্ততা, স্বচ্ছতা এবং অসাধারণ সেবার জন্য পরিচিত পূর্ব আফ্রিকার সবচেয়ে নির্ভরযোগ্য আমদানি/রপ্তানি অংশীদার হওয়া।',

  values: 'আমাদের মূল্যবোধ',
  values_desc:
    'প্রতিটি লেনদেনে সততা। প্রতিটি ডেলিভারিতে গতি। এমন ব্যক্তিগত যত্ন যা বড় কোম্পানিগুলো দিতে পারে না।',

  tourism_label: 'ভ্রমণ ও অভিজ্ঞতা',
  tourism_title: 'হোটেল বুকিং, সাফারি ও পর্যটন সেবা',
  tourism_subtitle:
    'Arakaharaka কেনিয়া এবং পূর্ব আফ্রিকাজুড়ে অবিস্মরণীয় ভ্রমণ অভিজ্ঞতা পরিকল্পনায় সহায়তা করে — বিলাসবহুল হোটেল, সমুদ্র সৈকত ভ্রমণ, সাফারি অভিযান, দলীয় ভ্রমণ, বিমানবন্দর পরিবহন এবং কাস্টম পর্যটন প্যাকেজসহ।',

  tourism_plan: 'আমার ভ্রমণ পরিকল্পনা করুন',
  tourism_whatsapp: 'WhatsApp-এ বুক করুন',

  tourism_services_title: 'সহজে পূর্ব আফ্রিকা ভ্রমণ করুন',
  tourism_services_subtitle:
    'রোমান্টিক ভ্রমণ, ব্যবসায়িক আবাসন, পারিবারিক সাফারি বা সমুদ্র উপকূলীয় ছুটি — যাই প্রয়োজন হোক না কেন, আমরা আপনার যাত্রাকে শুরু থেকে শেষ পর্যন্ত মসৃণ করে তুলি।',

  tourism_hotel: 'হোটেল বুকিং',
  tourism_hotel_desc:
    'আপনার বাজেট, অবস্থান এবং ভ্রমণের প্রয়োজন অনুযায়ী আমরা হোটেল, লজ, রিসোর্ট, অ্যাপার্টমেন্ট এবং এক্সিকিউটিভ আবাসনের ব্যবস্থা করি।',

  tourism_safari: 'সাফারি লজ ও ক্যাম্প',
  tourism_safari_desc:
    'কেনিয়া এবং পূর্ব আফ্রিকার সুন্দরতম পার্ক ও সংরক্ষণ এলাকার নিকটে আরামদায়ক সাফারি লজ, টেন্ট ক্যাম্প এবং প্রকৃতি নির্ভর আবাসন বুক করুন।',

  tourism_adventure: 'সাফারি ভ্রমণ ও অ্যাডভেঞ্চার',
  tourism_adventure_desc:
    'আমরা বন্যপ্রাণী সাফারি, গেম ড্রাইভ, হট এয়ার বেলুন অভিজ্ঞতা, গাইডেড ট্যুর এবং কাস্টম অ্যাডভেঞ্চার ভ্রমণ পরিকল্পনা করি।',

  tourism_beach: 'সমুদ্র সৈকত ভ্রমণ',
  tourism_beach_desc:
    'আরামদায়ক উপকূলীয় অবকাশ, দ্বীপ-ধাঁচের ছুটি, হানিমুন প্যাকেজ, পারিবারিক সমুদ্র সৈকত ভ্রমণ এবং সামুদ্রিক কার্যক্রম উপভোগ করুন।',

  tourism_resort: 'রিসোর্ট, রিট্রিট ও গেটওয়ে',
  tourism_resort_desc:
    'আমরা গ্রাহকদের অবকাশযাপন রিসোর্ট, রিট্রিট গন্তব্য, সপ্তাহান্তের ভ্রমণ, দলীয় থাকার ব্যবস্থা এবং প্রিমিয়াম বিশ্রাম অভিজ্ঞতার সাথে সংযুক্ত করি।',

  view_all_services: 'সব সেবা দেখুন →',
  whatsapp_us_now: 'এখনই WhatsApp করুন',
  our_story: 'আমাদের গল্প',

  tourism_services_label: 'পর্যটন সেবা',

  tourism_hiking: 'পাহাড়ে হাইকিং',
  tourism_hiking_desc:
    'পূর্ব আফ্রিকার মনোমুগ্ধকর পাহাড়ি দৃশ্য, প্রাকৃতিক ট্রেইল এবং অবিস্মরণীয় হাইকিং অ্যাডভেঞ্চার উপভোগ করুন।',

  tourism_cta_title: 'আপনার পরবর্তী ভ্রমণের জন্য প্রস্তুত?',
  tourism_cta_subtitle:
    'আপনার গন্তব্য, ভ্রমণের তারিখ, অতিথির সংখ্যা এবং বাজেট আমাদের জানান — আমরা আপনার জন্য সঠিক পর্যটন প্যাকেজ পরিকল্পনা করব।',

  tourism_cta_btn: 'বুকিং সহায়তা অনুরোধ করুন',

  contact_title: 'চলুন ব্যবসার কথা বলি',
  contact_subtitle:
    'আমদানি, রপ্তানি বা শুধু প্রশ্ন আছে? ফর্ম, ইমেইল বা WhatsApp-এর মাধ্যমে যোগাযোগ করুন — আমরা সাধারণত কয়েক ঘণ্টার মধ্যেই উত্তর দিই।',

  contact_form_title: 'আমাদের একটি বার্তা পাঠান',
  contact_name: 'পূর্ণ নাম *',
  contact_email: 'ইমেইল ঠিকানা *',
  contact_phone: 'ফোন নম্বর',
  contact_service: 'যে সেবায় আগ্রহী',
  contact_message: 'আপনার বার্তা *',
  contact_btn: 'বার্তা পাঠান',
  contact_email_label: 'আমাদের একটি ইমেইল পাঠান',
  contact_phone_label: 'কল / WhatsApp',
  contact_location: 'অবস্থান',
  contact_website: 'ওয়েবসাইট',
  why_label: 'কেন আমাদের নির্বাচন করবেন',
  why_title: 'Arakaharaka-এর বিশেষত্ব',

  why_reliability: 'যে নির্ভরযোগ্যতার উপর আপনি ভরসা করতে পারেন',
  why_reliability_desc:
    'আমরা প্রতিটি অর্ডার সফলভাবে সম্পন্ন করি। আপনার পণ্য প্রতিশ্রুতি অনুযায়ী পৌঁছে যায় এবং প্রতিটি ধাপে আমরা আপনাকে আপডেট রাখি।',

  why_global: 'সত্যিকারের বৈশ্বিক নেটওয়ার্ক',
  why_global_desc:
    'জাপান থেকে জার্মানি, চীন থেকে UAE — আমাদের সরবরাহকারী নেটওয়ার্ক বিশ্বের প্রতিটি প্রধান বাণিজ্য অঞ্চলে বিস্তৃত।',

  why_personal: 'ব্যক্তিগতকৃত সেবা',
  why_personal_desc:
    'আপনি সরাসরি আমাদের টিমের সাথে যোগাযোগ করেন — কোনো কল সেন্টার নয়, কোনো বিলম্ব নয়। WhatsApp-এ যোগাযোগ করুন এবং আপনার অর্ডার সম্পর্কে জানেন এমন বাস্তব মানুষের সাথে কথা বলুন।',

  why_pricing: 'প্রতিযোগিতামূলক মূল্য',
  why_pricing_desc:
    'আমরা আমাদের সরবরাহকারী সম্পর্ক ব্যবহার করে মানসম্পন্ন পণ্যের সর্বোত্তম মূল্য নিশ্চিত করি — গুণমান বজায় রেখেই আপনার খরচ কমাই।',

  why_customs: 'কাস্টমস ও কমপ্লায়েন্স',
  why_customs_desc:
    'আমরা সমস্ত কাস্টমস ডকুমেন্টেশন, শুল্ক এবং কমপ্লায়েন্স পরিচালনা করি — যাতে আপনাকে কখনও জটিল প্রশাসনিক সমস্যার মুখোমুখি হতে না হয়।',

  why_fast: 'দ্রুত সেবা',
  why_fast_desc:
    'আমরা প্রতিটি ধাপে দ্রুততাকে অগ্রাধিকার দিই — কোটেশন থেকে ডেলিভারি পর্যন্ত। Arakaharaka-এর অর্থ “দ্রুত” — এবং আমরা সেটিই বাস্তবায়ন করি।',

  services_page_label: 'আমরা কী অফার করি',
  services_page_title: 'আমাদের সেবাসমূহ',
  services_page_subtitle:
    'কেনিয়া এবং তার বাইরের ব্যবসা ও ব্যক্তিদের জন্য সম্পূর্ণ আমদানি ও রপ্তানি সমাধান।',

  service_page_import: 'আমদানি সেবা',
  service_page_import_desc:
    'আমরা কেনিয়ায় পণ্য আমদানির প্রতিটি ধাপ পরিচালনা করি — সরবরাহকারী খোঁজা, মূল্য নিয়ে আলোচনা, শিপিং, কাস্টমস ক্লিয়ারেন্স এবং ডেলিভারি পর্যন্ত। ইলেকট্রনিক্স, টেক্সটাইল, শিল্পপণ্য এবং আরও অনেক কিছু।',

  service_page_export: 'রপ্তানি সেবা',
  service_page_export_desc:
    'কেনিয়ার উৎপাদক ও ব্যবসাগুলোকে আন্তর্জাতিক বাজারে পৌঁছাতে সহায়তা করি। প্যাকেজিং, ডকুমেন্টেশন, ফ্রেইট বুকিং এবং নিয়ন্ত্রক কমপ্লায়েন্স আমরা পরিচালনা করি।',

  service_page_sourcing: 'পণ্য সংগ্রহ',
  service_page_sourcing_desc:
    'আমাদেরকে পণ্যের বিবরণ পাঠান এবং আমরা যাচাইকৃত বৈশ্বিক সরবরাহকারীদের কাছ থেকে সংগ্রহ করব। আমরা গুণমান, মূল্য এবং ডেলিভারি সময় তুলনা করে সর্বোত্তম চুক্তি নিশ্চিত করি।',

  service_page_vehicle: 'যানবাহন আমদানি',
  service_page_vehicle_desc:
    'জাপান, যুক্তরাজ্য, দুবাই এবং অন্যান্য বাজার থেকে গাড়ি, মোটরসাইকেল, ট্রাক এবং ভারী যন্ত্রপাতি আমদানি করুন। এতে নিলাম থেকে সংগ্রহ, পরিদর্শন, শিপিং, KEBS কমপ্লায়েন্স এবং রেজিস্ট্রেশন সহায়তা অন্তর্ভুক্ত।',

  service_page_bulk: 'বাল্ক ও বাণিজ্যিক শিপিং',
  service_page_bulk_desc:
    'বড় পরিমাণে পণ্য আমদানিকারী ব্যবসার জন্য সেরা FCL/LCL কনটেইনার শিপিং রেট নিয়ে আলোচনা করি। আমরা কার্গো একত্রিত করি এবং খরচ কমাতে রুট অপ্টিমাইজ করি।',

  service_page_logistics: 'লজিস্টিক সমন্বয়',
  service_page_logistics_desc:
    'সম্পূর্ণ এন্ড-টু-এন্ড লজিস্টিক — উৎসস্থলে গুদামজাতকরণ, ফ্রেইট ফরওয়ার্ডিং, বন্দর ক্লিয়ারেন্স, অভ্যন্তরীণ পরিবহন এবং কেনিয়ার যেকোনো স্থানে শেষ মাইল ডেলিভারি।',

  service_page_customs: 'কাস্টমস ক্লিয়ারেন্স',
  service_page_customs_desc:
    'আমাদের অভিজ্ঞ দল সমস্ত কাস্টমস ডকুমেন্টেশন, শুল্ক প্রদান, KRA কমপ্লায়েন্স, KEBS পরিদর্শন এবং বন্দর প্রক্রিয়া পরিচালনা করে।',

  service_page_consulting: 'বাণিজ্য পরামর্শ',
  service_page_consulting_desc:
    'নতুন আমদানিকারক বা রপ্তানিকারক? আমরা আপনাকে নিয়ম, খরচ, সময়সীমা এবং সেরা অনুশীলন সম্পর্কে গাইড করি যাতে আপনি সঠিক সিদ্ধান্ত নিতে পারেন।',

  service_page_industrial: 'শিল্প ও যন্ত্রপাতি',
  service_page_industrial_desc:
    'চীন, জার্মানি এবং বিশ্বের অন্যান্য শিল্পকেন্দ্র থেকে শিল্প সরঞ্জাম, কারখানার যন্ত্রপাতি, টুলস এবং যন্ত্রাংশ সংগ্রহ করুন।',

  partners_label: 'আমাদের নেটওয়ার্ক',
  partners_title: 'আমদানি ও রপ্তানি পণ্য',
  partners_subtitle:
    'আমাদের আমদানি ও রপ্তানি পণ্যের ক্যাটালগ দেখুন, শিপিং তথ্য জানুন এবং মূল্য ও প্রাপ্যতার জন্য WhatsApp-এ যোগাযোগ করুন।',

  partners_auto_title: '📥 আমদানি অংশীদার: অটোমোটিভ',
  partners_auto: 'অটোমোটিভ আমদানি',
  partners_auto_desc:
    'আমরা বিশ্বস্ত অটোমোটিভ আমদানিকারক ও রপ্তানিকারকদের সাথে গ্রাহকদের সংযুক্ত করি, যানবাহন ও যন্ত্রাংশ আমদানি সহজ করি।',

  partners_industrial_title:
    '📥 আমদানি অংশীদার: শিল্প ও উৎপাদন সরবরাহকারী',

  partners_luxury_title:
    '📥 আমদানি অংশীদার: বিলাসবহুল ও ভোক্তা ব্র্যান্ড',

  partners_asian_title:
    '📥 আমদানি অংশীদার: এশীয় নির্মাতা ও সরবরাহকারী',

  partners_export_title:
    '📤 কেনিয়া থেকে রপ্তানি: কেনিয়ান ব্র্যান্ড ও পণ্য',

  partners_category_all: 'সব বিভাগ',

  category_automotive: 'অটোমোটিভ',
  category_industrial_manufacturing: 'শিল্প ও উৎপাদন',
  category_luxury_consumer_goods: 'বিলাসবহুল ও ভোক্তা পণ্য',
  category_asian_manufacturers: 'এশীয় নির্মাতা',
  category_construction_materials: 'নির্মাণ সামগ্রী',
  category_electronics_technology: 'ইলেকট্রনিক্স ও প্রযুক্তি',
  category_food_agricultural_products: 'খাদ্য ও কৃষিপণ্য',
  category_african_culture: 'আফ্রিকান সংস্কৃতি',
  category_kenyan_export_products: 'কেনিয়ান রপ্তানি পণ্য',

  partners_search_placeholder: 'পণ্য অনুসন্ধান করুন...',
  partners_tab_all: 'সব পণ্য',
  partners_tab_import: 'আমদানি পণ্য',
  partners_tab_export: 'রপ্তানি পণ্য',

  partners_ships_from: 'যেখান থেকে পাঠানো হয়',
  partners_ships_to: 'যেখানে পাঠানো হয়',
  partners_delivery_time: 'আনুমানিক ডেলিভারি সময়',

  partners_view_details: 'বিস্তারিত দেখুন',
  partners_request_quote: '💬 WhatsApp-এ মূল্য জানতে চান',

  partners_no_results:
    'আপনার অনুসন্ধানের সাথে মিলে এমন কোনো পণ্য পাওয়া যায়নি।',

  partners_cta_text:
    'আপনি যা খুঁজছেন তা পাচ্ছেন না? যেকোনো পণ্য, ব্র্যান্ড বা বিশেষ চাহিদা সম্পর্কে আমাদের জানান — আমরা আপনার জন্য সংগ্রহ করব।',

  partners_cta_button:
    '💬 নির্দিষ্ট পণ্য সম্পর্কে জিজ্ঞাসা করুন',

  testimonials_page_label: 'গ্রাহক পর্যালোচনা',
  testimonials_page_title: 'আমাদের গ্রাহকরা কী বলেন',
  testimonials_page_subtitle:
    'শুধু আমাদের কথায় বিশ্বাস করবেন না — কেনিয়াজুড়ে বাস্তব গ্রাহকদের অভিজ্ঞতা দেখুন।',

  testi_1:
    'Arakaharaka জাপান থেকে আমার গাড়ি আমদানি পুরোপুরি সহজ করে দিয়েছে। নিলাম থেকে নাইরোবিতে আমার গেট পর্যন্ত — সবকিছু তারা পেশাদারভাবে পরিচালনা করেছে।',

  testi_2:
    'WhatsApp-এ খুব দ্রুত সাড়া দেয়। আমি চীন থেকে ইলেকট্রনিক্স অর্ডার করেছিলাম এবং প্রতিটি ধাপে তারা আমাকে আপডেট দিয়েছে।',

  testi_3:
    'আমাদের জরুরিভাবে শিল্প যন্ত্রপাতি প্রয়োজন ছিল এবং Arakaharaka জার্মানি থেকে আমাদের বাজেটের মধ্যে সংগ্রহ করেছে।',

  testi_4:
    'প্রথমবার আমদানিকারক হিসেবে আমি নার্ভাস ছিলাম। দলটি ধৈর্যের সাথে প্রতিটি ধাপ বুঝিয়ে দিয়েছে।',

  testi_5:
    'গত ২ বছর ধরে আমরা Arakaharaka-এর সাথে চীন থেকে বাল্ক শিপমেন্ট করছি। তারা নির্ভরযোগ্য এবং সবসময় সেরা ফ্রেইট রেট দেয়।',

  testi_6:
    'আমি দুবাই থেকে বিলাসবহুল পণ্য চেয়েছিলাম কিন্তু কোথা থেকে শুরু করব জানতাম না। Arakaharaka সবকিছু সংগ্রহ করেছে।',

  testimonials_cta:
    'আমাদের সাথে ভালো অভিজ্ঞতা হয়েছে? আমরা আপনার মতামত শুনতে চাই!',

  testimonials_share_btn: '💬 আপনার অভিজ্ঞতা শেয়ার করুন',

  hero_badge_1: '🚀 দ্রুত শিপিং',
  hero_badge_2: '🌍 বৈশ্বিক সোর্সিং',
  hero_badge_3: '🤝 বিশ্বস্ত অংশীদার',

  custom_solution_title: 'কাস্টম সমাধান প্রয়োজন?',
  custom_solution_desc:
    'প্রতিটি ব্যবসা আলাদা। আপনার প্রয়োজন বলুন এবং আমরা আপনার জন্য উপযুক্ত আমদানি/রপ্তানি পরিকল্পনা তৈরি করব।',

  custom_solution_btn: '📩 কাস্টম কোটেশন নিন',

  nav_dropdown_import: 'আমদানি অংশীদার',
  nav_dropdown_export: 'কেনিয়া থেকে রপ্তানি',

  legal_label: 'আইনি',

  terms_title: 'শর্তাবলী',
  terms_subtitle:
    'Arakaharaka Enterprises-এর সাথে অর্ডার করার আগে অনুগ্রহ করে এই শর্তগুলো মনোযোগ সহকারে পড়ুন।',

  terms_orders_payments_title: '📦 ১. অর্ডার ও পেমেন্ট',

  terms_orders_payments_1:
    'প্রক্রিয়া শুরু হওয়ার আগে সব অর্ডার ইমেইল বা WhatsApp-এর মাধ্যমে লিখিতভাবে নিশ্চিত করতে হবে।',

  terms_orders_payments_2:
    'সোর্সিং শুরু হওয়ার আগে ৫০% অগ্রিম জমা দিতে হবে এবং বাকি অর্থ শিপমেন্টের আগে পরিশোধ করতে হবে।',

  terms_orders_payments_3:
    'M-Pesa, ব্যাংক ট্রান্সফার বা সম্মত অন্য পদ্ধতিতে পেমেন্ট করা যাবে।',

  terms_orders_payments_4:
    'উদ্ধৃত মূল্য ৪৮ ঘণ্টার জন্য বৈধ এবং আন্তর্জাতিক অর্ডারের ক্ষেত্রে বিনিময় হার পরিবর্তনের ওপর নির্ভরশীল।',

  terms_orders_payments_5:
    'Arakaharaka Enterprises যেকোনো অর্ডার প্রত্যাখ্যান করার অধিকার সংরক্ষণ করে।',

  terms_shipping_title: '🚢 ২. শিপিং সময়সীমা',

  terms_shipping_1:
    'আনুমানিক ডেলিভারি সময় শুধুমাত্র নির্দেশনা হিসেবে দেওয়া হয় এবং তা নিশ্চিত নয়।',

  terms_shipping_2:
    'এশিয়া থেকে সমুদ্রপথে শিপিং সাধারণত ২৫–৪৫ দিন লাগে। বিমানপথে ৫–১০ কার্যদিবস লাগে।',

  terms_shipping_3:
    'জাপান থেকে যানবাহন শিপমেন্ট সাধারণত নিলাম ক্রয় থেকে মোমবাসা বন্দরে পৌঁছাতে ৪–৮ সপ্তাহ সময় নেয়।',

  terms_shipping_4:
    'বন্দর জট, কাস্টমস, আবহাওয়া বা আমাদের নিয়ন্ত্রণের বাইরে থাকা অন্যান্য কারণে বিলম্বের জন্য Arakaharaka দায়ী নয়।',

  terms_shipping_5:
    'গুরুত্বপূর্ণ বিলম্ব হলে গ্রাহকদের দ্রুত জানানো হবে।',

  terms_liability_title: '⚖️ ৩. দায়বদ্ধতা',

  terms_liability_1:
    'Arakaharaka Enterprises একজন এজেন্ট ও সহায়তাকারী হিসেবে কাজ করে; আমরা পণ্যের প্রস্তুতকারক বা সরাসরি বিক্রেতা নই।',

  terms_liability_2:
    'শিপিং ইন্স্যুরেন্স থাকলে পরিবহনের সময় ক্ষতিগ্রস্ত পণ্যের জন্য আমরা দায়ী নই।',

  terms_liability_3:
    'নিজস্ব পণ্যের জন্য কেনিয়ার আমদানি নিয়ম মেনে চলা গ্রাহকের দায়িত্ব।',

  terms_liability_4:
    'গ্রাহকের ভুল ঘোষণার কারণে কাস্টমসে পণ্য জব্দ হলে আমরা দায়ী নই।',

  terms_refund_title: '🔄 ৪. রিফান্ড নীতি',

  terms_refund_1:
    'সোর্সিং বা ক্রয় শুরু হলে অগ্রিম ফেরতযোগ্য নয়।',

  terms_refund_2:
    'যদি পণ্য অর্ডারের তুলনায় উল্লেখযোগ্যভাবে ভিন্ন হয়, আংশিক রিফান্ড বা প্রতিস্থাপন দেওয়া হতে পারে।',

  terms_refund_3:
    'যানবাহন ক্রয় সংশ্লিষ্ট নিলাম প্রতিষ্ঠানের শর্ত অনুসরণ করে এবং সাধারণত ফেরতযোগ্য নয়।',

  terms_refund_4:
    'রিফান্ড অনুরোধ ডেলিভারির ৭ দিনের মধ্যে লিখিতভাবে জমা দিতে হবে।',

  terms_communication_title: '📬 ৫. যোগাযোগ ও বিরোধ নিষ্পত্তি',

  terms_communication_1:
    'সব অফিসিয়াল যোগাযোগ harakaint@gmail.com-এ পাঠাতে হবে।',

  terms_communication_2:
    'যেকোনো বিরোধ প্রথমে উভয় পক্ষের সদিচ্ছাপূর্ণ আলোচনার মাধ্যমে সমাধান করতে হবে।',

  terms_communication_3:
    'এই শর্তাবলী কেনিয়ার আইন দ্বারা পরিচালিত হবে।',

  terms_communication_4:
    'Arakaharaka Enterprises-এর সাথে অর্ডার করার মাধ্যমে আপনি এই শর্তাবলীতে সম্পূর্ণ সম্মতি প্রদান করছেন।',

  terms_last_updated:
    'সর্বশেষ আপডেট: ২০২৫। এই শর্তাবলী সম্পর্কে প্রশ্নের জন্য harakaint@gmail.com-এ ইমেইল করুন।',

  footer_desc:
    'রুয়ারাকা, নাইরোবি-ভিত্তিক আপনার বিশ্বস্ত আমদানি ও রপ্তানি অংশীদার। পূর্ব ও মধ্য আফ্রিকার দেশগুলোকে বিশ্বের সাথে সংযুক্ত করছি — এক একটি চালানের মাধ্যমে।',

  footer_quick: 'দ্রুত লিংক',
  footer_contact: 'যোগাযোগ',
  footer_faq: 'প্রশ্নোত্তর',

  faq_q1: 'শিপিং কত সময় নেয়?',
  faq_a1:
    'এশিয়া থেকে সমুদ্রপথে পণ্য আসতে ২৫–৪৫ দিন লাগে। বিমানপথে ৫–১০ দিন লাগে। জাপান থেকে যানবাহন আনতে ৪–৮ সপ্তাহ লাগে।',

  faq_q2: 'আমি কীভাবে অর্ডার করব?',
  faq_a2:
    'শুধু WhatsApp বা ইমেইলের মাধ্যমে আপনার অর্ডারের বিবরণ পাঠান। আমরা প্রাপ্যতা নিশ্চিত করব, মূল্য জানাব এবং বাকি কাজ সম্পন্ন করব।',

  faq_q3: 'আপনারা কোন কোন দেশ থেকে পণ্য আনেন?',
  faq_a3:
    'আমরা চীন, জাপান, UAE, যুক্তরাজ্য, জার্মানি, যুক্তরাষ্ট্র, ভারত, সিঙ্গাপুর এবং আরও অনেক দেশ থেকে পণ্য সংগ্রহ করি।',

  faq_q4: 'আপনারা কি কাস্টমস পরিচালনা করেন?',
  faq_a4:
    'হ্যাঁ! আমরা আপনার পক্ষ থেকে কাস্টমস ক্লিয়ারেন্স, KRA কমপ্লায়েন্স, KEBS পরিদর্শন এবং বন্দর কার্যক্রম পরিচালনা করি।',

  footer_copyright:
    '© 2026 Arakaharaka Enterprises. সর্বস্বত্ব সংরক্ষিত। | শর্তাবলী',

  footer_made:
    '❤️ দিয়ে তৈরি নাইরোবি, কেনিয়া 🇰🇪'
},


  };

  // Change language function
  function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.getElementById('languageSelect').value = lang;

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  }

  // Initialize language on page load
  function initializeLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLang);
  }

  // Add language initialization to page load
  window.addEventListener('load', () => {
    createParticles();
    triggerReveal();
    initializeLanguage();
  });