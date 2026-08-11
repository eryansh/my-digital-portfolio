document.addEventListener('DOMContentLoaded', () => {
    // Select the empty unordered list from the HTML
    const writtenList = document.getElementById('written-list');
    
    // Data array containing your written works
    const writtenItems = [
        "Academic Thesis Executive Summary",
        "Huawei ICT Competition Retrospective",
        "Learnings from PeopleCert Data Science Foundation & ITIL"
    ];

    // Loop through the array and create list items dynamically
    writtenItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        writtenList.appendChild(li);
    });

    console.log("Portfolio JavaScript loaded successfully!");
});