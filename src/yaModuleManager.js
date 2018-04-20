class YAModuleManager {
    constructor() {
        this.moduleFactory = new YAModuleFactory();
        this.modules = [];
    }

    addModule(jsObj) {        
        let htmlElements = document.getElementsByTagName(jsObj.constructor.name);        
        for(let ele of htmlElements) {            
            let newYAModule = this.moduleFactory.createYAModule(jsObj, ele);

            newYAModule.setViewToDom();
            this.modules.push(newYAModule);
        }        
    }
}