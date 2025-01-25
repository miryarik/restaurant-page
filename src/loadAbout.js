import { appendChildren } from "./utils";

export function loadAbout() {

    const contentDiv = document.querySelector('div#content');
    contentDiv.innerHTML = "";
    contentDiv.classList.add("about");
    contentDiv.classList.remove("menu");
    contentDiv.classList.remove("home");

    const heading = document.createElement('div');
    heading.classList.add("heading");
    heading.innerText = "Reach out to us!";

    const container = document.createElement('div');
    container.classList.add("container");

    const address = document.createElement('div');
    address.classList.add("address");
    address.innerText = "101 Bliss Resort, Paradise";

    const email = document.createElement('div');
    email.classList.add("email");
    email.innerText = "khenchen@paradise";

    const number = document.createElement('div');
    number.classList.add("number");
    number.innerText = "111-000-1111";

    appendChildren(container, [address, email, number]);
    appendChildren(contentDiv, [heading, container]);
}