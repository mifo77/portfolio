const projects = document.querySelectorAll('.pj-item');
const projectModal = document.getElementById('modal-project');
const projectTitle = document.getElementById('modal-project-title');
const projectDesc = document.getElementById('modal-project-description');
const projectLink = document.getElementById('modal-project-link');
const projectClose = projectModal.querySelector('.modal-project-close');

const projectData = {
    "pj1": {
        title: "2D Physics Engine",
        description: "Developed a 2D physics engine from scratch in C++, implementing rigid body dynamics, collisions, and basic forces, designed for research-grade simulations and learning purposes.",
        view: "proj/2DPhysicsEngine.pdf"
    },
    "pj2": {
        title: "Sandboxed Memory Inspector",
        description: "Developed a C++ command-line tool for inspecting and analyzing binary files, featuring memory visualization, file type detection, and data interpretation. The project focused on learning and applying the Windows API for system-level file and memory operations.",
        view: "proj/SandboxedMemoryInspector.pdf"
    },
    "pj3": {
        title: "Sudoku Solver",
        description: "A Sudoku solver project that is still in early phase. Once complete, it will use AI techniques to intelligently solve puzzles and learn strategies, showcasing algorithmic problem-solving and AI-driven approaches.",
        view: ""
    }
};

projects.forEach(proj => {
    proj.addEventListener('click', () => {
        const key = proj.classList[1];
        const data = projectData[key];

        if (!data.view) {
            projectLink.style.pointerEvents = 'none';
            projectLink.style.opacity = '0.5';
        }

        projectTitle.textContent = data.title;
        projectDesc.textContent = data.description;
        projectLink.href = data.view;

        projectModal.style.display = 'flex';
    });
});

projectClose.addEventListener('click', () => {
    projectModal.style.display = 'none';
});

projectModal.addEventListener('click', e => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
    }
});