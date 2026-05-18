  const stars = document.querySelectorAll('#starPicker span');
  let chosen = 0;
  stars.forEach(s => {
    s.addEventListener('mouseenter', () => stars.forEach((x,i) => x.classList.toggle('lit', i < +s.dataset.v)));
    s.addEventListener('click', () => { chosen = +s.dataset.v; });
  });
  document.getElementById('starPicker').addEventListener('mouseleave', () => stars.forEach((x,i) => x.classList.toggle('lit', i < chosen)));
 
  document.getElementById('submitBtn').addEventListener('click', function() {
    this.textContent = '✓ Thank you — review submitted!';
    this.style.background = '#2dd4bf';
    this.disabled = true;
  });