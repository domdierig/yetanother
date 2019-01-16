const createYaComponent = require("./yaComponentCreator.js");

class YA {
    constructor() {
        
    }

    start(objConstructor) {
        let yaComponent = createYaComponent(objConstructor);
    }
}

module.exports = YA;