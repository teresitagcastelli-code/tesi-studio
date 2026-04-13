// Teresita Castelli — Portfolio JS

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav scroll state
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') links.classList.remove('is-open');
});

// Work filter
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !match);
    });
  });
});

// Scroll-in animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.animate-on-scroll, .project-card').forEach(el => {
  el.classList.add('animate-on-scroll');
  io.observe(el);
});

// Scroll-spy — highlight active nav link
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
const sections = [];

navLinks.forEach(link => {
  const id = link.getAttribute('href').slice(1);
  const section = document.getElementById(id);
  if (section) sections.push({ el: section, link });
});

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const match = sections.find(s => s.el === entry.target);
    if (match) {
      match.link.classList.toggle('is-active', entry.isIntersecting);
    }
  });
}, { threshold: 0, rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spyObserver.observe(s.el));
