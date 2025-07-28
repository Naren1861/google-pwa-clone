function feelingLucky() {
  window.location.href = "https://www.google.com/doodles";
}

function saveSearch(event) {
  const input = document.getElementById('searchInput');
  let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  history.unshift(input.value);
  history = history.slice(0, 5);
  localStorage.setItem('searchHistory', JSON.stringify(history));
}

function loadHistory() {
  const list = document.getElementById('historyList');
  const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  list.innerHTML = history.map(item => `<li>${item}</li>`).join('');
}

function setupThemeToggle() {
  const checkbox = document.getElementById('themeSwitcher');
  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    checkbox.checked = true;
  }
}

window.onload = () => {
  loadHistory();
  setupThemeToggle();
};
