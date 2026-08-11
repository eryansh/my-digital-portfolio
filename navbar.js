// navbar.js
export function createNavbar() {
    // 1. Create the <nav> element
    const nav = document.createElement('nav');
    nav.id = 'navbar';

    // 2. Define your navigation links
    const navLinks = [
        { id: 'about', text: 'About' },
        { id: 'written-portfolio', text: 'Written' },
        { id: 'visual-portfolio', text: 'Visual' },
        { id: 'data-portfolio', text: 'Data' }
    ];

    // 3. Loop through the data and create the <a> tags
    navLinks.forEach(linkData => {
        const anchor = document.createElement('a');
        anchor.href = `#${linkData.id}`;
        anchor.className = 'nav-link';
        anchor.textContent = linkData.text;
        nav.appendChild(anchor);
    });

    // 4. Inject the navbar at the very top of the <body>
    document.body.insertAdjacentElement('afterbegin', nav);
}