import kehwaImg from "./images/whisk-affair-kehwa.jpeg";

export function appendChildren(node, children) {
    // takes a DOM node (parent) and a list of desired children
    // appends the children to the parent node

    children.forEach(element => {
        node.appendChild(element);
    });
}

export function createImgs(sources) {
    // takes a list of img sources
    // return a list of DOM imgs with corresponding sources
    // wrapped in <figure>
    
    let imgs = [];

    sources.forEach(source => {
        const figure = document.createElement("figure");
        figure.classList.add("figure");

        const img = document.createElement("img");
        img.src = source;

        figure.appendChild(img);
        imgs.push(figure);
    });

    return imgs;
}

export function makeCards(items) {
    
    let cards = [];
    
    items.forEach(item => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const heading = document.createElement("div");
        heading.classList.add("heading");
        heading.innerText = item.name;

        const poster = document.createElement("div");
        poster.classList.add("poster")
        const img = document.createElement("img");
        img.src = item.imgSrc;
        poster.appendChild(img);

        const price = document.createElement("div");
        price.classList.add("price");
        price.innerText = item.price;

        appendChildren(cardDiv, [heading, poster, price]);

        cards.push(cardDiv);

    });

    return cards;
}


export const menuItems = [
    {
        name : "Kehwa",
        imgSrc : kehwaImg,
        price : "$20",
    },

    {
        name : "Kehwa",
        imgSrc : kehwaImg,
        price : "$20",
    },

    {
        name : "Kehwa",
        imgSrc : kehwaImg,
        price : "$20",
    },

    {
        name : "Kehwa",
        imgSrc : kehwaImg,
        price : "$20",
    },

    {
        name : "Kehwa",
        imgSrc : kehwaImg,
        price : "$20",
    },
]
