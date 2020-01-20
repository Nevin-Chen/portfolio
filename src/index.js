//about button and Modal
const aboutContent = document.getElementById("about");
const aboutButton = document.getElementsByClassName("about-button")[0];
const aboutClose = document.getElementsByClassName("about-close-content")[0];

aboutButton.onclick = () => {
  aboutContent.style.display = "block";
};

aboutClose.onclick = () => {
  aboutContent.style.display = "none";
};

// projects button and Modal
const projectsContent = document.getElementById("projects");
const projectsButton = document.getElementsByClassName("projects-button")[0];
const projectsClose = document.getElementsByClassName("projects-close-content")[0];

projectsButton.onclick = function() {
  projectsContent.style.display = "block";
};

projectsClose.onclick = function() {
  projectsContent.style.display = "none";
};

// experience and education button and Modal
const expeduContent = document.getElementsByClassName("exp-edu")[0];
const expeduButton = document.getElementsByClassName("experience-button")[0];
const expeduClose = document.getElementsByClassName("experience-close-content")[0];

expeduButton.onclick = function() {
    expeduContent.style.display = "block";
};

expeduClose.onclick = function() {
    expeduContent.style.display = "none";
};

window.onclick = function(e) {
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