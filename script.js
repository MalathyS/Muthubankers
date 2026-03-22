const toggler = document.getElementById('navToggler');
const navCollapse = document.getElementById('navCollapse');
toggler.addEventListener('click', () => {
  navCollapse.classList.toggle('open');
});
/* close on link click */
navCollapse.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => navCollapse.classList.remove('open'));
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if(window.scrollY >= s.offsetTop - 130) cur = s.id; });
  navLinks.forEach(l => {
    l.classList.toggle('active-link', l.getAttribute('href') === '#' + cur);
  });
  /* FAB visibility */
  document.getElementById('fabTop').classList.toggle('visible', window.scrollY > 400);
  /* Stats animation trigger */
  const sb = document.getElementById('statsBar');
  if(sb && window.scrollY + window.innerHeight > sb.offsetTop + 80){
    sb.classList.add('counting');
  }
});

/* ── FAQ accordion ── */
function toggleFaq(qEl) {
  const item = qEl.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
