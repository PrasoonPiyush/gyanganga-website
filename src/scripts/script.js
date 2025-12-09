/* Smooth scroll for internal anchors */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const targetId = a.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* Placeholder: Download app link */
document.querySelectorAll('.store').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // TODO: Replace alert with actual link to app store page
    alert('TODO: Link this to the GyanGanga app store page.');
  });
});

/* TODO: Add form handling/validation once contact form is wired */
/* TODO: Add course card dynamic rendering when real data is ready */

/* Visitor tracker (simple local counter for demo) */
document.addEventListener("DOMContentLoaded", () => {
  const visitorCountEl = document.getElementById("visitor-count");
  if (visitorCountEl) {
    // TODO: Replace with real backend logic later
    let todayCount = localStorage.getItem("gyanganga_visitors") || 0;
    todayCount++;
    localStorage.setItem("gyanganga_visitors", todayCount);
    visitorCountEl.textContent = "Visitors today: " + todayCount;
  }
});
