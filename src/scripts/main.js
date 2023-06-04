const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__item-block-hidden");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// test
const navLink = document.querySelectorAll(".header__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




//  download a webpage in PDF format


function scale(){
  document.body.classList.add('scale');
}

function removeScale(){
  document.body.classList.remove('scale');
}


const downloadButton = document.getElementById('download-btn');

downloadButton.addEventListener('click', () => {
  const element = document.documentElement;
  const options = {
    filename: 'FORKIO.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { format: 'letter' , orientation: 'portrait' },
    pageWidth: 1400,
  };

  html2pdf().set(options).from(element).save();
});
