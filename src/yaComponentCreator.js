const YaComponent = require("./yaComponent.js");
const parseTemplate = require("./yaTemplateParser.js");

const findComponentElements = (name) => {
    return document.getElementsByTagName(name.toLowerCase());
}

const createSetAndGetMethods = (component) => {
    for(const key in component) {
        const value = component[key];

        Object.defineProperty(component, key, {
            get: () => {
                return this["_" + key];
            },
            set: (input) => {
                this["_" + key] = input;
                if(this[key+ "_f"]) {
                    this[key + "_f"]();
                }
            }
        });

        component[key] = value;
    }
}

const setStaticsToTemplate = (templateElement, appComponent) => {

}

const setDynamicsToTemplate = (templateElement, appComponent) => {

}

const setDirectivesToTemplate = (templateElement, appComponent) => {

}

module.exports = (appComponentConstructor) => {
    const elements = findComponentElements(appComponentConstructor.name);

    for(const yaComponentElement of elements) {        
        let appComponent = new appComponentConstructor();
        let templateElement = parseTemplate(appComponent.template);
        
        createSetAndGetMethods(appComponent);
        
        setStaticsToTemplate(templateElement, appComponent);
        setDynamicsToTemplate(templateElement, appComponent);
        setDirectivesToTemplate(templateElement, appComponent);

        //add template element to element

        const yaComponent = new YaComponent(yaComponentElement, appComponent);
    }
}

