const createYaComponent = require("./yaComponentCreator.js");

class YA {
    constructor() {
        
    }

    start(objConstructor) {
        createYaComponent(objConstructor);
    }
}

module.exports = YA;