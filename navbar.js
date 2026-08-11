// navbar.js
export function createNavbar() {
    const nav = document.createElement('nav');
    nav.id = 'navbar';

    // Menu navigasi yang baru berdasarkan struktur profesional
    const navLinks = [
        { id: 'about', text: 'About Me' },
        { id: 'tech-stack', text: 'Tech Stack' },
        { id: 'projects', text: 'Projects' },
        { id: 'leadership', text: 'Leadership' },
        { id: 'contact', text: 'Contact' }
    ];

    navLinks.forEach(linkData => {
        const anchor = document.createElement('a');
        anchor.href = `#${linkData.id}`;
        anchor.className = 'nav-link';
        anchor.textContent = linkData.text;
        nav.appendChild(anchor);
    });

    document.body.insertAdjacentElement('afterbegin', nav);
}