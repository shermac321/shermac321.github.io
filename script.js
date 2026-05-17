const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');
const copyEmail = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');

if (year) year.textContent = new Date().getFullYear();

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

copyEmail?.addEventListener('click', async () => {
  const email = 'shermac321@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Email copied: ' + email;
  } catch (error) {
    copyStatus.textContent = email;
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
