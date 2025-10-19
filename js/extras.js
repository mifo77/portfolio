const extras = document.querySelectorAll('.ex-item');
const extraModal = document.getElementById('modal-extra');
const extraTitle = document.getElementById('modal-extra-title');
const extraDesc = document.getElementById('modal-extra-description');
const extraLink = document.getElementById('modal-extra-link');
const extraClose = extraModal.querySelector('.modal-extra-close');

const extrasData = {
    "olympiads": {
        title: "Moroccan Olympiads in Informatics",
        description: "Participated in the national-level programming competition, solving complex algorithmic problems. Achieved Top 35 nationally.",
        view: "proofs/olympiads.jpg"
    },
    "fll-regio": {
        title: "FIRST LEGO LEAGUE Regional",
        description: "Worked with my robotics team to design, build, and program a robot for FLL regional challenges. Learned teamwork, problem-solving, and robotics concepts. Achieved 4th place in first participation.",
        view: "proofs/fll-regio.pdf"
    },
    "fll-natio": {
        title: "FIRST LEGO LEAGUE National",
        description: "Qualified for the national FLL competition by excelling in the regional event. Presented our project and robotic solution to judges, gaining practical robotics experience.",
        view: "proofs/fll-natio.pdf"
    },
    "awb-internship": {
        title: "Attijariwafa Bank Internship",
        description: "Completed a short internship at AWB, exploring business processes and gaining exposure to professional software and IT workflows.",
        view: "proofs/awb-internship.pdf"
    },
    "architect-internship": {
        title: "Architect Internship",
        description: "Followed architectural project design, learning CAD tools, project planning, and teamwork in a professional environment.",
        view: "proofs/architect-internship.pdf"
    }
};

extras.forEach(extra => {
    extra.addEventListener('click', () => {
        const key = extra.dataset.key;
        const data = extrasData[key];

        extraTitle.textContent = data.title;
        extraDesc.textContent = data.description;
        extraLink.href = data.view;

        extraModal.style.display = 'flex';
    });
});

extraClose.addEventListener('click', () => {
    extraModal.style.display = 'none';
});

extraModal.addEventListener('click', e => {
    if (e.target === extraModal) {
        extraModal.style.display = 'none';
    }
});