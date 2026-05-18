  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Form submit
  document.getElementById('helpSubmit').addEventListener('click', function() {
    this.textContent = '✓ Message sent — we\'ll be in touch soon!';
    this.style.background = '#2dd4bf';
    this.disabled = true;
  });
