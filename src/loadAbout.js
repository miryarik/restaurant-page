export function loadAbout() {

    const contentDiv = document.querySelector('div#content');
    contentDiv.innerHTML = "";
    contentDiv.classList.add("about");
    contentDiv.classList.remove("menu");
    contentDiv.classList.remove("home");

    const header = document.createElement('h1');
    header.innerText = "Reach out to us!";

    const email = document.createElement('p');
    email.innerText = "Email us at contact@shoadepend.com";

    const number = document.createElement('p');
    number.innerText = "Give us a call at 6922745801";

    contentDiv.appendChild(header);
    contentDiv.appendChild(email);
    contentDiv.appendChild(number);
}