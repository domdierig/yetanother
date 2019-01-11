module.exports = (obj) => {
    for(const key in obj) {
        debugger;
    }
}




// createYAModule(jsObj, htmlElement) {
//     for(let key in jsObj) {
//         if(key !== "view") {
//             let value = jsObj[key];

//             Object.defineProperty(jsObj, key, {
//                 get: function() {
//                     return this["_" + key]
//                 },
//                 set: function(input) {
//                     this["_" + key] = input;
//                     if(this[key + "_f"]) {
//                         this[key + "_f"]()
//                     }
//                 }
//             });

//             jsObj[key] = value;
//         }            
//     }

//     return new YAModule(jsObj.constructor.name, htmlElement, jsObj);        
// }