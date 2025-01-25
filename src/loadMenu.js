import { appendChildren, makeCards, menuItems } from "./utils.js";



export function loadMenu() {

    const contentDiv = document.querySelector("div#content");
    contentDiv.innerHTML = "";
    contentDiv.classList.add("menu");
    contentDiv.classList.remove("home");
    contentDiv.classList.remove("about");

   const heading = document.createElement("div");
   heading.classList.add("heading");
   heading.innerText = "Our offerings";

   const menu = document.createElement("div");
   menu.classList.add("menu-container");

   appendChildren(contentDiv, [heading, menu]);

   appendChildren(menu, makeCards(menuItems));

};