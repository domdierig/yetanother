let gulp = require("gulp");
let concat = require("gulp-concat");
let watch = require("gulp-watch");

let yaFiles = [
    "./src/yaModuleFactory.js",
    "./src/yaModuleManager.js",
    "./src/yaModule.js",
    "./src/ya.js"
];

gulp.task("watch", function() {
    gulp.watch("./src/*.js", ["build"])
})

gulp.task("build", function() {
    return gulp.src(yaFiles)
        .pipe(concat("ya.js"))
        .pipe(gulp.dest("./"));
})