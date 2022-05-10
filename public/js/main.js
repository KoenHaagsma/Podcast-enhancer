const html = document.querySelector('html');
const allCards = document.querySelectorAll('.speaker-section');
html.dataset.theme = `theme-dark`;

function switchTheme(theme) {
    html.dataset.theme = `theme-${theme}`;
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            }
        });
    },
    {
        rootMargin: '-50% 0% -50% 0%',
        threshold: 0,
    },
);

allCards.forEach((card) => {
    observer.observe(card);
});
