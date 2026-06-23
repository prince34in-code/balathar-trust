"use strict";

/*
  ============================================================================
  MAINTENANCE GUIDE
  ============================================================================
  Routine website updates should happen in the CONTENT object below.

  How to change trust name:
  - Edit CONTENT.trust.name and CONTENT.trust.shortName.

  How to change phone number:
  - Edit CONTENT.contact.phone for the visible number.
  - Edit CONTENT.contact.phoneLink for the clickable tel: number.

  How to change WhatsApp number:
  - Edit CONTENT.contact.whatsapp. Use country code without + or spaces.

  How to update gallery:
  - Replace files inside assets/images/gallery/.
  - Update CONTENT.gallery image, alt, caption, and optional size values.

  How to add team members:
  - Add a new object to CONTENT.team.
  - Put the member photo in assets/images/team/ and update the image path.

  How to update event details:
  - Edit CONTENT.events date, day, month, year, title, and location.
  - The countdown reads CONTENT.events[0].date.

  How to update bank details:
  - Edit CONTENT.bank accountName, accountNumber, ifsc, and note.

  Tip:
  - Copy an existing object, paste it below, then update only the text and path.
    Keep commas between objects.
  ============================================================================
*/

// CONFIG DATA
// -----------------------------------------------------------------------------
// BEGINNER EDITING GUIDE:
// Change text, phone numbers, images, members, events, or bank information only
// inside this CONTENT object. Do not change the rendering functions below.
// Keep commas between items and keep text inside quotation marks.
const CONTENT = {
  trust: {
    name: "सामूहिक कन्या विवाह बलथर ट्रस्ट",
    shortName: "बलथर ट्रस्ट",
    tagline: "सेवा से सम्मान तक",
    motto: "सेवा • सम्मान • सहयोग",
    footerMotto: "सेवा से समाज, सम्मान से भविष्य"
  },

  contact: {
    phone: "+91 93342 25423",
    phoneLink: "+919334225423",
    whatsapp: "919334225423",
    email: "contact@balthartrust.org",
    address: "बलथर, पश्चिम चंपारण, बिहार - 845307",
    mapQuery: "Balthar, West Champaran, Bihar"
  },

  images: {
    hero: "assets/images/hero/hero-ceremony.svg",
    about: "assets/images/about/about-ceremony.svg",
    aboutAlt: "भारतीय विवाह समारोह में वर-वधू"
  },

  navigation: [
    { label: "होम", href: "#home" },
    { label: "हमारे बारे में", href: "#about" },
    { label: "पात्रता", href: "#eligibility" },
    { label: "आवेदन", href: "#registration" },
    { label: "गैलरी", href: "#gallery" },
    { label: "टीम", href: "#team" },
    { label: "संपर्क", href: "#contact" }
  ],

  hero: {
    eyebrow: "एक पवित्र संकल्प • एक नई शुरुआत",
    title: "सामूहिक कन्या विवाह",
    subtitle: "जरूरतमंद बेटियों के सम्मानजनक विवाह हेतु समर्पित",
    trustPoints: ["पूर्ण पारदर्शिता", "सामाजिक सहभागिता", "सम्मानजनक आयोजन"],
    assurances: [
      { value: "8+", text: "बेटियों का सम्मानजनक विवाह" },
      { value: "3 वर्ष", text: "विश्वसनीय सामाजिक सेवा" },
      { value: "✓", text: "सत्यापित एवं पारदर्शी प्रक्रिया", seal: true }
    ]
  },

  about: {
    eyebrow: "हमारी पहचान",
    heading: "हमारे बारे में",
    intro: "बेटियों के सपनों को सम्मान और परिवारों को आत्मविश्वास देने की एक सामूहिक पहल।",
    copyEyebrow: "साथ मिलकर बदलाव",
    title: "हर बेटी का विवाह सम्मान के साथ",
    description: "सामूहिक कन्या विवाह बलथर ट्रस्ट आर्थिक रूप से कमजोर परिवारों की बेटियों के विवाह को गरिमापूर्ण, सुरक्षित और संस्कारपूर्ण बनाने के लिए कार्यरत है। समाज के सहयोग से हम आयोजन, आवश्यक सामग्री और मार्गदर्शन उपलब्ध कराते हैं।",
    experienceYears: "3+",
    experienceText: "वर्षों की निस्वार्थ सेवा",
    mission: [
      { icon: "◎", title: "हमारा मिशन", text: "जरूरतमंद परिवारों को विश्वसनीय सहायता और सम्मानजनक मंच देना।" },
      { icon: "◇", title: "हमारी दृष्टि", text: "ऐसा समाज जहां आर्थिक अभाव किसी बेटी के भविष्य में बाधा न बने।" }
    ],
    features: [
      { icon: "🎯", title: "उद्देश्य", text: "विवाह योग्य जरूरतमंद कन्याओं को व्यवस्थित और सम्मानपूर्ण सहयोग प्रदान करना।", link: "#eligibility", linkText: "और जानें →" },
      { icon: "🤝", title: "सेवा", text: "पंजीकरण से आयोजन तक परिवारों का मार्गदर्शन और आवश्यक व्यवस्थाओं में सहायता।", link: "#registration", linkText: "प्रक्रिया देखें →" },
      { icon: "❤", title: "सामाजिक योगदान", text: "समाज, दानदाताओं और स्वयंसेवकों को एक संवेदनशील उद्देश्य से जोड़ना।", link: "#donate", linkText: "सहयोग करें →" }
    ]
  },

  trustBadges: [
    { icon: "✓", title: "पंजीकृत सामाजिक संस्था", text: "नियमों के अनुरूप संचालन" },
    { icon: "₹", title: "पारदर्शी आर्थिक सहयोग", text: "हर योगदान का जिम्मेदार उपयोग" },
    { icon: "♢", title: "सम्मान सर्वोपरि", text: "परिवारों की गरिमा और गोपनीयता" },
    { icon: "◎", title: "स्थानीय समुदाय का भरोसा", text: "50+ गांवों तक सक्रिय पहुंच" }
  ],

  terms: [
    {
      title: "पारदर्शिता",
      text: "सभी सहयोग और गतिविधियां पारदर्शी तरीके से संचालित की जाती हैं।"
    },
    {
      title: "सम्मान और गोपनीयता",
      text: "सभी परिवारों की गरिमा और गोपनीयता का पूरा सम्मान किया जाता है।"
    }
  ],

  statistics: [
    { value: 8, suffix: "+", label: "विवाह सम्पन्न" },
    { value: 16, suffix: "+", label: "परिवार लाभान्वित" },
    { value: 3, suffix: "+", label: "वर्ष सेवा" },
    { value: 15, suffix: "+", label: "गांवों तक पहुंच" }
  ],

  eligibility: ["आर्थिक रूप से कमजोर परिवार", "कन्या की आयु न्यूनतम 18 वर्ष", "वर की आयु न्यूनतम 21 वर्ष", "स्थानीय सत्यापन अनिवार्य"],

  documents: [
    { icon: "▣", title: "आधार कार्ड", text: "वर एवं कन्या दोनों का" },
    { icon: "▤", title: "राशन कार्ड", text: "परिवार की पहचान हेतु" },
    { icon: "₹", title: "आय प्रमाण पत्र", text: "अद्यतन प्रमाण पत्र" },
    { icon: "⌂", title: "निवास प्रमाण पत्र", text: "स्थायी पते के लिए" },
    { icon: "◉", title: "पासपोर्ट फोटो", text: "वर एवं कन्या की फोटो" }
  ],

  registrationSteps: [
    { icon: "✎", title: "आवेदन करें", text: "फॉर्म भरें या कार्यालय में संपर्क करें।" },
    { icon: "▧", title: "दस्तावेज जमा करें", text: "आवश्यक दस्तावेजों की प्रतियां दें।" },
    { icon: "✓", title: "सत्यापन", text: "ट्रस्ट टीम आवेदन की जांच करेगी।" },
    { icon: "♢", title: "विवाह में शामिल हों", text: "निर्धारित समारोह में ससम्मान भाग लें।" }
  ],

  gallery: [
    { image: "assets/images/gallery/gallery-1.svg", alt: "विवाह समारोह की सजावट", caption: "सामूहिक विवाह समारोह", size: "wide" },
    { image: "assets/images/gallery/gallery-2.svg", alt: "भारतीय विवाह में वर-वधू", caption: "मंगलमय शुरुआत", size: "tall" },
    { image: "assets/images/gallery/gallery-3.svg", alt: "पारंपरिक विवाह के रंग", caption: "खुशियों के रंग" },
    { image: "assets/images/gallery/gallery-4.svg", alt: "समारोह में शामिल परिवार", caption: "सामाजिक सहभागिता" },
    { image: "assets/images/gallery/gallery-5.svg", alt: "भारतीय विवाह की रस्म", caption: "पवित्र रस्में" },
    { image: "assets/images/gallery/gallery-6.svg", alt: "विवाह मंडप में परिवार", caption: "एक साथ, एक संकल्प", size: "wide" },
    { image: "assets/images/gallery/gallery-7.svg", alt: "विवाह में हाथों की रस्म", caption: "नई उम्मीद" },
    { image: "assets/images/gallery/gallery-8.svg", alt: "विवाह समारोह का भावुक पल", caption: "आशीर्वाद" }
  ],

  events: [
    { date: "2026-12-05T09:00:00+05:30", day: "05", month: "दिसंबर", year: "2026", title: "अगला सामूहिक विवाह समारोह", location: "शिव मंदिर,बलथर, पश्चिम चंपारण, बिहार" }
  ],

  team: [
    { name: "प्रमोद कुमार", role: "अध्यक्ष", phone: "+919780895422", image: "assets/images/team/member-1.svg" },
    { name: "निखिलेश कुमार", role: "सचिव", phone: "+919334225423", image: "assets/images/team/member-2.svg" },
    { name: "ब्रह्मानंद कुमार", role: "कोषाध्यक्ष", phone: "+919135357954", image: "assets/images/team/member-3.svg" },
    { name: "प्रकाश बाबू", role: "उपाध्यक्ष", phone: "+917667406439", image: "assets/images/team/member-4.svg" }
  ],

  supporters: [
    { initials: "BS", name: "बलथर जनकल्याण समिति" },
    { initials: "YU", name: "युवा उत्थान मंच" },
    { initials: "NS", name: "नारी सम्मान एवं उत्थान समूह" },
    { initials: "JS", name: "आपातकाल मदद समूह" },
    { initials: "SK", name: "समस्या समाधान केंद्र बलथर" }
  ],

  donation: {
    description: "आपका छोटा सा योगदान विवाह सामग्री, भोजन, वस्त्र और आयोजन व्यवस्था में बड़ी सहायता बन सकता है। हर सहयोग का उपयोग पारदर्शिता और जिम्मेदारी के साथ किया जाता है।",
    points: ["सुरक्षित सहयोग", "पूर्ण पारदर्शिता", "रसीद उपलब्ध"]
  },

  bank: {
    accountName: "सामूहिक कन्या विवाह बलथर ट्रस्ट",
    accountNumber: "XXXX XXXX 1234",
    ifsc: "ABCD0001234",
    note: "कृपया भुगतान से पहले विवरण की पुष्टि करें।"
  },

  testimonials: [
    { initials: "RK", name: "बृजकिशोर पटेल", location: "बलथर, पश्चिम चंपारण", feedback: "ट्रस्ट ने हमारी बेटी का विवाह पूरे सम्मान और सुंदर व्यवस्था के साथ कराया। हर चरण में टीम ने परिवार की तरह हमारा साथ दिया।" },
    { initials: "SD", name: "जवाहिर मंझी", location: "बलथर, पश्चिम चंपारण", feedback: "आर्थिक कठिनाई के समय यह संस्था हमारे लिए आशा बनी। प्रक्रिया सरल, पारदर्शी और सभी सदस्यों का व्यवहार बहुत सहयोगपूर्ण था।" },
    { initials: "MA", name: "कंचन महतो", location: "बलथर, पश्चिम चंपारण", feedback: "इस आयोजन में बेटियों को जो सम्मान और अपनापन मिला, वह सराहनीय है। समाज के लिए यह वास्तव में प्रेरणादायक प्रयास है।" }
  ],

  socialLinks: [
    { label: "Facebook", symbol: "f", url: "#" },
    { label: "Instagram", symbol: "◎", url: "#" },
    { label: "WhatsApp", symbol: "◉", url: "whatsapp" },
    { label: "YouTube", symbol: "▶", url: "#" }
  ],

  footer: {
    description: "जरूरतमंद बेटियों के सम्मानजनक विवाह और बेहतर भविष्य हेतु समर्पित सामाजिक संस्था।"
  }
};

// HELPERS
// -----------------------------------------------------------------------------
// Reusable helpers keep rendering functions short and easy to scan.
const select = (selector, scope = document) => scope.querySelector(selector);
const selectAll = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const setHTML = (selector, html) => { select(selector).innerHTML = html; };
const whatsappUrl = `https://wa.me/${CONTENT.contact.whatsapp}?text=${encodeURIComponent("नमस्ते, मैं ट्रस्ट से संपर्क करना चाहता/चाहती हूं।")}`;

function getNestedValue(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object) ?? "";
}

function bindSimpleContent() {
  selectAll("[data-content]").forEach((element) => {
    element.textContent = getNestedValue(CONTENT, element.dataset.content);
  });
  select(".hero-bg").style.backgroundImage = `url("${CONTENT.images.hero}")`;
  select("#about-image").src = CONTENT.images.about;
  select("#about-image").alt = CONTENT.images.aboutAlt;
  select("#map-frame").src = `https://www.google.com/maps?q=${encodeURIComponent(CONTENT.contact.mapQuery)}&output=embed`;
  selectAll(".js-whatsapp-link").forEach((link) => { link.href = whatsappUrl; });
  select("#copyright-year").textContent = new Date().getFullYear();
}

// RENDER FUNCTIONS
// -----------------------------------------------------------------------------
// These functions build repeated cards from CONTENT arrays.
function renderSiteContent() {
  setHTML("#primary-nav", CONTENT.navigation.map((item, index) => `<a class="${index === 0 ? "active" : ""}" href="${item.href}">${item.label}</a>`).join(""));
  setHTML("#hero-trust", CONTENT.hero.trustPoints.map((item) => `<span>✓ ${item}</span>`).join(""));
  setHTML("#hero-assurance", CONTENT.hero.assurances.map((item) => `<div>${item.seal ? `<span class="assurance-seal">${item.value}</span>` : `<strong>${item.value}</strong>`}<span>${item.text}</span></div>`).join(""));
  setHTML("#mission-list", CONTENT.about.mission.map((item) => `<div><span class="mini-icon">${item.icon}</span><p><strong>${item.title}</strong>${item.text}</p></div>`).join(""));
  setHTML("#feature-list", CONTENT.about.features.map((item) => `<article class="feature-card reveal"><span class="card-icon">${item.icon}</span><h3>${item.title}</h3><p>${item.text}</p><a href="${item.link}">${item.linkText}</a></article>`).join(""));
  setHTML("#trust-badge-list", CONTENT.trustBadges.map((item) => `<article class="trust-badge reveal"><span>${item.icon}</span><div><strong>${item.title}</strong><small>${item.text}</small></div></article>`).join(""));
  setHTML("#statistics-list", CONTENT.statistics.map((item) => `<div class="stat reveal"><strong><span class="counter" data-target="${item.value}">0</span>${item.suffix}</strong><span>${item.label}</span></div>`).join(""));
  setHTML("#eligibility-list", CONTENT.eligibility.map((item) => `<li>${item}</li>`).join(""));
  setHTML("#document-list", CONTENT.documents.map((item) => `<article class="document-card reveal"><span>${item.icon}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join(""));
  setHTML("#process-list", CONTENT.registrationSteps.map((item, index) => `<article class="timeline-step reveal"><span class="step-number">${String(index + 1).padStart(2, "0")}</span><span class="step-icon">${item.icon}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join(""));
  setHTML("#gallery-list", CONTENT.gallery.map((item) => `<button class="gallery-item ${item.size ?? ""} reveal" data-caption="${item.caption}" aria-label="${item.caption} बड़ा देखें"><img src="${item.image}" alt="${item.alt}" loading="lazy"><span>${item.caption}</span></button>`).join(""));
  setHTML("#event-list", CONTENT.events.map(renderEvent).join(""));
  setHTML("#team-list", CONTENT.team.map((member) => `<article class="member-card reveal"><div class="member-photo"><img src="${member.image}" alt="${member.name}, ${member.role}" loading="lazy"></div><div><h3>${member.name}</h3><p>${member.role}</p><a href="tel:${member.phone}" aria-label="${member.name} से फोन पर संपर्क">↗</a></div></article>`).join(""));
  setHTML("#supporter-list", CONTENT.supporters.map((item) => `<div><span>${item.initials}</span><strong>${item.name}</strong></div>`).join(""));
  setHTML("#donation-points", CONTENT.donation.points.map((item) => `<span>✓ ${item}</span>`).join(""));
  renderBankDetails();
  setHTML("#testimonial-list", CONTENT.testimonials.map((item, index) => `<article class="testimonial ${index === 0 ? "active" : ""}"><div class="quote">“</div><p>${item.feedback}</p><div class="person"><span>${item.initials}</span><div><strong>${item.name}</strong><small>${item.location}</small></div></div></article>`).join(""));
  renderContactDetails();
  renderFooter();
}

function renderEvent(event) {
  return `<article class="event-card reveal"><div class="event-date"><span>${event.day}</span><strong>${event.month}</strong><small>${event.year}</small></div><div class="event-content"><span class="eyebrow">आगामी आयोजन</span><h2>${event.title}</h2><p><span aria-hidden="true">⌖</span> ${event.location}</p></div><div class="event-action"><div class="countdown" data-event-date="${event.date}" aria-label="समारोह शुरू होने में शेष समय"><div><strong data-days>000</strong><span>दिन</span></div><i>:</i><div><strong data-hours>00</strong><span>घंटे</span></div><i>:</i><div><strong data-minutes>00</strong><span>मिनट</span></div><i>:</i><div><strong data-seconds>00</strong><span>सेकंड</span></div></div><a class="btn btn-dark" href="#contact">अधिक जानकारी <span>→</span></a></div></article>`;
}

function renderBankDetails() {
  const bank = CONTENT.bank;
  setHTML("#bank-content", `<span>बैंक विवरण</span><p><small>खाता नाम</small><strong>${bank.accountName}</strong></p><div><p><small>खाता संख्या</small><strong>${bank.accountNumber}</strong></p><p><small>IFSC कोड</small><strong>${bank.ifsc}</strong></p></div><em>${bank.note}</em>`);
}

function renderContactDetails() {
  const contact = CONTENT.contact;
  setHTML("#contact-details", `<a href="tel:${contact.phoneLink}"><span>☎</span><div><small>मोबाइल</small><strong>${contact.phone}</strong></div></a><a href="${whatsappUrl}" target="_blank" rel="noopener"><span>◉</span><div><small>WhatsApp</small><strong>${contact.phone}</strong></div></a><a href="mailto:${contact.email}"><span>✉</span><div><small>ईमेल</small><strong>${contact.email}</strong></div></a><div><span>⌖</span><div><small>पता</small><strong>${contact.address}</strong></div></div>`);
}

function renderFooter() {
  const primaryLinks = CONTENT.navigation.slice(1, 5);
  const secondaryLinks = [...CONTENT.navigation.slice(5), { label: "सहयोग करें", href: "#donate" }];
  setHTML("#footer-primary-links", primaryLinks.map((item) => `<a href="${item.href}">${item.label}</a>`).join(""));
  setHTML("#footer-secondary-links", secondaryLinks.map((item) => `<a href="${item.href}">${item.label}</a>`).join(""));
  setHTML("#footer-contact", `<p>${CONTENT.contact.address}</p><a href="tel:${CONTENT.contact.phoneLink}">${CONTENT.contact.phone}</a><a href="mailto:${CONTENT.contact.email}">${CONTENT.contact.email}</a>`);
  setHTML("#social-links", CONTENT.socialLinks.map((item) => `<a href="${item.url === "whatsapp" ? whatsappUrl : item.url}" aria-label="${item.label}">${item.symbol}</a>`).join(""));
}

bindSimpleContent();
renderSiteContent();

// UI FEATURES
// -----------------------------------------------------------------------------
// Loading screen and event timer use content generated above.
const pageLoader = select(".page-loader");
const hideLoader = () => { pageLoader.classList.add("hidden"); document.body.classList.remove("loading"); };
window.addEventListener("load", () => window.setTimeout(hideLoader, 350));
window.setTimeout(hideLoader, 2800);

function startCountdowns() {
  selectAll(".countdown").forEach((countdown) => {
    const eventTime = new Date(countdown.dataset.eventDate).getTime();
    const update = () => {
      const remaining = Math.max(eventTime - Date.now(), 0);
      const values = {
        days: Math.floor(remaining / 86400000),
        hours: Math.floor((remaining % 86400000) / 3600000),
        minutes: Math.floor((remaining % 3600000) / 60000),
        seconds: Math.floor((remaining % 60000) / 1000)
      };
      Object.entries(values).forEach(([key, value]) => {
        select(`[data-${key}]`, countdown).textContent = String(value).padStart(key === "days" ? 3 : 2, "0");
      });
    };
    update();
    window.setInterval(update, 1000);
  });
}
startCountdowns();

// MOBILE MENU
// -----------------------------------------------------------------------------
const header = select("#site-header");
const menuToggle = select(".menu-toggle");
const navigation = select(".primary-nav");

function closeMenu() {
  navigation.classList.remove("open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "मेनू खोलें");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "मेनू बंद करें" : "मेनू खोलें");
  document.body.classList.toggle("menu-open", isOpen);
});
selectAll('.primary-nav a, a[href^="#"]').forEach((link) => link.addEventListener("click", closeMenu));

// ANIMATIONS
// -----------------------------------------------------------------------------
// COUNTERS
// -----------------------------------------------------------------------------
let countersStarted = false;
const counterObserver = new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting || countersStarted) return;
  countersStarted = true;
  selectAll(".counter").forEach(animateCounter);
  observer.disconnect();
}, { threshold: 0.35 });

function animateCounter(counter) {
  const target = Number(counter.dataset.target);
  const startTime = performance.now();
  const update = (time) => {
    const progress = Math.min((time - startTime) / 1800, 1);
    counter.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3))).toLocaleString("en-IN");
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
counterObserver.observe(select(".stats"));

// LIGHTBOX
// -----------------------------------------------------------------------------
const lightbox = select(".lightbox");
const lightboxImage = select("img", lightbox);
const lightboxCaption = select("p", lightbox);
const lightboxClose = select(".lightbox-close", lightbox);
let lastFocusedElement;

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
  lastFocusedElement?.focus();
}

selectAll(".gallery-item").forEach((item) => item.addEventListener("click", () => {
  const image = select("img", item);
  lastFocusedElement = item;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = item.dataset.caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}));
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });

// TESTIMONIALS
// -----------------------------------------------------------------------------
const testimonials = selectAll(".testimonial");
const dotsContainer = select(".slider-dots");
let currentSlide = 0;
let sliderTimer;

testimonials.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `अनुभव ${index + 1} देखें`);
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  currentSlide = (index + testimonials.length) % testimonials.length;
  testimonials.forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === currentSlide));
  selectAll("button", dotsContainer).forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === currentSlide));
  clearInterval(sliderTimer);
  sliderTimer = window.setInterval(() => showSlide(currentSlide + 1), 5500);
}
select(".slider-btn.prev").addEventListener("click", () => showSlide(currentSlide - 1));
select(".slider-btn.next").addEventListener("click", () => showSlide(currentSlide + 1));
showSlide(0);

// SCROLL ANIMATIONS
// -----------------------------------------------------------------------------
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });
selectAll(".reveal").forEach((element) => revealObserver.observe(element));

const navigationLinks = selectAll(".primary-nav a");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navigationLinks.forEach((link) => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });
selectAll("main section[id]").forEach((section) => sectionObserver.observe(section));

// BACK TO TOP
// -----------------------------------------------------------------------------
const backToTop = select(".back-to-top");

function handleScroll() {
  header.classList.toggle("scrolled", window.scrollY > 20);
  backToTop.classList.toggle("visible", window.scrollY > 550);
}
window.addEventListener("scroll", handleScroll, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
handleScroll();

// FORM AND GLOBAL EVENT HANDLERS
// -----------------------------------------------------------------------------
select("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = select(".form-status", form);
  if (!form.checkValidity()) { form.reportValidity(); return; }
  status.textContent = "धन्यवाद! आपका संदेश प्राप्त हो गया है।";
  form.reset();
  window.setTimeout(() => { status.textContent = ""; }, 5000);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeLightbox();
  closeMenu();
});
window.addEventListener("resize", () => { if (window.innerWidth > 820) closeMenu(); });
