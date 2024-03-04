const link = document.createElement('link');

const themeFromStorage = localStorage.getItem('colorTheme')
    ? JSON.parse(localStorage.getItem('colorTheme') ?? '')
    : '';

if (themeFromStorage && themeFromStorage !== 'browser') {
    link.href = `/styles/theme-${
        JSON.parse(localStorage.getItem('colorTheme') ?? '') === 'light'
            ? 'light'
            : 'dark'
    }.css`;
} else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    link.href = '/styles/theme-dark.css';
} else {
    link.href = '/styles/theme-light.css';
}

link.type = 'text/css';
link.rel = 'stylesheet';
link.media = 'screen,print';
link.id = 'theme-css';

document.getElementsByTagName('head')[0].appendChild(link);
