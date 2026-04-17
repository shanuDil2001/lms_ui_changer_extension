const page = document.querySelector("#page");

// -------------- Footer ---------------
// Main container
const footerContainer = document.createElement("div");

// Contact info
const contactInfo = document.createElement("div");

const contactInfoHeader = document.querySelector(".contact-info h2");
const contactInfoAddress = document.querySelector(".contact-info p");
const contactInfoEmail = document.querySelector(".contact-info p + p");

const cHeader = document.createElement("h2");
const cAddress = document.createElement("p");
const cEmail = document.createElement("p");

cHeader.textContent = contactInfoHeader.textContent;
cAddress.textContent = contactInfoAddress.textContent;
cEmail.textContent = contactInfoEmail.textContent;

contactInfo.appendChild(cHeader);
contactInfo.appendChild(cAddress);
contactInfo.appendChild(cEmail);

// Follow us
const followUs = document.createElement("div");

const followUsHeader = document.querySelector(".social-media h2");

const fHeader = document.createElement("h2");
fHeader.textContent = followUsHeader.textContent;

const socialIcons = document.createElement("div");

const youtube = document.createElement("a");
const facebook = document.createElement("a");
const linkedin = document.createElement("a");

const yticon = document.createElement("i");
yticon.classList.add("fa-brands");
yticon.classList.add("fa-youtube");

youtube.appendChild(yticon);

const ficon = document.createElement("i");
ficon.classList.add("fa-brands");
ficon.classList.add("fa-square-facebook");

facebook.appendChild(ficon);

const licon = document.createElement("i");
licon.classList.add("fa-brands");
licon.classList.add("fa-linkedin");

linkedin.appendChild(licon);

socialIcons.appendChild(youtube);
socialIcons.appendChild(facebook);
socialIcons.appendChild(linkedin);

followUs.appendChild(fHeader);
followUs.appendChild(socialIcons);

footerContainer.appendChild(contactInfo);
footerContainer.appendChild(followUs);

page.appendChild(footerContainer);

footerContainer.classList.add("footer");

contactInfo.classList.add("footer-section");
followUs.classList.add("footer-section");

socialIcons.classList.add("social-icons");

youtube.classList.add("social-link");
facebook.classList.add("social-link");
linkedin.classList.add("social-link");

footerContainer.style.position = "relative";
