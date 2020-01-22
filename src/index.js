//about button and Modal
const aboutContent = document.getElementById("about");
const aboutButton = document.getElementsByClassName("about-button")[0];
const aboutClose = document.getElementsByClassName("about-close-content")[0];

aboutButton.onclick = () => {
  aboutContent.style.display = "block";
  closeNav();
};

aboutClose.onclick = () => {
  aboutContent.style.display = "none";
};

// projects button and Modal
const projectsContent = document.getElementById("projects");
const projectsButton = document.getElementsByClassName("projects-button")[0];
const projectsClose = document.getElementsByClassName(
  "projects-close-content"
)[0];

projectsButton.onclick = () => {
  projectsContent.style.display = "block";
  closeNav();
};

projectsClose.onclick = () => {
  projectsContent.style.display = "none";
};

// experience and education button and Modal
const expeduContent = document.getElementsByClassName("exp-edu")[0];
const expeduButton = document.getElementsByClassName("experience-button")[0];
const expeduClose = document.getElementsByClassName(
  "experience-close-content"
)[0];

expeduButton.onclick = () => {
  expeduContent.style.display = "block";
  closeNav();
};

expeduClose.onclick = () => {
  expeduContent.style.display = "none";
};

//closes modal when clicking outside of content
window.onclick = e => {
  if (e.target == aboutContent) {
    aboutContent.style.display = "none";
  }
  if (e.target == projectsContent) {
    projectsContent.style.display = "none";
  }
  if (e.target == expeduContent) {
    expeduContent.style.display = "none";
  }
};

//collapse button for responsive nav menu
const collapseButton = document.getElementById("collapse-menu");
const navMenu = document.getElementsByClassName("nav-items")[0];

const openNav = () => {
  if (navMenu.classList[1] === "close") navMenu.classList.remove("close");
  navMenu.classList.add("open");
};

const closeNav = () => {
  navMenu.classList.remove("open");
  navMenu.classList.add("close");
};

collapseButton.onclick = () => {
  if (navMenu.classList[1] === undefined || navMenu.classList[1] === "close") {
    openNav();
  } else if (navMenu.classList[1] === "open") {
    closeNav();
  }
};

// contact nav button for collapse
const contactButton = document.getElementsByClassName("contact-button")[0];

contactButton.onclick = () => {
  closeNav();
};
