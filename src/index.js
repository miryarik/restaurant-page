import "./modern-reset.css";
import "./styles.css";

import { loadHomepage } from "./loadHomePage.js";
import { loadMenu } from "./loadMenu.js";
import { loadAbout } from "./loadAbout.js";


document.addEventListener('DOMContentLoaded', () => {

    loadHomepage();

    document.querySelector("nav > #home-btn").addEventListener("click", (event) => {
        loadHomepage();
    });

    document.querySelector("nav > #menu-btn").addEventListener("click", (event) => {
        loadMenu();
    });

    document.querySelector("nav > #about-btn").addEventListener("click", (event) => {
        loadAbout();
    });
});
