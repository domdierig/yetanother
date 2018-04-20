const regex = /{{[a-zA-Z ]+}}/g;

class YAModule {
    constructor(name, htmlElement, jsObj) {
        this.name = name;
        this.htmlElement = htmlElement;
        this.jsObj = jsObj;
    }

    setViewToDom() {
        for (let key in this.jsObj) {
            if (key !== "view") {
                this.jsObj.view = this.jsObj.view.replace(new RegExp("{{\\s?" + key + "\\s?}}"), this.jsObj[key]);
            }
        }        
        this.htmlElement.innerHTML = this.jsObj.view;
        this.checkForDirectories()
    }

    checkForDirectories() {
        let updates = this.htmlElement.querySelectorAll("[ya-update]");
        let yam = this;
        for (let ele of updates) {
            let updateProperty = ele.getAttribute("ya-update");
            ele.innerText = this.jsObj[updateProperty];

            this.jsObj[updateProperty + "_f"] = () => {
                ele.innerText = this.jsObj[updateProperty];
            }
        }
        
        let clicks = this.htmlElement.querySelectorAll("[ya-click]");
        for (let ele of clicks) {
            let clickProperty = ele.getAttribute("ya-click");
            
            ele.onclick = function() { yam.jsObj[clickProperty]() };
        }
    }
}