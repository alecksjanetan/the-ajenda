const projects = {
  "silver-bullion": {
    kicker: "Paid media / Silver Bullion",
    title: "Make the commute count",
    description: "An awareness campaign built for daily commuters, using a clear retail proposition, repeated product cues and trackable QR journeys across the creative system. The work focused on making a complex bullion offer easy to understand at a glance, then giving interested viewers a simple next step from the station environment into the store experience.",
    result: "Tracked result: 191 QR code scans",
    image: "assets/work/silver-bullion-banner.jpg",
    alt: "Silver Bullion paid media banner variations"
  },
  "scent-by-six": {
    kicker: "Paid media / Scent by Six",
    title: "From scroll to scent",
    description: "Conversion-focused Meta creative for an aromatherapy brand, pairing product-led visuals with a direct-response message and shop-now CTA. I used short-form product storytelling to connect the sensory promise of the range with a measurable purchase journey.",
    result: "Tracked result: 7.05× ROAS",
    image: "assets/work/scent-by-six-video.jpg",
    alt: "Scent by Six Meta ad showing fragrance product"
  },
  "social-content": {
    kicker: "Content / Multiple clients",
    title: "Make the feed feel alive",
    description: "Social content systems across bullion, private events, wellness and beauty — balancing brand consistency with enough visual variation to keep the feed moving. The system brought together education, product, lifestyle and conversion formats so each channel could feel active without becoming visually noisy.",
    result: "A repeatable mix of education, product, lifestyle and conversion content",
    image: "assets/work/social-content.jpg",
    alt: "Social media content grid for multiple clients"
  },
  "lingoace-content": {
    kicker: "Content / LingoAce",
    title: "Make learning feel shareable",
    description: "A selection of LingoAce social content spanning learning tips, holiday programme promotion and character-led campaign creative — making educational content feel bright, useful and easy to share. The creative direction balanced parent-facing utility with the energy and personality that makes children’s learning content feel inviting.",
    result: "Content designed to balance education, action and personality",
    image: "assets/work/lingoace-content-collage.jpg",
    alt: "LingoAce social content collage showing learning and campaign creative"
  },
  "little-command": {
    kicker: "Personal build / Little Command",
    title: "A little command centre for everyday work",
    description: "Little Command is a personal AI-assisted workflow tool created from scratch to make everyday research, drafting, ideation and task handoffs feel more organised and useful. I shaped the product concept, visual language, bot characters and interaction model around one question: how can scattered work become a clearer next action?",
    result: "Created and shaped as an end-to-end personal product",
    image: "assets/brand/little-command-full.png",
    alt: "Little Command logo with colourful chat bubbles"
  },
  "web-redesign": {
    kicker: "Web / UX / Silver Bullion",
    title: "Clearer paths to yes",
    description: "A set of webpage redesign snippets focused on navigation, section hierarchy, CTA placement and making a complex product story easier to scan. The direction connected campaign intent to the page experience, using clearer grouping and stronger moments of reassurance to reduce friction before a visitor acts.",
    result: "UX direction informed by campaign performance and Mixpanel insights",
    image: "assets/work/web-redesign.jpg",
    alt: "Before and after snippets from a Silver Bullion web redesign"
  },
  "sailing-branding": {
    kicker: "Brand / Jolt sailing team",
    title: "Give the team a jolt",
    description: "A sailing team identity and apparel concept for the SB20 World Championships 2025, including a bold wordmark and race-ready visual system. The mark was designed to feel fast, legible and distinctive across crew kit, boat graphics and the wider team presence.",
    result: "First runner-up in the logo competition",
    image: "assets/work/sailing-branding.jpg",
    alt: "Sailing team logo competition and apparel branding"
  }
};

const filterButtons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".work-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    cards.forEach((card) => card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter));
  });
});

const dialog = document.querySelector("#project-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogKicker = document.querySelector("#dialog-kicker");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogResult = document.querySelector("#dialog-result");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const project = projects[card.dataset.project];
    if (!project) return;
    dialogImage.src = project.image;
    dialogImage.alt = project.alt;
    dialogKicker.textContent = project.kicker;
    dialogTitle.textContent = project.title;
    dialogDescription.textContent = project.description;
    dialogResult.textContent = project.result;
    dialog.showModal();
  });
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    card.click();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#year").textContent = new Date().getFullYear();

const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const revealItems = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

  revealItems.forEach((item) => revealObserver.observe(item));
}

const progressBar = document.querySelector(".scroll-progress span");
const updateScrollProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
};
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

const heroArt = document.querySelector(".hero-art");
if (heroArt && !prefersReducedMotion) {
  heroArt.addEventListener("pointermove", (event) => {
    const bounds = heroArt.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroArt.style.setProperty("--tilt-x", `${x * 5}deg`);
    heroArt.style.setProperty("--tilt-y", `${y * -5}deg`);
    heroArt.style.setProperty("--parallax-x", `${x * 12}px`);
    heroArt.style.setProperty("--parallax-y", `${y * 12}px`);
  });
  heroArt.addEventListener("pointerleave", () => {
    heroArt.style.setProperty("--tilt-x", "0deg");
    heroArt.style.setProperty("--tilt-y", "0deg");
    heroArt.style.setProperty("--parallax-x", "0px");
    heroArt.style.setProperty("--parallax-y", "0px");
  });
}

const codeNotes = document.querySelectorAll(".code-note");
const consoleLabel = document.querySelector(".console-top small");
const consoleIndex = document.querySelector(".console-top > span:last-child");
const codeConsole = document.querySelector(".code-console code");
const codeExamples = [
  {
    label: "aj / experiments / motion.js",
    index: "⌘ 01",
    markup: '<span class="syntax-comment">// make the interface feel alive</span>\n<span class="syntax-keyword">const</span> <span class="syntax-name">orbit</span> = <span class="syntax-function">(items, radius)</span> =&gt; {\n  <span class="syntax-keyword">return</span> items.<span class="syntax-function">map</span>((item, index) =&gt; {\n    <span class="syntax-keyword">const</span> angle = index * (<span class="syntax-value">Math.PI</span> * <span class="syntax-value">2</span> / items.length);\n    <span class="syntax-keyword">return</span> {\n      ...item,\n      x: <span class="syntax-function">Math.cos</span>(angle) * radius,\n      y: <span class="syntax-function">Math.sin</span>(angle) * radius\n    };\n  });\n};'
  },
  {
    label: "aj / interaction / checklist.js",
    index: "⌘ 02",
    markup: '<span class="syntax-comment">// keep small tools easy to use</span>\n<span class="syntax-keyword">const</span> <span class="syntax-name">addItem</span> = <span class="syntax-function">(text)</span> =&gt; {\n  <span class="syntax-keyword">const</span> item = document.<span class="syntax-function">createElement</span>(<span class="syntax-value">"li"</span>);\n  item.textContent = text;\n  list.<span class="syntax-function">append</span>(item);\n  input.value = <span class="syntax-value">""</span>;\n};'
  },
  {
    label: "aj / interaction / scroll-story.js",
    index: "⌘ 03",
    markup: '<span class="syntax-comment">// let the scroll reveal the structure</span>\n<span class="syntax-name">ScrollTrigger</span>.<span class="syntax-function">create</span>({\n  trigger: <span class="syntax-value">".activity-track"</span>,\n  start: <span class="syntax-value">"top top"</span>,\n  end: <span class="syntax-value">"+=1600"</span>,\n  pin: <span class="syntax-keyword">true</span>,\n  scrub: <span class="syntax-keyword">true</span>\n});'
  },
  {
    label: "aj / little-command / next.js",
    index: "⌘ 04",
    markup: '<span class="syntax-comment">// turn a message into momentum</span>\n<span class="syntax-keyword">const</span> <span class="syntax-name">nextStep</span> = <span class="syntax-function">(message)</span> =&gt; ({\n  source: message,\n  status: <span class="syntax-value">"ready"</span>,\n  owner: <span class="syntax-value">"aj"</span>,\n  action: <span class="syntax-keyword">true</span>\n});'
  }
];

codeNotes.forEach((note, index) => {
  note.addEventListener("click", () => {
    codeNotes.forEach((item) => item.classList.remove("active"));
    note.classList.add("active");
    if (!codeConsole) return;
    const example = codeExamples[index];
    if (!example) return;
    codeConsole.innerHTML = example.markup;
    consoleLabel.textContent = note.dataset.codeSource || example.label;
    consoleIndex.textContent = example.index;
  });
});
