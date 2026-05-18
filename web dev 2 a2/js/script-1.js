  // Default dates
  const today = new Date();
  const dep = new Date(today); dep.setDate(dep.getDate() + 14);
  const ret = new Date(today); ret.setDate(ret.getDate() + 21);
  const fmt = d => d.toISOString().split('T')[0];
  document.getElementById('depart-date').value = fmt(dep);
  document.getElementById('return-date').value = fmt(ret);

  // Tab toggle
  function setTab(btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const isOneWay = btn.textContent.trim() === 'One way';
    document.getElementById('return-field').style.opacity = isOneWay ? '0.3' : '1';
    document.getElementById('return-field').style.pointerEvents = isOneWay ? 'none' : 'auto';
  }

  // Swap locations
  function swapLocations() {
    const inputs = document.querySelectorAll('.from-to input');
    const tmp = inputs[0].value;
    inputs[0].value = inputs[1].value;
    inputs[1].value = tmp;
  }

  // Search (demo)
  function doSearch() {
    const dest = document.getElementById('dest-input').value.trim();
    if (!dest) {
      document.getElementById('dest-input').focus();
      document.getElementById('dest-input').placeholder = '⚠ Please enter a destination';
      return;
    }
    const query = encodeURIComponent(`flights from Dubai to ${dest}`);
    window.open(`https://www.google.com/travel/flights?q=${query}`, '_blank');
  }

  // Animate on scroll
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