// Set min date
const today = new Date().toISOString().split('T')[0];
document.getElementById('depdate').setAttribute('min', today);
document.getElementById('depdate').value = today;

function searchFlight() {
  const origin = document.getElementById('origin').value.trim();
  const dest = document.getElementById('dest').value.trim();
  const date = document.getElementById('depdate').value;
  const dur = parseInt(document.getElementById('duration').value);

  if (!dest) {
    document.getElementById('dest').focus();
    document.getElementById('dest').style.borderColor = 'var(--red)';
    setTimeout(() => document.getElementById('dest').style.borderColor = '', 2000);
    return;
  }

  // Compute return date
  const dep = new Date(date);
  dep.setDate(dep.getDate() + dur);
  const ret = dep.toISOString().split('T')[0];

  // Build Google Flights deep link
  const q = `Flights from ${origin} to ${dest} on ${date} returning ${ret}`;
  const url = `https://www.google.com/travel/flights?q=${encodeURIComponent(q)}&curr=AED`;
  window.open(url, '_blank');
}

// Destination pill filtering (UI only)
document.querySelectorAll('.dest-pill').forEach(p => {
  p.addEventListener('click', () => {
    document.querySelectorAll('.dest-pill').forEach(x => x.classList.remove('active'));
    p.classList.add('active');
  });
});

// Enter key on dest field triggers search
document.getElementById('dest').addEventListener('keydown', e => {
  if (e.key === 'Enter') searchFlight();
});
