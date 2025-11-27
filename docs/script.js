// Copied from nested location to docs/ so it's served from the root
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const toggleLabel = toggle.querySelector('.label');

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggleLabel.textContent = theme === 'dark' ? 'Dark' : 'Light';
  toggle.setAttribute('aria-pressed', theme === 'dark');
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) {
    setTheme(stored);
  } else {
    setTheme(prefersDark.matches ? 'dark' : 'light');
  }
}

function toggleTheme() {
  const current = root.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

toggle.addEventListener('click', toggleTheme);
prefersDark.addEventListener('change', (event) => setTheme(event.matches ? 'dark' : 'light'));

const posts = [
  {
    title: 'From Data Cleaning to Storytelling',
    date: 'May 2024',
    tags: ['Data Science', 'Communication'],
    summary: 'A framework for turning exploratory data analysis into narratives leaders can act on.',
    body: `I start every project by pairing notebooks with a short memo. The memo forces clarity: what decision needs to be made, what evidence is missing, and what the reader should do next. When it is time to present, I translate charts into stories—annotating anomalies, naming takeaways, and making uncertainty visible.`,
  },
  {
    title: 'Guardrails for Generative AI',
    date: 'April 2024',
    tags: ['AI Safety', 'LLMs'],
    summary: 'Practical ways to keep LLM features grounded, safe, and measurable.',
    body: `I rely on retrieval-augmented generation with curated sources, layered safety filters, and policy tests that run in CI. User feedback flows into a simple dataset we can learn from. The result: faster iteration with fewer surprises and higher trust from stakeholders.`,
  },
  {
    title: 'Shipping MLOps without the Drama',
    date: 'February 2024',
    tags: ['MLOps', 'Engineering'],
    summary: 'How to move from notebooks to monitored services in small, confident steps.',
    body: `Versioned data contracts, automated training pipelines, canary rollouts, and live monitoring on both inputs and outputs. I focus on observability and rollback paths so experiments can reach production safely—and stay there.`,
  },
  {
    title: 'Sketching Better Dashboards',
    date: 'January 2024',
    tags: ['Data Viz', 'Product'],
    summary: 'Why sketching and annotation-first design make dashboards actually useful.',
    body: `I sketch dashboards on paper first to anchor the story. Every chart gets a caption, confidence callout, and suggested action. The result is a dashboard that tells a cohesive story instead of a collection of disconnected charts.`,
  },
];

const tagFilters = document.getElementById('tagFilters');
const blogList = document.getElementById('blogList');
const searchInput = document.getElementById('searchInput');
const template = document.getElementById('blog-card-template');

const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
let activeTag = 'All';

function renderFilters() {
  const tags = ['All', ...allTags];
  tagFilters.innerHTML = '';
  tags.forEach((tag) => {
    const button = document.createElement('button');
    button.className = 'pill';
    button.textContent = tag;
    button.setAttribute('aria-pressed', tag === activeTag);
    button.addEventListener('click', () => {
      activeTag = tag;
      renderFilters();
      renderPosts();
    });
    if (tag === activeTag) {
      button.style.borderColor = 'var(--accent-solid)';
      button.style.boxShadow = 'var(--shadow)';
    }
    tagFilters.appendChild(button);
  });
}

function createTagPill(label) {
  const pill = document.createElement('span');
  pill.textContent = label;
  return pill;
}

function renderPosts() {
  blogList.innerHTML = '';
  const query = searchInput.value.toLowerCase();
  const filtered = posts.filter((post) => {
    const matchesTag = activeTag === 'All' || post.tags.includes(activeTag);
    const matchesQuery = `${post.title} ${post.summary} ${post.body}`.toLowerCase().includes(query);
    return matchesTag && matchesQuery;
  });

  filtered.forEach((post) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector('.blog-card');
    card.querySelector('.tag').textContent = post.tags[0];
    card.querySelector('h3').textContent = post.title;
    card.querySelector('.blog-date').textContent = post.date;
    card.querySelector('.blog-summary').textContent = post.summary;

    const tagsEl = card.querySelector('.tags');
    post.tags.forEach((tag) => tagsEl.appendChild(createTagPill(tag)));

    const details = card.querySelector('.blog-details');
    details.textContent = post.body;

    const readMoreButton = card.querySelector('button.link');
    readMoreButton.addEventListener('click', () => {
      const hidden = details.hasAttribute('hidden');
      details.toggleAttribute('hidden');
      readMoreButton.textContent = hidden ? 'Hide' : 'Read more';
    });

    blogList.appendChild(node);
  });

  if (!filtered.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No posts match your search yet. Try another keyword or tag!';
    empty.className = 'card';
    blogList.appendChild(empty);
  }
}

searchInput.addEventListener('input', renderPosts);

initTheme();
renderFilters();
renderPosts();
