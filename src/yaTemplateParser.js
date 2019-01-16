module.exports = (templateString) => {
    let parser = new DOMParser();
    let tempDoc = parser.parseFromString(templateString, "text/html");
    if(tempDoc.childNodes[0].childNodes[1].childNodes.length > 1) {
        console.error("YA only supports one top level element in a component template");
    }
    return tempDoc.childNodes[0].childNodes[1].childNodes[0];
}