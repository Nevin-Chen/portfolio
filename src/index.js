//about button and Modal
const aboutContent = document.getElementById("about");
const aboutButton = document.getElementsByClassName("about-button")[0];
const aboutClose = document.getElementsByClassName("about-close-content")[0];

aboutButton.onclick = () => {
  // aboutContent.style.display = "block";
  aboutContent.style.visibility = "visible";
  aboutContent.style.opacity = "1";
  closeNav();
};

aboutClose.onclick = () => {
  aboutContent.style.visibility = "hidden";
  aboutContent.style.opacity = "0";
};

// projects button and Modal
const projectsContent = document.getElementById("projects");
const projectsButton = document.getElementsByClassName("projects-button")[0];
const projectsClose = document.getElementsByClassName(
  "projects-close-content"
)[0];

projectsButton.onclick = () => {
  projectsContent.style.visibility = "visible";
  projectsContent.style.opacity = "1";
  closeNav();
};

projectsClose.onclick = () => {
  projectsContent.style.visibility = "hidden";
  projectsContent.style.opacity = "0";
};

// experience and education button and Modal
const expeduContent = document.getElementsByClassName("exp-edu")[0];
const expeduButton = document.getElementsByClassName("experience-button")[0];
const expeduClose = document.getElementsByClassName(
  "experience-close-content"
)[0];

expeduButton.onclick = () => {
  expeduContent.style.visibility = "visible";
  expeduContent.style.opacity = "1";
  closeNav();
};

expeduClose.onclick = () => {
  expeduContent.style.visibility = "hidden";
  expeduContent.style.opacity = "0";
};

//closes modal when clicking outside of content
window.onclick = e => {
  if (e.target == aboutContent) {
    aboutContent.style.visibility = "hidden";
    aboutContent.style.opacity = "0";
  }
  if (e.target == projectsContent) {
    projectsContent.style.visibility = "hidden";
    projectsContent.style.opacity = "0";
  }
  if (e.target == expeduContent) {
    expeduContent.style.visibility = "hidden";
    expeduContent.style.opacity = "0";
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
