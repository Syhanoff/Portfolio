const themeLight = document.querySelector('.theme__light'),
      themeDark = document.querySelector('.theme__dark');


function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    setTheme('light-theme');
    themeLight.classList.add('active');
  } else {
    setTheme('dark-theme');
    themeDark.classList.add('active');
  }
}

setTheme('dark-theme');



document.querySelector('.theme').addEventListener('click', (e) => {
  toggleTheme();
  themeLight.classList.toggle('active');
  themeDark.classList.toggle('active');
});
