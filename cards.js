// cards.js

// Data Projek Akademik (Dikemas kini dengan butiran teknikal yang lebih padu)
const academicProjects = [
    {
        title: "ML Sentiment Analysis Dashboard",
        desc: "Developed a predictive classification dashboard using Python, scikit-learn, and Streamlit. Engineered models including Naive Bayes and XGBoost, with strict data-splitting protocols prior to handling class imbalances.",
        tags: ["Machine Learning", "Streamlit", "Python"]
    },
    {
        title: "Educational Robotics & Mechatronics",
        desc: "Executed hardware-software integration projects utilizing Arduino Uno and mBot2 educational kits for technical developments at Pusat Fasiliti U-Science.",
        tags: ["Arduino", "Hardware Integration", "Robotics"]
    },
    {
        title: "Distributed Functional App",
        desc: "Designed and tested a three-node Manager-Worker simulation utilizing a Linux VM and socket-based message passing.",
        tags: ["Linux VM", "Sockets", "Distributed Systems"]
    }
];

// Data Kepimpinan & Penglibatan (Kekal mantap)
const leadershipActivities = [
    {
        title: "Borneo Hackathon 2024",
        desc: "Managed participant registrations and designed the official event booklets for the tech event.",
        tags: ["Event Management", "Graphic Design"]
    },
    {
        title: "STEM Education & UMS Facilitator",
        desc: "Active committee member, speaker, and facilitator driving STEM teaching initiatives and workshops.",
        tags: ["Leadership", "Public Speaking", "Community"]
    },
    {
        title: "Huawei ICT Competition",
        desc: "Engaged in the National and Practice rounds, demonstrating proficiency in IT infrastructure.",
        tags: ["Competition", "Networking"]
    },
    {
        title: "Professional Certifications",
        desc: "Earned industry-recognized credentials including the PeopleCert Data Science Foundation and ITIL certifications.",
        tags: ["Data Science Foundation", "ITIL"]
    }
];

export function loadDynamicCards() {
    const academicGrid = document.getElementById('academic-projects-grid');
    const leadershipGrid = document.getElementById('leadership-grid');

    // Fungsi untuk membina kad HTML
    function buildCard(data, container) {
        if (!container) return;

        const card = document.createElement('div');
        card.className = 'interactive-card';

        const title = document.createElement('h3');
        title.textContent = data.title;
        title.style.color = "var(--text-light)";

        const desc = document.createElement('p');
        desc.textContent = data.desc;
        desc.style.marginBottom = "15px";

        const tagsContainer = document.createElement('div');
        tagsContainer.style.display = "flex";
        tagsContainer.style.gap = "10px";
        tagsContainer.style.flexWrap = "wrap";

        data.tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.className = 'badge';
            tag.style.fontSize = "0.7rem";
            tag.style.border = "1px solid rgba(0, 229, 255, 0.3)";
            tag.textContent = tagText;
            tagsContainer.appendChild(tag);
        });

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(tagsContainer);
        container.appendChild(card);
    }

    // Suntik data ke dalam DOM
    academicProjects.forEach(item => buildCard(item, academicGrid));
    leadershipActivities.forEach(item => buildCard(item, leadershipGrid));
}