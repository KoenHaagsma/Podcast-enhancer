const html = document.querySelector('html');
html.dataset.theme = `theme-light`;

function switchTheme(theme) {
    html.dataset.theme = `theme-${theme}`;
}
