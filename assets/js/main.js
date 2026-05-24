// Page navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${pageId}`)?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updatePageContent();
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
  alert('Thank you! We will contact you soon via email or WhatsApp.');
}

// Scroll reveal
function triggerReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

// Generate particles
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    container.appendChild(particle);
  }
}

// ════════════════════════════════════════════════════════════════
// LANGUAGE & TRANSLATION SYSTEM
// ════════════════════════════════════════════════════════════════

// Load language selector options dynamically from translations object
function loadLanguageSelector() {
  const select = document.getElementById('languageSelect');
  if (!select || !window.translations) return;

  // Get all available languages from translations object
  const languages = Object.keys(window.translations);
  
  // Clear existing options (keep placeholder)
  const placeholder = select.querySelector('option[value=""]');
  select.innerHTML = '';
  if (placeholder) select.appendChild(placeholder);

  // Language display names with flags
  const languageNames = {
    'en': '🇬🇧 English',
    'sw': '🇰🇪 Swahili',
    'fr': '🇫🇷 French',
    'zh': '🇨🇳 Chinese',
    'ja': '🇯🇵 Japanese',
    'de': '🇩🇪 German',
    'hi': '🇮🇳 Hindi',
    'es': '🇪🇸 Spanish',
    'ar': '🇸🇦 Arabic',
    'it': '🇮🇹 Italian',
    'pt': '🇵🇹 Portuguese',
    'ru': '🇷🇺 Russian',
    'bn': '🇧🇩 Bengali',
    'pa': '🇮🇳 Punjabi',
    'vi': '🇻🇳 Vietnamese',
    'ko': '🇰🇷 Korean',
    'fil': '🇵🇭 Filipino',
    'el': '🇬🇷 Greek',
    'gu': '🇮🇳 Gujarati',
    'he': '🇮🇱 Hebrew',
    'ga': '🇮🇪 Irish',
    'kk': '🇰🇿 Kazakh',
    'lt': '🇱🇹 Lithuanian',
    'ml': '🇮🇳 Malayalam',
    'mg': '🇲🇬 Malagasy',
    'ne': '🇳🇵 Nepali',
    'nb': '🇳🇴 Norwegian',
    'pl': '🇵🇱 Polish',
    'ro': '🇷🇴 Romanian',
    'sk': '🇸🇰 Slovak',
    'th': '🇹🇭 Thai',
    'tr': '🇹🇷 Turkish',
    'uk': '🇺🇦 Ukrainian',
    'ur': '🇵🇰 Urdu',
    'cy': '🇬🇧 Welsh',
    'zu': '🇿🇦 Zulu'
  };

  // Add all available languages to the dropdown
  languages.sort().forEach(lang => {
    const option = document.createElement('option');
    option.value = lang;
    option.textContent = languageNames[lang] || lang.toUpperCase();
    select.appendChild(option);
  });

  // Restore previously selected language
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  select.value = savedLang;
}

// Change language and update all translatable elements
function changeLanguage(lang) {
  if (!lang || !window.translations || !window.translations[lang]) {
    console.warn(`Language "${lang}" not found in translations`);
    return;
  }

  const translations = window.translations[lang];
  
  // Store selected language
  localStorage.setItem('selectedLanguage', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      // Handle both text content and placeholder attributes
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.hasAttribute('data-i18n-placeholder')) {
          element.placeholder = translations[key];
        } else {
          element.value = translations[key];
        }
      } else if (element.tagName === 'OPTION') {
        element.textContent = translations[key];
      } else {
        element.textContent = translations[key];
      }
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Handle RTL languages
  const rtlLanguages = ['ar', 'ur', 'he'];
  if (rtlLanguages.includes(lang)) {
    document.documentElement.dir = 'rtl';
    document.body.style.direction = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
    document.body.style.direction = 'ltr';
  }
}

// Initialize language on page load
function initializeLanguage() {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  
  // Load language selector first
  loadLanguageSelector();
  
  // Then apply the saved language
  changeLanguage(savedLang);
}

// Update page content after navigation
function updatePageContent() {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLang);
}

// ════════════════════════════════════════════════════════════════
// PARTNERS PAGE - PRODUCT CATALOG
// ════════════════════════════════════════════════════════════════

// Sample product data (should be loaded from backend in production)
const productsData = [
  {
    id: 1,
    name: 'Toyota Vehicles',
    category: 'Automotive',
    type: 'import',
    image: 'https://via.placeholder.com/300x200?text=Toyota+Vehicles',
    description: 'High-quality imported Toyota vehicles from Japan including Camry, Corolla, and Land Cruiser models.',
    origin: 'Japan',
    destination: 'Kenya',
    delivery: '4-6 weeks'
  },
  {
    id: 2,
    name: 'Industrial Machinery',
    category: 'Industrial & Manufacturing',
    type: 'import',
    image: 'https://via.placeholder.com/300x200?text=Machinery',
    description: 'Factory equipment and industrial machinery from Germany and China.',
    origin: 'Germany',
    destination: 'Kenya',
    delivery: '8-10 weeks'
  },
  {
    id: 3,
    name: 'Kenyan Coffee',
    category: 'Food & Agricultural Products',
    type: 'export',
    image: 'https://via.placeholder.com/300x200?text=Kenya+Coffee',
    description: 'Premium Kenyan coffee beans for international markets.',
    origin: 'Kenya',
    destination: 'Global',
    delivery: '2-3 weeks'
  },
  {
    id: 4,
    name: 'Electronics Bundle',
    category: 'Electronics & Technology',
    type: 'import',
    image: 'https://via.placeholder.com/300x200?text=Electronics',
    description: 'Latest electronics from China including phones, laptops, and accessories.',
    origin: 'China',
    destination: 'Kenya',
    delivery: '3-4 weeks'
  },
  {
    id: 5,
    name: 'Maasai Crafts',
    category: 'African Culture',
    type: 'export',
    image: 'https://via.placeholder.com/300x200?text=Maasai+Crafts',
    description: 'Authentic Maasai beadwork and traditional crafts.',
    origin: 'Kenya',
    destination: 'Global',
    delivery: '1-2 weeks'
  }
];

function ppRenderCards(products = productsData) {
  const grid = document.getElementById('pp-grid');
  const empty = document.getElementById('pp-empty');
  
  if (!grid) return;
  
  grid.innerHTML = '';
  
  if (products.length === 0) {
    empty?.removeAttribute('hidden');
    return;
  }
  
  empty?.setAttribute('hidden', '');
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'pp-card';
    card.innerHTML = `
      <div class="pp-card-img-wrap">
        <img src="${product.image}" alt="${product.name}" class="pp-card-img" />
        <span class="pp-card-badge">${product.type === 'import' ? '📥 Import' : '📤 Export'}</span>
      </div>
      <div class="pp-card-body">
        <div class="pp-card-category">${product.category}</div>
        <h3 class="pp-card-title">${product.name}</h3>
        <p class="pp-card-desc">${product.description}</p>
        <button class="pp-card-btn" onclick="ppOpenModal(${product.id})" data-i18n="partners_view_details">View Details →</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Open Modal
function ppOpenModal(id) {
  const product = productsData.find(p => p.id === id);
  if (!product) return;
  
  document.getElementById('modal-image').src = product.image;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-description').textContent = product.description;
  document.getElementById('modal-category').textContent = product.category;
  document.getElementById('modal-type-badge').textContent = product.type === 'import' ? '📥 Import' : '📤 Export';
  document.getElementById('modal-origin').textContent = product.origin;
  document.getElementById('modal-destination').textContent = product.destination;
  document.getElementById('modal-delivery').textContent = product.delivery;
  
  const waLink = `https://wa.me/254723214344?text=Hello%20Arakaharaka%20Enterprises%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`;
  document.getElementById('modal-whatsapp').href = waLink;
  
  document.getElementById('partners-modal').removeAttribute('hidden');
}

// Close Modal
function ppCloseModal() {
  document.getElementById('partners-modal').setAttribute('hidden', '');
}

// Init Controls
function ppInitControls() {
  // Search functionality
  const searchInput = document.getElementById('pp-search');
  const searchClear = document.getElementById('pp-search-clear');
  const categorySelect = document.getElementById('pp-category');
  const tabs = document.querySelectorAll('.pp-tab');
  
  if (!searchInput || !categorySelect) return;
  
  let currentTab = 'all';
  let currentCategory = 'all';
  let searchQuery = '';
  
  // Search handler
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    searchClear?.removeAttribute('hidden');
    filterProducts();
  });
  
  searchClear?.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear?.setAttribute('hidden', '');
    filterProducts();
  });
  
  // Category filter
  categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    filterProducts();
  });
  
  // Tab filter
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentTab = tab.getAttribute('data-tab');
      filterProducts();
    });
  });
  
  function filterProducts() {
    let filtered = productsData;
    
    // Type filter
    if (currentTab !== 'all') {
      filtered = filtered.filter(p => p.type === currentTab);
    }
    
    // Category filter
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery)
      );
    }
    
    ppRenderCards(filtered);
  }
  
  // Close modal
  const modalClose = document.getElementById('partners-modal-close');
  const modalOverlay = document.getElementById('partners-modal-overlay');
  
  modalClose?.addEventListener('click', ppCloseModal);
  modalOverlay?.addEventListener('click', ppCloseModal);
  
  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') ppCloseModal();
  });
}

// ════════════════════════════════════════════════════════════════
// INITIALIZATION
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Initialize reveal elements
  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
  });
  
  createParticles();
  triggerReveal();
  window.addEventListener('scroll', triggerReveal);
  
  // Initialize language system
  initializeLanguage();
  
  // Initialize partners page
  ppRenderCards();
  ppInitControls();
});

// Initial page load
window.addEventListener('load', () => {
  triggerReveal();
});
