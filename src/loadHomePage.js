import srcSq2 from "./images/joseph-gonzalez-sq.jpg";
import srcSq1 from "./images/chad-montano-sq.jpg"
import srcHor from "./images/victoria-shes-h.jpg";
import srcVer from "./images/joseph-gonzalez-v.jpg";

import { appendChildren, createImgs } from "./utils.js";

export function loadHomepage() {

    // update page content
    const contentDiv = document.querySelector('div#content');
    contentDiv.innerHTML = "";
    // toggle classes to handle styling
    contentDiv.classList.add("home");
    contentDiv.classList.remove("menu");
    contentDiv.classList.remove("about");

    // load images
    const [imgSq1, imgSq2, imgHor, imgVer] = createImgs([srcSq1, srcSq2, srcHor, srcVer]);
    imgSq1.setAttribute("id", "img-sq-1");
    imgSq2.setAttribute("id", "img-sq-2");
    imgHor.setAttribute("id", "img-hor");
    imgVer.setAttribute("id", "img-ver");

    [imgSq1, imgSq2, imgHor, imgVer].forEach(image => {
        image.style.objectFit = "cover";
    });

    appendChildren(contentDiv, [imgSq1, imgSq2, imgHor, imgVer]);

    // hero
    const hero = document.createElement("div");
    hero.setAttribute("id", "hero-text");
    contentDiv.appendChild(hero);

    // logo
    const logo = document.createElement("p");
    logo.innerText = "خن چن"; 
    logo.setAttribute("id", "logo");
    hero.appendChild(logo);

    // hero text
    const heroTxt = document.createElement("p");
    heroTxt.innerText = "Flavors to savor.\nMoments to cherish.";
    heroTxt.setAttribute("id", "tagline");
    hero.appendChild(heroTxt);

}