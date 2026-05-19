// script-1.js — flight page scripts

// Set default dates (departure = today + 14 days, return = today + 21 days)
const today = new Date();
const dep = new Date(today); dep.setDate(dep.getDate() + 14);
const ret = new Date(today); ret.setDate(ret.getDate() + 21);
const fmt = d => d.toISOString().split('T')[0];
document.getElementById('depart-date').value = fmt(dep);
document.getElementById('return-date').value = fmt(ret);

// Swap the from/to input values
function swapLocations() {
  const from = document.getElementById('from-input');
  const to   = document.getElementById('dest-input');
  const tmp  = from.value;
  from.value = to.value;
  to.value   = tmp;
}

// Search — opens Google Flights with destination pre-filled
function doSearch() {
  const dest = document.getElementById('dest-input').value.trim();

  // if no destination entered, highlight the field
  if (!dest) {
    const input = document.getElementById('dest-input');
    input.focus();
    input.placeholder = '⚠ Please enter a destination';
    return;
  }

  const query = encodeURIComponent(`flights from Dubai to ${dest}`);
  window.open(`https://www.google.com/travel/flights?q=${query}`, '_blank');
}

// Animate route cards and why cards on scroll into view
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.route-card, .why-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  obs.observe(el);
});