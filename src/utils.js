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