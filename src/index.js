
//about button and Modal
const aboutContent = document.getElementsByClassName("about")[0];
const aboutButton = document.getElementsByClassName("about-button")[0];
const aboutClose = document.getElementsByClassName("about-close-content")[0];

aboutButton.onclick = function() {
  aboutContent.style.display = "block";
};

aboutClose.onclick = function() {
  aboutContent.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == aboutContent) {
    aboutContent.style.display = "none";
  }
};

//projects button and Modal
const projectsContent = document.getElementsByClassName("projects")[0];
const projectsButton = document.getElementsByClassName("projects-button")[0];
const projectsClose = document.getElementsByClassName("projects-close-content")[0];

projectsButton.onclick = function() {
  projectsContent.style.display = "block";
};

projectsClose.onclick = function() {
  projectsContent.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == projectsContent) {
    projectsContent.style.display = "none";
  }
};
