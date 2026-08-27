const roles = [
    "Data Analyst",
    "Web Developer",
    "Problem Solver",
];
const roleText = document.getElementById("role-text");
let roleIndex = 0;
let characterIndex = 0;
let deleting = false;
function typeRole() {
    const currentRole = roles[roleIndex];
    if (!deleting) {
        roleText.textContent = currentRole.substring(0, characterIndex + 1);
        characterIndex++;
        if (characterIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeRole, 1500);
            return;
        }
    }else {
        roleText.textContent = currentRole.substring(0, characterIndex - 1);
        characterIndex--;
        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }
    setTimeout(typeRole, deleting ? 50 : 90);
}
typeRole();
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                timelineObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);
timelineItems.forEach((item) => {
    timelineObserver.observe(item);
});
const skillCards = document.querySelectorAll(".skill-card");

function revealSkills() {

    skillCards.forEach((card, index) => {

        const cardTop = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (cardTop < screenHeight - 50) {

            setTimeout(() => {
                card.classList.add("show");
            }, index * 120);

        }

    });

}

window.addEventListener("scroll", revealSkills);

revealSkills();
function refreshLayout() {
    document.body.style.display = "none";
    document.body.offsetHeight;
    document.body.style.display = "";
}
window.addEventListener("orientationchange", () => {
    setTimeout(refreshLayout, 200);
});