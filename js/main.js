document.getElementById("pageTitle").textContent =
SITE_DATA.title;

document.getElementById("companyName").textContent =
SITE_DATA.companyName;

document.getElementById("president").textContent =
SITE_DATA.president;

document.getElementById("heroTitle").innerHTML =
SITE_DATA.heroTitle;

document.getElementById("heroText").innerHTML =
SITE_DATA.heroText;

document.getElementById("aboutTitle").innerHTML =
SITE_DATA.aboutTitle;

document.getElementById("aboutText").innerHTML =
SITE_DATA.aboutText;

document.getElementById("contactText").innerHTML =
SITE_DATA.contactText;

document.getElementById("footerCompany").textContent =
SITE_DATA.companyName;

const cards =
document.getElementById("serviceCards");

SITE_DATA.services.forEach(service => {

    cards.innerHTML += `
        <div class="card">

            <div class="icon">
                ${service.icon}
            </div>

            <h3>
                ${service.title}
            </h3>

            <p>
                ${service.text}
            </p>

        </div>
    `;

});