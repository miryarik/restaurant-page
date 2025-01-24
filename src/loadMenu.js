export function loadMenu() {

    const contentDiv = document.querySelector("div#content");
    contentDiv.innerHTML = "";
    contentDiv.classList.add("menu");
    contentDiv.classList.remove("home");
    contentDiv.classList.remove("about");

    const header = document.createElement('h1');
    header.innerText = "What we offer";
    contentDiv.appendChild(header);

    const menu = document.createElement("ul");
    contentDiv.appendChild(menu);

    const nunChai = document.createElement("li");
    nunChai.innerText = "Nun Chai"
    menu.appendChild(nunChai);

    const roganJosh = document.createElement("li");
    roganJosh.innerText = "Rogan Josh"
    menu.appendChild(roganJosh);

    const seekhTujje = document.createElement("li");
    seekhTujje.innerText = "Seekh Tujje"
    menu.appendChild(seekhTujje);
};