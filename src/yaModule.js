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
        this.checkForDirective()
    }

    checkForDirective() {
        this.handleUpdateDirective();
        this.handleClickDirective();
        //this.handleLoopDirective();
        //this.handleIfDirective();
        //this.handleShowDirective();
    }

    handleUpdateDirective() {
        let updates = this.htmlElement.querySelectorAll("[ya-update]");        
        for (let ele of updates) {
            let updateProperty = ele.getAttribute("ya-update");
            ele.innerText = this.jsObj[updateProperty];

            this.jsObj[updateProperty + "_f"] = () => {
                ele.innerText = this.jsObj[updateProperty];
            }
        }
    }

    handleClickDirective() {
        let yam = this;
        let clicks = this.htmlElement.querySelectorAll("[ya-click]");
        for (let ele of clicks) {
            let clickProperty = ele.getAttribute("ya-click");
            
            ele.onclick = function() { yam.jsObj[clickProperty]() };
        }
    }

    handleLoopDirective() {
        let loops = this.htmlElement.querySelectorAll("[ya-loop]");
        for (let ele of loops) {
            let loopProperty = ele.getAttribute("ya-loop");
        }
    }

    handleIfDirective() {
        let ifs = this.htmlElement.querySelectorAll("[ya-if]");
        for (let ele of ifs) {
            let ifProperty = ele.getAttribute("ya-if");

            if (!this.jsObj[ifProperty]) {
                this.htmlElement.removeChild(ele);
            }
        }
    }

    handleShowDirective() {
        let shows = this.htmlElement.querySelectorAll("[ya-show]");
        for (let ele of shows) {
            let showProperty = ele.getAttribute("ya-show");

            if (!this.jsObj[showProperty]) {
                ele.style.display = "none";
            }

            this.jsObj[updateProperty + "_f"] = () => {
                if (this.jsObj[showProperty]) {
                    ele.style.display = "inherit";
                } else {
                    ele.style.display = "none";
                }
            }
        }
    }
}