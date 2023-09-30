
const homeContent = document.getElementById("home-content")
const aboutContent = document.getElementById("about-content")
const experienceContent = document.getElementById("experience-content")
const projectContent = document.getElementById("project-content")
const contactContent = document.getElementById("contact-content")

const aboutButton = document.getElementById("about-button")
const experienceButton = document.getElementById("experience-button")
const projectButton = document.getElementById("project-button")
const contactButton = document.getElementById("contact-button")

aboutContent.style.display = "none";
experienceContent.style.display = "none";
projectContent.style.display = "none";
contactContent.style.display = "none";



function showHomeSection(){
 
  homeContent.style.display = "flex"
  contactContent.style.display = "none";
  experienceContent.style.display = "none";
  projectContent.style.display = "none";
  aboutContent.style.display = "none";
  experienceButton.style.borderBottom = "8px solid lightgray"
  projectButton.style.borderBottom = "8px solid lightgray"
  contactButton.style.borderBottom = "8px solid lightgray"
  aboutButton.style.borderBottom = "8px solid lightgray"
}

function showAboutSection(){
  aboutButton.style.borderBottom = "8px solid #4593F3"
  experienceButton.style.borderBottom = "8px solid lightgray"
  projectButton.style.borderBottom = "8px solid lightgray"
  contactButton.style.borderBottom = "8px solid lightgray"
  aboutContent.style.display = "block"
  homeContent.style.display = "none";
  experienceContent.style.display = "none";
  projectContent.style.display = "none";
  contactContent.style.display = "none";
}

function showExperienceSection(){
  experienceButton.style.borderBottom = "8px solid #4593F3"
  projectButton.style.borderBottom = "8px solid lightgray"
  contactButton.style.borderBottom = "8px solid lightgray"
  aboutButton.style.borderBottom = "8px solid lightgray"
  experienceContent.style.display = "block"
  homeContent.style.display = "none";
  aboutContent.style.display = "none";
  projectContent.style.display = "none";
  contactContent.style.display = "none";
}

function showProjectSection(){
  projectButton.style.borderBottom = "8px solid #4593F3"
  experienceButton.style.borderBottom = "8px solid lightgray"
  contactButton.style.borderBottom = "8px solid lightgray"
  aboutButton.style.borderBottom = "8px solid lightgray"
  projectContent.style.display = "flex"
  homeContent.style.display = "none";
  experienceContent.style.display = "none";
  aboutContent.style.display = "none";
  contactContent.style.display = "none";
}

function showContactSection(){
  contactButton.style.borderBottom = "8px solid #4593F3"
  experienceButton.style.borderBottom = "8px solid lightgray"
  projectButton.style.borderBottom = "8px solid lightgray"
  aboutButton.style.borderBottom = "8px solid lightgray"
  contactContent.style.display = "block"
  homeContent.style.display = "none";
  experienceContent.style.display = "none";
  projectContent.style.display = "none";
  aboutContent.style.display = "none";
}

function openResume(){
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    var pdfUrl = 'CV-Sachin.pdf';
    
    // Open a new window or tab with the PDF
    window.open(pdfUrl, '_blank');
}