class YA {
    constructor() {
        this.moduleManager = new YAModuleManager();
    }

    add(jsObj) {
        this.moduleManager.addModule(jsObj);
    }
}