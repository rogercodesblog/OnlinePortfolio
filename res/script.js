let Title;
let VideoUrl;
let IsVideo = false;
let CustomLayout;

function ShowModal(buttonclicked) {
  GetData(buttonclicked.id);

  Swal.fire({
    title: GenerateModalHTMLTitleTemplate(Title, IsVideo),
    html: GenerateModalHTMLBodyTemplate(IsVideo, VideoUrl, CustomLayout),
    showCloseButton: true,
    confirmButtonText: `
      Close
    `,
    focusConfirm: false,
  });
}

function GenerateModalHTMLTitleTemplate(title, isVideo) {
  if (isVideo) {
    return `<h2>Project Demo: ${title}</h2>`;
  } else {
    return `<h2>${title}</h2>`;
  }
}

function GenerateModalHTMLBodyTemplate(isVideo, videoUrl, customLayout) {
  if (isVideo) {
    return `<div class="project-modal-container">
    <span class="project-modal-container-iframe-loader"></span>
    <iframe id="project-modal-container-iframe" width="420" height="315"
    src="${videoUrl}">
    </iframe>
    </div>
  `;
  } else {
    return customLayout;
  }
}

function GetData(buttonId) {
  switch (buttonId) {
    case "button-terminal-bachelors":
      Title = "Bachelor's Degree in Computer Science";
      IsVideo = false;
      VideoUrl = "";
      CustomLayout = `
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img class="img-fluid mb-3 project-modal-container-certification-image" src="/res/img/certifications/Bachelors.jpg" alt="Bachelor's Degree"/>
             <div>
              <a target="_blank" href="/res/img/certifications/Bachelors.jpg" class="button-blue"><i class="bi bi-eye me-2"></i>View</a>
              <a class="button-blue" download="Rogelio Herrera Bachelor's Degree in Computer Science" href="/res/img/certifications/Bachelors.jpg" title="Rogelio Herrera Bachelor's Degree in Computer Science" ><i class="bi bi-download me-2"></i>Download</a>
             </div>
          </div>
       </div>
      </div>
      `;
      break;
    case "button-terminal-certification-it":
      Title = "IT Fundamentals by CISCO Networking Academy";
      IsVideo = false;
      VideoUrl = "";
      CustomLayout = `
      <div class="container">
        <div class="row">
          <div class="col-12">
           <img class="img-fluid mb-3 project-modal-container-certification-image" src="/res/img/certifications/CISCO-IT-Essentials.jpg" alt="CISCO It Fundamentals Certification"/>
            <div>
             <a target="_blank" href="/res/img/certifications/CISCO-IT-Essentials.jpg" class="button-blue"><i class="bi bi-eye me-2" ></i>View</a>
             <a class="button-blue" download="Rogelio Herrera IT Fundamentals by CISCO Networking Academy" href="/res/img/certifications/CISCO-IT-Essentials.jpg" title="Rogelio Herrera IT Fundamentals by CISCO Networking Academy" ><i class="bi bi-download me-2"></i>Download</a>
            </div>
          </div>
       </div>
      </div>
      `;
      break;
    case "button-project-onlinedice":
      Title = "Online Dice";
      IsVideo = true;
      VideoUrl = "https://www.youtube.com/embed/VK2kjvcI6n0?autoplay=0&mute=0";
      CustomLayout = "";
      break;
    case "button-project-ledCube":
      Title = "LED Cube";
      IsVideo = true;
      VideoUrl = "https://www.youtube.com/embed/HsLrH-nLg5Y?autoplay=0&mute=0";
      CustomLayout = "";
      break;
    case "button-project-LeigthLive":
      Title = "Leigth Live";
      IsVideo = true;
      VideoUrl = "https://www.youtube.com/embed/XP0uQcrqBQM?autoplay=0&mute=0";
      CustomLayout = "";
      break;
    case "button-project-RogerCodes":
      Title = "RogerCodes Blog";
      IsVideo = true;
      VideoUrl = "https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=0&mute=0";
      CustomLayout = "";
      break;
    case "button-project-ControlPracticas":
      Title = "Control Prácticas";
      IsVideo = true;
      VideoUrl = "https://www.youtube.com/embed/5gTn-QREIqA?autoplay=0&mute=0";
      CustomLayout = "";
      break;
    default:
      break;
  }
}
