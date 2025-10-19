const skills = document.querySelectorAll('.sk-item');
const modal = document.getElementById('modal-skill');
const modalImg = document.getElementById('modal-skill-img');
const modalTitle = document.getElementById('modal-skill-title');
const modalDesc = document.getElementById('modal-skill-description');
const modalClose = document.querySelector('.modal-skill-close');

const skillData = {
    "C++": "Learning C++ was the pivotal moment that unlocked the world of low-level programming, competitive coding, and deep system understanding; it became the foundation for everything I built and explored afterward.",
    "Python": "Started in 2020 for learning programming basics; later used to create Discord bots, Minecraft server tools, and small automation scripts.",
    "C#": "Learnt in 2021 while developing games in Unity, building multiple 2D/3D projects.",
    "Unity": "Used alongside C# to design and create interactive games and simulations, focusing on mechanics and physics.",
    "Java": "First language learned in 2018; used for basic programs and early Minecraft modding projects.",
    "Linux": "Gained practical experience through development work and server management for Minecraft projects and programming experiments, as well as some regular desktop use.",
    "HTML": "Applied in early web projects and personal portfolio pages to structure content online.",
    "CSS": "Used to style personal websites and portfolio, experimenting with layouts, colors, and responsive designs.",
    "JavaScript": "Used to enhance web projects and portfolio interactivity; also used to create Discord bots."
};

skills.forEach(skill => {
    skill.addEventListener('click', () => {
        const img = skill.querySelector('img');
        const title = img.alt;

        modalImg.src = img.src;
        modalTitle.textContent = title;
        modalDesc.textContent = skillData[title] || "No description available.";

        modal.style.display = 'flex';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
