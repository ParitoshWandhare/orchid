document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved user preference, if any, on load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
    } else if (currentTheme === 'light') {
        document.documentElement.classList.remove('dark-theme');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.classList.add('dark-theme');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark-theme')) {
            document.documentElement.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
});
