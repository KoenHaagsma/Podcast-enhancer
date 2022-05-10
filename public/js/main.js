const html = document.querySelector('html');
const allCards = document.querySelectorAll('.speaker-section');
html.dataset.theme = `theme-light`;

function switchTheme(theme) {
    html.dataset.theme = `theme-${theme}`;
}

// When the user scrolls the page, execute scrollFunction
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector('.progressBar').style.width = scrolled + '%';
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const speaker = document.querySelector(`.speaker${entry.target.id}`);
                entry.target.style.backgroundColor = 'grey';
                speaker.classList.add('show');
            } else {
                const speaker = document.querySelector(`.speaker${entry.target.id}`);
                speaker.classList.remove('show');
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
